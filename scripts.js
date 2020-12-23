let firstNumber;
let secondNumber;
let currentOperator;

window.onload = function () {

    /* in each ; think you need to check whether
        number is first or second, and shift assignments 
        accordingly for subsequent values as well in each
        respective function */
    
    $("#seven")
        .click(function () {
            firstNumber = 7;
            document.getElementById("display").innerHTML += firstNumber;
        })

    $("#eight")
        .click(function () {
            firstNumber = 8;
            document.getElementById("display").innerHTML += firstNumber;
        })

    $("#nine")
        .click(function () {
            firstNumber = 9;
            document.getElementById("display").innerHTML += firstNumber;
        })

    $("#four")
        .click(function () {
            firstNumber = 4;
            document.getElementById("display").innerHTML += firstNumber;
        })

    $("#five")
        .click(function () {
            firstNumber = 5;
            document.getElementById("display").innerHTML += firstNumber;
        })

    $("#six")
        .click(function () {
            firstNumber = 6;
            document.getElementById("display").innerHTML += firstNumber;
        })

    $("#one")
        .click(function () {
            firstNumber = 1;
            document.getElementById("display").innerHTML += firstNumber;
        })

    $("#two")
        .click(function () {
            firstNumber = 2;
            document.getElementById("display").innerHTML += firstNumber;
        })

    $("#three")
        .click(function () {
            firstNumber = 3;
            document.getElementById("display").innerHTML += firstNumber;
        })

    $("#zero")
        .click(function () {
            firstNumber = 0;
            document.getElementById("display").innerHTML += firstNumber;
        })

    $("#divide")
        .click(function () {
            currentOperator = "/"
            document.getElementById("display").innerHTML += currentOperator;
        })

    $("#mult")
        .click(function () {
            currentOperator = "*"
            document.getElementById("display").innerHTML += currentOperator;
        })

    $("#sub")
        .click(function () {
            currentOperator = "-"
            document.getElementById("display").innerHTML += currentOperator;
        })

    $("#add")
        .click(function () {
            currentOperator = "+"
            document.getElementById("display").innerHTML += currentOperator;
        })









}
