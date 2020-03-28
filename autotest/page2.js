var inputPremium = function(browser,relation,sex,insurance_year,pay_year,pay_interval,amount,amount2) {

    return new Promise(function(resolve, reject) {
        browser
            .pause(2500)
            .waitForValue(".test_insuredAmountForInput",5000)
            .selectByValue('.test_relationship',relation)//为谁投保
            .selectByValue('.test_sex',sex)//性别
            .selectByValue('.test_insurance_year',insurance_year)//保费期间
            .selectByValue('.test_pay_year',pay_year)//交费年限
            .setValue('.test_insuredAmountForInput',amount)//保险金额
            .setValue('.test_defaultInsureAmoutTwo',amount2)//保险金额
            .selectByValue('.test_pay_interval',pay_interval)//交费方式
            .catch(err => console.log(err))
            .pause(500)
            .then(() => resolve());
    });
};

var finishPremium = function(browser){
    return new Promise(function(resolve, reject) {
        browser
            .click('.zhan2_checkbox')
            .pause(2000)
            .click('.zhan2_checkbox')
            .click('.test_next')
            .catch(err => console.log(err))
            .then(() => resolve());
    });
}

module.exports = { inputPremium,finishPremium };
