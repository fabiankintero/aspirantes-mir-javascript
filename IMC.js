function bmi(peso, estatura) {

    if (peso > 0 && estatura > 0)

        return peso / (estatura ** 2)
    else
        return "Error"
}


console.log(bmi(65, 1.8))
console.log(bmi(72, 1.6))
console.log(bmi(52, 1.75))
console.log(bmi(0, 1.75)) 