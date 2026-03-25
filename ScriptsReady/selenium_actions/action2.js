const {By, Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromium = require('chromium');
async function action2(){
    let options = new chrome.Options();
    options.setChromeBinaryPath(chromium.path);
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options) 
        .build();
    await driver.get('http://192.168.0.100/');
    let Click = driver.findElement(By.id("btn"));
    const actions = driver.actions({async: true});
    for (let action = 0; action < 120; action++){
        await actions.move({origin: Click}).click().perform();
    }
    await driver.quit();
}
action2()