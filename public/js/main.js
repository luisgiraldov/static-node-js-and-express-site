(function(){
    const js_split_card_container = document.querySelector(".js_split_card_container");
    // const inputAnimation = document.getElementById("check");
    // if(inputAnimation){
    //     inputAnimation.addEventListener("change", (event) => {
    //         js_split_card_container.classList.toggle("more-height");
    //     });
    // }

    if(js_split_card_container){
        js_split_card_container.addEventListener("click", (event) => {
            js_split_card_container.classList.toggle("more-height");
        });
    }
})();