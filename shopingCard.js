const products=[
    {name:'chirni',price: 100, quantity:2},
    {name:'shampoo',price:300, quantity:3},
    {name:'shirt',price:  700, quantity:5},
    {name:'pant',price:  1200, quantity:1},
]

function cardTotal(products){
    let total=0;
    for(const product of products){
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
    }
    return total;
}
const shoppingCost=cardTotal(products);
console.log('total shopping cost is:',shoppingCost);
