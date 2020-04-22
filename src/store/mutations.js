import { GET_ADDRESS } from './mutation-types'

export default {
    [GET_ADDRESS](state, address) {
        state.address = address
    }
}
