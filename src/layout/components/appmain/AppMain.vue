<template>
  <div class="app-main">
      <!-- <span>AppMain</span> -->
      <NavBar></NavBar>
      <BreadCrumb></BreadCrumb>
      <ScrollXBar></ScrollXBar>
      <transition name="fade-transform" mode="out-in">
        <keep-alive >
            <router-view v-if="alive" :key="setKey" />
        </keep-alive>
        <router-view v-if="!alive" :key="setKey" />
    </transition>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import BreadCrumb from './components/BreadCrumb.vue'
import ScrollXBar from './components/ScrollXBar.vue'
export default {
    name: 'AppMain',
    data (){
        return {
            key: null
        }
    },
    components: {
        NavBar,
        BreadCrumb,
        ScrollXBar
    },
    computed:{
        setKey() {
            this.key =  new Date().getTime()
        }
    },
    methods: {
        alive(){
          return this.$route.meta.keepAlive  
        }
    }
}
</script>

<style lang='scss' scoped>
.app-main{
    background-color: #FFF;
    height: 100vh;
    width: 100%;
}
</style>