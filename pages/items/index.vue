<template>
  <v-layout column>
    <v-flex xs12 sm8 offset-sm2>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex
            v-bind="{ [`xs${flex}`]: true }"
            v-for="meetup in meetups"
            :key="meetup.title"
          >
            <Item 
              :image="meetup.image"
              :title="meetup.title"
              :price="meetup.price"
              :id="meetup.id"
            />
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import Item from '@/components/Item'

export default {
  components: {
    Item
  },
  data: () => ({
    flex: [12, 8, 6, 12] * 5,
    value: 0
  }),
  // this is pre-rendred on the server
  asyncData () {
    // return axios.get
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          meetups: [
            {id: 1, title: 'Cool thing', image: 'https://cdn.shopify.com/s/files/1/2166/8231/products/T_29_800x.jpg?v=1516737113', price: 230},
            {id: 2, title: 'Amazing product', image: 'https://cdn.shopify.com/s/files/1/2166/8231/products/18_01_11_Teddy_fresh0003_800x.jpg?v=1515973902', price: 500},
            {id: 3, title: 'Great item', image: 'https://cdn.shopify.com/s/files/1/2166/8231/products/17_10_17_Teddy4646_ed597c22-398d-4688-8572-0a757111bb5d_800x.jpg?v=1510530629', price: 50},
            {id: 4, title: 'Nice thing', image: 'https://cdn.shopify.com/s/files/1/2166/8231/products/17_10_17_Teddy8369_800x.jpg?v=1510530919', price: 20}
          ]
        })
      }, 1500)
    })
  }
}
</script>