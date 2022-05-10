/*window.alert("welcome from first session Js");
document.getElementById("demo").innerHTML="web development";
console.log("hello frome consle");
*/


 
/* 1

var userAge=window.prompt("enter your age");
console.log(userAge);


*/





/* 2

var num=window.prompt("enter your number");
if (num%3==0 && num%4==0) {
    window.alert('3 and 4');
}
else {
    window.alert("no");
}

*/






/*8


var alphabet=window.prompt ("enter your Letter ")
switch(alphabet){
case"a":
window.alert("Vowel");
break;


case"e":
window.alert("Vowel");
break;

case"i":
window.alert("Vowel");
break;

case"u":
window.alert("Vowel");
break;

case"o":
window.alert("Vowel");
break;


default :
window.alert("consonant ")

}

*/


 
/* 3
var num1, num2;
num1 = window.prompt("Input the First integer", "0");
num2 = window.prompt("Input the second integer", "0");
                                                 
if(parseInt(num1, 10) > parseInt(num2, 10)) 
  { 
  console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
  }   
else
  if(parseInt(num2, 10) > parseInt(num1, 10)) 
  {
  console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
  }                  
else
  {
   console.log("The values "+ num1+ " and "+num2+ " are equal.");
  }

  */


/*4

  var number = parseInt(prompt("Enter a number: "));

// check if number is greater than 0
if (number > 0) {
    console.log("The number is positive");
}

// check if number is 0
else if (number == 0) {
  console.log("The number is zero");
}

// if number is less than 0
else {
     console.log("The number is negative");
}
*/

/* 5                           ---------------------------------------------------------------------------

function maxNum(num1, num2, num3){
        var max = 0;
        if(num1 > num2){
            if(num1 > num3){
                num1 = max;
            }
            else{
                num3 = max;
            }
        }
        else{
            if(num2 > num3){
                num2 = max;
            }
        }
    return max;
    }

    for(i=0;i<3;i++){
        parseInt(prompt("Enter a number"));
    }
    console.log("The values "+max+" max .");


    */
  

/* 6

    var number = prompt("Enter a number: ");


if(number % 2 == 0) {
    console.log("The number is even.");
}


else {
    console.log("The number is odd.");
}


*/

/*  9     ----------------------------------------------------------------------------------

// program to print prime numbers between the two numbers


var lowerNumber = parseInt(prompt('Enter lower number: '));
var higherNumber = parseInt(prompt('Enter higher number: '));

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// looping from lowerNumber to higherNumber
for (var i = lowerNumber; i <= higherNumber; i++) {
    var flag = 0;

    // looping through 2 to user input number
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}



*/ 





/* 10

var number = parseInt(prompt('Enter an integer: '));


for(let i = 1; i <= 10; i++) {

    
    var result = i * number;


    console.log(`${number} * ${i} = ${result}`);
}


*/





/* 11
var number = parseInt(prompt('Enter an integer: '));

for(i=0; i<=number; i++){
   
    if(i % 2 == 0){
      console.log(i);
    }
  }


  */




 









/* -------------------------------------------------------------------12

   function getReport() {
    
    var math = parseInt(prompt('Enter math: '));
    var phy = parseInt(prompt('Enter phy: '));
    var eng = parseInt(prompt('Enter eng: '));
    

    var totalmarks = eng + math + phy;

    var percentage = (totalmarks / 3) * 100;

    
    console.log( percentage) ;
   


}


*/


















/* -------------------------------------------------------------------- 14


var marks= window.prompt("enter your marks");
var Avgmarks = 0;

for (var i=0; i < marks.length; i++) {
        Avgmarks += marks[i][1];
        var avg = (Avgmarks/marks.length);
}

console.log("Average grade: " + (Avgmarks)/marks.length);

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
}


*/



/* 20

var operator = prompt('Enter operator ( either +, -, * or / ): ');


var number1 = parseFloat(prompt('Enter first number: '));
var number2 = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
         result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;

    case '-':
         result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;

    case '*':
         result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;

    case '/':
         result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}


*/


/* 19-----------------------------------------------------------------------

const number = parseInt(prompt("Enter a number: "));



switch(number > 0) {
    case "number" : 
    console.log("The number is positive");
    break;
}

switch (number == 0) {
case "number":
  console.log("The number is zero");
break ;


default :
     console.log("The number is negative");


}



*/

/* 18
var number = prompt("Enter a number: ");


switch(number % 2 == 0) {
    case 'number' :
    console.log("The number is even.");


default :

    console.log("The number is odd.");
}


*/
























