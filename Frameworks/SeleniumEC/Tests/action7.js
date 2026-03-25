const {Key, Builder, By} =require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromeOptions = new chrome.Options();
chromeOptions.addArguments('--headless');
async function action7(){
    let service = new chrome.ServiceBuilder('/usr/bin/chromedriver');
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeService(service) 
        .setChromeOptions(chromeOptions)
        .build();
    await driver.get('http://192.168.0.100/');
    const textField = await driver.findElement(By.id("input"));
    for (let action = 0; action < 60; action++){
        await driver.actions().sendKeys(textField, 'Energy').perform();
        await textField.sendKeys(Key.BACK_SPACE, Key.BACK_SPACE, Key.BACK_SPACE, Key.BACK_SPACE, Key.BACK_SPACE, Key.BACK_SPACE);
        await driver.actions().clear();
    }
    await driver.quit();
}
action7()
