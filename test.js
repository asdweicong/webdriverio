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
    console.log('dispatchEvent',btn)
    btn.dispatchEvent(event);
}


var allNum = document.getElementsByClassName('color-ball')//所有数据
var allContent = document.getElementsByClassName('ball-content')//所有可操作数据
var theOneNum = allNum[0].innerText
console.log('theOneNum-第一个数',theOneNum);
console.log('theOneNum-第一个操作数',allContent[0]);
for (let index = 0; index < allContent.length; index++) {
    allContent[index].classList.remove("active-color");
}
console.log('allContent',allContent[2])
simulateClick(allContent[2])
// allContent[2].classList.add("active-color");
// document.getElementById('onebox');
var inner_tnmgo = document.getElementById('inner-dneri');//注意会动态改变
var lis= inner_tnmgo.childNodes.item(2);
// simulateClick(lis)
// lis.classList.add('active-color');
var lis_active = lis.childNodes.item(0);
// lis_active.classList.add('active-hover');
// simulateClick(lis_active)
var money = document.getElementsByClassName("money-box")
// document.getElementById("moneyPay").focus();//注意需要手动添加
document.getElementsByClassName("money-box")[0].value = 100
var bet = document.getElementsByClassName('bet');
simulateClick(bet[0])

