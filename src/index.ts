import CornFn from 'jj-core-fn'
import CookieFn from './fn/Cookie.js'
import DeviceFn from './fn/Device.js'
import DomFn from './fn/Dom.js'
import HttpFn from './fn/Http.js'
import LocalStorageFn from './fn/LocalStorage.js'
import UrlFn from './fn/Url.js'
// 为了common导出随处可用的js
export const $fn = {
    ...CookieFn,
    ...DeviceFn,
    ...CornFn,
    ...DomFn,
    ...HttpFn,
    ...LocalStorageFn,
    ...UrlFn
}
// 供import导入使用
export default $fn
