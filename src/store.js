import Vuex from 'vuex'
import Vue from 'vue'
import jsonp from 'jsonp'
Vue.use(Vuex)
const store = new Vuex.Store({
    // 声明数据
    state: {
        title: '',
        list: [],
        // 电影详情数据
        item: null
    },
    // 定义修改数据的方法
    mutations: {
        // 修改列表页面的数据  listData={title,list} 约定数据格式
        setListPageData(state, listData) {
            state.title = listData.title
            state.list = listData.list
        },
        // 修改电影详情页面数据
        setItemPageData(state, itemData) {
            state.title = itemData.title
            state.item = itemData.item
        }
    },
    // 获取数据的方法
    actions: {
        // 获取列表的数据
        getListPageData({
            commit
        }, type) {
            // 注意：豆瓣接口不支持跨域  支持jsonp
            // 通过: jsonp的第三方插件  专门发jsonp请求
            jsonp('http://api.douban.com/v2/movie/' + type + '?apikey=0df993c66c0c636e29ecbb5344252a4a', (err, data) => {
                if (err) return alert('接口请求失败')

                // 请求成功 把获取到的数据交给mutations进行state数据的修改
                commit('setListPageData', {
                    title: data.title,
                    list: data.subjects
                })
            })
        },
        // 获取电影详情的数据
        getItemPageData({
            commit
        }, id) {
            jsonp('http://api.douban.com/v2/movie/subject/' + id + '?apikey=0df993c66c0c636e29ecbb5344252a4a', (err, data) => {
                if (err) return alert('请求失败')
                commit('setItemPageData', {
                    // data === { title:'电影名称'，...电影详情 }
                    title: data.title,
                    item: data
                })
            })
        }
    }
})
export default store