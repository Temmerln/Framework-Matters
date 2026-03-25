const {Builder, By} =require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromeOptions = new chrome.Options();
chromeOptions.addArguments('--headless');
async function action4(){
    let service = new chrome.ServiceBuilder('/usr/bin/chromedriver');
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeService(service) 
        .setChromeOptions(chromeOptions)
        .build();
    await driver.get('http://192.168.0.100/');
    let button = driver.findElement(By.id("doubleclick"));
    const actions = driver.actions({async: true});
    for (let action = 0; action< 160; action++){
        await actions.doubleClick(button).perform();
        await actions.clear();
    }
    await driver.quit();
}
action4()
