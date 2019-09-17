# js工具函数（浏览器环境）
- 重要更新！核心模块以及本工具函数基于typescript重构以及api简化，原基于class api废弃，暴露的$fn为自2.0改为对象，
- 现支持typescript,以及js直接在html中引用
- [文档地址](https://javison666.github.io/jj-browser-fn/)
- [github地址](https://github.com/Javison666/jj-browser-fn)
- 引用库，后续 $fn 直接当作全局进行使用
    ```js
    import $fn from 'jj-browser-fn'
    ```
- html直接引用
    ```html
    <script src="jj-browser-fn/common/$fn.js"></script>
    ```
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
- [js工具函数（浏览器环境）](#js%E5%B7%A5%E5%85%B7%E5%87%BD%E6%95%B0%E6%B5%8F%E8%A7%88%E5%99%A8%E7%8E%AF%E5%A2%83)

- [js工具函数（浏览器环境）](#js%e5%b7%a5%e5%85%b7%e5%87%bd%e6%95%b0%e6%b5%8f%e8%a7%88%e5%99%a8%e7%8e%af%e5%a2%83)
  - [字符处理](#%e5%ad%97%e7%ac%a6%e5%a4%84%e7%90%86)
    - [默认处理非数值的内容为0](#%e9%bb%98%e8%ae%a4%e5%a4%84%e7%90%86%e9%9d%9e%e6%95%b0%e5%80%bc%e7%9a%84%e5%86%85%e5%ae%b9%e4%b8%ba0)
    - [默认处理空字符串为'--'](#%e9%bb%98%e8%ae%a4%e5%a4%84%e7%90%86%e7%a9%ba%e5%ad%97%e7%ac%a6%e4%b8%b2%e4%b8%ba)
    - [判断是否有值](#%e5%88%a4%e6%96%ad%e6%98%af%e5%90%a6%e6%9c%89%e5%80%bc)
    - [给URL添加参数](#%e7%bb%99url%e6%b7%bb%e5%8a%a0%e5%8f%82%e6%95%b0)
    - [将编码由utf8转为utf16](#%e5%b0%86%e7%bc%96%e7%a0%81%e7%94%b1utf8%e8%bd%ac%e4%b8%bautf16)
    - [将编码由utf16转为utf8](#%e5%b0%86%e7%bc%96%e7%a0%81%e7%94%b1utf16%e8%bd%ac%e4%b8%bautf8)
    - [对字符串进行base64编码](#%e5%af%b9%e5%ad%97%e7%ac%a6%e4%b8%b2%e8%bf%9b%e8%a1%8cbase64%e7%bc%96%e7%a0%81)
    - [对字符串进行base64解码](#%e5%af%b9%e5%ad%97%e7%ac%a6%e4%b8%b2%e8%bf%9b%e8%a1%8cbase64%e8%a7%a3%e7%a0%81)
  - [数字处理](#%e6%95%b0%e5%ad%97%e5%a4%84%e7%90%86)
    - [显示两位小数的金额](#%e6%98%be%e7%a4%ba%e4%b8%a4%e4%bd%8d%e5%b0%8f%e6%95%b0%e7%9a%84%e9%87%91%e9%a2%9d)
    - [千位符显示数字](#%e5%8d%83%e4%bd%8d%e7%ac%a6%e6%98%be%e7%a4%ba%e6%95%b0%e5%ad%97)
  - [时间处理](#%e6%97%b6%e9%97%b4%e5%a4%84%e7%90%86)
    - [自定义格式](#%e8%87%aa%e5%ae%9a%e4%b9%89%e6%a0%bc%e5%bc%8f)
    - [距离当前时间差处理](#%e8%b7%9d%e7%a6%bb%e5%bd%93%e5%89%8d%e6%97%b6%e9%97%b4%e5%b7%ae%e5%a4%84%e7%90%86)
  - [cookie操作](#cookie%e6%93%8d%e4%bd%9c)
  - [链接操作](#%e9%93%be%e6%8e%a5%e6%93%8d%e4%bd%9c)
  - [ajax请求](#ajax%e8%af%b7%e6%b1%82)
  - [设备信息](#%e8%ae%be%e5%a4%87%e4%bf%a1%e6%81%af)
    - [获取系统版本](#%e8%8e%b7%e5%8f%96%e7%b3%bb%e7%bb%9f%e7%89%88%e6%9c%ac)
  - [html字符与实体转换](#html%e5%ad%97%e7%ac%a6%e4%b8%8e%e5%ae%9e%e4%bd%93%e8%bd%ac%e6%8d%a2)
    - [将html字符实体转译成html字符](#%e5%b0%86html%e5%ad%97%e7%ac%a6%e5%ae%9e%e4%bd%93%e8%bd%ac%e8%af%91%e6%88%90html%e5%ad%97%e7%ac%a6)
    - [将html字符转译成html字符实体](#%e5%b0%86html%e5%ad%97%e7%ac%a6%e8%bd%ac%e8%af%91%e6%88%90html%e5%ad%97%e7%ac%a6%e5%ae%9e%e4%bd%93)
  - [LocalStorage操作](#localstorage%e6%93%8d%e4%bd%9c)
  - [dom操作](#dom%e6%93%8d%e4%bd%9c)
  - [自定义扩展 $fn](#%e8%87%aa%e5%ae%9a%e4%b9%89%e6%89%a9%e5%b1%95-fn)
  - [请我喝杯果汁呗～](#%e8%af%b7%e6%88%91%e5%96%9d%e6%9d%af%e6%9e%9c%e6%b1%81%e5%91%97)

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
// 获取ajax对象可以进行中止连接操作
$fn.httpPost({
    url:'/api/test'
},(ajax)=>{
    ajax.abort()
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
import $fn from 'jj-browser-fn'
const ProjFn ={
    ...$fn
}
export default ProjFn
```

## 请我喝杯果汁呗～

![Image text](https://github.com/Javison666/jj-browser-fn/blob/master/image/alipay.jpg?raw=true)![Image text](https://github.com/Javison666/jj-browser-fn/blob/master/image/wechat.jpg?raw=true)