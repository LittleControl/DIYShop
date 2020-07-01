import {
    GET_ADDRESS,
    GET_BANNERS,
    GET_SHOPLIST,
    POST_USERINFO,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    POST_SHOPINFO
} from './mutation-types'

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
    [POST_SHOPINFO](state, { id, info }) {
        state.id = id
        state.shopInfo[id] = info
    }
}
