import {
    GET_ADDRESS,
    GET_BANNERS,
    GET_SHOPLIST,
    POST_USERINFO,
    SIGNUP_ERROR,
    SIGNUP_SUCCESS,
    POST_SHOPINFO,
    SET_SHOPID,
    INCREASE_FOODCOUNT,
    DECREASE_FOODCOUNT,
    CLEAR_CART,
    SEARCH_SHOP
} from './mutation-types'

import {
    reqAddress,
    reqBanners,
    reqShopList,
    reqUserInfo,
    reqSignup,
    reqShopInfo,
    searchShop
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
        let { userInfo, resCode, msg } = await reqUserInfo({ email, password })
        commit(POST_USERINFO, { userInfo, resCode, msg })
    },
    async postSignup({ commit }, { email, password, name, bio }) {
        const userInfo = { email, password, name, bio }
        let { resCode, msg } = await reqSignup(userInfo)
        console.log('action: ', resCode, msg)
        if (resCode === 200) {
            commit(SIGNUP_SUCCESS, { userInfo, resCode, msg })
        } else {
            commit(SIGNUP_ERROR, resCode)
        }
    },
    async getShopInfo({ commit, state }) {
        const info = await reqShopInfo(state.id)
        commit(POST_SHOPINFO, { info })
        // console.log(info)
        return new Promise((resolve) => {
            resolve()
        })
    },
    setShopId({ commit }, id) {
        commit(SET_SHOPID, id)
        return new Promise((resolve) => {
            resolve()
        })
    },
    updateFoodCount({ commit }, { isAdd, food }) {
        if (isAdd) {
            commit(INCREASE_FOODCOUNT, food)
        } else {
            commit(DECREASE_FOODCOUNT, food)
        }
        return new Promise((resolve) => {
            resolve()
        })
    },
    clearCart({ commit }) {
        commit(CLEAR_CART)
    },
    async searchShop({ commit }, keyword) {
        const searchResult = await searchShop(keyword)
        // console.log(searchResult)
        commit(SEARCH_SHOP, searchResult)
        return new Promise((resolve) => {
            resolve()
        })
    }
}
