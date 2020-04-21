const express = require("express");
const app = express();

app.use("/static", express.static("public"));
app.set("view engine", "pug");

//importing the routes file (index.js)
const mainRoutes = require("./routes");
//make use of the routes
app.use(mainRoutes);
//This middleware will just be responsible for creating the error object and handing off to the error handler (REDIRECTING TO THE 404 ERROR)
app.use((req,res,next) => {
    const err = new Error("Not found!");
    err.status = 404;
    next(err);
});

//if an error is passed to the middleware, the middleware will look for this and it will render the error template (THIS IS THE ERROR HANDLER)
app.use((err, req, res, next)=>{
    res.locals.error = err;
    res.locals.image = "/static/images/not-found.jpg";
    res.status(err.status);
    res.render("error");
});

app.listen(3000);