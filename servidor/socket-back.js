import "dotenv/config";

import registrarEventosDocumento from "./resgistraEventos/Documento.js";
import registrarEventosInicio from "./resgistraEventos/Inicio.js";
import registrarEventosCadastro from "./resgistraEventos/Cadastro.js";
import registrarEventosLogin from "./resgistraEventos/login.js";

import io from "./servidor.js";

io.on("connection", (socket) => {

  registrarEventosCadastro(socket, io);
  registrarEventosLogin(socket, io);
  registrarEventosInicio(socket, io);
  registrarEventosDocumento(socket, io);
});
