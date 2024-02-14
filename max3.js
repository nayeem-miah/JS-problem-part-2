const jim=90;
const tim=80;
const kim=68;
// normal calculation:
if(jim> tim && jim>kim){
    console.log('jim is the ultimate boss');
}
else if(tim>jim && tim> kim){
    console.log('tim is the boss');

}
else{
    console.log('kim is the ultimate boss');
}



// inside function
function maxOfThree(num1,num2,num3){
    if(num1>num2 && num1>num3){
        return num1;
    }
    else if(num2>num1 && num2> num3){
        return num2;
    }
    else {
        return num3;
    }
}
const numbers=maxOfThree(34,556,78);
console.log(numbers);


// way three:
const max=Math.max(34,56,78,51,12);
console.log("max isusing Math.max",max);
