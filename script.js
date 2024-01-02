window.addEventListener("load", function(){
    let textP = document.querySelectorAll(".text-box > p");
    textP.forEach((item) => {
        item.style.opacity = 1;
    })
    let textSpan = document.querySelector(".text-box > span");
    textSpan.style.opacity = 1;
})