/******************************************
Treehouse Techdegree:
FSJS project 6 - Static Node.js and Express Site
******************************************/
(function(){
    const js_split_card_container = document.querySelector(".js_split_card_container");
    /***
    * Event Listener to make div container bigger for the split card animation
    ***/
    if(js_split_card_container){
        js_split_card_container.addEventListener("click", (event) => {
            js_split_card_container.classList.toggle("more-height");
        });
    }
})();