export default {
    info: state => state.shopInfo[state.id].info,
    goods: state => state.shopInfo[state.id].goods,
    ratings: state => state.shopInfo[state.id].ratings,
    totalCount(state) {
        return state.cartFoods.reduce((acc, cur) => acc + cur.count, 0)
    },
    totalPrice(state) {
        return state.cartFoods.reduce((acc, cur) => acc + cur.count * cur.price, 0)
    },
    positiveCount(state) {
        return state.shopInfo[state.id].ratings.reduce(
            (acc, cur) =>
                acc + ((cur.rateType === 0) ? 1 : 0),
            0
        )
    }
}
