<template>
    <div class="container">
        <div class="logo-box"><img src="../assets/logo.png" style="width: 30px;
        height: 30px;" alt=""></div>
        <div class="login-box">
            <div class="login-text">
                登 录
                <br>
            </div>
            <el-form :model="loginForm" ref="loginFormRef" :rules="loginFormRules">
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" prefix-icon="el-icon-s-custom" placeholder="请输入用户名"
                        @input="change($event)"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" prefix-icon="el-icon-unlock" placeholder="请输入密码"
                        @input="change($event)" type="password"></el-input>
                </el-form-item>
                <el-form-item class="btns">
                    <el-button type="primary" @click="handleLoginForm">登录</el-button>
                    <el-button type="primary" @click="loginFormReset">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // 登录表单数据对象
            loginForm: {
                username: '',
                password: ''
            },
            // 登录表单的校验对象
            loginFormRules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        // 多层嵌套无法输入解决方法
        change(e) {
            this.$forceUpdate()
        },
        // 表单重置方法
        loginFormReset() {
            this.$refs.loginFormRef.resetFields()
        },
        // 登录方法
        handleLoginForm() {
            // console.log('123456')
            this.$refs.loginFormRef.validate(valid => {
                // console.log(valid)
                if (!valid) return
                console.log('333')
            })
        }
    }
}
</script>
<style lang="less" scoped>
.container {
    width: 100%;
    height: 100%;
    // background: url('../assets/images/login_bg.png');
    // background-size: 100% 100%;
}

.logo-box {
    position: absolute;
    top: 30px;
    left: 30px;
}

.login-box {
    position: absolute;
    top: 50%;
    right: 5%;
    width: 400px;
    height: 400px;
    transform: translate(-50%, -50%);
    border: 1px solid #ccc;
    border-radius: 5px;
}

.login-text {
    width: 100%;
    font-size: 24px;
    text-align: center;
    color: #2f82fe;
    margin-bottom: 50px;
    box-sizing: border-box;
    padding: 20px;
}

.el-form-item {
    width: 90%;
    margin: 20px auto;
}

.login-text span {
    line-height: 30px;
    font-size: 18px;
    color: #666666;
}

.btns {
    width: 100%;
    text-align: center;
    margin-top: 50px;
}
</style>