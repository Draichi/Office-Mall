<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-media
          src="https://cdn.shopify.com/s/files/1/2166/8231/products/T_29_800x.jpg?v=1516737113"
          height="200px"
        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <div class="headline">Tuxedo from Ireland</div>
            <span class="grey--text">US$1,000</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat>+1</v-btn>
          <v-btn flat @click.native="show = !show" color="yellow">color</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show">
            I'm a thing.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      show: false
    })
  }
</script>