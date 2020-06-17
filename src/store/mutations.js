import {
    GET_ADDRESS,
    GET_BANNERS,
    GET_SHOPLIST,
    POST_USERINFO,
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
    [POST_USERINFO](state, userInfo) {
        if (userInfo.tel) {
            userInfo.tel = atob(userInfo.tel)
        }
        state.userInfo = userInfo
    }

}
