/**
 * first 100: ---> 100;
 * 101 to 200: --> 90;
 * above 200 : --->70;
 */

function layoutDiscountedTotal(quantity){
    const first100Price=100;
    const second100Price=90;
    const above200Price=70;
    if(quantity<=100){
        const total= quantity*first100Price;
        return total;
    }
    else if(quantity<=200){
        const total=quantity*second100Price;
        return total;
    }
    else{
        const total =quantity*above200Price;
        return total;
    }
    

}
const total=layoutDiscountedTotal(201);
console.log(total);