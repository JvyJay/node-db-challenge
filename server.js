const express = require('express');

const projectsRouter = require('./routes/projectsRouter.js');
const resourcesRouter = require('./routes/resourcesRouter.js');

const server = express();

server.use(express.json());
server.use('/api/project', projectsRouter);
server.use('/api/resource', resourcesRouter);

module.exports = server;
