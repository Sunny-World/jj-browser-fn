"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomFn = {
    /**
     * 将html字符实体转译成html字符(只适用于浏览器客户端)
     * @param {字符实体} str
     */
    decodeHtmlEntities: function (str) {
        var t = document.createElement("div");
        t.innerHTML = str;
        return t.innerText || t.textContent;
    },
    /**
     * 将html字符转译成html字符实体(只适用于浏览器客户端)
     * @param {html标签内容} str
     */
    encodeHtmlEntities: function (str) {
        var elem = document.createElement('div');
        var txt = document.createTextNode(str);
        elem.appendChild(txt);
        return elem.innerHTML;
    },
    addListen: function (dom, event, fn) {
        if (dom.addEventListener) { // 所有主流浏览器，除了 IE 8 及更早版本
            dom.addEventListener(event, fn);
        }
        else if (dom.attachEvent) { // IE 8 及更早版本
            dom.attachEvent("on" + event, fn);
        }
    },
    removeEvent: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        }
        else if (element.detachEvent) { //detachEvent是ie的事件监听
            element.detachEvent('on' + type, handler);
        }
        else {
            element['on' + type] = null;
        }
    },
    removeDom: function (dom) {
        if (!dom.remove) {
            dom.removeNode(true);
        }
        else {
            dom.remove();
        }
    },
    addAnimateClass: function (dom, animateClass) {
        var _this = this;
        this.toggleClass(dom, animateClass);
        this.once(dom, 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            _this.removeClass(dom, animateClass);
        });
    },
    // 摇晃效果
    shake: function (dom) {
        var _this = this;
        this.toggleClass(dom, 'shake animated');
        this.once(dom, 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            _this.removeClass(dom, 'shake animated');
        });
    },
    //   一次执行
    once: function (dom, type, callback) {
        type = type.split(' ');
        var _loop_1 = function (item) {
            var handle = function () {
                callback();
                dom.removeEventListener(item, handle);
            };
            dom.addEventListener(item, handle);
        };
        for (var _i = 0, type_1 = type; _i < type_1.length; _i++) {
            var item = type_1[_i];
            _loop_1(item);
        }
    },
    hasClass: function (dom, cls) {
        return dom.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    },
    addClass: function (dom, cls) {
        if (!this.hasClass(dom, cls))
            dom.className += " " + cls;
    },
    removeClass: function (dom, cls) {
        if (this.hasClass(dom, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            dom.className = dom.className.replace(reg, ' ');
        }
    },
    toggleClass: function (dom, cls) {
        if (this.hasClass(dom, cls)) {
            this.removeClass(dom, cls);
        }
        else {
            this.addClass(dom, cls);
        }
    }
};
exports.default = exports.DomFn;
//# sourceMappingURL=Dom.js.map