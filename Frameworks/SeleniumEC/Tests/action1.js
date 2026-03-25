const {Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromeOptions = new chrome.Options();
chromeOptions.addArguments('--headless');
async function action1(){
        let service = new chrome.ServiceBuilder('/usr/bin/chromedriver');
        let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeService(service)
        .setChromeOptions(chromeOptions)
        .build();
            for (let action = 0; action < 140; action++){
                await driver.get('http://192.168.0.100/');
            }
            await driver.quit();
}
action1()
