"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpFn = {
    httpConnect: function () {
        var _this = this;
        this.Method = this.Method.toUpperCase();
        if (this.Method == 'GET' && this.Args) {
            var args = "";
            if (typeof this.Args == 'object') {
                var arr = new Array();
                for (var k in this.Args) {
                    var v = this.Args[k];
                    arr.push(k + "=" + v);
                }
                args = arr.join("&");
            }
            else {
                // args = data; //alert("string");
            }
            this.URL += (this.URL.indexOf('?') == -1 ? '?' : '&') + args;
            this.Args = null;
        }
        // if (this.type !== 'upload') {
        if (this.Method == 'POST') {
            var args = "";
            if (typeof this.Args == 'string') {
                args = this.Args;
            }
            else if (typeof this.Args == 'object') {
                if (this.dataType == 'json') {
                    this.Args = JSON.stringify(this.Args);
                }
                else {
                    var arr = new Array();
                    for (var k in this.Args) {
                        var v = this.Args[k];
                        arr.push(k + "=" + v);
                    }
                    args = arr.join("&");
                    this.Args = encodeURI(args);
                }
            }
        }
        // }
        var q = this.Request;
        var evt1 = this.onSuccess;
        var evt2 = this.onFailure;
        var evt3 = this.onLoadend;
        this.Request.onreadystatechange = function () {
            _this.onStateChange(q, evt1, evt2, evt3);
        };
        this.Request.open(this.Method, this.URL, this.Async);
        this.setRequestHeader();
        try {
            this.Request.send(this.Args);
        }
        catch (e) {
            console.log("httpconnect exception.");
        }
    },
    setRequestHeader: function () {
        for (var i in this.headers) {
            this.Request.setRequestHeader(i, this.headers[i]);
        }
        if (!(this.headers && this.headers['Content-Type'])) {
            if (this.dataType == 'json') {
                this.Request.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
            }
            else {
                this.Request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;');
            }
        }
    },
    onStateChange: function (xhr, success, failure) {
        if (xhr.readyState == 4) {
            var s = xhr.status;
            if (s == 0) {
                console.log("httpconnect to url failure.");
            }
            else if (s >= 200 && s < 400) {
                success(xhr);
            }
            else {
                failure(xhr);
            }
        }
    },
    ajaxFn: function (_a, callback) {
        var url = _a.url, method = _a.method, args = _a.args, headers = _a.headers, fn = _a.fn, dataType = _a.dataType, type = _a.type;
        this.URL = "";
        this.Method = "GET";
        this.Async = true;
        this.Args = null;
        this.headers = headers;
        this.type = type;
        this.onSuccess = function () { };
        this.onFailure = function () { };
        // tslint:disable-next-line
        var rq = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        if (typeof callback === 'function') {
            callback(rq);
        }
        this.Request = rq;
        // 兼容java不接收undefined参数
        for (var o in args) {
            if (args[o] === undefined) {
                args[o] = '';
            }
        }
        var obj = null;
        this.URL = url;
        this.dataType = dataType;
        this.Method = method;
        this.Async = true;
        this.Args = args;
        this.onSuccess = function (xhr) {
            var text = xhr.responseText;
            if (text.charCodeAt() == 65279)
                text = text.substring(1); //处理utf8引导字节
            eval("obj=" + text);
            fn(obj, xhr);
        };
        this.onFailure = function (xhr) {
            eval("obj={Tag:'ERROR',Status:'" + xhr.status + "'}");
            fn(obj);
        };
        this.httpConnect();
    },
    originHttpPost: function (obj, fn, callback) {
        var d = {
            url: obj.url,
            method: 'post',
            fn: fn,
            type: obj.type,
            headers: obj.headers,
        };
        if (obj.json !== undefined) {
            d.args = obj.json;
            d.dataType = 'json';
        }
        else {
            d.args = obj.data;
        }
        this.ajaxFn(d, callback);
    },
    originHttpGet: function (obj, fn, callback) {
        var d = {
            url: obj.url,
            method: 'get',
            headers: obj.headers,
            fn: fn,
            type: obj.type
        };
        if (obj.json !== undefined) {
            d.args = obj.json;
            d.dataType = 'json';
        }
        else {
            d.args = obj.data;
        }
        this.ajaxFn(d, callback);
    },
    setRequestTestFn: function (fn) {
        if (this.requestDataAllfn) {
            this.requestDataAllfn = fn;
        }
    },
    httpPost: function (obj, callback) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.originHttpPost(obj, function (res) {
                _this.setRequestTestFn(res);
                resolve(res);
            }, callback);
        });
    },
    httpGet: function (obj, callback) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.originHttpGet(obj, function (res) {
                _this.setRequestTestFn(res);
                resolve(res);
            }, callback);
        });
    }
};
exports.default = exports.HttpFn;
//# sourceMappingURL=Http.js.map