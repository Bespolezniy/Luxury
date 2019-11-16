import Vue from 'vue';
import Vuex from 'vuex';
import firstSlider from './modules/firstSlider';
import secondSlider from './modules/secondSlider';
import foodMenu from './modules/foodMenu';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    firstSlider,
    secondSlider,
    foodMenu,
  },
  state: {
    cartItems: 1,
    keyWord: 'breakfast',
  },
  mutations: {
    addCartItem(state: any): void {
       state.cartItems++;
    },
    changeFilterKeyWord(state: any, payload: string): void {
      state.keyWord = payload;
    },
  },
  getters: {
    getCartItems: (state: any): number => state.cartItems,
    getFilterKeyWord: (state: any): string => state.keyWord,
  },
  actions: {
    changeFilter(context, word: string): void {
      context.commit('changeFilterKeyWord', word);
    },
  },
});
