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
        y: 1000
    }, {
        opacity: 1,
        y: 0,
        duration: 1
    })
        // 밑줄 라인
        .to(".border-line", {
            width: "90%"
        }, "-=0.3");
    // 스크롤 트리거 설정
    ScrollTrigger.create({
        trigger: "#section-2",
        start: "top center",
        end: "center-=100 center",
        animation: tl, // 위에서 만든 타임라인을 설정
        scrub: 5
    });
    // --------------------섹션-3--------------------
    let clippingImg = document.querySelectorAll(".img-box-2 > img");
    let text = document.querySelectorAll(".text-box-3 > p");
    // 초기화 (from 상태)
    gsap.set(clippingImg, { opacity: 0 });
    gsap.set(text, { opacity: 0 });
    // 이미지 & 텍스트 애니메이션
    function sectionThreeAni() {
        let tl = gsap.timeline();
        tl.to(clippingImg, {
            opacity: 1,
            stagger: 0.3,
        })
        .to(text, {
            opacity: 1,
            stagger: 0.3
        },"-=0.3");
        ScrollTrigger.create({
            trigger: "#section-3",
            start: "top center",
            end: "bottom center",
            toggleActions: "restart", // 재시작
            animation: tl, //스크롤트리거를 적용할 타임라인
            // onEnterBack: () => {
            //     tl.reverse(); // end 지점을 역방향으로 들어갈 때 애니메이션 재시작
            // },
            onLeaveBack: () => {
                tl.reverse(); // start 지점을 역방향으로 벗어날 때 호출될 함수
            }
        });
    }
    sectionThreeAni();

    // onEnter 애니메이션
    // function enterAni() {
    //     let tl = gsap.timeline();
    //     tl.to(clippingImg, {
    //         opacity: 1,
    //         stagger: 0.3,
    //     })
    //     .to(text, {
    //         opacity: 1,
    //         stagger: 0.2
    //     });
    // }
    // function leaveAni() {
    //     let tl = gsap.timeline();
    //     tl.to(text, {
    //         opacity: 0
    //     })
    //     .to(clippingImg, {
    //         opacity: 0,
    //         duration: 0.1
    //     });
    // }
    // // 스크롤 트리거
    // ScrollTrigger.create({
    //     trigger: "#section-3",
    //     start: "top center",
    //     end: "bottom top",
    //     markers: true,
    //     onEnter: () => {
    //         enterAni(); // 스크롤이 start할 때 호출될 함수
    //     },
    //     onLeaveBack: () => {
    //         leaveAni(); // 스크롤이 start 지점을 역방향 스크롤으로 벗어날 때 호출될 함수
    //     },
    //     onLeave: () => {
    //         leaveAni(); // end지점을 만났을 때 호출될 함수
    //     },
    //     onEnterBack: () => {
    //         enterAni(); // end지점을 역방향 스크롤로 들어갈 때 호출될 함수
    //     }
    // });
});