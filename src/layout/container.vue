<template>
  <div class="container">
      <div class="left-window">
          <SideBar></SideBar>
      </div>
      <div class="right-window">
          <AppMain></AppMain>
      </div>
  </div>
</template>

<script>
import SideBar from './components/sidebar/SideBar.vue'
import AppMain from './components/appmain/AppMain.vue'
export default {
    name: 'container',
    data (){
        return {

        }
    },
    components: {
        SideBar,
        AppMain
    },

}
</script>

<style lang='scss' scoped>
.container{
    background-color: #fff;
    .left-window{
        float: left;
    }
    .right-window{
        overflow: auto;
    }
}
</style>