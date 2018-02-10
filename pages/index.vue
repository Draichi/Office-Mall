<template>
  <p>{{ meetups }}</p>
</template>

<script>
export default {
  computed: {
    meetups () {
      return this.$store.getters.items
    }
  }
}
</script>
