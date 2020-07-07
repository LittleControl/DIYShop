import {
    GET_ADDRESS,
    GET_BANNERS,
    GET_SHOPLIST,
    POST_USERINFO,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    POST_SHOPINFO,
    SET_SHOPID,
    INCREASE_FOODCOUNT,
    DECREASE_FOODCOUNT
} from './mutation-types'

import Vue from 'vue'

export default {
    [GET_ADDRESS](state, address) {
        state.address = address
    },
    [GET_BANNERS](state, banners) {
        state.banners = banners
    },
    [GET_SHOPLIST](state, shopList) {
        state.shopList = shopList
    },
    [POST_USERINFO](state, { userInfo, resCode }) {
        state.userInfo = userInfo
        state.resCode = resCode
    },
    [SIGNUP_SUCCESS](state, { userInfo, msg, resCode }) {
        state.userInfo = userInfo
        state.msg = msg
        state.resCode = resCode
    },
    [SIGNUP_ERROR](state, resCode) {
        state.resCode = resCode
    },
    [POST_SHOPINFO](state, { info }) {
        state.shopInfo[state.id] = info
    },
    [SET_SHOPID](state, id) {
        state.id = id
    },
    [INCREASE_FOODCOUNT](food) {
        if (!food.count) {
            Vue.set(food, 'count', 1)
        } else {
            food.count++
            console.log(food.count)
        }
    },
    [DECREASE_FOODCOUNT](food) {
        if (food.count) {
            food.count--
        }
    }
}
