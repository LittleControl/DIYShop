import {
    GET_ADDRESS,
    GET_BANNER,
} from './mutation-types'

import { reqAddress, reqBanner } from '../api/index'

export default {

    async getAddress({ commit }) {
        let addr = await reqAddress()
        let address = ''
        Object.keys(addr.ad_info).forEach(key => {
            address += addr.ad_info[key]
        })
        if (addr.address !== '') {
            commit(GET_ADDRESS, address)
        }
    },
    async getBanner({ commit }) {
        let banner = await reqBanner();
        console.log(banner)
        console.log(typeof banner)
        commit(GET_BANNER, banner)
    }
}
