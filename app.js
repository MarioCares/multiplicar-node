const argv = require('./yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar');

console.log(argv);
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log(argv);
        crearArchivo(argv.base, argv.limite).
        then(salida => console.log(`El archivo ${salida} ha sido creado`)).
        catch(err => console.log(err.message));
        break;
    default:
        console.log('Default');
}