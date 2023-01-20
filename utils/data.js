module.exports = {

    getRandomItem: (arr) => {
        return arr[Math.floor(Math.random() * arr.length)];
    },

    getRandomNumber: (arr) => {
        return (Math.floor(Math.random() * arr.length));
    },

    getRandom01: () => {
        return Math.round(Math.random());
    },

    users: [
        'Ashley',
        'Amanda',
    ],

    thoughts: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sollicitudin neque, ut eleifend nunc. Donec faucibus, orci id tincidunt consectetur, elit ante interdum dolor, ut feugiat mi erat ac libero. Ut rhoncus dui vel arcu bibendum, nec sodales nisl egestas. Donec vel semper nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce fermentum turpis sapien, in dapibus tortor auctor a. Curabitur tempus pharetra augue, non eleifend lacus gravida eu. Sed mollis hendrerit libero, in congue mauris efficitur sit amet. Quisque leo sapien, bibendum et semper in, suscipit at leo. Praesent efficitur, felis volutpat ullamcorper vehicula, neque augue maximus enim, nec suscipit quam dui sit amet lacus. In hac habitasse platea dictumst. Donec vitae aliquam arcu. Sed quis tristique metus. Aliquam imperdiet nunc eu vulputate facilisis. Ut pellentesque ultrices orci. Phasellus vulputate sit amet tortor quis tincidunt.'
    ],

    reactions: [
        'I would love to hear more',
        'This is not interesting to me',
        'I am not sure what you are saying',
        'I do not want to know more about this',
    ]
};