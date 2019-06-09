var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import CornFn from 'jj-core-fn';
import CookieFn from './fn/Cookie.js';
import DeviceFn from './fn/Device.js';
import DomFn from './fn/Dom.js';
import HttpFn from './fn/Http.js';
import LocalStorageFn from './fn/LocalStorage.js';
import UrlFn from './fn/Url.js';
// 为了common导出随处可用的js
export var $fn = __assign({}, CookieFn, DeviceFn, CornFn, DomFn, HttpFn, LocalStorageFn, UrlFn);
// 供import导入使用
export default $fn;
//# sourceMappingURL=index.js.map