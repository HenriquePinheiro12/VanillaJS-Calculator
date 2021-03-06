const $digitInput = document.querySelectorAll('.digit-input')
const $equalsBtn = document.querySelector('.equals')
const $clearBtn = document.querySelector('.clear')
const $clearAllBtn = document.querySelector('.clear-all')
const $displayContainer = document.querySelector('.display')
const displayStr = []; //renders client size
let expressionStr = ''; //processment
const operators = ['+', '-', '/', 'x']

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

const calculate = () => {
    if (expressionStr.length < 1) return
    const result = some(expressionStr)
    const displayResult =  result.split('').map(val => {
        return isOperator(val) ? 
            `<span class="operator">${val}</span>` :
            `<span>${val}</span>`
    })
    displayStr.splice(0, displayStr.length)
    displayResult.forEach(val => displayStr.push(val))
    expressionStr = result
    $displayContainer.innerHTML = displayStr.join('')
}

const some = exp => {
    const parcels = exp.split('+')
    const simplifiedParcels = parcels.map(val => subtract(val))
    const result =  simplifiedParcels.reduce((acc, val) => acc + Number(val), 0) //final result
    return String(result) 
}

const subtract = exp => {
    const parcels = exp.split('-')
    const simplifiedParcels = parcels.map(val => multiply(val))
    return simplifiedParcels.reduce((acc, val) => acc - val)
}

const multiply = exp => {
    const factors = exp.split('x')
    const simplifiedFactors = factors.map(val => divide(val))
    return simplifiedFactors.reduce((acc, val) => acc * val)
}

const divide = exp => {
    const factors = exp.split('/')
    return factors.reduce((acc, val) => acc / val)
}

$clearBtn.addEventListener('click', clearDisplay)
$clearAllBtn.addEventListener('click', clearAllDisplay)
$equalsBtn.addEventListener('click', calculate)
$digitInput.forEach(val => {
    val.addEventListener('click', function(e){
        const digitValue = this.dataset.value
        updateDisplay(digitValue)
    })
})