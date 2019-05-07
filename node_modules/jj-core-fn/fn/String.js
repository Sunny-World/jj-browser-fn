class StringFn {
    /**
     * 判断值val为空时，返回默认想展示的内容defaultVal || --
     * @param {*} val 
     * @param {*} defaultVal 
     */
    s(val, defaultVal) {
        if (val === null || val === undefined || val === '') {
            return defaultVal ? defaultVal : '--'
        } else {
            return val
        }
    }
    /**
     * 判断值val为是否为空，排除 null,undefined,''
     * @param {*} val 
     */
    hasValue(val) {
        if (val === null || val === undefined || val === '') {
            return false
        } else {
            return true
        }
    }
}
export const StringClass = StringFn