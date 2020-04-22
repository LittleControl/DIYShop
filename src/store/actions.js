import {
    GET_ADDRESS,
    GET_BANNERS,
} from './mutation-types'

import { reqAddress, reqBanners } from '../api/index'

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
    async getBanners({ commit }) {
        let banners = await reqBanners();
        commit(GET_BANNERS, banners)
    }
}
