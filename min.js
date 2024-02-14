/**
 * get minimum mobile price: 
 */
const price=[ 20000, 30000, 12000, 100000, 35000];
function getMin(numbers){
    let min =numbers[0];
    for(const number of numbers){
        console.log(number);
        if(number<min){
            min=number;
        }
    }
    return min;
}
const min = getMin(price);
console.log('mamma min price is :',min);