var inputOrder=function(browser,info){
    return new Promise(function(resolve, reject) {
        browser
            .pause(500)
            .setValue('.test_myOder_height',info.height)
            .setValue('.test_myOder_weight',info.weight)
            .catch(err=>console.log(err))
            .then(() => resolve());
    });
}

var finishOrder_self = function(browser){
    return new Promise(function(resolve, reject) {
        browser
            .click('.test_next')
            .then(() => resolve());
    });
}

var finishOrder_notSelf = function(browser){
    return new Promise(function(resolve, reject) {
        browser
            .click('.test_next')
            .pause(2000)
            .click('.btn-primary')
            .then(() => resolve());
    });
}

module.exports = { inputOrder,finishOrder_self,finishOrder_notSelf };
