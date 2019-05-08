class HttpFn {
	constructor() {}
	httpConnect() {
		this.Method = this.Method.toUpperCase();
		if (this.Method == 'GET' && this.Args) {
			let args = "";
			if (typeof this.Args == 'object') {
				let arr = new Array();
				for (let k in this.Args) {
					let v = this.Args[k];
					arr.push(k + "=" + v);
				}
				args = arr.join("&");
			} else {
				// args = data; //alert("string");
			}
			this.URL += (this.URL.indexOf('?') == -1 ? '?' : '&') + args;
			this.Args = null;
		}
		// if (this.type !== 'upload') {
			if (this.Method == 'POST') {
				let args = "";
				if (typeof this.Args == 'string') {
					args = this.Args;
				} else if (typeof this.Args == 'object') {
					if (this.dataType == 'json') {
						this.Args = JSON.stringify(this.Args)
					} else {
						let arr = new Array();
						for (let k in this.Args) {
							let v = this.Args[k];
							arr.push(k + "=" + v);
						}
						args = arr.join("&");
						this.Args = encodeURI(args);
					}
				}
				console.log(this.Args)
			}
		// }
		let q = this.Request;
		let evt1 = this.onSuccess;
		let evt2 = this.onFailure;
		let evt3 = this.onLoadend;
		this.Request.onreadystatechange = () => {
			this.onStateChange(q, evt1, evt2, evt3);
		};
		this.Request.open(this.Method, this.URL, this.Async);
		this.setRequestHeader()
		try {
			this.Request.send(this.Args);
		} catch (e) {
			console.log("httpconnect exception.");
		}
	}
	setRequestHeader() {
		for (let i in this.headers) {
			this.Request.setRequestHeader(i, this.headers[i])
		}
		if (!(this.headers && this.headers['Content-Type'])) {
			if (this.dataType == 'json') {
				this.Request.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
			} else {
				this.Request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;');
			}
		}
	}
	onStateChange(xhr, success, failure) {
		if (xhr.readyState == 4) {
			let s = xhr.status;
			if (s == 0) {
				console.log("httpconnect to url failure.");
			} else if (s >= 200 && s < 400) {
				success(xhr);
			} else {
				failure(xhr);
			}
		}
	}
	ajaxFn({
		url,
		method,
		args,
		headers,
		fn,
		dataType,
		type
	}) {
		this.URL = "";
		this.Method = "GET";
		this.Async = true;
		this.Args = null;
		this.headers = headers
		this.type = type
		this.onSuccess = function () {};
		this.onFailure = function () {};
		this.Request = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
		// 兼容java不接收undefined参数
		for (let o in args) {
			if (args[o] === undefined) {
				args[o] = ''
			}
		}
		let obj = null;
		this.URL = url;
		this.dataType = dataType;
		this.Method = method;
		this.Async = true;
		this.Args = args;
		this.onSuccess = function (xhr) {
			let text = xhr.responseText;
			if (text.charCodeAt() == 65279) text = text.substring(1); //处理utf8引导字节
			eval("obj=" + text);
			fn(obj, xhr)
		};
		this.onFailure = function (xhr) {
			eval("obj={Tag:'ERROR',Status:'" + xhr.status + "'}");
			fn(obj)
		};
		this.httpConnect();
		return obj;
	}
	originHttpPost(obj, fn) {
		if (obj.json !== undefined) {
			this.ajaxFn({
				url: obj.url,
				method: 'post',
				args: obj.json,
				fn,
				headers: obj.headers,
				dataType: 'json',
				type: obj.type
			})
		} else {
			this.ajaxFn({
				url: obj.url,
				method: 'post',
				args: obj.data,
				headers: obj.headers,
				fn,
				type: obj.type
			})
		}
	}
	originHttpGet(obj, fn) {
		if (obj.json !== undefined) {
			this.ajaxFn({
				url: obj.url,
				method: 'get',
				args: obj.json,
				headers: obj.headers,
				fn,
				dataType: 'json',
				type: obj.type
			})
		} else {
			this.ajaxFn({
				url: obj.url,
				method: 'get',
				args: obj.data,
				headers: obj.headers,
				fn,
				type: obj.type
			})
		}
    }
    setRequestTestFn(fn){
        this.requestDataAllfn=fn
    }
	requestDataAllfn(data) {}
	httpPost(obj) {
		return new Promise((resolve) => {
			this.originHttpPost(obj, (res) => {
				this.requestDataAllfn(res)
				resolve(res)
			})
		})
	}
	httpGet(obj) {
		return new Promise((resolve) => {
			this.originHttpGet(obj, (res) => {
				this.requestDataAllfn(res)
				resolve(res)
			})
		})
	}
}
export const HttpClass = HttpFn