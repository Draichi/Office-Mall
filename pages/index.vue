<template>
  <v-layout column>
    <v-flex xs12 sm8 offset-sm2>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex
            v-bind="{ [`xs${card.flex}`]: true }"
            v-for="card in cards"
            :key="card.title"
          >
            <v-card>
              <v-card-media
                :src="card.src"
                height="200px"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline white--text" v-text="card.title"></span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>favorite</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>bookmark</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>share</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        {src: 'https://cdn.shopify.com/s/files/1/2166/8231/products/T_29_800x.jpg?v=1516737113', title: 'Texas', text: 'Thing 1', flex: 12},
        {src: 'https://cdn.shopify.com/s/files/1/2166/8231/products/18_01_11_Teddy_fresh0003_800x.jpg?v=1515973902', title: 'Mexico', text: 'Thing 2', flex: 6},
        {src: 'https://cdn.shopify.com/s/files/1/2166/8231/products/17_10_17_Teddy4646_ed597c22-398d-4688-8572-0a757111bb5d_800x.jpg?v=1510530629', title: 'California', text: 'Thing 3', flex: 6}
      ]
    })
  }
</script>