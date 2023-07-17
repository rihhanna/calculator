// Good Luck! You got this 💪🏾
// Write your code here.
function calculator(number1 , number2,operator){
    if (operator==="+"){
        console.log(number1+number2)
    }else if(operator==="-"){
        console.log(number1-number2)
    }else if(operator==="/"){
        console.log(number1/number2)
    }else if(operator==="*"){
        console.log(number1*number2)
    }else if(operator==="%"){
        console.log("invalid operator")
    
    }
}
calculator(2,3,"+")
calculator(5,3,"-")
calculator(4,2,"/")
calculator(4,5,"*")
calculator(6,8,"%")