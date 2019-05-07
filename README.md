# jj-browser-fn

## 引用库，后续 $fn 直接当作全局进行使用
```js
import $fn from 'jj-core-fn'
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
$fn.showMoney(123400) //返回1,234.00
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
```