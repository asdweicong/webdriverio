

var send = function(browser){
    return new Promise(function(resolve, reject) {
        browser
            .click('.test_send')
            .pause(2000)
            .click('.commo_button div')
            .catch(err=>console.log(err))
            .then(() => resolve());
    });
}

module.exports = { send };
