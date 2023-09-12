const {app, BrowserWindow} = require("electron")
const electronReload = require('electron-reload');

// tells electron to reload the app when changes are made, __dirname is the current directory and electron will watch for any changes here
electronReload(__dirname);

// the browser window object that will be created. Defined here so that it can be accessed outside the app.whenReady() function
let mainWindow

// when the app is ready, create a new browser window and load the index.html file
// app.whenReady() is a promise, so we can use .then() to do something after the app is ready
app.whenReady().then(() => {

    // create a new browser window
    mainWindow = new BrowserWindow({

        // this is where you can set some options for the browser window
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })


    // set the size of the window and center it on the screen
    mainWindow.setSize(800, 600)
    mainWindow.center()

    // set whether the menu bar is visible or not
    mainWindow.setMenuBarVisibility(true)

    // load the index.html file of your project. it is assumed that the index.html file is in the root of your project
    // drop a copy of your project into this project's folder and replace {YOUR PROJECT GOES HERE} with the name of your project folder
    mainWindow.loadFile('{YOUR PROJECT GOES HERE}/index.html')

    // create a listener for when the window is closed to handle garbage collection
    mainWindow.on('closed', () => {
        app.quit();
    });

})