// Create a function to calculate Average to a group of 
// numbers (at least 10 numbers)

function calculateAverage(num1,num2,num3,num4,num5,num6,num7,num8,num9,num10){
return (num1 + num2 + num3 + num4 + num5 +num6+ num7+ num8+ num9+ num10);
}
console.log( calculateAverage(1,1,1,1,1,1,1,1,1,1));

// Write a function that takes the base and height of a 
// triangle and return its area
function triangleArea(base,height){
    return (base * height)/2;
}
console.log( triangleArea(1,4))

// Create a function that takes the age in years and
// returns the age in days and print it on console
function calcAge(age){
    return age*365 ;
}
console.log(calcAge(22))

// Create a function takes two numbers and return 
// thier sum Create a function takes two numbers and 
// return thier sum
function calcSum(num1,num2){
    return (num1 + num2);
}
console.log(calcSum(2,2))

// Create a function that takes an array containing 
// only numbers and return the first element
function names(name1,name2,name3,name4,name5,name6,name7,name8,name9,name10){
    var names=[name1,name2,name3,name4,name5,name6,name7,name8,name9,name10];
    console.log(names[0])
}
names('youssef','jojo','yyy','jjj');

// Create a function show your name in HTML 
// document
function MyName(name){
    var MyName ='Youssef ELdesoky Mohamed' ;
    return MyName
}
document.write(MyName());

// Write a function that takes an integer hours and 
// converts it to second .

function calc(hours){
    return (hours *60*60);
}
console.log(calc(1));

// Given four numbers, return true if the sum of both 
// numbers is more than 350. Otherwise return false.
function numbers(num1,num2,num3,num4){
    if((num1+num2+num3+num4)>350){
        return true;
    }
    else if((num1+num2+num3+num4)<350){
        return false;
    }
}
document.write(numbers(100,100,100,100));


// مل فانكشن بتاخد رقم لو بيساوي صفر رجع true عكس كدا بيرجع fal
function calc3(num){
    if(num == 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(calc3(9))

// عمل فانكشن بتاخد رقمين وتجيب باقي القسمة بتاعهم وليس القسمة ) مختلفة 
function calc5(num1,num2){
    return (num1/num2);
}
console.log(calc5(9,9))


// Find the largest of two number
// Make a function take two parameters num1 and num2 and print the 
// greater number or if they are equal print they are equal.
function calcnum1(num1,num2){
    if(num1>num2){
        return num1;
    }
    else if(num2>num1){
        return num2;
    }
    
    else if(num1==num2){
        return 'yes: num1 =num2';
    }
}
console.log(calcnum1(3,1))

// Check if input variable is a number or not
function isNumber(input) {
    return !isNaN(input);
  }
  console.log(isNumber(6))

  function isNumeric(something){
    return typeof(something) === 'number';
}
console.log(isNumeric('hello'));
  


  


