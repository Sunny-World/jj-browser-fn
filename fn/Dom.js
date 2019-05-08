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
    addListen(dom, event, fn) {
		if (dom.addEventListener) { // 所有主流浏览器，除了 IE 8 及更早版本
			dom.addEventListener(event, fn);
		} else if (dom.attachEvent) { // IE 8 及更早版本
			dom.attachEvent(`on${event}`, fn);
		}
	}
	removeEvent(element, type, handler) {
		if (element.removeEventListener) {
			element.removeEventListener(type, handler, false);
		} else if (element.detachEvent) { //detachEvent是ie的事件监听
			element.detachEvent('on' + type, handler)
		} else {
			element['on' + type] = null;
		}
	}
    removeDom(dom) {
        if (!dom.remove) {
            dom.removeNode(true);
        } else {
            dom.remove();
        }
    }
    addAnimateClass(dom, animateClass) {
        this.toggleClass(dom, animateClass)
        this.once(dom, 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            this.removeClass(dom, animateClass)
        })
    }
    // 摇晃效果
    shake(dom) {
        this.toggleClass(dom, 'shake animated')
        this.once(dom, 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            this.removeClass(dom, 'shake animated')
        })
    }
    hasClass(dom, cls) {
        return dom.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    }
    addClass(dom, cls) {
        if (!this.hasClass(dom, cls)) dom.className += " " + cls;
    }
    removeClass(dom, cls) {
        if (this.hasClass(dom, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            dom.className = dom.className.replace(reg, ' ');
        }
    }
    toggleClass(dom, cls) {
        if (this.hasClass(dom, cls)) {
            this.removeClass(dom, cls);
        } else {
            this.addClass(dom, cls);
        }
    }
}
export default DomFn