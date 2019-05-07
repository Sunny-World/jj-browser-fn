class NumberFn {
    /**
     * 对非数字的内容，返回默认想展示的内容defaultVal || --
     * @param {*} val 
     * @param {*} defaultVal 
     */
    n(val, defaultVal) {
        if(/^[0-9]+.?[0-9]*$/.test(val)){
            return val
        }else{
            return defaultVal ? defaultVal : 0
        }
    }
    /**
     * 数值转换为两位数的金额
     * @param {*} rmb 为整数
     */
    showMoney(rmb) {
        rmb = rmb + "";
        let numLength = rmb.length;
        let rmb1;
        let rmb2
        if (numLength > 3) {
            rmb1 = rmb.substring(0, numLength - 2);
            rmb2 = rmb.substring(numLength - 2);
            return rmb1 + "." + rmb2
        } else if (numLength == 3) {
            rmb1 = rmb.substring(0, 1);
            rmb2 = rmb.substring(1);
            return rmb1 + "." + rmb2
        } else if (numLength == 2) {
            return "0." + rmb;
        } else if (numLength == 1) {
            return "0.0" + rmb;
        }
    }
    /**
     * 金额的千位符显示
     * @param {*} rmb 为整数
     */
    showThousandMoney(rmb) {
        rmb = rmb + "";
        let numLength = rmb.length;
        if (numLength > 5) {
            let rmb1 = rmb.substring(0, numLength - 2);
            let rmb2 = rmb.substring(numLength - 2);
            rmb1 = rmb1.split("").reverse();
            for (let i = 1; i < (numLength - 2); i++) {
                if (i % 3 == 0) {
                    rmb1[i] = rmb1[i] + ","
                }
            }
            rmb1.reverse();
            rmb1 = rmb1.join("");
            return rmb1 + "." + rmb2;
        } else if (numLength > 3) {
            let rmb1 = rmb.substring(0, numLength - 2);
            let rmb2 = rmb.substring(numLength - 2);
            return rmb1 + "." + rmb2
        } else if (numLength == 3) {
            let rmb1 = rmb.substring(0, 1);
            let rmb2 = rmb.substring(1);
            return rmb1 + "." + rmb2
        } else if (numLength == 2) {
            return "0." + rmb;
        } else if (numLength == 1) {
            return "0.0" + rmb;
        }
    }
}
export const NumberClass = NumberFn