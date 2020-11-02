const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu, ipcMain} = electron;

let mainWindow;

app.on('ready', function(){
 //Создание нового окна
 mainWindow = new BrowserWindow({
     webPreferences: {nodeIntegration: true}
 });
 //Загрузка окна html file
 mainWindow.loadURL(url.format({
     pathname: path.join(__dirname, 'loginWindow.html'),
     protocol:'file:',
     slashes: true
 }));   

 //Выйти из приложения при закрытии
 mainWindow.on('closed', function(){
    app.quit();
 });

 //Меню
 const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

 Menu.setApplicationMenu(mainMenu);
});


const mainMenuTemplate = [
    {
        label:'File',
        submenu:[
            {
                label: 'Quit',
                // hotkey 
                accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                click(){
                    app.quit();
                }
            }
        ]
    }
];
