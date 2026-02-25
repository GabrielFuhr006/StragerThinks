// Scroll Suave- Animações - Animações com Rolagem //
gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);

ScrollSmoother.create({
    smooth: 1,
    effects: true,
});

function animatePage() {
    // Animações Hero
gsap.from(".hero", {
    opacity: 0,
    duration: 2,
    
});

gsap.from("picture:nth-child(2)", {
    y: 80,
    duration: 1.5,
});

gsap.from("picture:nth-child(1)", {
    y: -80,
    duration: 1.5,
});

// Animações Cards
gsap.from(".card", {
    opacity: 0,    
    filter: "blur(15px)",
    stagger: .3,
    scrollTrigger: {
        trigger: ".cards", 
        start: "0% 75%",
        end: "100% 70%",
        scrub: true,
    }
});

gsap.from(".sectionThankYou ul li", {
    opacity: 0, 
    x: 40,
    filter: "blur(10px)",
    stagger: .3,
    scrollTrigger: {
        trigger: ".sectionThankYou ul",
        start: "0% 70%",
        end: "100% 45%",
        scrub: true,
    }
});

// Animações Footer
gsap.from("footer", {
    y: "-35%",
    immediateRender: false,
    scrollTrigger: {
        trigger: "footer", 
        scrub: true,
        invalidateOnRefresh: true,
        end: "100% 100%",
    }    
});

// Todos elementos selecionados com classe .animationText 
const textSplit = document.querySelectorAll(".animationText");

// Animação separadamente por forEach
textSplit.forEach((animationSplitText) => {
    const split = SplitText.create(animationSplitText,{
    type: "lines, words, chars",
    mask: "lines",
});

    gsap.from(split.chars,{
        y: "30%",
        opacity: 0,
        duration: 0.3,
        stagger: .04,
        scrollTrigger: animationSplitText,
    });
})

}

// Preloader -> Timeline
const tl = gsap.timeline({
    onComplete(){
        animatePage()
        gsap.to("#preLoader",{
            opacity: 0, 
            display: "none",
        })
    }
});

tl.to("#preLoader path", {
    duration: 1,
    strokeDashoffset: 0,
})
tl.to("#preLoader path", {
    fill:" rgb(168, 19, 19)",
    duration: .5,
    strokeDashoffset: 0,
})


