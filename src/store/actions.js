import {
    GET_ADDRESS,
    GET_BANNERS,
    GET_SHOPLIST,
    POST_USERINFO,
    SIGNUP_ERROR
} from './mutation-types'

import {
    reqAddress,
    reqBanners,
    reqShopList,
    reqUserInfo,
    reqSignup
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
    async postUserInfo({ commit }, { email, password }) {
        let { userInfo, resCode } = await reqUserInfo({ email, password })
        commit(POST_USERINFO, { userInfo, resCode })
    },
    async postSignup({ commit }, { email, password, name, bio }) {
        let { resCode } = await reqSignup({ email, password, name, bio })
        if (resCode === 200) {
            commit(POST_USERINFO, { email, password, name, bio })
        } else {
            commit(SIGNUP_ERROR, resCode)
        }
    }
}
