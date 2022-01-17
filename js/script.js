const $digitInput = document.querySelectorAll('.digit-input')
const $equalsBtn = document.querySelector('.equals')
const $clearBtn = document.querySelector('.clear')
const $clearAllBtn = document.querySelector('.clear-all')
const $displayContainer = document.querySelector('.display')
const displayStr = []; //renders client size
let expressionStr = ''; //processment
const operators = ['+', '-', '/', 'x']

const clearAllDisplay = () => {
    displayStr.splice(0, displayStr.length)
    expressionStr = ''
    $displayContainer.innerHTML = displayStr.join('')
}
const clearDisplay = () =>{
    displayStr.pop()
    expressionStr = expressionStr.substr(0, expressionStr.length -1)
    $displayContainer.innerHTML = displayStr.join('')
}
const isOperator = value => operators.includes(value)
const updateDisplay = (digitValue) => {
    if(isOperator(digitValue)){
        if(isOperator(expressionStr[expressionStr.length -1]) || displayStr.length === 0)
            return
        else
            displayStr.push(`<span class="operator">${digitValue}</span>`)
    } 
    else
        displayStr.push(`<span>${digitValue}</span>`)
    expressionStr = expressionStr.concat(digitValue)
    $displayContainer.innerHTML = displayStr.join('')
}
const calculate = () => {
    console.log(expressionStr)
}

$digitInput.forEach(val => {
    val.addEventListener('click', function(e){
        const digitValue = this.dataset.value
        updateDisplay(digitValue)
    })
})
$clearBtn.addEventListener('click', clearDisplay)
$clearAllBtn.addEventListener('click', clearAllDisplay)
$equalsBtn.addEventListener('click', calculate)