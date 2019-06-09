import { DeviceFace } from '@/util/interface.js'
// 客户端设备相关信息
export const DeviceFn:DeviceFace = {
    getDeviceType() {
        let UserAgent = window.navigator.userAgent.toLowerCase();
        let isChromeOnAndroid=false
        if(/android/i.test(UserAgent)){
            if (/chrome/i.test(UserAgent)) {
                let parts = UserAgent.split('chrome/');

                let fullVersionString = parts[1].split(" ")[0];
                let versionString = fullVersionString.split('.')[0];
                let version = parseInt(versionString);

                if (version >= 27) {
                    isChromeOnAndroid = true;
                }
            }
        }
        return {
            isMoble: /iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(UserAgent), //判断是否为移动端
            isAppleMobile: /iphone|ipod|ipad|Macintosh/i.test(UserAgent), //是否为苹果移动端
            isAndroidMobile: /android/i.test(UserAgent), //是否为安卓移动端
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
            isTouchScreen: ('ontouchstart' in window) || DocumentTouch &&
                document instanceof DocumentTouch,
            isChromeOnAndroid

        }
    },
    detectOS(){
        let sUserAgent = window.navigator.userAgent;
        let isWin = (window.navigator.platform == "Win32") || (window.navigator.platform == "Windows");
        let isMac = (window.navigator.platform == "Mac68K") || (window.navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
        if (isMac) return "Mac";
        let isUnix = (window.navigator.platform == "X11") && !isWin && !isMac;
        if (isUnix) return "Unix";
        let isLinux = (String(window.navigator.platform).indexOf("Linux") > -1);
        if (isLinux) return "Linux";
        if (isWin) {
            let isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
            if (isWin2K) return "Win2000";
            let isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
            if (isWinXP) return "WinXP";
            let isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
            if (isWin2003) return "Win2003";
            let isWinVista= sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
            if (isWinVista) return "WinVista";
            let isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
            if (isWin7) return "Win7";
            let isWin10 = sUserAgent.indexOf("Windows NT 10") > -1 || sUserAgent.indexOf("Windows 10") > -1;
            if (isWin10) return "Win10";
        }
        return "other";
    },
    /** 
     * 返回浏览器版本 
     */
    getExplorerInfo() {
        let explorer = window.navigator.userAgent.toLowerCase();
        // ie  
        if (explorer.indexOf("msie") >= 0) {
            let ver = explorer.match(/msie ([\d.]+)/)[1];
            return {
                type: "IE",
                version: ver
            };
        }
        // firefox  
        else if (explorer.indexOf("firefox") >= 0) {
            let ver = explorer.match(/firefox\/([\d.]+)/)[1];
            return {
                type: "Firefox",
                version: ver
            };
        }
        // Chrome  
        else if (explorer.indexOf("chrome") >= 0) {
            let ver = explorer.match(/chrome\/([\d.]+)/)[1];
            return {
                type: "Chrome",
                version: ver
            };
        }
        // Opera  
        else if (explorer.indexOf("opera") >= 0) {
            let ver = explorer.match(/opera.([\d.]+)/)[1];
            return {
                type: "Opera",
                version: ver
            };
        }
        // Safari  
        else if (explorer.indexOf("Safari") >= 0) {
            let ver = explorer.match(/version\/([\d.]+)/)[1];
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
            }
        }
    }
}
export default DeviceFn