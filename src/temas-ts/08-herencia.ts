class Persona3{
    protected nombre:string;
    protected edad:number;
    constructor(nombre:string, edad:number){
        this.nombre=nombre;
        this.edad=edad;

    }
    imprimir(){
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad}`)

    }
}

class Empleado extends Persona3{
    private sueldo:number;
    constructor(nombre:string,edad:number,sueldo:number){
        super(nombre,edad);
        this.sueldo=sueldo;
    }
    imprimir():void{
        console.log(`sueldo ${this.sueldo}`)
    }
    pagarImpuesto(){
        if (this.sueldo>5000) 
            console.log(` ${this.nombre} debes pagar impuestos NOW`)
        else
        console.log(`${this.nombre} no debe pagar impuestos`)
        
    }
}

const persona3=new Persona3('juan',44);
persona3.imprimir();

const empleado1=new Empleado('ana',22,7000);
empleado1.imprimir();
empleado1.pagarImpuesto();


//crear que permita calcular la ecuacion cuadratica en orientacion a objetos yo le paso los prametros que son necesarios
//crear un programa que trabaje con herecnias el volumen y el area del cilindro y del pentagono y el prisma rectangular(sacar area y volumen de cada uno) primero calcula el area y luego hereda para sacar el volumen, los parametros no se piden 