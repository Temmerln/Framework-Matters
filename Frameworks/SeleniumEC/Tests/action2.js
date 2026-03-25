const {Builder, By} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromeOptions = new chrome.Options();
chromeOptions.addArguments('--headless');
async function action2(){
    let service = new chrome.ServiceBuilder('/usr/bin/chromedriver');
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeService(service)
        .setChromeOptions(chromeOptions)
        .build();
    await driver.get('http://192.168.0.100/');
    let Click = driver.findElement(By.id("btn"));
    const actions = driver.actions({async: true});
    for (let action = 0; action < 350; action++){
        await actions.move({origin: Click}).click().perform();
        await actions.clear();
    }
    await driver.quit();
}
action2()
