/*
 * @Author: &#39;weicon&#39;
 * @Email: &#39;1418066959@qq.com&#39;
 * @Date: 2020-03-29 11:25:51
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-03-29 15:07:06
 * @Description: Description
 */


/***
 * 具体windows操作可参考 https://blog.csdn.net/xiaoquantouer/article/details/52574129
 */
var webdriver = require("webdriverio");
var browser = webdriver.Chrome();
var readline = require("readline");

browser.get('http://www.baidu.com/')
// # 通过id方式定位
browser.find_element_by_id("kw").send_keys("selenium")
// # 通过name方式定位
// browser.find_element_by_name("wd").send_keys("selenium")
// // # 通过tag name方式定位
// browser.find_element_by_tag_name("input").send_keys("selenium")
// // # 通过class name方式定位
// browser.find_element_by_class_name("s_ipt").send_keys("selenium")
// // # 通过css方式定位
// browser.find_element_by_css_selector("#kw").send_keys("selenium")
// // # 通过xpath方式定位
// browser.find_element_by_xpath("//input[@id='kw']").send_keys("selenium")

browser.find_element_by_id("su").click()

// time.sleep(3)

// # 关闭浏览器
// browser.quit()


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

