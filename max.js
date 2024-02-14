const disha =56;
const salman = 95;
if(disha> salman){
    console.log('disha will get the strawberry');
}
else{
    console.log('Sallman wii get the strawberry')
}
// inside a function
function getMax(num1, num2){
    if( num1>num2){
        return num1;
    }
    else{
        return num2;
    }
}
const max=getMax(45,34);
const max2=getMax(75,98);
const ultimateMax=getMax(max, max2);
console.log('max of is :',ultimateMax);