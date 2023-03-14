function sum(num) {

    if (!num.length) return 0;
    let suma = 0;
    for (i = 0; i < num.length; i++) {
        suma = suma + num[i];
    }
    return suma;
}


console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0
