import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";

import "./db/dbConnect.js"; // Certifique-se de que essa conexão está funcionando corretamente

const app = express();
const porta = process.env.PORT || 3000; // Atualizado para `process.env.PORT`

// Caminho para os arquivos estáticos
const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico = path.join(caminhoAtual, "../..", "public");
app.use(express.static(diretorioPublico));

// Criação do servidor HTTP
const servidorHttp = http.createServer(app);

// Configuração do Socket.io
const io = new Server(servidorHttp);

// Manipulando a conexão do Socket.io
io.on("connection", (socket) => {
  console.log("Novo cliente conectado!");

  // Aqui você pode definir eventos personalizados
  socket.on("mensagem", (dados) => {
    console.log("Mensagem recebida:", dados);
    // Pode enviar uma resposta de volta ao cliente se necessário
    socket.emit("resposta", { mensagem: "Recebido com sucesso!" });
  });

  // Evento de desconexão
  socket.on("disconnect", () => {
    console.log("Cliente desconectado!");
  });
});

// Iniciando o servidor
servidorHttp.listen(porta, () => {
  console.log(`Servidor escutando na porta ${porta}`);
});

export default io;
