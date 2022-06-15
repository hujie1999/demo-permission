<template>
  <div class="logo-bar">
      <span>Admin</span>
  </div>
</template>

<script>
export default {
    name: 'LogoBar',
    data (){
        return {

        }
    }
}
</script>

<style lang='scss' scoped>
.logo-bar{
    background-color: #3C7FF2;
    height: 50px;
    width: 100%;
    text-align: center;
    span{
        line-height: 50px;
        color: #000000;
        font-weight: bold;
        font-size: 28px;
    }
}
</style>