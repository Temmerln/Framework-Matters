const {Builder, By} =require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromeOptions = new chrome.Options();
chromeOptions.addArguments('--headless');
async function action8(){
    let service = new chrome.ServiceBuilder('/usr/bin/chromedriver');
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeService(service)
        .setChromeOptions(chromeOptions)
        .build();
    await driver.get('http://192.168.0.100/');
    const bottom = await driver.findElement(By.id("anchor-id"));
    const top = await driver.findElement(By.id("btn"));
    for (let action = 0; action < 60; action++){
        await driver.actions().scroll(0,0,0,0, bottom).perform();
        await driver.actions().scroll(0,0,0,0, top).perform();
        await driver.actions().clear();
    }
    await driver.quit();
}
action8();
