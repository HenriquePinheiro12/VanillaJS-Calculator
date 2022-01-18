const exp = '54+65x21';

const calculate =  value => some(value)

const some = exp =>{
    const parcels = exp.split('+')
    //['54', '65x21-5/4']
    const simplerParcels = parcels.map(val => subtract(val))
    return simplerParcels.reduce((acc, val) => acc + Number(val), 0) //final result
}

const subtract = exp => {
    const parcels = exp.split('-')
    //['54']
    //['65x21', '5/4']
    const simplerParcels = parcels.map(val => multiply(val))
    return simplerParcels.reduce((acc, val) => acc - val)
}

const multiply = exp => {
    const factors = exp.split('x')
    //['54']
    //['65', '21']
    //['5/4']
    const simplerFactors = factors.map(val => divide(val))
    return simplerFactors.reduce((acc, val) => acc * val)
}

const divide = exp => {
    const factors = exp.split('/')
    //['54']
    //['65']
    //['21']
    //['5', '4']
    return factors.reduce((acc, val) => acc / val)
}

console.log(calculate(exp))