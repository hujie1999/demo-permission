<template>
  <div class="side-bar">
    <LogoBar></LogoBar>
    <!-- <span>{{ $store.getters.asyncRouter }}</span> -->
    <el-menu
      :router="true"
      :default-active="$router.currentRoute.path"
      class="el-menu-vertical-demo"
      :unique-opened="true"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <!-- <h2>{{$router.currentRoute.path}}</h2> -->
      <span v-for="(item, index) in menuList[0].children" :key="index">
        <el-submenu v-if="item.children" :index="item.path">
          <template slot="title">
            <!-- <i :class="item.class"></i> -->
            <span v-if="!isCollapse">{{ item.name }}</span>
          </template>

          <el-menu-item
              v-for="(i, index) in item.children"
              :key="index"
              :index="i.path"
              :route="i.path"
            >
              {{ i.name }}
            </el-menu-item>
        </el-submenu>

        <el-menu-item v-else :index="item.path" :route="item.path">
          <!-- <i :class="item.class"></i> -->
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
      </span>
    </el-menu>
  </div>
</template>

<script>
import { constantRoutes } from '@/router/index'
import LogoBar from "./components/LogoBar.vue";
export default {
  name: "SideBar",
  data() {
    return {
      menuList: [],
      isCollapse:false,     //是否可伸缩
        activePath:''         //当前选中
    }
  },
  components: {
    LogoBar,
  },
  computed: {
  },
  created () {
      this.menuList = this.$store.getters.router
      // console.log(this.menuList);
  },
  methods: {
  }
};
</script>

<style lang='scss' scoped>
.side-bar {
  background-color: #545c64;
  height: 100vh;
  width: 150px;
    .el-menu{
      border-right: none !important;
    }
    .el-submenu .el-menu-item {
        height: 50px;
        line-height: 50px;
        padding: 0 45px;
        min-width: 0px;
        width: inherit !important;
    }
}
</style>