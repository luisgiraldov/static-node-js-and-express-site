(function(){
    const js_split_card_container = document.querySelector(".js_split_card_container");
    if(js_split_card_container){
        js_split_card_container.addEventListener("click", (event) => {
            js_split_card_container.classList.toggle("more-height");
        });
    }
})();