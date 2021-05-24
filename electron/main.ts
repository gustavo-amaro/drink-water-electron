import { app, BrowserWindow, ipcMain, Notification, Menu, Tray, nativeImage } from 'electron'
import * as path from 'path'
import * as url from 'url'
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer'
import Store from 'electron-store'
import schedule from 'node-schedule'

let mainWindow: BrowserWindow | null

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minHeight: 600,
    minWidth: 800,
    backgroundColor: '#191622',
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:4000')
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, 'renderer/index.html'),
        protocol: 'file:',
        slashes: true
      })
    )
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

ipcMain.on('send-notification', (event, title, body) => {
  const notification = {
    title,
    body
  }
  new Notification(notification).show()
})

ipcMain.on('store-set', (event, key, value) => {
  const store = new Store()
  store.set(key, value)
})

ipcMain.on('store-get', (event, key) => {
  const store = new Store()
  event.returnValue = store.get(key)
})

ipcMain.on('register-schedule-job', (event, date) => {
  const job = schedule.scheduleJob(date, function () {
    const notification = {
      title: 'Hora de beber água!',
      body: 'Beba água!'
    }
    new Notification(notification).show()
  })
})

let tray: Tray
let icons

app.on('ready', createWindow)
  .whenReady()
  .then(() => {
    if (process.env.NODE_ENV === 'development') {
      installExtension(REACT_DEVELOPER_TOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err))
      installExtension(REDUX_DEVTOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err))
    }

    if (mainWindow) {
      mainWindow.on('close', ev => {
      // console.log(ev);
        ev.sender.hide()
        ev.preventDefault() // prevent quit process
      })
    }

    tray = new Tray(nativeImage.createEmpty())
    const menu = Menu.buildFromTemplate([
      {
        label: 'Drink Water',
        click: (item, window, event) => {
          if (mainWindow) { mainWindow.show() }
        }
      },
      { type: 'separator' },
      { role: 'quit' } // "role": system prepared action menu
    ])
    tray.setToolTip('Drink water electron')
    // top.tray.setTitle("Tray Example"); // macOS only
    tray.setContextMenu(menu)

    // Option: some animated web site to tray icon image
    // see: https://electron.atom.io/docs/tutorial/offscreen-rendering/
    icons = new BrowserWindow({ show: false, webPreferences: { offscreen: true } })
    icons.loadURL('https://cdn.iconscout.com/icon/free/png-512/electron-67-1175035.png')
    icons.webContents.on('paint', (event, dirty, image) => {
      if (tray) tray.setImage(image.resize({ width: 32, height: 32 }))
    })
  })

app.on('before-quit', ev => {
  // BrowserWindow "close" event spawn after quit operation,
  // it requires to clean up listeners for "close" event
  if (mainWindow) mainWindow.removeAllListeners('close')
})
app.allowRendererProcessReuse = true
