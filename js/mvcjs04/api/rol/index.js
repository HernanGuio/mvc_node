const express = require("express");
const router = express.Router();
ClaseControladorGeneral = require("../general/ClaseControladorGeneral");
// var control = new ClaseControladorGeneral();
Modelo = require("./modelo");

var modelo = new Modelo();

router.post("/", postFunction);

async function postFunction(req, res) {
  var control = new ClaseControladorGeneral(req.body);
  var datos = {};
  datos = control.capturar(datos);
  switch (datos["btnAction"].replace(/ /g, "").toLowerCase()) {
    case "eliminar":
      datos = control.capturar(datos);
      await modelo.borrarRol(datos);
      datos = await modelo.recuperarRol();
      pagina01 = require("./pagina01");
      pagina01(res, datos);
      break;
    case "actualizar":
      datos = control.capturar(datos);
      datos = await modelo.traerRol(datos);
      pagina02 = require("./pagina02");
      pagina02(res, datos);
      break;

    case "nuevo":
      pagina03 = require("./pagina03");
      pagina03(res);
      break;

    case "permisos":
      datos = control.capturar(datos);
      datos = await modelo.obtenerPermisosRol(datos);
      pagina04 = require("./pagina04");
      pagina04(res, datos);
      break;

    case "enviaractualizar":
      datos = control.capturar(datos);
      datos = await modelo.actualizarRol(datos);
      datos = await modelo.recuperarRol();
      pagina01 = require("./pagina01");
      pagina01(res, datos);
      break;

    case "enviarnuevo":
      datos = control.capturar(datos);
      datos = await modelo.insertarNuevoRol(datos);
      datos = await modelo.recuperarRol();
      pagina01 = require("./pagina01");
      pagina01(res, datos);
      break;

    case "<-":
      datos = control.capturar(datos);
      await modelo.insertarPermisosRol(datos);
      datos = await modelo.obtenerPermisosRol(datos);
      pagina04 = require("./pagina04");
      pagina04(res, datos);
      break;

    case "->":
      datos = control.capturar(datos);
      await modelo.borrarPermisosRol(datos);
      datos = await modelo.obtenerPermisosRol(datos);
      pagina04 = require("./pagina04");
      pagina04(res, datos);
      break;

    default:
      pagina01 = require("./pagina01");
      break;
      break;
  }
}

router.get("/", getFuncion);
// Muestra el formulario para ingresar el usuario y la contraseña
async function getFuncion(req, res, next) {
  switch (req.body.btnAction) {
    default:
      //   console.log("Entro a default");
      var datos = {};
      datos = await modelo.recuperarRol();
      pagina01 = require("./pagina01");
      pagina01(res, datos);
      break;
  }
}

module.exports = router;
