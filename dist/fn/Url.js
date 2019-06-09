export var UrlFn = {
    /**
     * 跳转链接
     * @param {*} href
     */
    toHref: function (href) {
        window.location.href = href;
    },
    /**
     * 打开新的标签页
     * @param {*} href
     */
    toOpen: function (href) {
        window.open(href);
    },
    /**
     * 解析url参数
     * @param {*} url
     */
    parseUrl: function (url) {
        var a = document.createElement('a');
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
                var ret = {};
                var seg = a.search.replace(/^\?/, '').split('&').filter(function (v) {
                    if (v !== '' && v.indexOf('=')) {
                        return true;
                    }
                });
                seg.forEach(function (element) {
                    var idx = element.indexOf('=');
                    var key = element.substring(0, idx);
                    var val = element.substring(idx + 1);
                    ret[key] = val;
                });
                return ret;
            })()
        };
    },
    reportUrl: function (url, obj) {
        var src = this.urlAddParams(url, obj);
        var img = new Image();
        img.src = src;
    }
};
export default UrlFn;
//# sourceMappingURL=Url.js.map