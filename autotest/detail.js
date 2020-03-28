var gologin = function(browser) {
    return new Promise(function(resolve, reject){
        browser.pause(1500).click(".test_login").then(()=> resolve());
    });
};

var goPremium = function(browser) {
    return new Promise(function(resolve, reject){
        browser.pause(1500).click(".test_bf").then(()=> resolve());
    });
};

module.exports = { gologin, goPremium };
