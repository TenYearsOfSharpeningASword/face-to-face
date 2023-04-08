// 导入 vue
import Vue from 'vue'
// 导入 vuex
import Vuex from 'vuex'
// vuex也是vue的插件, 需要use一下, 进行插件的安装初始化
Vue.use(Vuex)

// 创建仓库 store
const store = new Vuex.Store({
    state: {
      userInfo: {}
    },
    mutations: {
      setUserInfo(state, obj) {
        state.userInfo = obj
      },
    },
    actions: {
      /**
       * 通过条件同步数据库中userInfo
       * @param {Object} conditions 查询条件
       */
      // async getUserInfo(context, conditions) {
      //   let res = await api.postQuery('SYSWXUSER', conditions)
      //   let obj = res.datas.length ? res.datas[0] : {}
      //   context.commit('setUserInfo', obj)
      // }
    }
  })

// 导出仓库
export default store