import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const initialState = {
      articles : [],
      newArticle : {
       title : '',
       content : '',
       _author: ''
     },
     formEditArticle: {
      title : '',
      content : '',
      _author : ''
    }
   }
export default new Vuex.Store({
  state: {...initialState},
  mutations : {
    POST_ARTICLE(state, payload){
      state.articles.push(payload)
      state.newArticle = {
       title : '',
       content : '',
       _author : ''
     }
   },
   GET_ARTICLE(state, payload){
     state.articles = payload
   },
  },
  actions : {
    postArticle({commit, state}){
      axios.post('http://localhost:3000/api/article', state.newArticle)
      .then(function (response) {
        commit('POST_ARTICLE', response.data)
      })
      .catch(function(err) {
        console.log(err);
      })
    },
    getArticles({commit}) {
      axios.get('http://localhost:3000/api/article')
      .then(function(response) {
        commit('GET_ARTICLE', response.data)
      })
      .catch(function(err) {
        console.log(err);
      })
    }
  },
  getters : {
    articles : state => state.articles,
    newArticle : state => state.newArticle
  }
})
