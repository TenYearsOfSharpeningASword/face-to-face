<template>
    <el-dialog :visible.sync="dialogFormVisible">
        <div slot="title" class="dialog-header">
            <div style="text-align: center;">
                <img src="../assets/logo.png" style="width: 20px;height: 20px;" />
            </div>
            <div class="txt-login">
                登录
            </div>
            <div class="txt-sigin">
                没有账号？立即注册>
            </div>
        </div>
        <el-form :model="form">
            <el-form-item>
                <el-input placeholder="用户名和邮箱" v-model="form.name" autocomplete="on" />
            </el-form-item>
            <el-form-item>
                <el-input placeholder="登录密码" v-model="form.password" autocomplete="on" show-password />
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
//import引入
export default {
    name: 'LoginForm',
    components: {

    },
    data() {
        return {
            dialogFormVisible: true,
            form: {
                name: '',
                password: '',
                type: [],
            },
        };
    },
    computed: {},
    watch: {},
    methods: {

    },
    created() {

    },

    mounted() {

    },
    beforeCreate() { },
    beforeMount() { },
    beforeUpdate() { },
    updated() { },
    beforeDestroy() { },
    destroyed() { },
    activated() { },
}
</script>
<style scoped>
div /deep/ .el-dialog {
    margin: unset !important;
    position: absolute !important;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #ffffffc4;
    backdrop-filter: blur(5px) brightness(100%) saturate(100%);
    width: 400px;
    height: 500px;
    border-radius: 12px;
}

div /deep/ .el-dialog__header {
    padding: 20px 20px 0;
}

div /deep/ .el-dialog__headerbtn {
    top: 10px;
    right: 10px;
}

div /deep/ .el-dialog__body {}

div /deep/ .el-input__inner {
    background: transparent;
    border-bottom: 1px solid #ffffff;
    border: unset;
    border-radius: unset;
    padding: unset;
}

div /deep/ .el-input__inner::placeholder {
    color: #868484;
}

div /deep/ .el-input__icon {
    color: #868484;
}

div /deep/ .el-input {
    border-bottom: 1px solid #c0c0c0;
}

.dialog-header {
    width: 100%;
    /* height: 100px; */
    display: flex;
    flex-direction: column;
}

.txt-login {
    float: left;
    font-size: 30px;
    color: black;
    font-weight: 600;
    font-family: 'Microsoft JhengHei', 'Microsoft YaHei', 'SimHei', sans-serif;
}

.txt-sigin {
    float: left;
    font-size: 12px;
    color: black;
    font-weight: 500;
}</style>