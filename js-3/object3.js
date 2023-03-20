let receta = {}
receta.nombre = "sandwich";
receta.ingredientes = [];
receta.ingredientes.push({
    nombre: "pan",
    cantidad: 2
})

receta.ingredientes.push({
    nombre: "queso",
    cantidad: 1
})

console.log(receta.ingredientes[0].nombre);

let sumarcaantidad = 0;

for(let i = 0; i < receta.ingredientes.length; i++) {
    for (let cant in receta.ingredientes[i]) {
        if (cant === "cantidad") {
            sumarcaantidad += receta.ingredientes[i][cant];
        }
    }
}
console.log("suma cantidad de ingredientes:", sumarcaantidad);


