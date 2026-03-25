const { Builder, By} =require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromium = require('chromium');
async function action6(){
    let options = new chrome.Options();
    options.setChromeBinaryPath(chromium.path);
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
    await driver.get('http://192.168.0.100/');
    const draggable = driver.findElement(By.id("draggable"));
    const droppable = await driver.findElement(By.id("dropzone"));
    const actions = driver.actions({async: true});
    for (let action = 0; action< 60; action++){
        await actions.dragAndDrop(draggable, droppable).perform();
    }
    await driver.quit();
}
action6()