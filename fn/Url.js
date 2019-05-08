class UrlFn {
    /**
     * 跳转链接
     * @param {*} href 
     */
    toHref(href) {
        window.location.href = href
    }
    /**
     * 打开新的标签页
     * @param {*} href 
     */
    toOpen(href) {
        window.open(href)
    }
    /**
     * 解析url参数
     * @param {*} url 
     */
    parseUrl(url) {
        let a = document.createElement('a');
        a.href = url;
        return {
            source: url,
            protocol: a.protocol.replace(':', ''),
            host: a.hostname,
            port: a.port,
            query: a.search,
            file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
            hash: a.hash.replace('#', ''),
            path: a.pathname.replace(/^([^\/])/, '/$1'),
            relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
            segments: a.pathname.replace(/^\//, '').split('/'),
            params: (function () {
                let ret = {};
                let seg = a.search.replace(/^\?/, '').split('&').filter(function (v, i) {
                    if (v !== '' && v.indexOf('=')) {
                        return true;
                    }
                });
                seg.forEach(function (element, index) {
                    let idx = element.indexOf('=');
                    let key = element.substring(0, idx);
                    let val = element.substring(idx + 1);
                    ret[key] = val;
                });
                return ret;
            })()
        }
    }
    reportUrl(url,obj){
        let src = this.urlAddParams(url, obj)
        var img = new Image()
        img.src = src
    }
}
export const UrlClass = UrlFn