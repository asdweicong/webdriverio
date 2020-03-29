var webdriverio = require("webdriverio");
var options = { desiredCapabilities: { browserName: "Chrome" } };
var browser = webdriverio.remote(options);
var readline = require("readline");
function readSyncByRl(tips) {
    tips = tips || "> ";
    return new Promise(resolve => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(tips, answer => {
            rl.close();
            resolve(answer.trim());

        });
    });
}
//初始化
var init = function (url) {
    return new Promise(function (resolve, reject) {
        console.log(url)
        browser.init().url(url).then(() => resolve());
    });
};
init("https://www.baidu.com/")
    .then(function () {
        return new Promise(function (resolve, reject) {
            browser.pause(2500)
                .setValue('.quickdelete-wrap', '美女')
                .catch(err => console.log(err))
                .pause(500)
                .click('#su')
                .then(() => resolve());
        });
    })
    .then(function () {
        //回车键退出
        return readSyncByRl("回车键退出");
    })
    .then(function () {
        browser.end();
    });



var setValue = function () {
    return new Promise(function (resolve, reject) {
        browser.pause(2500)
            .waitForValue(".test_insuredAmountForInput", 5000)
            .selectByValue('.test_relationship', relation)//为谁投保
            .setValue('.test_insuredAmountForInput', amount)//保险金额
            .catch(err => console.log(err))
            .pause(500)
            .click('.test_next')
            .then(() => resolve());
    });
};
var clickHtml = function (browser) {
    return new Promise(function (resolve, reject) {
        browser.click('.zhan2_checkbox')
            .pause(2000)
            .click('.zhan2_checkbox')
            .click('.test_next')
            .catch(err => console.log(err))
            .then(() => resolve());
    });
}
