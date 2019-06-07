# js工具函数（浏览器环境）
- [文档地址](https://javison666.github.io/jj-browser-fn/)
- [github地址](https://github.com/Javison666/jj-browser-fn)
- 引用库，后续 $fn 直接当作全局进行使用
    ```js
    import $fn from 'jj-browser-fn'
    ```
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
- [js工具函数（浏览器环境）](#js%E5%B7%A5%E5%85%B7%E5%87%BD%E6%95%B0%E6%B5%8F%E8%A7%88%E5%99%A8%E7%8E%AF%E5%A2%83)

- [js工具函数（浏览器环境）](#js%E5%B7%A5%E5%85%B7%E5%87%BD%E6%95%B0%E6%B5%8F%E8%A7%88%E5%99%A8%E7%8E%AF%E5%A2%83)
  - [字符处理](#%E5%AD%97%E7%AC%A6%E5%A4%84%E7%90%86)
    - [默认处理非数值的内容为0](#%E9%BB%98%E8%AE%A4%E5%A4%84%E7%90%86%E9%9D%9E%E6%95%B0%E5%80%BC%E7%9A%84%E5%86%85%E5%AE%B9%E4%B8%BA0)
    - [默认处理空字符串为'--'](#%E9%BB%98%E8%AE%A4%E5%A4%84%E7%90%86%E7%A9%BA%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%BA)
    - [判断是否有值](#%E5%88%A4%E6%96%AD%E6%98%AF%E5%90%A6%E6%9C%89%E5%80%BC)
    - [给URL添加参数](#%E7%BB%99url%E6%B7%BB%E5%8A%A0%E5%8F%82%E6%95%B0)
    - [将编码由utf8转为utf16](#%E5%B0%86%E7%BC%96%E7%A0%81%E7%94%B1utf8%E8%BD%AC%E4%B8%BAutf16)
    - [将编码由utf16转为utf8](#%E5%B0%86%E7%BC%96%E7%A0%81%E7%94%B1utf16%E8%BD%AC%E4%B8%BAutf8)
    - [对字符串进行base64编码](#%E5%AF%B9%E5%AD%97%E7%AC%A6%E4%B8%B2%E8%BF%9B%E8%A1%8Cbase64%E7%BC%96%E7%A0%81)
    - [对字符串进行base64解码](#%E5%AF%B9%E5%AD%97%E7%AC%A6%E4%B8%B2%E8%BF%9B%E8%A1%8Cbase64%E8%A7%A3%E7%A0%81)
  - [数字处理](#%E6%95%B0%E5%AD%97%E5%A4%84%E7%90%86)
    - [显示两位小数的金额](#%E6%98%BE%E7%A4%BA%E4%B8%A4%E4%BD%8D%E5%B0%8F%E6%95%B0%E7%9A%84%E9%87%91%E9%A2%9D)
    - [千位符显示数字](#%E5%8D%83%E4%BD%8D%E7%AC%A6%E6%98%BE%E7%A4%BA%E6%95%B0%E5%AD%97)
  - [时间处理](#%E6%97%B6%E9%97%B4%E5%A4%84%E7%90%86)
    - [自定义格式](#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%BC%E5%BC%8F)
    - [距离当前时间差处理](#%E8%B7%9D%E7%A6%BB%E5%BD%93%E5%89%8D%E6%97%B6%E9%97%B4%E5%B7%AE%E5%A4%84%E7%90%86)
  - [cookie操作](#cookie%E6%93%8D%E4%BD%9C)
  - [链接操作](#%E9%93%BE%E6%8E%A5%E6%93%8D%E4%BD%9C)
  - [ajax请求](#ajax%E8%AF%B7%E6%B1%82)
  - [设备信息](#%E8%AE%BE%E5%A4%87%E4%BF%A1%E6%81%AF)
    - [获取系统版本](#%E8%8E%B7%E5%8F%96%E7%B3%BB%E7%BB%9F%E7%89%88%E6%9C%AC)
  - [html字符与实体转换](#html%E5%AD%97%E7%AC%A6%E4%B8%8E%E5%AE%9E%E4%BD%93%E8%BD%AC%E6%8D%A2)
    - [将html字符实体转译成html字符](#%E5%B0%86html%E5%AD%97%E7%AC%A6%E5%AE%9E%E4%BD%93%E8%BD%AC%E8%AF%91%E6%88%90html%E5%AD%97%E7%AC%A6)
    - [将html字符转译成html字符实体](#%E5%B0%86html%E5%AD%97%E7%AC%A6%E8%BD%AC%E8%AF%91%E6%88%90html%E5%AD%97%E7%AC%A6%E5%AE%9E%E4%BD%93)
  - [LocalStorage操作](#localstorage%E6%93%8D%E4%BD%9C)
  - [dom操作](#dom%E6%93%8D%E4%BD%9C)
  - [自定义扩展 $fn](#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%89%A9%E5%B1%95-fn)
  - [请我喝杯果汁呗～](#%E8%AF%B7%E6%88%91%E5%96%9D%E6%9D%AF%E6%9E%9C%E6%B1%81%E5%91%97)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 字符处理
### 默认处理非数值的内容为0
对非数字的内容，返回默认想展示的内容defaultVal || 0，否则返回原值
```js
$fn.n(null) //返回0
$fn.n(1) //返回1
$fn.n('1') //返回'1'
$fn.n('1a') //返回0
$fn.n('1a',null) //返回null
```
### 默认处理空字符串为'--'
对undefined/null/''(空字符串)，返回默认想展示的内容defaultVal || '--'，否则返回原值
```js
$fn.s(null) //返回'--'
```
### 判断是否有值
对undefined/null/''(空字符串)返回false，其他返回true
```js
$fn.hasValue(null) //返回false
```
### 给URL添加参数
```js
$fn.urlAddParams(url,{
    user:'admin'
})
```
### 将编码由utf8转为utf16
```js
$fn.utf8to16(str) 
```
### 将编码由utf16转为utf8
```js
$fn.utf16to8(str) 
```
### 对字符串进行base64编码
```js
$fn.encodeBase64(str) 
```
### 对字符串进行base64解码
```js
$fn.decodeBase64(str) 
```

## 数字处理
### 显示两位小数的金额
```js
$fn.showMoney(34) //返回0.34
$fn.showMoney(1234) //返回12.34
```
### 千位符显示数字
```js
$fn.showThousandMoney(1234) //返回1,234.00
```

## 时间处理
### 自定义格式
* YMDhms直接替换对应时间单位，格式可自由替换
* 没有参数直接返回Y-M-D h:m:s(如2018-01-01 12:21:45)
* 有参数则直接替换
```js
$fn.showDate() //返回当前时间2018-01-01 12:21:45
$fn.showDate('Y-M-D h:m:s',new Date('2018-01-01 12:21:45')) //返回2018-01-01 12:21:45
$fn.showDate('Y-M',new Date('2018-01-01 12:21:45')) //返回2018-01
```

### 距离当前时间差处理
获取参数时间戳距离当前的时差，超过1秒显示*秒，超过1分显示*分，超过1时显示*时，超过1天显示*天，超过1年显示*年
```js
$fn.diffToNow(new Date()) //返回0秒
```

<!-- 以下依赖浏览器环境 -->
## cookie操作
```js
$fn.setCookie(cname, cvalue, exdays)
$fn.getCookie(cname, cvalue, exdays)
$fn.clearCookie(cname, cvalue, exdays)
```
## 链接操作
```js
//跳转链接
$fn.toHref(href)    
//打开新的标签页
$fn.toOpen(href)
//解析url为可操作的的对象
$fn.parseUrl(href)
//上报url,只通过图片形式上传
$fn.reportUrl(url,{
    id:123
})
```

## ajax请求
均返回promise对象，供.then()或async/await调用
```js
// post请求，application/x-www-form-urlencoded;
$fn.httpGet({
    url:'/api/test',
    data:{
        username:'admin'
    }
})
// post请求，application/x-www-form-urlencoded;
$fn.httpPost({
    url:'/api/test',
    data:{
        username:'admin'
    }
})
// post请求，application/json;charset=UTF-8;
$fn.httpPost({
    url:'/api/test',
    json:{
        username:'admin'
    }
})
// 自定义;
$fn.httpPost({
    url:'/api/test',
    data:{
        username:'admin'
    },
    headers:{
        'Content-Type':'test'
    }
})
// 初始化时，自定义所有请求拦截
$fn.setRequestTestFn((data)=>{
    if(data.code==40000){
        //对所有请求的数据做处理
    }
})
```

## 设备信息
```js
$fn.getDeviceType()
/** 返回设备环境的判断对象
{
    isMoble: /iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(window.navigator.userAgent.toLowerCase()), //判断是否为移动端
    isAppleMobile: /iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent
        .toLowerCase()), //是否为苹果移动端
    isAndroidMobile: /android/i.test(navigator.userAgent.toLowerCase()), //是否为安卓移动端
    isUc: /ucweb/.test(UserAgent), // UC浏览器
    isChrome: /chrome/.test(UserAgent.substr(-33, 6)), // Chrome浏览器
    isFirefox: /firefox/.test(UserAgent), // 火狐浏览器
    isOpera: /opera/.test(UserAgent), // Opera浏览器
    isSafire: /safari/.test(UserAgent) && !/chrome/.test(UserAgent), // safire浏览器
    is360: /360se/.test(UserAgent), // 360浏览器
    isBaidu: /bidubrowser/.test(UserAgent), // 百度浏览器
    isSougou: /metasr/.test(UserAgent), // 搜狗浏览器
    isIE6: /msie 6.0/.test(UserAgent), // IE6
    isIE7: /msie 7.0/.test(UserAgent), // IE7
    isIE8: /msie 8.0/.test(UserAgent), // IE8
    isIE9: /msie 9.0/.test(UserAgent), // IE9
    isIE10: /msie 10.0/.test(UserAgent), // IE10
    isIE11: /msie 11.0/.test(UserAgent), // IE11
    isLB: /lbbrowser/.test(UserAgent), // 猎豹浏览器
    isWX: /micromessenger/.test(UserAgent), // 微信内置浏览器
    isQQ: /qqbrowser/.test(UserAgent), // QQ浏览器
    isIpad: /ipad/.test(UserAgent), // ipad
    isIphone: /iphone os/.test(UserAgent), // iphone
    isAndroid: /android/.test(UserAgent), //安卓
    isWindowsCe: /windows ce/.test(UserAgent),
    isWindowsMobile: /windows mobile/.test(UserAgent),
    isWin2K: /windows nt 5.0/.test(UserAgent),
    isXP: /windows nt 5.1/.test(UserAgent),
    isVista: /windows nt 6.0/.test(UserAgent),
    isWin7: /windows nt 6.1/.test(UserAgent),
    isWin8: /windows nt 6.2/.test(UserAgent),
    isWin81: /windows nt 6.3/.test(UserAgent),
    isWin10: /windows nt 10.0/.test(UserAgent),
    isTouchScreen: ('ontouchstart' in window) || window.DocumentTouch &&
        document instanceof DocumentTouch,
    isChromeOnAndroid
}
*/
$fn.getExplorerInfo()
/** 返回浏览器版本信息
{
    type:'IE',/Firefox/Chrome/Opera/Safari
    version:''
}
*/
```
### 获取系统版本
```js
// 返回 Mac/Unix/Linux/Win2000/WinXP/Win2003/WinVista/Win7/Win10/other
$fn.detectOS()
```
## html字符与实体转换
### 将html字符实体转译成html字符
```js
$fn.decodeHtmlEntities(str)
```
### 将html字符转译成html字符实体
```js
$fn.encodeHtmlEntities(str)
```

## LocalStorage操作
```js
//设置值
$fn.setStorage(key,value)
//获取值
$fn.getStorage(key)
//删除值
$fn.removeStorage(key)
//清空
$fn.clearStorage()
```

## dom操作
```js
// 添加监听事件,event 不含'on'
$fn.addListen(dom,event,fn)
// 去除监听事件
$fn.removeEvent(dom,event,fn)
// 删除dom
$fn.removeDom(dom)
// 添加动画效果的class,动画结束后,该class会被删除
$fn.addAnimateClass(dom,className)
// 添加摇晃的class->'shake'
$fn.shake(dom)
// 是否含有class,返回Boolean
$fn.hasClass(dom,className)
// 删除className
$fn.removeClass(dom,className)
// 切换className
$fn.toggleClass(dom,className)
```

## 自定义扩展 $fn
```js
import Fn from 'jj-browser-fn/main.js'
class ProjFn {
    constructor() {

    }
}
ProjFn.prototype.__proto__ = Fn.prototype
export default new ProjFn()
```

## 请我喝杯果汁呗～

![Image text](https://github.com/Javison666/jj-browser-fn/blob/master/image/alipay.jpg?raw=true)![Image text](https://github.com/Javison666/jj-browser-fn/blob/master/image/wechat.jpg?raw=true)