import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      loadedItems: [
        {id: '1', title: 'Cool thing', image: 'https://cdn.shopify.com/s/files/1/2166/8231/products/T_29_800x.jpg?v=1516737113', price: 230},
        {id: '2', title: 'Amazing product', image: 'https://cdn.shopify.com/s/files/1/2166/8231/products/18_01_11_Teddy_fresh0003_800x.jpg?v=1515973902', price: 500},
        {id: '3', title: 'Great item', image: 'https://cdn.shopify.com/s/files/1/2166/8231/products/17_10_17_Teddy4646_ed597c22-398d-4688-8572-0a757111bb5d_800x.jpg?v=1510530629', price: 50},
        {id: 'asdkpao56', title: 'Nice thing', image: 'https://cdn.shopify.com/s/files/1/2166/8231/products/17_10_17_Teddy8369_800x.jpg?v=1510530919', price: 20}
      ]
    },
    // actions: {
    //   loadItems ({ commit }) {
    //     axios.get(`https://officemall-ea976.firebaseio.com/items.json`)
    //       .then(response => {
    //         commit('setLoadedItems', {list: response.data})
    //       })
    //       .catch(e => {
    //         this.errors.push(e)
    //       })
    //   }
    // },
    // mutations: {
    //   setLoadedItems (state, {list}) {
    //     state.loadedItems = list
    //   }
    // },
    // curl -X PUT -d '{
    //   "camisa loca": {
    //     "title": "Alan Turing",
    //     "price": "June 23, 1912",
    //     "image": "https://cdn.shopify.com/s/files/1/2166/8231/products/T_29_800x.jpg?v=1516737113"
    //   }
    // }' 'https://officemall-ea976.firebaseio.com/items.json'
    // curl 'https://officemall-ea976.firebaseio.com/items.json?print=pretty'
    getters: {
      items (state) {
        return state.loadedItems
      },
      item (state) {
        return (itemId) => {
          return state.loadedItems.find((item) => {
            return item.id === itemId
          })
        }
      }
    }
  })
}

export default store
