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
            <v-card>
              <v-card-media
                :src="meetup.image"
                height="200px"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline white--text" v-text="meetup.title"></span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
              <v-card-actions>
                <v-btn flat color="orange">cart</v-btn>
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
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      flex: [12, 8, 6, 12] * 5,
      value: 0
    }),
    computed: {
      meetups () {
        return this.$store.state.items
      }
    }
  }
</script>