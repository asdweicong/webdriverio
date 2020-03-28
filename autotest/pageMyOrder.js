var goToPage2=function(browser,info){
    return new Promise(function(resolve, reject) {
        browser
            .pause(500)
            .click('.test_next')
            .catch(err=>console.log(err))
            .then(() => resolve());
    });
}


module.exports = { goToPage2 };
