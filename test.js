//添加删除class
// document.getElementById("id").classList.add("className");
// document.getElementById("id").classList.remove("className")

// 模拟点击
// simulateClick(allContent[0]);
// // 2. 模拟 浏览器的鼠标点击事件
// // 2.1 可以触发 onclick 事件（先触发）
// // 2.2 可以触发 addEventListener 事件（后触发）
// // 2.3 jQuery 的事件绑定底层就是 addEventListener ,
function simulateClick(btn) { // 模拟 浏览器的鼠标点击事件
    const event = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
    });
    console.log('dispatchEvent', btn)
    btn.dispatchEvent(event);
}
var money = document.getElementsByClassName("money-box");
money[0].setAttribute('id', 'money');
var allNum = document.getElementsByClassName('color-ball')//所有数据
var allContent = document.getElementsByClassName('ball-content');//所有可操作数据
simulateClick(allContent[0]);
setTimeout(function () {
    document.getElementById('money').focus();
    document.getElementById('money').value = 100;
    setTimeout(function () {
        var bet = document.getElementsByClassName('bet');
        simulateClick(bet[0])
    }, 5000)
}, 1000)
