const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes')
const { setupWebSocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect('mongodb+srv://admin:admin@nofood-0xnxi.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors())
app.use(express.json());
app.use(routes);

// Tipos de parâmetros

// Query params: request.query (FIltros, ordenação, paginação)
// Route params: request.params (Identificar um recurso na alteração ou remoção)
// body: request.body (Dados para criação ou alteração de um registro)

// MongoDB

server.listen(3333);