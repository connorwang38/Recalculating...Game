function add(n, m) {
     return n + m;
}

function subtract(n, m) {
    return n - m;
}

function multiply(n, m) {
    return n * m;
}

function divide(n, m) {
    return n / m;
}

function operate(o, n, m) {
    if (o === '+') {
        return add(n, m);
    } else if (o === '-') {
        return subtract(n, m);
    } else if (o === '*') {
        return multiply(n, m);
    } else if (o === '/') {
        return divide(n, m);
    }
}

for 

/*console.log(add(parseInt(prompt("Enter number:")), parseInt(prompt("Enter number:"))));
console.log(subtract(parseInt(prompt("Enter number:")), parseInt(prompt("Enter number:"))));
console.log(multiply(parseInt(prompt("Enter number:")), parseInt(prompt("Enter number:"))));
console.log(divide(parseInt(prompt("Enter number:")), parseInt(prompt("Enter number:"))));*/