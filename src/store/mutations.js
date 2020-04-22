import {
    GET_ADDRESS,
    GET_BANNER,
} from './mutation-types'

export default {
    [GET_ADDRESS](state, address) {
        state.address = address
    },
    [GET_BANNER](state, banner) {
        state.banner = banner
    }

}
