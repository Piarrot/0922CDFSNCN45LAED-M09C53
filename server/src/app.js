const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors("*"));

//Aquí llamo a la ruta de las api de movies
const apiMoviesRouter = require("./routes/api/movies");
//Aquí llamo a la ruta de las api de actors
const apiGenresRouter = require("./routes/api/genres");
//Aquí llamo a la ruta de las api de actors
const apiActorsRouter = require("./routes/api/actors");

//Aquí creo la colección de mis recursos de movies (APIs)
app.use("/api/movies", apiMoviesRouter);
app.use("/api/actors", apiActorsRouter);
app.use("/api/genres", apiGenresRouter);

//Activando el servidor desde express
app.listen("3001", () => console.log("Servidor corriendo en el puerto 3001"));
