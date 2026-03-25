const {Builder, By} =require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromeOptions = new chrome.Options();
chromeOptions.addArguments('--headless');
async function action6(){
    let service = new chrome.ServiceBuilder('/usr/bin/chromedriver');
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeService(service) 
        .setChromeOptions(chromeOptions)
        .build();
    await driver.get('http://192.168.0.100/');
    const draggable = driver.findElement(By.id("draggable"));
    const droppable = await driver.findElement(By.id("dropzone"));
    const actions = driver.actions({async: true});
    for (let action = 0; action< 60; action++){
        await actions.dragAndDrop(draggable, droppable).perform();
        await actions.clear();
    }
    await driver.quit();
}
action6()
