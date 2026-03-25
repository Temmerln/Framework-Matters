const {Builder, By} =require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromium = require('chromium');
async function action3(){
    let options = new chrome.Options();
    options.setChromeBinaryPath(chromium.path);
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options) 
        .build();
    await driver.get('http://192.168.0.100/');
    let rightClick = driver.findElement(By.id("doubleclick"));
    const actions = driver.actions({async: true});
    for(let action = 0; action < 120; action++){
        await actions.contextClick(rightClick).perform();
    }
    await driver.quit();
}
action3()