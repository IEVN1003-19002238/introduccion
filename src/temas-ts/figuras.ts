class Figura {
    calcularArea(): number {
        return 0;
    }

    calcularVolumen(): number {
        return 0;
    }
}


class Cilindro extends Figura {
    constructor(private radio: number, private altura: number) {
        super();
    }

    calcularArea(): number {
        return 2 * Math.PI * this.radio * (this.radio + this.altura);
    }

    calcularVolumen(): number {
        return Math.PI * this.radio ** 2 * this.altura;
    }
}


class PrismaRectangular extends Figura {
    constructor(private base: number, private altura: number, private profundidad: number) {
        super();
    }

    calcularArea(): number {
        return 2 * (this.base * this.altura + this.base * this.profundidad + this.altura * this.profundidad);
    }

    calcularVolumen(): number {
        return this.base * this.altura * this.profundidad;
    }
}


class PrismaPentagonal extends Figura {
    constructor(private apotema: number, private lado: number, private altura: number) {
        super();
    }

    calcularArea(): number {
        return 5 * this.lado * this.apotema + 5 * this.lado * this.altura;
    }

    calcularVolumen(): number {
        return (5 * this.lado * this.apotema * this.altura) / 2;
    }
}


const cilindro = new Cilindro(5, 10);
console.log("area del cilindro:", cilindro.calcularArea());
console.log("volumen del cilindro:", cilindro.calcularVolumen());

const prismaRectangular = new PrismaRectangular(4, 7, 6);
console.log("area del prisma rectangular:", prismaRectangular.calcularArea());
console.log("volumen del prisma rectangular:", prismaRectangular.calcularVolumen());

const prismaPentagonal = new PrismaPentagonal(3, 6, 8);
console.log("area del prisma pentagonal:", prismaPentagonal.calcularArea());
console.log("volumen del prisma pentagonal:", prismaPentagonal.calcularVolumen());