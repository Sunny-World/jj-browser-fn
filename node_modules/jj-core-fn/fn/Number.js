class NumberFn {
    /**
     * 对非数字的内容，返回默认想展示的内容defaultVal || --
     * @param {*} a 
     * @param {*} b 
     */
    n(a, b) {
        return /^[0-9]+.?[0-9]*$/.test(a) ? a : (b ? b : 0)
    }
    /**
     * 数值转换为两位数的金额
     * @param {*} rmb 为整数
     */
    showMoney(a) {
        a = String(a);
        let l = a.length;
        if (l > 2) {
            return a.replace(/(\d{2})$/g,"\.$1")
        } else if (l == 2) {
            return "0." + a;
        } else if (l == 1) {
            return "0.0" + a;
        }
    }
    /**
     * 单位为元的金额的千位符显示
     * @param {*} rmb 为整数
     */
    showThousandMoney(rmb) {
        return parseFloat(rmb).toFixed(2).replace(/(\d{1,3})(?=(\d{3})+(?:\.))/g, "$1,")
    }
}
export const NumberClass = NumberFn