"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var jj_core_fn_1 = require("jj-core-fn");
var Cookie_js_1 = require("./fn/Cookie.js");
var Device_js_1 = require("./fn/Device.js");
var Dom_js_1 = require("./fn/Dom.js");
var Http_js_1 = require("./fn/Http.js");
var LocalStorage_js_1 = require("./fn/LocalStorage.js");
var Url_js_1 = require("./fn/Url.js");
// 为了common导出随处可用的js
exports.$fn = __assign({}, Cookie_js_1.default, Device_js_1.default, jj_core_fn_1.default, Dom_js_1.default, Http_js_1.default, LocalStorage_js_1.default, Url_js_1.default);
// 供import导入使用
exports.default = exports.$fn;
//# sourceMappingURL=index.js.map