const fs = require('fs');
const colores = require('colors');

let listarTabla = (base, limite) => {
    console.log('================'.green);
    console.log(`====Tabla de ${base}===`.green);
    for (let i = 1; i <= limite; i++) {
        console.log((`${base} * ${i} = ${(i*base)}`).green);
    }
};

let crearArchivo = async(base, limite) => {
    if (!Number(base)) {
        throw new Error(`${base} no es un número`);
    } else {
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${(i*base)}\n`);
        }

        var respuesta = '';
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) throw err;
            this.respuesta = `tabla-${base}.txt`;
        });
        return respuesta;
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}