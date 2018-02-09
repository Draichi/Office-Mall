import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      items: [
        {title: 'Cool thing', image: 'https://cdn.shopify.com/s/files/1/2166/8231/products/T_29_800x.jpg?v=1516737113', text: '230,00'},
        {title: 'Amazing product', image: 'https://cdn.shopify.com/s/files/1/2166/8231/products/18_01_11_Teddy_fresh0003_800x.jpg?v=1515973902', text: '500,00'},
        {title: 'Great item', image: 'https://cdn.shopify.com/s/files/1/2166/8231/products/17_10_17_Teddy4646_ed597c22-398d-4688-8572-0a757111bb5d_800x.jpg?v=1510530629', text: '50,00'},
        {title: 'Nice thing', image: 'https://cdn.shopify.com/s/files/1/2166/8231/products/17_10_17_Teddy8369_800x.jpg?v=1510530919', text: '20,00'}
      ]
    }
  })
}

export default store
