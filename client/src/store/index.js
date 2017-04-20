import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const initialState = {
  articles : [],
  register : {
    name : '',
    username : '',
    email : '',
    password :''
  },
  login : {
    email : '',
    password : ''
  },
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
    SET_EDIT_FORM(state, payload){
      state.formEditArticle = payload
    },
    EDIT_ARTICLE(state, payload){
      let articles = state.articles
      articles.splice(articles.indexOf(payload._id), 1, payload)
    },
    REMOVE_ARTICLE(state, payload){
      let articles = state.articles
      let idx = articles.findIndex((article) => article._id == payload)
      articles.splice(idx, 1)
    }
  },
  actions : {
    postArticle({commit, state}){
      axios.post('http://localhost:3000/api/article', state.newArticle)
      .then(function (response) {
        console.log(response.data);
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
    },
    getEdited({commit}, payload) {
      axios.get(`http://localhost:3000/api/house/${payload}`)
      .then(function(response) {
        commit('SET_EDIT_FORM', response.data)
      })
      .catch(function(err) {
        console.log(err);
      })
    },
    editArticles({commit, state}, payload){
      console.log(payload);
      axios.put(`http://localhost:3000/api/article/${payload}`, state.formEditArticles)
      .then(function(response) {
        commit('EDIT_ARTICLE', response.data)
        window.location.href = ('http://localhost:8080/#/home')
      })
      .catch(function(err) {
        console.log(err);
      })
    },
    removeArticles({commit, state}, payload){
      console.log(payload);
      axios.delete(`http://localhost:3000/api/article/${payload}`)
      .then(function(response) {
        console.log(response);
        commit('REMOVE_ARTICLE', payload)
      })
      .catch ((err) => {
        console.log(err);
      })
    },
    login({commit, state}){
      axios.post(`http://localhost:3000/api/user`)
      .then(function(response) {
        commit('LOGIN', response.data)
      })
      .catch(function(err) {
        console.log(err);
      })
    }
  },
  getters : {
    articles : state => state.articles,
    newArticle : state => state.newArticle,
    formEditArticle: state => state.formEditArticle
  }
})
