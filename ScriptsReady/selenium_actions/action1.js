const {Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromium = require('chromium');
async function action1(){
        let options = new chrome.Options();
    options.setChromeBinaryPath(chromium.path);
        let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options) 
        .build();
            for (let action = 0; action < 140; action++){
                await driver.get('http://192.168.0.100/');
            }
            await driver.quit();
}
action1()