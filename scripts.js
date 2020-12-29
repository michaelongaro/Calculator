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
let firstOperator = undefined;
let secondOperator = undefined;
let negativeCounter 
let currentViewingWindow = "";
let tempOperator = "";

let spliceOldExpr = (oldexp, newexp) => oldexp.split(newexp).join("");


window.onload = function () {
    
    /* use ur head on the number(s) here, you got this */
    
    $("#seven")
        .click(function () {
            cVWChecker(currentViewingWindow);
            evalExpression += "7";
            document.getElementById("display").innerHTML += "7";
        })

    $("#eight")
        .click(function () {
            cVWChecker(currentViewingWindow);
            evalExpression += "8";
            document.getElementById("display").innerHTML += "8";
        })

    $("#nine")
        .click(function () {
            cVWChecker(currentViewingWindow);
            evalExpression += "9";
            document.getElementById("display").innerHTML += "9";
        })

    $("#four")
        .click(function () {
            cVWChecker(currentViewingWindow);
            evalExpression += "4";
            document.getElementById("display").innerHTML += "4";
        })

    $("#five")
        .click(function () {
            cVWChecker(currentViewingWindow);
            evalExpression += "5";
            document.getElementById("display").innerHTML += "5";
        })

    $("#six")
        .click(function () {
            cVWChecker(currentViewingWindow);
            evalExpression += "6";
            document.getElementById("display").innerHTML += "6";
        })

    $("#one")
        .click(function () {
            cVWChecker(currentViewingWindow);
            evalExpression += "1";
            document.getElementById("display").innerHTML += "1";
        })

    $("#two")
        .click(function () {
            cVWChecker(currentViewingWindow);
            evalExpression += "2";
            document.getElementById("display").innerHTML += "2";
        })

    $("#three")
        .click(function () {
            cVWChecker(currentViewingWindow);
            evalExpression += "3";
            document.getElementById("display").innerHTML += "3";
        })

    $("#zero")
        .click(function () {
            cVWChecker(currentViewingWindow);
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
            cVWChecker(currentViewingWindow);
            evalExpression += " / ";
            currentViewingWindow = "/"
            document.getElementById("decimal").disabled = false;
            document.getElementById("display").innerHTML += currentViewingWindow;
        })

    $("#mult")
        .click(function () {
            cVWChecker(currentViewingWindow);
            evalExpression += " * ";
            currentViewingWindow = "*"
            document.getElementById("decimal").disabled = false;
            document.getElementById("display").innerHTML += currentViewingWindow;
        })

    $("#sub")
        .click(function () {
            cVWChecker(currentViewingWindow);
            evalExpression += " - ";
            currentViewingWindow = "-"
            document.getElementById("decimal").disabled = false;
            document.getElementById("display").innerHTML += currentViewingWindow;
        })

    $("#add")
        .click(function () {
            cVWChecker(currentViewingWindow);
            evalExpression += " + ";
            currentViewingWindow = "+"
            document.getElementById("decimal").disabled = false;
            document.getElementById("display").innerHTML += currentViewingWindow;
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
            if (typeof currentViewingWindow == "number") {
                /* see if this works */
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

function cVWChecker(cVW) {
    /* how to do regex here? */
    if (evalExpression[-3] == " + ") {
        evalExpression = evalExpression[-3];
    }
    if (evalExpression[-3] == " - ") {
        evalExpression = evalExpression[-3];
    }
    if (evalExpression[-3] == " * ") {
        evalExpression = evalExpression[-3];
    }
    if (evalExpression[-3] == " / ") {
        evalExpression = evalExpression[-3];
    }
    
    /* update all of this bs to format above and reduce clutter */
    
    if (cVW == "+") {
        currentViewingWindow == "";
        document.getElementById("display").innerHTML = "";
        return "op";
    }
    else if (cVW == "-") {
        currentViewingWindow == "";
        document.getElementById("display").innerHTML = "";
        return "op";
    }
    else if (cVW == "*") {
        currentViewingWindow == "";
        document.getElementById("display").innerHTML = "";
        return "op";
    }
    else if (cVW == "/") {
        currentViewingWindow == "";
        document.getElementById("display").innerHTML = "";
        return "op";
    }
    else if (typeof parseFloat(cVW) == "number") {
        return "num";
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

        







