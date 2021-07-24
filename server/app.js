// Dependencias
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const config = require("./config");

const app = express();

// Importar rutas
const indexRoutes = require("../routes/routeindex");
const productoRoutes = require("../routes/routeproducto");
const loginRoutes = require("../routes/routelogin");
const signupRoutes = require("../routes/routesignup");
const breakginbadRoutes = require("../routes/routebreakingbad");
const marvelRoutes = require("../routes/routemarvel");
const mrrobotRoutes = require("../routes/routemrrobot");
const narutoRoutes = require("../routes/routenaruto");
const starwarsRoutes = require("../routes/routestarwars");

// Configuraciones
app.set("port", config.app.port);
app.set("views", "views");
app.set("view engine", "ejs");
//app.use(express.static(path.join(__dirname)));

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/", indexRoutes);
app.use("/producto", productoRoutes);
app.use("/login", loginRoutes);
app.use("/signup", signupRoutes);
app.use("/breakingbad", breakginbadRoutes);
app.use("/marvel", marvelRoutes);
app.use("/mrrobot", mrrobotRoutes);
app.use("/naruto", narutoRoutes);
app.use("/starwars", starwarsRoutes);

//Listener
app.listen(app.get("port"), () => {
  console.log(`Server on port: ${app.get("port")}`);
});
