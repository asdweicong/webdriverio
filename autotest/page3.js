var inputOrder_notSelf=function(browser,userInfo,myOrder){
    return new Promise(function(resolve, reject) {
        browser
            .pause(500)
            .setValue('.test_userInfo_username',userInfo.username)
            .selectByValue('.test_userInfo_ic_type',userInfo.ic_type)
            .setValue('.test_userInfo_ic_number',userInfo.ic_number)
            .setValue('.test_myOrder_insurer_name',myOrder.insurer_name)
            .selectByValue('.test_myOrder_ic_type',myOrder.ic_type)
            .setValue('.test_myOrder_ic_number',myOrder.ic_number)
            .selectByValue('.test_myOrder_careers',myOrder.careers)
            .setValue('.test_myOrder_school_or_institution_name',myOrder.school_or_institution_name)
            .setValue('.test_myOrder_mobile_phone_number',myOrder.mobile_phone_number)
            .setValue('.test_myOrder_email',myOrder.email)
            .setValue('.test_myOrder_annual_income',myOrder.annual_income)
            .selectByIndex('.test_address1',myOrder.provincesIndex)
            .pause(500)
            .selectByIndex('.test_address2',myOrder.citiesIndex)
            .pause(500)
            .selectByIndex('.test_address3',myOrder.districtsIndex)
            .setValue('.test_myOrder_detailAddress',myOrder.detailAddress)
            .catch(err=>console.log(err))
            .then(() => resolve());
    });
}

var inputOrder_self=function(browser,userInfo,myOrder){
    return new Promise(function(resolve, reject) {
        browser
            .pause(500)
            .setValue('.test_userInfo_username',userInfo.username)
            .selectByValue('.test_userInfo_ic_type',userInfo.ic_type)
            .setValue('.test_userInfo_ic_number',userInfo.ic_number)
            .click('.myOrder_marital_status')
            .selectByValue('.test_myOrder_careers',myOrder.careers)
            .setValue('.test_myOrder_email',myOrder.email)
            .setValue('.test_myOrder_annual_income',myOrder.annual_income)
            .selectByIndex('.test_address1',myOrder.provincesIndex)
            .pause(500)
            .selectByIndex('.test_address2',myOrder.citiesIndex)
            .pause(500)
            .selectByIndex('.test_address3',myOrder.districtsIndex)
            .setValue('.test_myOrder_detailAddress',myOrder.detailAddress)
            .catch(err=>console.log(err))
            .then(() => resolve());
    });
}

var finishOrder = function(browser){
    return new Promise(function(resolve, reject) {
        browser
            .click('.test_next')
            .then(() => resolve());
    });
}

module.exports = { inputOrder_notSelf,inputOrder_self,finishOrder };
