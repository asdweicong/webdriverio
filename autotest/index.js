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

var tips1 = "回车键跳转";
var tips2 = "回车键输入信息";

//引用页面测试逻辑
var detail = require("./detail");
var login = require("./login");
var page2 = require("./page2");
var page3 = require("./page3");
var page4 = require("./page4");
var page10 = require("./page10");
var pageMyOrder = require("./pageMyOrder");

var mobile = data.getMoble();
//初始化
var init = function(url) {
    return new Promise(function(resolve, reject) {
        browser
            .init()
            .url(url)
            .then(() => resolve());
    });
};
var userInfo_name = data.getName();
var userInfo_sex = '1';//1男性 2 女性
var userInfo_idCard = data.getIdCard('19800101',userInfo_sex);

var setValue = function(){
    return new Promise(function(resolve, reject) {
        browser.pause(2500)
            .waitForValue(".test_insuredAmountForInput",5000)
            .selectByValue('.test_relationship',relation)//为谁投保
            .setValue('.test_insuredAmountForInput',amount)//保险金额
            .catch(err => console.log(err))
            .pause(500)
            .then(() => resolve());
    });
};
var clickHtml = function(browser){
    return new Promise(function(resolve, reject) {
        browser.click('.zhan2_checkbox')
            .pause(2000)
            .click('.zhan2_checkbox')
            .click('.test_next')
            .catch(err => console.log(err))
            .then(() => resolve());
    });
}

init("http://localhost:8000/akg-detail.html?order_type=502&organization_id=linmon")
.then(function() {
    //跳转登录
    return detail.gologin(browser);
})
.then(function() {
    //登录完成跳转回详情页
    return login.login(browser, mobile);
})
.then(function() {
    //跳转保费测算
    return detail.goPremium(browser);
})
.then(function(){//本人投保
    return insuerd_self(browser);
})
.then(function() {
    //回车键退出
    return readSyncByRl("回车键退出");
})
.then(function() {
    browser.end();
});

//本人投保
var insuerd_self = function(browser){
    return new Promise(function(resolve, reject) {
        browser
        .then(function() {
            //保费试算
            var value = {
                relation: "00",
                sex: "0",
                insurance_year: "75",
                pay_year: "10",
                pay_interval: "12",
                amount: "20",
                amount2: "5"
            };
            return page2.inputPremium(
                browser,
                value.relation,
                value.sex,
                value.insurance_year,
                value.pay_year,
                value.pay_interval,
                value.amount,
                value.amount2
            );
        })
        .then(function() {
            //输入继续
            return readSyncByRl(tips1);
        })
        .then(function() {
            //跳转第三页保单
            return page2.finishPremium(browser);
        })
        .then(function() {
            //回车键继续
            return readSyncByRl(tips2);
        })
        .then(function() {
            //填写保单页
            var userInfo = {
                username:userInfo_name,
                ic_type:"I",
                ic_number:userInfo_idCard
            }
            var myOrder = {
                insurer_name:userInfo_name,
                ic_type:"I",
                ic_number:userInfo_idCard,
                careers:"K",
                school_or_institution_name:"测试小学",
                country:"",
                mobile_phone_number:data.getMoble(),
                email:"test1@qq.com",
                annual_income:"10",
                provincesIndex:1,
                citiesIndex:1,
                districtsIndex:1,
                detailAddress:"具体测试地址",
    
            };
            return page3.inputOrder_self(browser,userInfo,myOrder);
        })
        .then(function() {
            //回车键继续
            return readSyncByRl(tips1);
        })
        .then(function() {
            //跳转健康告知页
            return page3.finishOrder(browser);
        })
        .then(function() {
            //回车键继续
            return readSyncByRl(tips2);
        })
        .then(function() {
            //填写健康告知页
            var info = {
                height: '170',
                weight:'60'
            }
            return page4.inputOrder(browser,info);
        })
        .then(function() {
            //回车键继续
            return readSyncByRl(tips1);
        })
        .then(function() {
            //跳转订单列表页
            return page4.finishOrder_self(browser);
        })
        .then(function() {
            //回车键继续
            return readSyncByRl(tips1);
        })
        .then(function() {
            //继续投保
            return pageMyOrder.goToPage2(browser);
        })
        .then(function() {
            //回车键继续
            return insuerd_noSelf(browser);
        })
        .then(() => resolve());
    });
}

//非本人投保
var insuerd_noSelf = function(browser){
    return new Promise(function(resolve, reject) {
        browser
            .then(function() {
                //保费试算
                var value = {
                    relation: "01",
                    sex: "1",
                    insurance_year: "75",
                    pay_year: "10",
                    pay_interval: "12",
                    amount: "20",
                    amount2: "5"
                };
                return page2.inputPremium(
                    browser,
                    value.relation,
                    value.sex,
                    value.insurance_year,
                    value.pay_year,
                    value.pay_interval,
                    value.amount,
                    value.amount2
                );
            })
            .then(function() {
                //输入继续
                return readSyncByRl(tips1);
            })
            .then(function() {
                //跳转第三页保单
                return page2.finishPremium(browser);
            })
            .then(function() {
                //回车键继续
                return readSyncByRl(tips2);
            })
            .then(function() {
                //填写保单页
                var userInfo = {
                    username:userInfo_name,
                    ic_type:"I",
                    ic_number:userInfo_idCard
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

                };
                return page3.inputOrder_notSelf(browser,userInfo,myOrder);
            })
            .then(function() {
                //回车键继续
                return readSyncByRl(tips1);
            })
            .then(function() {
                //跳转健康告知页
                return page3.finishOrder(browser);
            })
            .then(function() {
                //回车键继续
                return readSyncByRl(tips2);
            })
            .then(function() {
                //填写健康告知页
                var info = {
                    height: '170',
                    weight:'60'
                }
                return page4.inputOrder(browser,info);
            })
            .then(function() {
                //回车键继续
                return readSyncByRl(tips1);
            })
            .then(function() {
                //跳转短信确认页
                return page4.finishOrder_notSelf(browser);
            })
            .then(function() {
                //回车键继续
                return readSyncByRl(tips1);
            })
            .then(function() {
                //跳转订单详情页
                return page10.send(browser);
            })
                .then(() => resolve());
            });
}