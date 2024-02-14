class Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        if (a / b === 0) {
            return 0;
        }
        return a / b;
    }
}

module.exports = Calculator;