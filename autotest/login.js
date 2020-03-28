
var login = function(browser,mobile){
    return new Promise(function(resolve, reject){
        browser
        .pause(500)
        .waitForExist('.test_mobile',3000)
        .setValue('.test_mobile',mobile)
        .setValue('.test_imgCode','8888')
        .setValue('.test_phoneCode','8888')
        .pause(500)
        .click('.test_next')
        .then(()=> resolve());
    })
}
module.exports = {login};