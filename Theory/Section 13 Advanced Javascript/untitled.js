const basket = ['apple', 'oranges', 'grapes'];
const detailedBasket = {
    apples: 5,
    oranges: 20,
    grapes: 500
};



//1
for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}

//2
basket.forEach(item => {
    console.log(item);
})

// for of
// iterating - able to go one by one (arrays, strings)
for (item of basket) {
    console.log(item);
}

// basket = {
//     0: 'apples',
//     1: 'oranges',
//     2: 'grapes'
// }

// for in
// enumerating - objects
for (item in detailedBasket) {
    console.log(item);
}