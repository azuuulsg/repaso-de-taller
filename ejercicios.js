document.write("ejemplo 1"+"<br>");

class persona{
    constructor(nombre, edad){
        this.nombre= nombre;
        this.edad = edad;
    }
    saludar(){
        document.write(`hola, soy ${this.nombre}`);
    }
}

const persona1 = new persona("ana", 30);
const persona2 = new persona("luis",25);
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