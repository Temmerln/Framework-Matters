const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromium = require('chromium');
async function action5() {
    let options = new chrome.Options();
    options.setChromeBinaryPath(chromium.path);
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build(); 
    await driver.get('http://192.168.0.100/');
    let checkbox = driver.findElement(By.id("checkbox"));
    const actions = driver.actions({async: true})
    for (let action = 0; action < 50; action++){
        await actions.move({origin: checkbox}).click().perform();
    }
    await driver.quit();
}
action5()