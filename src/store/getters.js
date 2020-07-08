export default {
    info: state => state.shopInfo[state.id].info,
    goods: state => state.shopInfo[state.id].goods,
    ratings: state => state.shopInfo[state.id].ratings
}
