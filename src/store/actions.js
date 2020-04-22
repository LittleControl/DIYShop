import { GET_ADDRESS } from './mutation-types'

import { reqAddress } from '../api/index'

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

    }
}
