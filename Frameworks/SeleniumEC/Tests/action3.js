const {Builder, By} =require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromeOptions = new chrome.Options();
chromeOptions.addArguments('--headless');
async function action3(){
    let service = new chrome.ServiceBuilder('/usr/bin/chromedriver');
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeService(service) 
        .setChromeOptions(chromeOptions)
        .build();
    await driver.get('http://192.168.0.100/');
    let rightClick = driver.findElement(By.id("doubleclick"));
    const actions = driver.actions({async: true});
    for(let action = 0; action < 170; action++){
        await actions.contextClick(rightClick).perform();
        await actions.clear();
    }
    await driver.quit();
}
action3()
