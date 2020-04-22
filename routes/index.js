/******************************************
Treehouse Techdegree:
FSJS project 6 - Static Node.js and Express Site
******************************************/
const express = require("express");
const router = express.Router();
const { projects } = require("../data.json");

//Routes
router.get("/", (req, res) => {
    res.render("index", { projects });
});

router.get("/about", (req, res) =>{
    res.render("about");
});

router.get("/project", (req, res) => {
    res.redirect("/projects/0");
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
        res.render("project", { templateData });
    }
});

module.exports = router;