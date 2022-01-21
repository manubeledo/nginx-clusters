const express = require("express");
const serverRoutes = require("./routes/index");
const app = express();
const morgan = require('morgan')
const args = require('./utils/yargs')

// console.log(args)


const PORT = parseInt(process.env.watch) || 8081;

app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "./views/layouts");

serverRoutes(app);

app.listen(PORT, () =>
  console.log(`Servidor funcionando en http://localhost:${PORT}`)
);
