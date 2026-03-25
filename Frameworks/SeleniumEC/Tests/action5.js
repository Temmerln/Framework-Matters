const {Builder, By} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromeOptions = new chrome.Options();
chromeOptions.addArguments('--headless');
async function action5(){
    let service = new chrome.ServiceBuilder('/usr/bin/chromedriver');
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeService(service) 
        .setChromeOptions(chromeOptions)
        .build();
    await driver.get('http://192.168.0.100/');
    let checkbox = driver.findElement(By.id("checkbox"));
    const actions = driver.actions({async: true})
    for (let action = 0; action < 120; action++){
        await actions.move({origin: checkbox}).click().perform();
        await actions.clear();
    }
    await driver.quit();
}
action5()
