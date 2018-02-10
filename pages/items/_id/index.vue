<template>
  <p>{{ $route.params.id }} / {{ item.title }}</p>
</template>

<script>
export default {
  asyncData (context) {
    // return axios.get
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          item: [
            {id: '1', title: 'Cool thing', image: 'https://cdn.shopify.com/s/files/1/2166/8231/products/T_29_800x.jpg?v=1516737113', price: 230},
            {id: '2', title: 'Amazing product', image: 'https://cdn.shopify.com/s/files/1/2166/8231/products/18_01_11_Teddy_fresh0003_800x.jpg?v=1515973902', price: 500},
            {id: '3', title: 'Great item', image: 'https://cdn.shopify.com/s/files/1/2166/8231/products/17_10_17_Teddy4646_ed597c22-398d-4688-8572-0a757111bb5d_800x.jpg?v=1510530629', price: 50},
            {id: '4', title: 'Nice thing', image: 'https://cdn.shopify.com/s/files/1/2166/8231/products/17_10_17_Teddy8369_800x.jpg?v=1510530919', price: 20}
          ].find(el => el.id === context.params.id)
        })
      }, 1500)
    })
  }
}
</script>

