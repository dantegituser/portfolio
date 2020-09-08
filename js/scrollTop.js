export class ScrollTop {
    constructor() {
        gsap.registerPlugin(ScrollTrigger);
        gsap.defaults({ ease: "none", duration: 2 });
        this.tl = gsap.timeline();
        this.tl2 = gsap.timeline();
        this.iniciarScrolltrigger();

    }

    iniciarScrolltrigger() {
        console.log('iniciado scroller');
        this.tl.set('.work-section', { xPercent: -100 });
        this.tl
            .from(".about-section", { yPercent: -100 })
            .to(".work-section", { xPercent: 0 })
            .from(".skills-section", { yPercent: -100 })
            .from(".contact-section", { yPercent: -100 });



        ScrollTrigger.create({
            animation: this.tl,
            trigger: ".general-wrapper",
            start: "top top",
            end: "+=4000",
            scrub: true,
            pin: true,
        });


    }

}