import {
    GET_ADDRESS,
    GET_BANNERS,
    GET_SHOPLIST,
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
    }

}
