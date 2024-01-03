window.addEventListener("load", function(){
    let textP = document.querySelector(".text-box > p");
    let textSpan = document.querySelector(".text-box > span");
    let section = document.querySelector("#section-1");
    function sectionOparcity() {
        textP.style.opacity = 1;
        textSpan.style.opacity = 1;
    }
    sectionOparcity();
    window.addEventListener("scroll", function() {
        let sectionTop = section.getBoundingClientRect().top
        if(sectionTop < sectionTop/2 -100) {
            textP.style.opacity = 0;
            textSpan.style.opacity = 0;
        }else {
            sectionOparcity();
        };
    });
});
gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline();
// 이미지 라인
gsap.to(".sassang", {
    scrollTrigger: {
        trigger: ".sassang",
        start: "top center",
        end: "bottom center",
        toggleClass: "draw"// 추가 또는 제거할 클래스
        }
    });
// 텍스트
tl.fromTo(".text-box-2", {
    opacity: 0,
    y: "500",
},{ opacity: 1,
    y: "0",
    duration: 1
})
// 라인
.from(".border-line", {
    width: 0,
});
// 스크롤 트리거 설정
ScrollTrigger.create({
    trigger: "#section-2",
    start: "top center",
    end: "center center",
    animation: tl, // 위에서 만든 타임라인을 설정
    scrub: 3
});