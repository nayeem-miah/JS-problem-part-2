function add(num1,num2){
    const sum=num1+num2;
    return sum;
}
function subtract(num1,num2){
    const sub= num1-num2;
    return sub;
}
function multiply(num1,num2){
    const multi=num1* num2;
    return multi;
}
function divided(num1,num2){
    const div=num1/num2;
    return div;
}

function calculator(a,b,operation){
    if(operation==='add'){
        const result = add(a,b);
        return result;

    }
    else if(operation === 'subtract'){
        const result=subtract(a,b);
        return result;
    }
    else if(operation ==='multiply'){
        const result =multiply(a,b);
        return result;
    }
    else if(operation ==='divided'){
        const result =divided(a,b)
        return result;
    }
    else{
        return " Only'add', 'subtract' , 'multiply','divided' are not possible";
    }
}
const result=calculator(4,5,'multiply');
console.log(result);