const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("jobs.json");
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
// console.log("")
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
