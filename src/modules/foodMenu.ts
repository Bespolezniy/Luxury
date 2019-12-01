const state = {
    foodMenu: [
        [
            {
                title: 'ULTIMATE ORGANIC FRUIT SALAD',
                description: 'survived not only five centuries but the leap',
                price: '50.00',
                type: ['lunch', 'dinner'],
                id: 100,
            },
            {
                title: 'PLAIN PANCAKES',
                description: 'Donec eget augue at diam euismod viverra',
                price: '68.00',
                type: ['snacks', 'dinner', 'lunch'],
                id: 101,
            },
        ],
        [
            {
                title: 'TOASTED JAM',
                description: 'Phasellus a ex accumsan, sollicitudin',
                price: '22.00',
                type: ['snacks', 'dinner', 'lunch', 'breakfast'],
                id: 102,
            },
            {
                title: 'SEA SOUP',
                description: 'Donec augue at euismod viverra',
                price: '30.00',
                type: ['dinner', 'lunch', 'soups'],
                id: 103,
            },
        ],
        [
            {
                title: 'MARGARITA PIZZA',
                description: 'Donec augue at euismod viverra',
                price: '30.00',
                type: ['dinner', 'lunch', 'pizza'],
                id: 104,
            },
            {
                title: 'VANILA ICE CREAM',
                description: 'Donec augue at euismod viverra',
                price: '30.00',
                type: ['snacks', 'lunch', 'dinner'],
                id: 105,
            },
        ],
        [
            {
                title: 'Cheese Cake',
                description: 'Donec augue at euismod viverra ex accumsan, sollicitudin',
                price: '45.00',
                type: ['snacks', 'lunch', 'dinner'],
                id: 106,
            },
            {
                title: 'Fry egg',
                description: 'survived not only five centuries but the leap',
                price: '15.00',
                type: ['breakfast'],
                id: 107,
            },
        ],
        [
            {
                title: 'ULTIMATE ORGANIC FRUIT SALAD',
                description: 'survived not only five centuries but the leap',
                price: '50.00',
                type: ['lunch', 'dinner'],
                id: 108,
            },
            {
                title: 'PLAIN PANCAKES',
                description: 'Donec eget augue at diam euismod viverra',
                price: '68.00',
                type: ['snacks', 'dinner', 'lunch'],
                id: 109,
            },
        ],
        [
            {
                title: 'SURMAI CHILI',
                description: 'Phasellus a ex accumsan, sollicitudin',
                price: '39.00',
                type: ['lunch', 'dinner'],
                id: 110,
            },
            {
                title: 'SODE CADAI',
                description: 'Donec eget augue at diam euismod viverra',
                price: '49.00',
                type: ['snacks', 'dinner', 'lunch', 'breakfast'],
                id: 111,
            },
        ],
        [
            {
                title: 'MARGARITA PIZZA',
                description: 'Donec augue at euismod viverra',
                price: '30.00',
                type: ['dinner', 'lunch', 'pizza'],
                id: 112,
            },
            {
                title: 'VANILA ICE CREAM',
                description: 'Donec augue at euismod viverra',
                price: '30.00',
                type: ['snacks', 'lunch', 'dinner'],
                id: 113,
            },
        ],
        [
            {
                title: 'Prawns butter garlic',
                description: 'Phasellus a ex accumsan, sollicitudin',
                price: '85.00',
                type: ['dinner', 'snacks'],
                id: 114,
            },
            {
                title: 'SUKHAT CHANTEI',
                description: 'Phasellus a ex accumsan, sollicitudin',
                price: '40.00',
                type: ['soups', 'lunch', 'dinner'],
                id: 115,
            },
        ],
    ],
};

const getters = {
    getFoodMenu: (state: any): object[] =>  state.foodMenu,
};

export default {
    state,
    getters,
};
