import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
/* leer el archivo JSON*/
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

/*Agregar un ID. a cada entrada que no lo tenga */

data.forEach(item => {
    if (!item.id) {
        item.id = uuidv4();
    }
});
//* Guardar nuevamente el archivo */
fs.writeFileSync('data.json', JSON.stringify(data, null, 2), 'utf8');
console.log('IDs generados y agregados correctamente');