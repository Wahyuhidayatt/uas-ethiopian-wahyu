import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const initialState = {
      Articles : [],
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
