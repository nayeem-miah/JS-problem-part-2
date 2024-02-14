
// price={300, 100, 700, 1200}  =====> total is =2300;
const products=[
    {name:'shampoo',price: 300},
    {name:'chirni',price: 100},
    {name:'shirt',price: 700},
    {name:'pant',price: 1200}
]


function getShopingTotal(products){
    let sum=0;
    for(const product of products){
        sum=sum+product.price;
    }
    return sum;
}
const total=getShopingTotal(products);
console.log('total ajki khoros hobe',total);