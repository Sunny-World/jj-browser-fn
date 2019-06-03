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
import {
    HttpClass
} from './fn/Http.js'
import {
    DeviceClass
} from './fn/Device.js'
import {
    DomClass
} from './fn/Dom.js'
import {
    LocalStorageClass
} from './fn/LocalStorage'

class Fn extends aggregation(
    coreFn,
    UrlClass,
    CookieClass,
    HttpClass,
    DeviceClass,
    DomClass,
    LocalStorageClass
) {
}

export default Fn