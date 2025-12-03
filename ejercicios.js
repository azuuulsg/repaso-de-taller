//const { cache } = require("react");

document.write("ejemplo 1"+"<br>");

class Persona{
    constructor(nombre, edad){
        this.nombre= nombre;
        this.edad = edad;
    }
    saludar(){
        document.write(`hola, soy ${this.nombre}`);
    }
}

const persona1 = new Persona("ana", 30);
const persona2 = new Persona("luis",25);
persona1.saludar(); //Hola, soy ana

document.write( "<br>"+ "<br>"+ "ejemplo 2"+"<br>");
class auto {
    constructor(marca, modelo, anio){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
    info(){
        return `${this.marca} ${this.modelo} ${this.anio}`;
    }
}

const auto1 = new auto("toyota", "corolla", 2020);
const auto2 = new auto("toyota", "corolla", 2020);
document.write(auto1.info()); 

document.write( "<br>"+ "<br>" +"ejemplo 3"+"<br>");
class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;

    }
    calcularIVA(){
        return this.precio * 0.21;

    }
}
const prod1 = new Producto("Notebook", 150000);

document.write("Notebook 150000"+"<br>");
const prod2 = new Producto("teclado", 8000);
document.write("teclado 8000"+"<br>");
document.write("Precio mas IVA total"+prod1.calcularIVA());


document.write("<br>"+ "objeto literal para representar una persona"+"<br>");

const persona = {
    nombre: "lucia",
    edad: 28,
    profesion: "ingeriero",
    saludar(){
        document.write(`hola, mi nombre es ${this.nombre}`);
    }
};
persona.saludar(); //hola, me llamo lucia

document.write("<br>"+"objeto literal para configurar una peticion o"+"<br>");
const configuracion = {
    URL: "https://api.nisitio.com",
    metodo: "GET",
    cache: false
}
document.write(configuracion.metodo);


document.write("<br>"+"objeto literal como modulo de utilidades"+"<br>");
const calculadora = {
    sumar(a,b) { return a + b;},
    restar(a , b) {return a-b;},
    multiplicar(a,b) { return a * b;},
}

document.write(calculadora.multiplicar(3 , 5)) // 15

document.write("ejemplo 1"+"<br>");
let alumnos = [
    {nombre: "ana", edad: 15},
    {nombre: "luis", edad: 16}
];

function agregarAlumno(nombre, edad) {
    alumnos.push({nombre, edad});

}

agregarAlumno("carla", 17);

//mostrar contenido
console.log(alumnos);


document.write("<br>"+"ejemplo 2"+"<br>");
let bibloteca = [];

function agregarlibro(titulo, autor){
    bibloteca.push({ titulo, autor});
}

agregarlibro("el princiíto", "a. de saint exupery");
agregarlibro("1984", "george orwell");

//hacer una app que me permita ingresar datos de un producto (almenos 5) codigo, producto, nombre, precio