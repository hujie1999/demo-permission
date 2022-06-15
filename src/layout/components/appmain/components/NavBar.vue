<template>
  <div class="nav-bar">
      <div class="content">
          <span>{{$store.getters.username}}</span>
          <el-button type="info" size="mini" @click="clickLogOut">log out</el-button>
      </div>
      
  </div>
</template>

<script>
import { resetRouter } from '@/router/index'
export default {
    name: 'NavBar',
    data (){
        return {

        }
    },
    methods: {
        clickLogOut(){

            this.$store.commit('clearRouter')
            this.$store.commit('clearUsername')
            this.$store.commit('logOut')

            this.$router.push('/login')
        }
    }
}
</script>

<style lang='scss' scoped>
.nav-bar{
    background-color: #BBB6FF;
    height: 50px;
    float: right;
    width: 50%;
    .content{
        float: right;
    }
}
</style>