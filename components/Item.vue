<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-media
            :src="image"
            height="50vh"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline white--text" v-text="title"></span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-actions>
            <v-btn
              flat
              color="orange"
              >explore
            </v-btn>
            <nuxt-link :to="'/items/' + id">{{ title }}</nuxt-link>
          </v-card-actions>
          <v-expansion-panel>
            <v-expansion-panel-content>
              <div slot="header">size</div>
              <v-card>
                <v-card-text>
                  <v-slider v-model="value" thumb-label step="10" ticks></v-slider>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id', 'title', 'image', 'price'],
  data: () => ({
    value: 0
  })
}
</script>
