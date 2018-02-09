import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      items: [
        {id: 1, title: 'Cool thing', image: 'https://cdn.shopify.com/s/files/1/2166/8231/products/T_29_800x.jpg?v=1516737113', price: 230},
        {id: 2, title: 'Amazing product', image: 'https://cdn.shopify.com/s/files/1/2166/8231/products/18_01_11_Teddy_fresh0003_800x.jpg?v=1515973902', price: 500},
        {id: 3, title: 'Great item', image: 'https://cdn.shopify.com/s/files/1/2166/8231/products/17_10_17_Teddy4646_ed597c22-398d-4688-8572-0a757111bb5d_800x.jpg?v=1510530629', price: 50},
        {id: 4, title: 'Nice thing', image: 'https://cdn.shopify.com/s/files/1/2166/8231/products/17_10_17_Teddy8369_800x.jpg?v=1510530919', price: 20}
      ],
      user: {
        id: '123',
        cart: [4]
      }
    },
    getters: {
      items (state) {
        return state.items
      },
      item (state) {
        return (itemId) => {
          return state.items.find((item) => {
            return item.id === itemId
          })
        }
      }
    }
  })
}

export default store
