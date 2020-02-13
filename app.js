const   express = require("express"),
        app     = express();
const   landingRoutes = require("./routes/landingpage/landingpage");
const   reviewsRoutes = require("./routes/reviews/index");
app.use(express.static(__dirname + "/publics"));
app.set("view engine", "pug");
app.use("/",landingRoutes);
app.use("/reviews",reviewsRoutes );

app.listen(3000,()=> console.log("the hellsite has started"));