const state: any = {
    firstCarouselOptions: {
    interval: 2500,
    background: '#ababab',
    width: 1024,
    height: 570,
    },
    firstCarouselSlides: [
    {
      id: '0',
      caption: 'Teast your fav dish',
      textHtml: 'from <span>luxury restaurent</span>',
    },
    {
      id: '1',
      caption: 'Call us',
      textHtml: 'for <span>home delivery</span>',
    },
    {
      id: '2',
      caption: 'Read reviews',
      textHtml: 'about <span>our restaurent</span>',
    },
  ],
};

const getters = {
    getCarouselOptions: (state: any): object => state.firstCarouselOptions,
    getCarouselSlides: (state: any): object => state.firstCarouselSlides,
};

export default {
    state,
    getters,
};
