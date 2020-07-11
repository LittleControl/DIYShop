import ajax from './ajax'
const BASE_URL = '/api'
const POST_URL = 'http://192.168.1.4:7001'

export const reqAddress = () => ajax(BASE_URL + '/ip')
export const reqBanners = () => ajax(BASE_URL + '/banners')
export const reqShopList = () => ajax(BASE_URL + '/shoplist')
export const reqUserInfo = ({ email, password }) => ajax(POST_URL + '/user', { email, password }, 'POST')
export const reqSignup = ({ email, password, name, bio }) => ajax(POST_URL + '/signup', { email, password, name, bio }, 'POST')
export const reqShopInfo = (id) => ajax(POST_URL + '/shopinfo', { id }, 'POST')
export const searchShop = (keyword) => ajax(BASE_URL + '/search', { keyword })
