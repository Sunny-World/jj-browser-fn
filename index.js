import coreFn from 'jj-core-fn/main.js'
import {
    aggregation
} from './fn/tool.js'
import {
    UrlClass
} from './fn/Url.js'
import {
    CookieClass
} from './fn/Cookie.js'

class Fn extends aggregation(
    coreFn,
    UrlClass,
    CookieClass
) {
    
}

export default new Fn()