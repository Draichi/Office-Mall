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
  computed: {
    meetups () {
      return this.$store.getters.items
    }
  }
}
</script>