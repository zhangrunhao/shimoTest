<template>
  <transition name="slide">
    <select-list ref="selectList" @getRes="getRes"></select-list>
  </transition>
</template>

<script>
import SelectList from '../base/select-list'

import MockData from '../mock/index.js'

export default {
  data () {
    return {
      city: ''
    }
  },
  created () {
    this.city = this.$router.history.current.query.city
  },
  watch: {
    city (val) {
      // 此处获取数据即可形成异步处理
      var res = MockData.filter((item, index) => {
        return item.name === this.city
      })
      var resData = []
      res[0]['city'].forEach((item, index) => {
        resData.push(item.name)
      })
      this.$refs.selectList.options = resData
    }
  },
  methods: {
    getRes (res) {
      this.$router.push({
        path: '/item3',
        query: {
          city: this.city,
          area: res
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
