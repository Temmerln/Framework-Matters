const {Builder, By} =require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromium = require('chromium');
async function action4(){
    let options = new chrome.Options();
    options.setChromeBinaryPath(chromium.path);
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options) 
        .build();
    await driver.get('http://192.168.0.100/');
    let button = driver.findElement(By.id("doubleclick"));
    const actions = driver.actions({async: true});
    for (let action = 0; action< 110; action++){
        await actions.doubleClick(button).perform();
    }
    await driver.quit();
}
action4()