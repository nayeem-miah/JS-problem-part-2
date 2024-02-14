const mobiles=[
    {name: 'sumgsung', price: 20000, camera: '12mp', color:' Black'},
    {name: 'xomai', price: 18000, camera: '12mp', color:' Black'},
    {name: 'oppo', price: 16000, camera: '12mp', color:' Black'},
    {name: 'Iphone', price: 100000, camera: '12mp', color:' Black'},
    {name: 'walton', price: 12000, camera: '12mp', color:' Black'},
]



function getCheapestPhone(mobiles){
    let min=mobiles[0];
    for(const phone of mobiles){
        if(phone.price<min.price){
            min=phone;

        }
    }
    return min;

}
const cheap =getCheapestPhone(mobiles);
console.log('cheapest phone is :',cheap);

// max price find in an object:====>home work;

const phones=[
    {name: 'sumgsung', price: 20000, camera: '12mp', color:' Black'},
    {name: 'xomai', price: 18000, camera: '12mp', color:' Black'},
    {name: 'oppo', price: 16000, camera: '12mp', color:' Black'},
    {name: 'Iphone', price: 100000, camera: '12mp', color:' Black'},
    {name: 'walton', price: 12000, camera: '12mp', color:' Black'},
]

function getExpensivePhone(phones){
    let max=phones[0];
    for(const phone of phones){
        if(max.price<phone.price){
            max=phone;
        }
    }
    return max;
}
const expensive =getExpensivePhone(phones);
console.log('expensive price phone is :',expensive);

