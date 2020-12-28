let firstNumber = undefined;
let secondNumber = undefined;
let currentOperator = undefined;
let previousOperator = undefined;
let tempResult = 0;
let evalExpression = "";
let totalValue = undefined;
let stagedOperator = undefined;
let opArr = new Array(4).fill(false);
let addBool = false;
let subBool = false;
let multBool = false;
let divBool = false;

window.onload = function () {
    
    $("#seven")
        .click(function () {
            evalExpression += "7";
            document.getElementById("display").innerHTML += "7";
        })

    $("#eight")
        .click(function () {
            evalExpression += "8";
            document.getElementById("display").innerHTML += "8";
        })

    $("#nine")
        .click(function () {
            evalExpression += "9";
            document.getElementById("display").innerHTML += "9";
        })

    $("#four")
        .click(function () {
            evalExpression += "4";
            document.getElementById("display").innerHTML += "4";
        })

    $("#five")
        .click(function () {
            evalExpression += "5";
            document.getElementById("display").innerHTML += "5";
        })

    $("#six")
        .click(function () {
            evalExpression += "6";
            document.getElementById("display").innerHTML += "6";
        })

    $("#one")
        .click(function () {
            evalExpression += "1";
            document.getElementById("display").innerHTML += "1";
        })

    $("#two")
        .click(function () {
            evalExpression += "2";
            document.getElementById("display").innerHTML += "2";
        })

    $("#three")
        .click(function () {
            evalExpression += "3";
            document.getElementById("display").innerHTML += "3";
        })

    $("#zero")
        .click(function () {
            evalExpression += "0";
            document.getElementById("display").innerHTML += "0";
        })

    $("#decimal")
        .click(function () {
            evalExpression += ".";
            document.getElementById("decimal").disabled = true;
            document.getElementById("display").innerHTML += ".";
        })
    
    
    $("#divide")
        .click(function () {
            /* still want to change only one op at a time EXCEPT FOR '-' */
            if (checkOperatorOrder(evalExpression)) {
                console.log(evalExpression.substr(0, -3));
                evalExpression = evalExpression.substr(0, -3) + " / ";
            }
            else {
                evalExpression += " / ";
            }
            document.getElementById("decimal").disabled = false;
            document.getElementById("display").innerHTML += " / ";
        })

    $("#mult")
        .click(function () {
            
            evalExpression += " * ";
            document.getElementById("decimal").disabled = false;
            document.getElementById("display").innerHTML += " * ";
        })

    $("#sub")
        .click(function () {
            if (allowedOperator == "/" || allowedOperator == "*") {
                evalExpression += "-";
            }
            else {
                evalExpression += " - ";
            }
            document.getElementById("decimal").disabled = false;
            document.getElementById("display").innerHTML += " - ";
        })

    $("#add")
        .click(function () {
            if (addBool) {
                
            }
            else {
                /* validate new operator here (?) */
                stagedOperator = " + ";
            }
            evalExpression += stagedOperator;
            document.getElementById("decimal").disabled = false;
            document.getElementById("display").innerHTML += " + ";
        })
    
    $("#equals")
        .click(function () {
            document.getElementById("decimal").disabled = false;
            operate(evalExpression);
            document.getElementById("display").innerHTML = evalExpression;
        })

    $("#clear")
        .click(function () {
            firstNumber = undefined;
            secondNumber = undefined;
            currentOperator = undefined;
            evalExpression = "";
            document.getElementById("display").innerHTML = "";
        })

    $("#sqrt")
        .click(function () {
            evalExpression = Math.sqrt(evalExpression);
            document.getElementById("display").innerHTML = evalExpression;
    })
    
    $("#percent")
        .click(function () {
            evalExpression = evalExpression / 100;
            document.getElementById("display").innerHTML = evalExpression;
    })
    
    $("#posneg")
        .click(function () {
            /* look how and if you would want a switch statement implemented here */
            console.log(typeof evalExpression);
            if (evalExpression.includes("+")) {
                console.log("hello");
            }
            else if (evalExpression.includes("-")) {
                
            }
            else if (evalExpression.includes("*")) {
                
            }
            else if (evalExpression.includes("/")) {
                
            }
            else {
                evalExpression = (parseFloat(evalExpression) * -1).toString();
                console.log(evalExpression);
                document.getElementById("display").innerHTML = evalExpression;
            }
    })
    
    
/* figure out what you want to do with these
            else if (operation == "%") {
                return operate(num1, num2, previousOperator) / 100;
            }
            else if (operation == "+/-") {
                return num1 * num2;
            } */

}

function checkOperatorOrder(givenOp) {
    /* make arr of len 4, and add up total of arr, if > 0,
            then reset all operators, and put new one in (spec. case on '-') */
    /* opArr.reduce((a, b) => a + b, 0); should give the sum */
    for (let p = 0; p < opArr.length; p++) {
            if (givenOp == "+") {
                if (!opArr[0]) {
                    evalExpression += " + ";
                }
            }
            else if (givenOp == "-") {
                
            }
            else if (givenOp == "*") {
                
            }
            else if (givenOp == "/") {
                
            } 
    }
    
    else {
        stagedOperator = "";
        /* maybe need to reset arr with zeros across board */
        switch (givenOp) {
            case "+":
                opArr[0] += 1;
                return " + ";
            case "-":
                opArr[1] += 1;
                return " - ";
            case "*":
                opArr[2] += 1;
                return " * ";
            case "/":
                opArr[3] += 1;
                return " / ";
        }
    }
    
}


function operate(expr) {
    console.log(evalExpression);
    evalExpression = evalExpression.split(' ');
    console.log(evalExpression);
    
    
    
    
    for (let i = 0; i < evalExpression.length; i++) {
        if (isNaN(evalExpression[i])) {
            currentOperator = evalExpression[i];
        }
        else if (!isNaN(evalExpression[i]) && firstNumber == undefined) {
            firstNumber = parseFloat(evalExpression[i]);
        }
        else if ((!isNaN(evalExpression[i]) && firstNumber != undefined) && secondNumber == undefined) {
            secondNumber = parseFloat(evalExpression[i]);
        }

        /* need an edge case for if there is no totalValue, aka the first set of numbers being operated on */
        /* simplify this greatly with just destringing(?) the currentOperator */
        /* have syntax error displayed somewhere / handle it properly if operator w/ no 2nd num is entered and -> "=" is pressed */
        /* if equals button is pressed while no extra buttons or anything have been pressed, repeat the calculation on the current 
                value */
        /* make the decimal button work */
        if (firstNumber != undefined && secondNumber != undefined) {
            console.log(firstNumber, secondNumber);
            
            if (currentOperator == "/") {
                if (secondNumber == 0) {
                    alert("Error: Cannot divide by zero!");
                
                    firstNumber = undefined;
                    secondNumber = undefined;
                    currentOperator = undefined;
                    evalExpression = "";
                    document.getElementById("display").innerHTML = "";
                }
                firstNumber = firstNumber / secondNumber;
            }

            else if (currentOperator == "*") {
                firstNumber = firstNumber * secondNumber;
            }

            else if (currentOperator == "-") {
                firstNumber = firstNumber - secondNumber;
            }

            else if (currentOperator == "+") {
                firstNumber = firstNumber + secondNumber;
            }


            else {
                return "error has occured, no valid operator";
            }
            
            secondNumber = undefined;
        }
    }
    evalExpression = firstNumber.toString();
}

        







