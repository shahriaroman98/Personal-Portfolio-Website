var circle = document.querySelector(".circle");
var navbar = document.querySelector(".navbar");
var navRight = document.querySelector(".navRight");


window.addEventListener("mousemove", function(dets){
    gsap.to(circle, {
        x: dets.clientX,
        y: dets.clientY,
        duration: 0.2,
        ease: Expo
    })
})




navRight.addEventListener("mousemove", function(dets){
    gsap.to(circle, {
        scale: 5
    })
})

navRight.addEventListener("mouseleave", function(dets){
    gsap.to(circle, {
        scale: 1
    })
})



navbar.addEventListener("mousemove", function(dets){
    gsap.to(circle, {
        scale: 5
    })
})

navbar.addEventListener("mouseleave", function(dets){
    gsap.to(circle, {
        scale: 1
    })
})