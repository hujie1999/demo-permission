<template>
  <div class="login">
    <h3>Login</h3>
    <el-select v-model="value" placeholder="请选择登陆身份">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <br>
    <el-button type="success"  @click="clickLogin">登 录</el-button>
  </div>
</template>

<script>
import { deepClone } from '@/utils/deepClone'
import { getRoleRoute } from '@/utils/permission/getRoleRoute'

import { execAsyncRoute } from '@/utils/permission/dealRoleRoute'
import { resetRouter,constantRoutes } from '@/router/index'
import router from '@/router/index'
export default {
  name: "Login",
  data() {
    return {
      options: [
        {
          value: "superadmin",
          label: "superadmin",
        },
        {
          value: "admin01",
          label: "admin01",
        },
        {
          value: "admin02",
          label: "admin02",
        },
        {
          value: "user01",
          label: "user01",
        }
      ],
      value: null
    };
  },
  methods: {
    clickLogin() {
      const roleRoute = getRoleRoute(this.value)

      //处理动态路由
      const addR = execAsyncRoute(roleRoute.routsData)
      const constant = deepClone(constantRoutes)
      addR.forEach(el=>{
        constant[0].children.push(el)
      })
      resetRouter()
      router.addRoutes(constant);

      this.$store.state.login = true
      this.$store.commit('router',constant)
      this.$store.commit('setUsername',this.value)

      this.$router.push('/dashboard')
    },
  }
};
</script>
