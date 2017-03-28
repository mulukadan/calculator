var add = function(num1, num2){
     return num1 + num2;
};

var subtract = function(num1, num2){
     return num1 - num2;
};

var divide = function(num1, num2){
     return num1 / num2;
};

var multiply = function(num1, num2){
     return num1 * num2;
};

num1 = parseInt(prompt("Enter Num 1"));
num2 = parseInt(prompt("Enter Num 2"));
alert(num1 +" x "+ num2 +" = " + multiply(num1,num2));
