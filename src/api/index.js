import ajax from './ajax'
const BASE_URL = '/api'

export const reqAddress = () => ajax(BASE_URL + '/ip')
export const reqBanners = () => ajax(BASE_URL + '/banners')
export const reqShopList = () => ajax(BASE_URL + '/shoplist')
