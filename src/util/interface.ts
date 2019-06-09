export interface CookieFace{
    setCookie(cname, cvalue, exdays):void,
    getCookie(cname:string):void,
    clearCookie(cname:string):void
}
export interface DeviceFace{
    getDeviceType():{
        isMoble:boolean,
        isAppleMobile:boolean,
        isAndroidMobile:boolean,
        isUc:boolean,
        isChrome:boolean,
        isFirefox:boolean,
        isOpera:boolean,
        isSafire:boolean,
        is360:boolean,
        isBaidu:boolean,
        isSougou:boolean,
        isIE6:boolean,
        isIE7:boolean,
        isIE8:boolean,
        isIE9:boolean,
        isIE10:boolean,
        isIE11:boolean,
        isLB:boolean,
        isWX:boolean,
        isQQ:boolean,
        isIpad:boolean,
        isIphone:boolean,
        isAndroid:boolean,
        isWindowsCe:boolean,
        isWindowsMobile:boolean,
        isWin2K:boolean,
        isXP:boolean,
        isVista:boolean,
        isWin7:boolean,
        isWin8:boolean,
        isWin81:boolean,
        isWin10:boolean,
        isTouchScreen:boolean,
        isChromeOnAndroid:boolean,
    },
    detectOS():string,
    getExplorerInfo():{
        type:string,
        version:string
    }

}
export interface DomFace {
    decodeHtmlEntities(str):string,
    encodeHtmlEntities(str):string,
    addListen(dom,event,fn):void,
    removeEvent(dom,type, handler):void,
    removeDom(dom):void,
    addAnimateClass(dom, animateClass:string):void,
    shake(dom):void,
    once(dom, type, callback):void,
    hasClass(dom, cls:string):void,
    addClass(dom, cls:string):void,
    removeClass(dom, cls:string):void,
    toggleClass(dom, cls:string):void,
}
export interface HttpFace {
    httpConnect(): void,
    setRequestHeader(): void,
    onStateChange(xhr, success, failure): void,
    ajaxFn(obj): void,
    originHttpPost(obj, fn: any): void,
    originHttpGet(obj, fn: any): void,
    setRequestTestFn(fn: any): void,
    httpPost(obj): void,
    httpGet(obj): void
}
export interface LocalStorageFace {
    setStorage(key: string, obj): void,
    getStorage(key: string): any,
    removeStorage(key: string): void,
    clearStorage(): void,
    getStorageType(object: any): string
}
export interface UrlFace {
    toHref(href: string): void,
    toOpen(href: string): void,
    parseUrl(url: string): {
        source: string,
        protocol: string,
        host: string,
        port: string,
        query: string,
        file: string,
        hash: string,
        path: string,
        relative: string,
        segments: string[],
        params: any
    },
    reportUrl(url: string, obj: any): void,
}
