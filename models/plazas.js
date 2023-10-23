const fs = require('fs');
const path = require('path');
const moment = require('moment');

const model = {
  // Ruta del archivo JSON
  route: path.join(__dirname, '../data/plazas.json'),

  // Función para modificar el status de las plazas en función de la hora actual
  modifyPlazaStates: function () {
    setInterval(() => {
      fs.readFile(this.route, 'utf8', (err, data) => {
        if (err) {
          console.error('Error al leer el archivo JSON:', err);
          return;
        }

        try {
          const plazas = JSON.parse(data);

          // Obtiene la hora actual
          const currentTime = moment();

          // Modifica el status de las plazas en función de la hora actual
          plazas.forEach((plaza) => {
            const plazaTime = moment(plaza.lastModified);
            const hoursDiff = currentTime.diff(plazaTime, 'hours');

            if (hoursDiff >= 1) {
              // Si han pasado más de 1 hora desde la última modificación, cambia el status
              plaza.status = !plaza.status;
              plaza.lastModified = currentTime.toISOString();
            }
          });

          // Escribe los cambios de nuevo en el archivo JSON
          fs.writeFile(this.route, JSON.stringify(plazas, null, 2), 'utf8', (err) => {
            if (err) {
              console.error('Error al escribir el archivo JSON:', err);
              return;
            }
          });
        } catch (error) {
          console.error('Error al analizar el archivo JSON:', error);
        }
      });
    }, 20000); // 20,000 milisegundos (20 segundos)
  },
};

module.exports = model;
