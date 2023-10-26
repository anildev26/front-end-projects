var crsr = document.getElementById("#cursor");


gsap.to("#nav", {
    backgroundColor: "#000",
    height: "85px",
    duration: 0.5,
    scrollTrigger :{
        trigger: "#nav",
        scroll: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroll: "body",
        start: "top -30%",
        end: "top -90%",
        markers: true,
        scrub: 2
    }
})