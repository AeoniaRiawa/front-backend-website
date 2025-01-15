const card = document.querySelector('.card');

        card.addEventListener('mouseenter', () => {
            gsap.to(card, { scale: 1.1, duration: 0.3 });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, { scale: 1, duration: 0.3 });
        });