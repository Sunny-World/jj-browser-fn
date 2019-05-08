class DomFn {
    constructor() {}
    /**
     * 将html字符实体转译成html字符(只适用于浏览器客户端)
     * @param {字符实体} str 
     */
    decodeHtmlEntities(str) {
        let t = document.createElement("div");
        t.innerHTML = str;
        return t.innerText || t.textContent
    }
    /**
     * 将html字符转译成html字符实体(只适用于浏览器客户端)
     * @param {html标签内容} str 
     */
    encodeHtmlEntities(str) {
        let elem = document.createElement('div')
        let txt = document.createTextNode(html)
        elem.appendChild(txt)
        return elem.innerHTML;
    }
}
export default DomFn