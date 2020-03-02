"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 客户端设备相关信息
exports.DeviceFn = {
    getDeviceType: function () {
        var UserAgent = window.navigator.userAgent.toLowerCase();
        var isChromeOnAndroid = false;
        if (/android/i.test(UserAgent)) {
            if (/chrome/i.test(UserAgent)) {
                var parts = UserAgent.split('chrome/');
                var fullVersionString = parts[1].split(" ")[0];
                var versionString = fullVersionString.split('.')[0];
                var version = parseInt(versionString);
                if (version >= 27) {
                    isChromeOnAndroid = true;
                }
            }
        }
        return {
            isMoble: /iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(UserAgent),
            isAppleMobile: /iphone|ipod|ipad|Macintosh/i.test(UserAgent),
            isAndroidMobile: /android/i.test(UserAgent),
            isUc: /ucweb/.test(UserAgent),
            isChrome: /chrome/.test(UserAgent.substr(-33, 6)),
            isFirefox: /firefox/.test(UserAgent),
            isOpera: /opera/.test(UserAgent),
            isSafire: /safari/.test(UserAgent) && !/chrome/.test(UserAgent),
            is360: /360se/.test(UserAgent),
            isBaidu: /bidubrowser/.test(UserAgent),
            isSougou: /metasr/.test(UserAgent),
            isIE6: /msie 6.0/.test(UserAgent),
            isIE7: /msie 7.0/.test(UserAgent),
            isIE8: /msie 8.0/.test(UserAgent),
            isIE9: /msie 9.0/.test(UserAgent),
            isIE10: /msie 10.0/.test(UserAgent),
            isIE11: /msie 11.0/.test(UserAgent),
            isLB: /lbbrowser/.test(UserAgent),
            isWX: /micromessenger/.test(UserAgent),
            isQQ: /qqbrowser/.test(UserAgent),
            isIpad: /ipad/.test(UserAgent),
            isIphone: /iphone os/.test(UserAgent),
            isAndroid: /android/.test(UserAgent),
            isWindowsCe: /windows ce/.test(UserAgent),
            isWindowsMobile: /windows mobile/.test(UserAgent),
            isWin2K: /windows nt 5.0/.test(UserAgent),
            isXP: /windows nt 5.1/.test(UserAgent),
            isVista: /windows nt 6.0/.test(UserAgent),
            isWin7: /windows nt 6.1/.test(UserAgent),
            isWin8: /windows nt 6.2/.test(UserAgent),
            isWin81: /windows nt 6.3/.test(UserAgent),
            isWin10: /windows nt 10.0/.test(UserAgent),
            isChromeOnAndroid: isChromeOnAndroid
        };
    },
    detectOS: function () {
        var sUserAgent = window.navigator.userAgent;
        var isWin = (window.navigator.platform == "Win32") || (window.navigator.platform == "Windows");
        var isMac = (window.navigator.platform == "Mac68K") || (window.navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
        if (isMac)
            return "Mac";
        var isUnix = (window.navigator.platform == "X11") && !isWin && !isMac;
        if (isUnix)
            return "Unix";
        var isLinux = (String(window.navigator.platform).indexOf("Linux") > -1);
        if (isLinux)
            return "Linux";
        if (isWin) {
            var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
            if (isWin2K)
                return "Win2000";
            var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
            if (isWinXP)
                return "WinXP";
            var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
            if (isWin2003)
                return "Win2003";
            var isWinVista = sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
            if (isWinVista)
                return "WinVista";
            var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
            if (isWin7)
                return "Win7";
            var isWin10 = sUserAgent.indexOf("Windows NT 10") > -1 || sUserAgent.indexOf("Windows 10") > -1;
            if (isWin10)
                return "Win10";
        }
        return "other";
    },
    /**
     * 返回浏览器版本
     */
    getExplorerInfo: function () {
        var explorer = window.navigator.userAgent.toLowerCase();
        // ie  
        if (explorer.indexOf("msie") >= 0) {
            var ver = explorer.match(/msie ([\d.]+)/)[1];
            return {
                type: "IE",
                version: ver
            };
        }
        // firefox  
        else if (explorer.indexOf("firefox") >= 0) {
            var ver = explorer.match(/firefox\/([\d.]+)/)[1];
            return {
                type: "Firefox",
                version: ver
            };
        }
        // Chrome  
        else if (explorer.indexOf("chrome") >= 0) {
            var ver = explorer.match(/chrome\/([\d.]+)/)[1];
            return {
                type: "Chrome",
                version: ver
            };
        }
        // Opera  
        else if (explorer.indexOf("opera") >= 0) {
            var ver = explorer.match(/opera.([\d.]+)/)[1];
            return {
                type: "Opera",
                version: ver
            };
        }
        // Safari  
        else if (explorer.indexOf("Safari") >= 0) {
            var ver = explorer.match(/version\/([\d.]+)/)[1];
            return {
                type: "Safari",
                version: ver
            };
        }
        // 其他
        else {
            return {
                type: '',
                version: ''
            };
        }
    }
};
exports.default = exports.DeviceFn;
//# sourceMappingURL=Device.js.map