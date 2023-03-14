function maxIndex(arrayNumeros) {
    if (arrayNumeros.length === 0) return -1;

    let posicion = 0;
    let mayor = arrayNumeros[0];
    for (let i = 1; i < arrayNumeros.length; i++) {
        if (mayor < arrayNumeros[i]) {
            mayor = arrayNumeros[i];
            posicion = i;
        }
    }
    return posicion;
}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1