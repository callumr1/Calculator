const calculator = document.querySelector(".calculator");
const btns = calculator.querySelector(".calc-buttons");
const display = calculator.querySelector(".calc-screen");

let calculated = false;

btns.addEventListener("click", e => {
    if (e.target.matches("button")) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;

        if (!action) {
            if (displayedNum === "0" || calculated) {
                display.textContent = keyContent;
                calculated = false;
            } else if (displayedNum.length === 24) {
                alert("Wow... That's a big number. You can only enter an equation that is less than 24 characters.");
            } else {
                display.textContent = displayedNum + keyContent;
            }
        }
        else if (action === "add") {
            if (displayedNum === "0") {
                display.textContent = "+";
                calculated = false;
            } else {
                display.textContent = displayedNum + "+";
                calculated = false;
            }
        }
        else if (action === "brackets") {
            if (displayedNum === "0") {
                display.textContent = "(";
                calculated = false;
            } else if (displayedNum.includes("(")) {
                display.textContent = displayedNum + ")";
                calculated = false;
            } else {
                display.textContent = displayedNum + "(";
                calculated = false;
            }
        }
        else if (action === "calculate") {
            try {
                display.textContent = eval(display.textContent);
            } catch (error) {
                display.textContent = "ERROR";
            }
            calculated = true;
        }
        else if (action === "clear") {
            display.textContent = "0";
            calculated = false;
        }
        else if (action === "decimal") {
            display.textContent = displayedNum + ".";
            calculated = false;
        }
        else if (action === "delete") {
            let newStr = displayedNum.substring(0, displayedNum.length - 1);
            if (newStr.length === 0) {
                display.textContent = "0";
            } else {
                display.textContent = newStr;
            }
            calculated = false;
        }
        else if (action === "divide") {
            if (displayedNum === "0") {
                display.textContent = "/";
                calculated = false;
            } else {
                display.textContent = displayedNum + "/";
                calculated = false;
            }
        }
        else if (action === "minus") {
            if (displayedNum === "0") {
                display.textContent = "-";
                calculated = false;
            } else {
                display.textContent = displayedNum + "-";
                calculated = false;
            }
        }
        else if (action === "multiply") {
            if (displayedNum === "0") {
                display.textContent = "*";
                calculated = false;
            } else {
                display.textContent = displayedNum + "*";
                calculated = false;
            }
        }
    }
});