/******************************************
Treehouse Techdegree:
FSJS project 6 - Static Node.js and Express Site
******************************************/
const express = require("express");
const app = express();
//setting port for heroku, it takes either the port used by the env or 3000
const port = process.env.PORT || 3000;
//middleware to serve the static files in the public folder
app.use("/static", express.static("public"));
//set the view engine to look for pug files
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
console.log("App running on port: " + port);
app.listen(port);