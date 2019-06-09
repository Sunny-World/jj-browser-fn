import { LocalStorageFace } from '@/util/interface.js'
export const LocalStorageFn:LocalStorageFace = {
    setStorage(key, value) {
        if (this.getStorageType(value) === "Object" || this.getStorageType(value) === "Array") { // 如果是对象
            value = JSON.stringify(value);
        }
        window.localStorage.setItem(key, value);
    },
    getStorage(key){
        let value = window.localStorage.getItem(key);
        if(value === null){ // 如果不存在
            return false;
        }
        if(value && value.substring(0,1) === "{" || value.substring(0,1) === "["){ // 如果字符串符合对象或者数组基本特征
            value = JSON.parse(value); // 把字符串转为对象
        }
        return value;
    },
    removeStorage(key){
        this.getStorage(key) && window.localStorage.removeItem(key);
    },
    clearStorage(){
        window.localStorage.clear(); // 清空本地存储
    },
    getStorageType(object){
        /**
         * 方法来源：prototype.js
         * getStorage(5); // => "Number"
         * getStorage({}); // => "Object"
         * getStorage(/foo/); // => "RegExp"
         * getStorage(''); // => "String"
         * getStorage(true); // => "Boolean"
         * getStorage([]); // => "Array"
         * getStorage(undefined); // => "Window"
         * getStorage(Element); // => "Constructor"
         **/
        return Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1];
    }
}
export default LocalStorageFn