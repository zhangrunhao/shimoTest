<template>
  <transition name="slide">
    <div class="main-page">
      <button class="btn" @click="goSelectCity">选择城市</button>
      <div v-show="cityRes">{{cityRes}}</div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      cityRes: ''
    }
  },
  methods: {
    goSelectCity () {
      this.$router.push('/item1')
    }
  },
  created () {
    var query = this.$router.history.current.query
    if (query.boom) {
      this.cityRes = `${query.city}-${query.area}-${query.boom}`
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-page {
    .btn {
      width: 150px;
      height: 50px;
      background-color: #000;
      color: #fff;
    }
  }
</style>
