const height=[ 45, 76, 54, 60, 70];
function getMax(numbers){
    let max=numbers[0];
    for(const num of numbers){
       if(num>max){
        max= num;
       }
    }
    return max;
}
const max=getMax(height);
console.log('max numbers is :',max);


// homework: min height of in an array
const ht=[ 45, 76, 54, 60, 70, 65, 34];
function getMin(numbers){
    let min=numbers[0];
    for(const number of numbers){
        if(number<min){
            min=number;
        }
    }
    return min;

}
const min=getMin(ht);
console.log("min numbers is :",min);
