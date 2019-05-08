# jj-browser-fn

## 引用库，后续 $fn 直接当作全局进行使用
```js
import $fn from 'jj-browser-fn'
```

## 不依赖浏览器部分
### 默认处理非数值的内容为0
对非数字的内容，返回默认想展示的内容defaultVal || 0，否则返回原值
```js
$fn.n(null) //返回0
$fn.n(1) //返回1
$fn.n('1') //返回'1'
$fn.n('1a') //返回0
$fn.n('1a',null) //返回null
```
### 显示两位小数的金额
```js
$fn.showMoney(34) //返回0.34
$fn.showMoney(1234) //返回12.34
```
### 千位符显示数字
```js
$fn.showThousandMoney(1234) //返回1,234.00
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

### 时间自定义处理
* YMDhms直接替换对应时间单位，格式可自由替换
* 没有参数直接返回Y-M-D h:m:s(如2018-01-01 12:21:45)
* 有参数则直接替换
```js
$fn.showDate() //返回当前时间2018-01-01 12:21:45
$fn.showDate('Y-M-D h:m:s',new Date('2018-01-01 12:21:45')) //返回2018-01-01 12:21:45
$fn.showDate('Y-M',new Date('2018-01-01 12:21:45')) //返回2018-01
```

### 距离当前时间的时间差处理
获取参数时间戳距离当前的时差，超过1秒显示*秒，超过1分显示*分，超过1时显示*时，超过1天显示*天，超过1年显示*年
```js
$fn.diffToNow(new Date()) //返回0秒
```

## 依赖浏览器部分
### cookie部分
```js
$fn.setCookie(cname, cvalue, exdays)
$fn.getCookie(cname, cvalue, exdays)
$fn.clearCookie(cname, cvalue, exdays)
```
### 链接操作
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

### ajax请求
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

## 设备部分
```js
$fn.getDeviceType()
/** 返回
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
/** 返回
{
    type:'IE',/Firefox/Chrome/Opera/Safari
    version:''
}
*/
```

### 将html字符实体转译成html字符
```js
$fn.decodeHtmlEntities(str)
```

### 将html字符转译成html字符实体
```js
$fn.encodeHtmlEntities(str)
```

### LocalStorage
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

## 关于dom的函数
```js
// 添加监听事件,event 不含'on'
$fn.addListen(dom,event,fn)
// 去除监听事件
$fn.removeEvent(dom,event,fn)
// 删除dom
$fn.removeDom(dom)
// 添加动画效果的class,动画结束后,该class会被删除
$fn.addAnimateClass(dom,className)
// 添加摇晃的class
$fn.shake(dom)
// 是否含有class,返回Boolean
$fn.hasClass(dom,className)
// 删除className
$fn.removeClass(dom,className)
// 切换className
$fn.toggleClass(dom,className)
```