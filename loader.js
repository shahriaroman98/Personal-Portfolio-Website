var tl = gsap.timeline()

tl.from(".loader h1",{
    y:-200,
    opacity:0,
    duration:1,
    stagger:0.5
})
tl.to(".loader h1",{
    y:200,
    opacity:0,
    duration:1,
    delay:0.3,
    stagger:0.5
})
tl.to(".loader",{
    top:"-100vh",
    duration:0.7
})







