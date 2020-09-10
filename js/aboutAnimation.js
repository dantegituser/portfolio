export class About {
    constructor() {
        this.elemento = document.querySelector('section.about-section');
        this.observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting === true)
                console.log('Element is fully visible in screen');
            this.iniciarAnimacion();
        }, { threshold: [1] });
        this.observer.observe(this.elemento);

        this.tl = gsap.timeline({ paused: true });
        this.tl.to('.letras-nombre:nth-child(1)', { duration: 0.2, top: '0%', left: '60%', })
            .to('.letras-nombre:nth-child(2)', { duration: 0.2, top: '10%', left: '10%' }, "-=0.1")
            .to('.letras-nombre:nth-child(3)', { duration: 0.2, top: '90%', left: '50%' }, "-=0.1")
            .to('.letras-nombre:nth-child(4)', { duration: 0.2, top: '20%', left: '20%' }, "-=0.1")
            .to('.letras-nombre:nth-child(5)', { duration: 0.2, top: '80%', left: '60%' }, "-=0.1")
            .to('.letras-nombre:nth-child(6)', { duration: 0.2, top: '30%', left: '10%' }, "-=0.1")
            .to('.letras-nombre:nth-child(7)', { duration: 0.2, top: '70%', left: '40%' }, "-=0.1")
            .to('.letras-nombre:nth-child(8)', { duration: 0.2, top: '40%', left: '20%' }, "-=0.1")
            .to('.letras-nombre:nth-child(9)', { duration: 0.2, top: '80%', left: '60%' }, "-=0.1")
            .to('.letras-nombre:nth-child(10)', { duration: 0.2, top: '90%', left: '10%' }, "-=0.1")
            .to('.letras-nombre:nth-child(11)', { duration: 0.2, top: '20%', left: '50%' }, "-=0.1")
            .to('.letras-nombre:nth-child(12)', { duration: 0.2, top: '90%', left: '20%' }, "-=0.1")
            .to('.letras-nombre:nth-child(13)', {
                duration: 0.2,
                top: '10%',
                left: '60%',
                onComplete: () => {
                    setTimeout(() => {
                        this.tl.reverse();
                    }, 2000);

                }
            }, "-=0.1")
            .to('.about-image', {
                duration: 1,
                autoAlpha: 1
            }, "-=2");





        // window.addEventListener('scroll', () => {
        //     if (window.scrollY == 1000) {
        //         this.iniciarAnimacion();
        //     }
        // });

    }

    iniciarAnimacion() {
        this.tl.play();

    }

}