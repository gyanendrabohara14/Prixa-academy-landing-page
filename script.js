document.addEventListener('DOMContentLoaded', () => {
    
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

 
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        const arrow = item.querySelector('.accordion-arrow');

        const setInitialState = () => {
            if (item.getAttribute('data-open') === 'true') {
                content.style.maxHeight = content.scrollHeight + 20 + 'px';
                arrow.textContent = '^';
            } else {
                content.style.maxHeight = null;
                arrow.textContent = 'v';
            }
        };

        setInitialState();

        header.addEventListener('click', () => {
            const isOpen = item.getAttribute('data-open') === 'true';

            if (isOpen) {
                item.setAttribute('data-open', 'false');
                content.style.maxHeight = null;
                arrow.textContent = 'v';
                header.setAttribute('aria-expanded', 'false');
            } else {
                accordionItems.forEach(otherItem => {
                    if (otherItem.getAttribute('data-open') === 'true') {
                        const otherContent = otherItem.querySelector('.accordion-content');
                        otherItem.setAttribute('data-open', 'false');
                        otherContent.style.maxHeight = null;
                        otherItem.querySelector('.accordion-arrow').textContent = 'v';
                        otherItem.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
                    }
                });

                item.setAttribute('data-open', 'true');
                content.style.maxHeight = content.scrollHeight + 20 + 'px';
                arrow.textContent = '^';
                header.setAttribute('aria-expanded', 'true');
            }
        });

        window.addEventListener('resize', () => {
            if (item.getAttribute('data-open') === 'true') {
                content.style.maxHeight = content.scrollHeight + 20 + 'px';
            }
        });
    });

   
    const enrollFormUrl = 'https://forms.gle/mghH7wD19GL1CfTs5';

    const enrollButtons = document.querySelectorAll(
        '.btn-enroll, .pricing-card .btn-primary, .btn-scholarship'
    );

    enrollButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            window.open(enrollFormUrl, '_blank');
        });
    });

   
    const whatsappNumber = '9779704598963'; 
    const defaultMessage = 'Hello, I would like a free consultation about the Digital Marketing program.';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

    const consultButtons = document.querySelectorAll('.btn-consult');

    consultButtons.forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            window.open(whatsappLink, '_blank');
        });
    });
});


const videos = document.querySelectorAll('.hover-play');

videos.forEach(video => {
    let playTimer;

    video.addEventListener('mouseenter', () => {
        // Start the 3-second countdown
        playTimer = setTimeout(() => {
            
            // NEW: Pause all other videos before playing this one
            videos.forEach(v => {
                if (v !== video) {
                    v.pause();
                }
            });

            video.play();
        }, 3000); 
    });

    video.addEventListener('mouseleave', () => {
        clearTimeout(playTimer);
        video.pause();
        // Optional: Reset to start so the poster image shows again
        video.currentTime = 0; 
    });
});