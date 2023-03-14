function max(arrayNumeros) {
  if (arrayNumeros.length === 0) return undefined;
  let mayor = arrayNumeros[0];
  for(let i = 1; i < arrayNumeros.length; i++) {
    if(mayor < arrayNumeros[i]) mayor = arrayNumeros[i];
  }
  return mayor;
}

console.log (max ([1, 3, 2])); // 3
console.log (max ([10, 9, 8, 7, 6, 5, 4])); // 10
console.log (max ([])); // undefined
