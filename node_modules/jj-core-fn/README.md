# js工具函数（适用所有环境）
- 重要更新！核心模块以及本工具函数基于typescript重构以及api简化，原基于class api废弃，暴露的$fn为自2.0改为对象，
- 现支持typescript,以及js直接在html中引用
- github : https://github.com/Javison666/jj-core-fn
- 只要可以运行js的环境都可以支持，浏览器端、node都可以使用
- 引用库，后续 $fn 直接当作全局进行使用
    ```js
    import $fn from 'jj-core-fn'
    ```
- html直接引用
    ```html
    <script src="jj-core-fn/common/$fn.js"></script>
    ```
- [浏览器环境js工具库请点击跳转](https://javison666.github.io/jj-browser-fn/)
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
- [js工具函数（适用所有环境）](#js%E5%B7%A5%E5%85%B7%E5%87%BD%E6%95%B0%E9%80%82%E7%94%A8%E6%89%80%E6%9C%89%E7%8E%AF%E5%A2%83)

- [js工具函数（适用所有环境）](#js%E5%B7%A5%E5%85%B7%E5%87%BD%E6%95%B0%E9%80%82%E7%94%A8%E6%89%80%E6%9C%89%E7%8E%AF%E5%A2%83)
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


## 请我喝杯果汁呗～

![Image text](https://github.com/Javison666/jj-browser-fn/blob/master/image/alipay.jpg?raw=true)![Image text](https://github.com/Javison666/jj-browser-fn/blob/master/image/wechat.jpg?raw=true)