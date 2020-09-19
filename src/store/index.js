import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
       title: 'Choose service'
    },
    getters: {
       TITLE: state => state.title
    },
    mutations: {

    },
    actions: {

    }
});

export default store;
