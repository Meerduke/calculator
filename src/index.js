class Calculator {
    constructor(previousCalculationTextElement, currentCalculationTextElement){
        this.previousCalculationTextElement = previousCalculationTextElement;
        this.currentCalculationTextElement = currentCalculationTextElement;
        this.clear();
    }

    clear() {
        this.currentCalculation = '';
        this.previousCalculation = '';
        this.operation = undefined;
    }

    delete() {

    }

    addNumber(number) {
        if (number === '.' && this.currentCalculation.includes('.'))
        return
        this.currentCalculation = this.currentCalculation.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentCalculation === '') return
        if (this.previousCalculation !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousCalculation = this.currentCalculation
        this.currentCalculation = ''

    }

    compute() {

    }

    updateDisplay() {
        this.currentCalculationTextElement.innerText = this.currentCalculation;
        this.previousCalculationTextElement.innerText = this.previousCalculation;
    }
}


const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear');
const previousCalculationTextElement = document.querySelector('[data-previous-calculation]');
const currentCalculationTextElement = document.querySelector('[data-current-calculation]');

const calculator = new Calculator(previousCalculationTextElement, currentCalculationTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.addNumber(button.innerText)
        calculator.updateDisplay()
    })
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
});