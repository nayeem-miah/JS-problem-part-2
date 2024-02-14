/**
 * chair-----> 3 cft
 * table------> 10 cft
 * bed ----->50 cft
 */

function woodQuantity(chairQuantity,tableQuantity,bedQuantity){
    const perChairWood=3;
    const perTableWood=10;
    const perBeWood=50;
    const chairTotalWood=chairQuantity * perChairWood;
    const tableTotalWood=tableQuantity * perTableWood;
    const bedTotalWood=bedQuantity * perBeWood; 

    const totalWood=chairTotalWood+tableTotalWood+bedTotalWood;
    return totalWood;
}
const wood =woodQuantity(0,0,1);
console.log('wood needed :',wood,'cft');


/**
 * ========> home work
 * 
 * Shirt price---->500 tk
 * pen price------->400 tk
 * shoe price------>900 tk
 * 
 */
function getPrice(shirt,pen, shoe){
    const shirtPrice=500;
    const penPrice= 400;
    const shoePrice=900;
    const shirtTotalPrice=shirt * shirtPrice;
    const penTotalPrice = pen * penPrice;
    const shoeTotalPrice = shoe * shirtPrice;  

    const totalPrice=shirtTotalPrice + penTotalPrice + shoeTotalPrice;
    return totalPrice;
}
const price=getPrice(5,4,6);
console.log('price is =',price,'tk');