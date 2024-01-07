window.addEventListener("load", function () {
    // --------------------섹션-1 텍스트--------------------
    let textP = document.querySelector(".text-box > p");
    let textSpan = document.querySelector(".text-box > span");
    let section = document.querySelector("#section-1");
    // 투명도 0 -> 1
    function textOparcity() {
        textP.style.opacity = 1;
        textSpan.style.opacity = 1;
    }
    // 초기 실행
    textOparcity();
    // 스크롤 시 사라지고 나타나게 하기
    window.addEventListener("scroll", function () {
        let sectionTop = section.getBoundingClientRect().top
        if (sectionTop < sectionTop / 2 - 100) {
            textP.style.opacity = 0;
            textSpan.style.opacity = 0;
        } else {
            textOparcity();
        };
    });

    // --------------------섹션-2--------------------
    gsap.registerPlugin(ScrollTrigger);
    // 라인 애니메이션
    gsap.to(".sassang", {
        scrollTrigger: {
            trigger: ".sassang",
            start: "top center",
            end: "bottom center",
            toggleClass: "draw"// 추가 또는 제거할 클래스
        }
    });

    // 텍스트 애니메이션
    let tl = gsap.timeline();
    tl.fromTo(".text-box-2", {
        opacity: 0,
        x: -1000
    }, {
        opacity: 1,
        x: 0,
        duration: 1
    }, "+=0.5")
    // 밑줄 라인
    .to(".border-line", {
        width: "90%"
    }, "-=0.25");
    // 스크롤 트리거 설정
    ScrollTrigger.create({
        trigger: "#section-2",
        start: "top center",
        end: "center-=100 center",
        animation: tl, // 위에서 만든 타임라인을 설정
        scrub: 5
    });
    // --------------------섹션-3--------------------
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#section-3",
            start: "top center",
            end: "center center",
            scrub: 1
        }
    });
    let clippingImg = document.querySelectorAll(".img-box-2 > img");
    clippingImg.forEach((item) => {
        tl2.fromTo(item, {
            opacity: 0,
        }, {
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
    });
});