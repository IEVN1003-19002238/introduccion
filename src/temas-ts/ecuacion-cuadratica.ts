class Ecuacion{
    a:number;
    b:number;
    c:number;
    //formula:number;
    constructor(a:number,b:number,c:number){
        this.a=a;
        this.b=b;
        this.c=c;
        //this.formula=formula

        //formula=(-(-b)+Math.sqrt(a^2-(4*a*c))/2*a);
    }

    calcular(): { sol1: number, sol2: number } {
        let discriminante = Math.pow(this.b, 2) - 4 * this.a * this.c;
        let sol1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
        let sol2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
        return { sol1, sol2 };
    }

    imprimir() {
        
            const { sol1, sol2 } = this.calcular();
            console.log(`Las soluciones de la ecuación son: ${sol1} y ${sol2}`);
        
    }
}

/*function resta(a:number, b:number, c:number):number{
    return ((-b)+Math.sqrt(a^2-(4*a*c))/2*a)
}*/
const ecuacion=new Ecuacion(1,6,8);
ecuacion.imprimir();


