ClaseVistaGeneral = require("../general/ClaseVistaGeneral");
var vista = new ClaseVistaGeneral();
module.exports = async function (res, datos) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`<h2>Modulos:</h2>`);
  res.write(`<HTML>`);
  res.write(`<BODY>  `);
  res.write(`<H2>Registro en sistema</H2>`);
  res.write(
    `<FORM name="login" action="./index.js" method="POST" target="resultado">`
  );
  res.write(
    `${vista.formulario(
      `${datos.mod_id}:mod_id::hidden, ${datos.Module.mod_nombre}:mod_nombre:Nombre:text,${datos.Module.mod_descripcion}:mod_descripcion:Descripcion:text`
    )}
           
    ${vista.boton("Enviar Actualizar")}
    ${vista.botonreset()}
            </FORM>
        </BODY>
    </HTML>
    `
  );

  res.end();
};
