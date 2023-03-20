let persona = {
    nombre: "Fabian Quintero",
    edad: 36,
    ciudad: "Cali",
    Profesion: "Técnico medidor de fibra óptica"
};

function presentación(persona){
    return `${persona.nombre}, ${persona.edad}, ${persona.ciudad}, ${persona.Profesion}.`
}

let mensaje = presentación(persona);
console.log(mensaje)

persona.hobbies = ["tocar la guitarra", "hacer ejercicio", "leer", "ir a cine" ];
console.log(persona.hobbies)

for(let i = 0 ; i < persona.hobbies.length; i++){
    console.log(persona.hobbies[i])
}