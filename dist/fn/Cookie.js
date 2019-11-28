// 客户端设备相关信息
export var CookieFn = {
    setCookie: function (cname, cvalue, exdays, path) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires + "; path=" + (path === void (0) ? '/' : path) + "; ";
    },
    getCookie: function (cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1);
            if (c.indexOf(name) != -1)
                return c.substring(name.length, c.length);
        }
        return "";
    },
    clearCookie: function (cname) {
        this.setCookie(cname, "", -1);
    }
};
export default CookieFn;
//# sourceMappingURL=Cookie.js.map