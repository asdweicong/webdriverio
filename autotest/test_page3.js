var webdriverio = require("webdriverio");
var options = { desiredCapabilities: { browserName: "chrome" } };
var browser = webdriverio.remote(options);
var readline = require("readline");
var data = require("./lib/data");

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

//引用页面测试逻辑
var detail = require("./detail");
var login = require("./login");
var page2 = require("./page2");
var page3 = require("./page3");

var mobile = data.getMoble();
//初始化
var init = function(url) {
    return new Promise(function(resolve, reject) {
        browser
            .init()
            .url(url)
            .setCookie({
                name: "SESSION",
                value: "a49da575-d415-40d9-b4f8-ebdf5e9f028d"
            })
            .refresh()
            .then(() => resolve());
    });
};

init(
    "http://localhost:8018/akg-3.html?id=152695238841948&organization_id=msbank&order_type=502"
)
    .then(function() {
        var userInfo = {
            username:data.getName(),
            ic_type:"I",
            ic_number:data.getIdCard('19800101','1')
        }
        var myOrder = {
            insurer_name:data.getName(),
            ic_type:"I",
            ic_number:data.getIdCard('19800101','2'),
            careers:"K",
            school_or_institution_name:"测试小学",
            country:"",
            mobile_phone_number:data.getMoble(),
            email:"test@qq.com",
            annual_income:"10",
            provincesIndex:1,
            citiesIndex:1,
            districtsIndex:1,
            detailAddress:"具体测试地址",

        }
        return page3.inputOrder(browser,userInfo,myOrder)
    })
    .then(function() {
        //回车键继续
        return readSyncByRl("press enter to next ...");
    })
    .then(function() {
        //回车键继续
        return page3.finishOrder(browser);
    })
    .then(function() {
        //回车键退出
        return readSyncByRl("press enter to exit ...");
    })
    .then(function() {
        browser.end();
    });
