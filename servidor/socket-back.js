
import registrarEventosDocumento from "./resgistraEventos/Documento.js";
import registrarEventosInicio from "./resgistraEventos/Inicio.js";
import registrarEventosCadastro from "./resgistraEventos/Cadastro.js";
import io from "./servidor.js";

io.on("connection", (socket) => {

  registrarEventosInicio(socket, io);
  registrarEventosDocumento(socket, io);
  registrarEventosCadastro(socket, io);

});
