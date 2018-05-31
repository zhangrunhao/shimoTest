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
      area: '',
      city: ''
    }
  },
  created () {
    this.area = this.$router.history.current.query.area
    this.city = this.$router.history.current.query.city
  },
  watch: {
    area (val) {
      // 此处获取数据即可形成异步处理
      var res = MockData.filter((item, index) => {
        return item.name === this.city
      })[0]['city']
      res = res.filter((item, index) => {
        return item.name = val
      })[0]['area']
      this.$refs.selectList.options = res
    }
  },
  methods: {
    getRes (res) {
      this.$router.push({
        path: '/',
        query: {
          city: this.city,
          area: this.area,
          boom: res
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
