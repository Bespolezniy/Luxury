import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    cartItems: 1,
    firstCarouselOptions: {
      interval: 2500,
      background: '#ababab',
      width: 1024,
      height: 570,
    },
    firstCarouselSlides: [
      {
        id: 1,
        caption: 'Teast your fav dish',
        textHtml: 'from <span>luxury restaurent</span>',
        imgSrc: './assets/images/slide1.jpg',
      },
      {
        id: 2,
        caption: 'Call us',
        textHtml: 'for <span>home delivery</span>',
        imgSrc: './assets/images/slide2.jpg',
      },
      {
        id: 3,
        caption: 'Read reviews',
        textHtml: 'about <span>our restaurent</span>',
        imgSrc: './assets/images/slide3.jpg',
      },
    ],
  },
  mutations: {
    incrementCartItems(state): void {
       state.cartItems++;
    },
  },
  getters: {
    getCartItems: (state): number => state.cartItems,
    getCarouselOptions: (state): object => state.firstCarouselOptions,
    getCarouselSlides: (state): object => state.firstCarouselSlides,
  },
  actions: {

  },
});
