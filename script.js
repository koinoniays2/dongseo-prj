window.addEventListener("load", function(){
    let textP = document.querySelectorAll(".text-box > p");
    textP.forEach((item) => {
        item.style.opacity = 1;
    })
    let textSpan = document.querySelector(".text-box > span");
    textSpan.style.opacity = 1;

    window.addEventListener("scroll", function(){
        let sassang = document.querySelector('.sassang');
        if(sassang.getBoundingClientRect().top===0) {
            sassang.classList.add("draw");
        }else {
            sassang.classList.remove("draw");
        }
    });
})