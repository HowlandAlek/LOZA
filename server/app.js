// Dependencias
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const config = require("./config");
const mongoose = require("mongoose");

const app = express();

// Conexion con la BD
mongoose
    .connect(config.db.connectionUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((db) => console.log("db connected"))
    .catch((err) => console.log(err));

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
const wishlistRoutes = require("../routes/routewishlist");
const cartRoutes = require("../routes/routecart");
const consultaRoutes = require("../routes/routeconsulta");
const accountRoutes = require ("../routes/routeaccount");

// Configuraciones
app.set("port", config.app.port);
app.use(express.static("public"));
app.set("views", "views");
app.set("view engine", "ejs");

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use("/", indexRoutes);
app.use("/producto", productoRoutes);
app.use("/login", loginRoutes);
app.use("/signup", signupRoutes);
app.use("/breakingbad", breakginbadRoutes);
app.use("/marvel", marvelRoutes);
app.use("/mrrobot", mrrobotRoutes);
app.use("/naruto", narutoRoutes);
app.use("/starwars", starwarsRoutes);
app.use("/wishlist", wishlistRoutes);
app.use("/cart", cartRoutes);
app.use("/consulta", consultaRoutes);
app.use("/account", accountRoutes);

// Listener
app.listen(app.get("port"), () => {
    console.log(`Server on port: ${app.get("port")}`);
});
