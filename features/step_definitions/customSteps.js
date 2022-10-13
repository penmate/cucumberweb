const {Given, When, Then, Before, After} = require('@cucumber/cucumber');
const {expect} = require('chai');
const {Builder, By} = require('selenium-webdriver');
const {setDefaultTimeout} = require('@cucumber/cucumber');

const sleep = async (milliseconds) => {
    await new Promise(resolve => {
        return setTimeout(resolve, milliseconds)
    });
};

setDefaultTimeout(90*1000)

let driver;
let sum = 0;

Before(function () {
    driver = new Builder()
        .forBrowser('chrome')
        .build();
})

After(function () {
    driver.quit();
})

When('I add {int} and {int}', function (num1, num2) {
    sum = num1 + num2;
});

Then('the result should be {int}', function (result) {
    expect(sum).equal(result)
});

// --------------  bot_for_web  --------------

Given('I visit outlook.com', async function () {
    await driver.get('https://outlook.live.com/owa/');
});

When('I managing my outlook with this bot', async function () {
    await driver.findElement(By.css('a[data-task="signin"]')).click();
    await sleep(2000);
    await driver.findElement(By.css('input[type="email"]')).sendKeys('tesztfiok1234@outlook.com' + '\n');
    await sleep(2000);
    await driver.findElement(By.css('input[type="password"]')).sendKeys('Tesztfiokvagyok');
    await sleep(2000);
    await driver.findElement(By.css('input[type="submit"]')).click();
    await sleep(2000);
    await driver.findElement(By.css('input[id="idBtn_Back"]')).click();
    await sleep(8000);
    await driver.findElement(By.css('span[id="id__9"]')).click();
    await sleep(10000);
    await driver.findElement(By.css('div[aria-label="Címzett"]')).sendKeys('nemletezoemailvagyok@gmail.com');
    await sleep(2000);
    await driver.findElement(By.css('input[aria-label="Adja meg a tárgyat"]')).sendKeys('random subject');
    await sleep(1000);
    await driver.findElement(By.css('div[aria-label="Üzenet szövege, nyomja meg az Alt+F10 gombot a kilépéshez"]')).sendKeys('valami szöveg');
    await sleep(2000);
    await driver.findElement(By.css('i[data-icon-name="send"]')).click();
    await sleep(12000);
    await driver.findElement(By.css('i[data-icon-name="GlobalNavButton"]')).click();
    await sleep(4000);
    await driver.findElement(By.css('div[title="Elküldött elemek"]')).click();
    await sleep(4000);
    await driver.findElement(By.css('i[data-icon-name="StatusCircleCheckmark"]')).click();
    await sleep(4000);
    await driver.findElement(By.css('button[name="Mappa ürítése"]')).click();
    await sleep(4000);




});

Then('I should see the sent email list is empty', async function () {
    await driver.findElement(By.css('button[id="ok-1"]')).click();
    await sleep(5000);
});
