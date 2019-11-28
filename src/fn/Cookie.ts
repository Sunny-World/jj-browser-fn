import { CookieFace } from '@/util/interface.js'
// 客户端设备相关信息
export const CookieFn:CookieFace = {
    setCookie(cname, cvalue, exdays, path) {
        let d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires+"; path="+(path===void(0)?'/':path)+"; ";
    },
    getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
        }
        return "";
    },
    clearCookie(cname) {
        this.setCookie(cname, "", -1);
    }
}
export default CookieFn