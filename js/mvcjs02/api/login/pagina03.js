const express = require("express");
const router = express.Router();
Modelo = require("./modelo");

var modelo = new Modelo();

router.get("/", getFunction);
router.post("/", postFunction);

async function postFunction(req, res, next) {
var datos = {};
datos["usu_login"] = req.body.usu_login;
datos["rol_id"] = req.body.rol;
console.log(datos,'DAAAAAATOS')
datos = await modelo.funcionalidades(datos);

res.writeHead(200, { "Content-Type": "text/html" });
res.write(`
<h3>Usuario: ${datos["usu_login"]} </h3>
<h3>Rol:  ${datos["result"]["rol_nombre"]} </h3>
<h3>Descripcion:  ${datos["result"]["rol_descripcion"]} </h3>
<h3>Funcionalidades:  </h3>
<ul>`);
datos["FunxUsu"].forEach((element) => {
  res.write(`<li> ${element.fun_nombre}</li>`);
});
res.write(`</ul>`);

res.write(`<br><button onclick="window.location.href = '/'">Salir</button> `);
res.end();

}
async function getFunction(req, res, next) {
  var datos = {};

  datos["usu_login"] = req.query.usu_login;
  datos["rol_id"] = req.query.rol_id;

  datos = await modelo.funcionalidades(datos);

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`
  <h3>Usuario: ${datos["usu_login"]} </h3>
  <h3>Rol:  ${datos["result"]["rol_nombre"]} </h3>
  <h3>Descripcion:  ${datos["result"]["rol_descripcion"]} </h3>
  <h3>Funcionalidades:  </h3>
  <ul>`);
datos["FunxUsu"].forEach((element) => {
  res.write(`<li> ${element.fun_nombre}</li>`);
});
res.write(`</ul>`);

  res.write(`<br><button onclick="window.location.href = '/'">Salir</button> `);
  res.end();

}

module.exports = router;
