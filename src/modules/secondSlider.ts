const state: any = {
    secondCarouselOptions: {
        interval: 2500,
        background: 'transparent',
      },
    slidesInfo: [
      {
         id: '0',
         title: 'Food Name One',
         text: `printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.`,
         phone: '1-008 005 006',
         price: '89.00',
      },
      {
          id: '1',
          title: 'Food Name Two',
          text: `printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.`,
          phone: '1-008 005 006',
          price: '99.00',
      },
      {
          id: '2',
          title: 'Food Name Three',
          text: `printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.`,
          phone: '1-008 005 006',
          price: '25.00',
      },
      {
       id: '3',
       title: 'Food Name Four',
       text: `printing and typesetting industry. Lorem Ipsum has been the industry's
       standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.`,
       phone: '1-008 005 006',
       price: '40.00',
       },
      {
        id: '4',
        title: 'Food Name Five',
        text: `printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.`,
        phone: '1-008 005 006',
        price: '85.00',
       },
       {
        id: '5',
        title: 'Food Name Six',
        text: `printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.`,
        phone: '1-008 005 006',
        price: '89.00',
       },
    ],
};

const getters = {
    getSecondCarouselOptions: (state: any): object => state.secondCarouselOptions,
    getSecondCarouselSlides: (state: any): object => state.slidesInfo,
};

export default {
    state,
    getters,
};
