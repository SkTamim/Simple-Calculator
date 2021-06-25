// Targating allate buttons
let percentage,decimal,clear,backspace,seven,eight,nine,division,four,five,six,multiplication,one,two,three,addition,negative,zero,answer,subtraction;
percentage = document.getElementById("percentage");
decimal = document.getElementById("decimal");
clear = document.getElementById("clear");
backspace = document.getElementById("backspace");
seven = document.getElementById("seven");
eight = document.getElementById("eight");
nine = document.getElementById("nine");
division = document.getElementById("division");
four = document.getElementById("four");
five = document.getElementById("five");
six = document.getElementById("six");
multiplication = document.getElementById("multiplication");
one = document.getElementById("one");
two = document.getElementById("two");
three = document.getElementById("three");
addition = document.getElementById("addition");
negative = document.getElementById("negative");
zero = document.getElementById("zero");
answer = document.getElementById("answer");
subtraction = document.getElementById("subtraction");

// Targating Screens
let mainScreen = document.getElementById("mainScreen");
let historyScreen = document.getElementById("historyScreen");

// Print Numbers
seven.addEventListener("click", function(){
    mainScreen.value = mainScreen.value + "7";
});
eight.addEventListener("click", function(){
    mainScreen.value = mainScreen.value + "8";
});
nine.addEventListener("click", function(){
    mainScreen.value = mainScreen.value + "9";
});
four.addEventListener("click", function(){
    mainScreen.value = mainScreen.value + "4";
});
five.addEventListener("click", function(){
    mainScreen.value = mainScreen.value + "5";
});
six.addEventListener("click", function(){
    mainScreen.value = mainScreen.value + "6";
});
one.addEventListener("click", function(){
    mainScreen.value = mainScreen.value + "1";
});
two.addEventListener("click", function(){
    mainScreen.value = mainScreen.value + "2";
});
three.addEventListener("click", function(){
    mainScreen.value = mainScreen.value + "3";
});
zero.addEventListener("click", function(){
    mainScreen.value = mainScreen.value + "0";
});

//Print Decimal Sign
decimal.addEventListener("click", function(){
    mainScreen.value = mainScreen.value + ".";
});

// Print and remove negative sign
negative.addEventListener("click", function(){
    let ScreeValuee = mainScreen.value.substr(1, mainScreen.value.length);
    if(mainScreen.value != "-" + ScreeValuee){
    mainScreen.value = "-" + mainScreen.value ;
    } else{
        mainScreen.value =  mainScreen.value.substr(1, mainScreen.value.length);
    }
});



// Percentage Calculation
percentage.addEventListener("click", function(){
    if(mainScreen.value != ""){
historyScreen.value =  historyScreen.value + mainScreen.value;
mainScreen.value = eval(historyScreen.value)*100 + "%";
historyScreen.value =  historyScreen.value + " =";
    }
});

// Division Calculation
division.addEventListener("click", function(){
    historyScreen.value = mainScreen.value + " / ";
    mainScreen.value ="";
});

// Multiplication Calculation
multiplication.addEventListener("click", function(){
    historyScreen.value = mainScreen.value + " * ";
    mainScreen.value ="";
});

// Addition Calculation
addition.addEventListener("click", function(){
    historyScreen.value = mainScreen.value + " + ";
    mainScreen.value ="";
});

// Subtraction Calculation
subtraction.addEventListener("click", function(){
    historyScreen.value = mainScreen.value + " - ";
    mainScreen.value ="";
});

// All Cler Button Function
clear.addEventListener("click", function(){
    mainScreen.value = "";
    historyScreen.value = "";
});
// Backspace Button Function
backspace.addEventListener("click", function(){
    mainScreen.value = mainScreen.value.substr(0, mainScreen.value.length -1);
});

// All Calculation by Clicking Equal Sign and Print answer to Screen Function
answer.addEventListener("click", function(){
    var historyValue = historyScreen.value.substr(historyScreen.value.length-1,historyScreen.value.length);
    if (historyValue != "=") { 
historyScreen.value =  historyScreen.value + mainScreen.value;
mainScreen.value = eval(historyScreen.value);
historyScreen.value =  historyScreen.value + " =";
    }
});


