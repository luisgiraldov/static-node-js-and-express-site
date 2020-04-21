const express = require("express");
const router = express.Router();
const { projects } = require("../data.json");

//when there is a request on the root url returns this template from the views folder
router.get("/", (req, res) => {
    res.render("index", { projects });
});

router.get("/about", (req, res) =>{
    res.render("about");
});

router.get("/projects", (req, res) => {
    res.redirect("/projects/0");
});

router.get("/projects/:id", (req, res, next) =>{
    const { id } = req.params;
    if( id > projects.length || isNaN(id)){
        const err = new Error("Not found!");
        err.status = 404;
        next(err);
    } else {
        templateData = projects[id];
        console.log(templateData);
        res.render("project", { templateData });
    }
});

module.exports = router;