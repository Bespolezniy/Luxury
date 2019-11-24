const state: any = {
    clientsReviews: [
        {
            name: 'Dr. Prabakaran John',
            text: `Many desktop publishing packages and web page editors 
            now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
            will uncover many web sites still in their infancy. Various versions have evolved 
            over the years, sometimes by accident, sometimes on purpose.`,
            stars: 5,
        },
        {
            name: 'Jon Doe',
            text: `Various versions have evolved 
            over the years editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
            will uncover. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.`,
            stars: 4,
        },
        {
            name: 'Bespolezniy',
            text: `Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
            over the years editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
            will uncover. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.`,
            stars: 5,
        },
    ],
};

const getters = {
    getReviews: (state: any): [] => state.clientsReviews,
};

export default {
    state,
    getters,
};

