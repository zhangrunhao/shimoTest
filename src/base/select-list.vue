<template>
  <ul class="item-search">
    <li @click="goSearch(item)" v-for="(item, index) in options" v-text="item" :key="index"></li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      options: []
    }
  },
  methods: {
    goSearch (item) {
      this.$emit('getRes', item)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
