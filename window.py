## 引入WebDriver包
from selenium import webdriver

## 引入WebDriver Keys包
from selenium.webdriver.common.keys import Keys

## 创建浏览器对象
browser = webdriver.Chrome()

## 导航到百度主页
browser.get('https://www.baidu.com')
# browser.refresh()

## 检查标题是否为‘百度一下，你就知道’
# assert '百度一下，你就知道' in browser.title

## 找到名字为wd的元素，赋值给elem
elem = browser.find_element_by_id('wd')  # 找到搜索框
elem.send_keys('seleniumhq' + Keys.RETURN)  # 搜索seleniumhq

## 关闭浏览器
# browser.quit()