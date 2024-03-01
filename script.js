// gsap.to(".page2",{
//     scale: 1.3,
//     scrollTrigger:{
//         trigger:".page2",
//         scroller:".main",
//         start:"top 0%",
//         end:"top 100%",
//         scrub:3,
//         pin:true
//     }
// })



//Project Section

gsap.to(".page3 h1",{
    transform: "translateX(-310%)",
    fontWeight:"50",
    scrollTrigger:{
        trigger:".page3",
        scroller:".main",
        start:"top 0",
        end:"top -200%",
        scrub:3,
        pin:true
    }
})

