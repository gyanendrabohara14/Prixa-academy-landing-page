document.addEventListener('DOMContentLoaded', () => {
    // -----------------------------------------------------
    // Mobile Menu Logic
    // -----------------------------------------------------
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // -----------------------------------------------------
    // FAQ Accordion Logic
    // -----------------------------------------------------
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

    // -----------------------------------------------------
    // Enrollment Logic (Google Form)
    // -----------------------------------------------------
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

    // -----------------------------------------------------
    // WhatsApp Logic (Free Consultation)
    // -----------------------------------------------------
    const whatsappNumber = '9779704598963'; 
    const defaultMessage = 'Hello, I would like a free consultation about the Digtal Marketing program.';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

    const consultButtons = document.querySelectorAll('.btn-consult');

    consultButtons.forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            window.open(whatsappLink, '_blank');
        });
    });
});