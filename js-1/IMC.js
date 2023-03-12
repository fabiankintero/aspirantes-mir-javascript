function bmi(peso, estatura) {

    if (peso > 0 && estatura > 0)

        return peso / (estatura ** 2)
    else
        return "Error"
}


console.log(bmi(65, 1.8)) // 20.061728395061728
console.log(bmi(72, 1.6)) // 28.124999999999993
console.log(bmi(52, 1.75)) //  16.979591836734695
console.log(bmi(0, 1.75)) // error