window.addEventListener("load", function () {
    // ----------섹션-1 텍스트----------
    let textP = document.querySelector(".text-box > p");
    let textSpan = document.querySelector(".text-box > span");
    let section = document.querySelector("#section-1");
    function sectionOparcity() {
        textP.style.opacity = 1;
        textSpan.style.opacity = 1;
    }
    sectionOparcity();
    window.addEventListener("scroll", function () {
        let sectionTop = section.getBoundingClientRect().top
        if (sectionTop < sectionTop / 2 - 100) {
            textP.style.opacity = 0;
            textSpan.style.opacity = 0;
        } else {
            sectionOparcity();
        };
    });
});
// ----------섹션-2----------
// 라인 애니메이션
gsap.to(".sassang", {
    scrollTrigger: {
        trigger: ".sassang",
        start: "top center",
        end: "bottom center",
        toggleClass: "draw"// 추가 또는 제거할 클래스
    }
});
gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline();
// 텍스트
tl.fromTo(".text-box-2", {
    opacity: 0,
    y: "500"
}, {
    opacity: 1,
    y: "0",
    delay: 0.5
})
// 밑줄 라인
tl.to(".border-line", {
    width: "100%",
});
// 스크롤 트리거 설정
ScrollTrigger.create({
    trigger: "#section-2",
    start: "top center",
    end: "center center",
    animation: tl, // 위에서 만든 타임라인을 설정
    scrub: 4
});
// ----------섹션-2----------
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#section-3",
        start: "top center",
        end: "center center",
        scrub: 5
    }
});
let clippingImg = document.querySelectorAll(".img-box-2 > img");
clippingImg.forEach((item) => {
    tl2.fromTo(item, {
        scale: 5,
        opacity: 0
    }, {
        scale: 1,
        opacity: 1
    })
});
let text3 = document.querySelectorAll(".text-box-3 > p");
text3.forEach((item) => {
    tl2.fromTo(item, {
        opacity: 0,
    }, {
        opacity: 1
    })
})