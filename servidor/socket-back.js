import "dotenv/config";

import registrarEventosDocumento from "./resgistraEventos/Documento.js";
import registrarEventosInicio from "./resgistraEventos/Inicio.js";
import registrarEventosCadastro from "./resgistraEventos/Cadastro.js";
import registrarEventosLogin from "./resgistraEventos/login.js";

import io from "./servidor.js";
import autorizarUsuario from "./middlewares/autorizarUsuario.js";

const nspUsuarios = io.of("/usuarios");

nspUsuarios.use(autorizarUsuario);

nspUsuarios.on("connection", (socket) => {
  registrarEventosInicio(socket, nspUsuarios);
  registrarEventosDocumento(socket, nspUsuarios);
})

io.of("/").on("connection", (socket) => {
  registrarEventosCadastro(socket, io);
  registrarEventosLogin(socket, io);
});
