const {Key, Builder, By} =require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromium = require('chromium');
async function action7(){
    let options = new chrome.Options();
    options.setChromeBinaryPath(chromium.path);
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
    await driver.get('http://192.168.0.100/');
    const textField = await driver.findElement(By.id("input"));
    for (let action = 0; action < 60; action++){
        await driver.actions().sendKeys(textField, 'Energy').perform();
        await textField.sendKeys(Key.BACK_SPACE, Key.BACK_SPACE, Key.BACK_SPACE, Key.BACK_SPACE, Key.BACK_SPACE, Key.BACK_SPACE);
    }
    await driver.quit();
}
action7()