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

//Disabling cache, so when the user hit the browser's back button it will request the page to the server, avoiding rendering problems
//ETag https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag
//If you have dynamic content which does not benefit from ETags, it's best to disable it because it incurs small overhead with each request.
// app.set("etag", false);
//Cache-Control https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control
//To completely disable cache
// app.use((req, res, next) => {
//     res.set('Cache-Control', 'no-store');
//     next();
// });


app.listen(3000);