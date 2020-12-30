let firstNumber = undefined;
let secondNumber = undefined;
let currentOperator = undefined;

let evalExpression = "";

function appendAndDisplay(num) {
    /* LOGICALLY why doesn't this work */
    /* STEP THROUGH THE CODE, IF YOU THINK YOU UNDERSTAND SOMETHING: CHALLENGE IT */
    evalExpression += num;
    evalExpression = cVWChecker(evalExpression);
    document.getElementById("display").innerHTML += num;
}


function cVWChecker(expToCheck) {
    /* how to do regex here? */
    let changethislater = "";
    if (expToCheck.length > 3) {
        console.log(expToCheck.length, expToCheck);
        if (expToCheck.substr(-3) == " + ") {
            changethislater = expToCheck.substr(-3);    
            document.getElementById("display").innerHTML = "";
        }
        if (expToCheck.substr(-3) == " - ") {
            changethislater = expToCheck.substr(-3);
            document.getElementById("display").innerHTML = "";
        }
        if (expToCheck.substr(-3) == " * ") {
            changethislater = expToCheck.substr(-3);
            document.getElementById("display").innerHTML = "";
        }
        if (expToCheck.substr(-3) == " / ") {
            changethislater = expToCheck.substr(-3);
            document.getElementById("display").innerHTML = "";
        }
        console.log(changethislater, changethislater.length);
        return changethislater;   
    }
    console.log(expToCheck);
    return expToCheck;
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

window.onload = function () {
    
    /* use ur head on the number(s) here, you got this */
    /* also read up on basics of regex */
    
    $("#seven")
        .click(function () {
            appendAndDisplay("7");
            
        })

    $("#eight")
        .click(function () {
            appendAndDisplay("8");
            
            console.log(evalExpression);
        })

    $("#nine")
        .click(function () {
            appendAndDisplay("9");
            
            console.log(evalExpression);    
        })

    $("#four")
        .click(function () {
            appendAndDisplay("4");
            
        })

    $("#five")
        .click(function () {
            appendAndDisplay("5");
            
        })

    $("#six")
        .click(function () {
            appendAndDisplay("6");
            
        })

    $("#one")
        .click(function () {
            appendAndDisplay("1");
            
        })

    $("#two")
        .click(function () {
            appendAndDisplay("2");
            
        })

    $("#three")
        .click(function () {
            appendAndDisplay("3");
            
        })

    $("#zero")
        .click(function () {
            appendAndDisplay("0");
            
        })

    $("#decimal")
        .click(function () {
            evalExpression += ".";
            document.getElementById("decimal").disabled = true;
            document.getElementById("display").innerHTML += ".";
        })
    
    
    $("#divide")
        .click(function () {
            evalExpression += " / ";
            evalExpression = cVWChecker(evalExpression);
            document.getElementById("decimal").disabled = false;
            document.getElementById("display").innerHTML += "/";
        })

    $("#mult")
        .click(function () {
            evalExpression += " * ";
            evalExpression = cVWChecker(evalExpression);
            document.getElementById("decimal").disabled = false;
            document.getElementById("display").innerHTML += "*";
        })

    $("#sub")
        .click(function () {
            evalExpression += " - ";
            evalExpression = cVWChecker(evalExpression);
            document.getElementById("decimal").disabled = false;
            document.getElementById("display").innerHTML += "-";
        })

    $("#add")
        .click(function () {
            evalExpression += " + ";
            evalExpression = cVWChecker(evalExpression);
            document.getElementById("decimal").disabled = false;
            document.getElementById("display").innerHTML += "+";
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


        






