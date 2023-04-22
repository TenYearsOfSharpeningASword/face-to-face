<template>
  <el-container class="main-container">
    <el-container>
      <el-header class="main-header">
        <el-button type="text" @click="loginform()">登录</el-button>
      </el-header>
      <el-main class="main-center">Main</el-main>
    </el-container>
    <LoginForm ref="dialogName"></LoginForm>
  </el-container>
</template>

<script>
import LoginForm from '@/components/loginform.vue'

export default {
  name: 'HomeView',
  components: {
    LoginForm
  },
  data() {
    return {

    };
  },
  watch: {},
  methods: {
    loginform() {
      this.$refs.dialogName.dialogFormVisible = true
    }
  },
  computed: { //计算属性
  },
  created() { //钩子函数

  }
}
</script>

<style lang="less" scoped>
.main-container {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background-image: url('../assets/redgirl.png');
  background-repeat: no-repeat;
  background-size: cover;
}

.main-header,
.main-center {
  padding: 0px;
  border-left: 2px solid #333;
}

.main-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px #e6e6e6;
}
</style>
