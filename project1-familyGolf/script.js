var crsr = document.getElementById("cursor");
var crsrBlur = document.getElementById("cursor-blur")
document.addEventListener("mousemove", function(e){
 console.log(crsr);
    var crsrL = crsr.style.left = e.x+"px"
    var crsrT = crsr.style.top = e.y+"px"
    crsrBlur.style.left = e.x-240+"px"
    crsrBlur.style.top = e.y-240+"px"

})


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
        // markers: true,
        scrub: 2
    }
})