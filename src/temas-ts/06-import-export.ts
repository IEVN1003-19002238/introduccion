import {calcularIva2,Producto} from "./05-desestructura-funciones"

const carrito:Producto[]=[
    {
        desc:'Telefono1',
        precio:290
    },
    {
        desc:'Telefono2',
        precio:300
    },
    {
        desc:'Telefono3',
        precio:400
    },
]

const [total,iva]=calcularIva2(carrito);
console.log(`Total: ${total}`);
console.log(`IVA: ${iva}`);