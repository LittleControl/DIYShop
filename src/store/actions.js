import {
    GET_ADDRESS,
    GET_BANNERS,
    GET_SHOPLIST,
    POST_USERINFO,
} from './mutation-types'

import {
    reqAddress,
    reqBanners,
    reqShopList,
    reqUserInfo
} from '../api/index'

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
        let banners = await reqBanners()
        commit(GET_BANNERS, banners)
    },
    async getShopList({ commit }) {
        let shopList = await reqShopList()
        commit(GET_SHOPLIST, shopList)
    },
    async postUserInfo({ commit }, { email, password, _csrf }) {
        let userInfo = await reqUserInfo({ email, password, _csrf })
        console.log(userInfo)
        commit(POST_USERINFO, userInfo)
    }
}
