function join(array) {

    if (array.length === 0) return "";

    let join = "";

    for (let elemento of array) {
        join += elemento + " ";
    }

    return join;
}

console.log(join(["Hola", "Mundo"])) // "Hola Mundo"
console.log(join(["Make", "It", "Real"])) // "Make It Real"
console.log(join([])) // ""