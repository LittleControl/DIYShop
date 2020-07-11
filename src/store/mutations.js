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
    DECREASE_FOODCOUNT,
    CLEAR_CART,
    SEARCH_SHOP
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
    [POST_SHOPINFO](state, { info }) {
        state.shopInfo[state.id] = info
    },
    [SET_SHOPID](state, id) {
        state.id = id
    },
    [INCREASE_FOODCOUNT](state, food) {
        food.count++
        if (food.count === 1) {
            state.cartFoods.push(food)
        }
        // console.log(state.shopInfo[state.id])
    },
    [DECREASE_FOODCOUNT](state, food) {
        if (food.count > 0) {
            food.count--
            if (food.count === 0) {
                state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
            }
        }
        // console.log(state.shopInfo[state.id])
    },
    [CLEAR_CART](state) {
        state.cartFoods.forEach(food => {
            food.count = 0
        })
        state.cartFoods.splice(0)
    },
    [SEARCH_SHOP](state, searchResult) {
        state.searchResult = searchResult
    }
}
