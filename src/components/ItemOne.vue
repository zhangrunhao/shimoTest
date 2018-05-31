<template>
  <transition name="slide">
    <select-list ref="selectList" @getRes="getRes"></select-list>
  </transition>
</template>

<script>
import SelectList from '../base/select-list'

import MockData from '../mock/index.js'

var arr = []
MockData.forEach((item, index) => {
  arr.push(item.name)
})
export default {
  data () {
    return {
      options: arr
    }
  },
  mounted () {
    this.$refs.selectList.options = this.options
  },
  methods: {
    getRes (res) {
      this.$router.push({
        path: '/item2',
        query: {
          city: res
        }
      })
    }
  },
  components: {
    SelectList
  }
}
</script>

<style lang="scss" scoped>
  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.3s
  }
  .slide-enter,
  .slide-leave-to {
    transform: translate3d(100%, 0, 0)
  }
</style>
