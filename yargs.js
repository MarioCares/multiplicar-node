const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('listar', 'Imprimr en consola la tabla de multiplicar', opt)
    .command('base', 'Guarda en un archivo  la tabla de multiplicar', opt)
    .help().argv;