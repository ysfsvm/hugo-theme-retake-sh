document.addEventListener('DOMContentLoaded', function () {
    const tocLinks = document.querySelectorAll('.toc-sidebar a');
    const sections = document.querySelectorAll('.post-content h1, .post-content h2, .post-content h3, .post-content h4, .post-content h5, .post-content h6');

    if (tocLinks.length > 0 && sections.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -80% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    tocLinks.forEach(link => link.classList.remove('active'));

                    const id = entry.target.getAttribute('id');
                    const activeLink = document.querySelector(`.toc-sidebar a[href="#${id}"]`);

                    if (activeLink) {
                        activeLink.classList.add('active');

                        const container = document.querySelector('.toc-container');
                        if (container) {
                            const top = activeLink.offsetTop;
                            const containerHeight = container.clientHeight;
                            const linkHeight = activeLink.clientHeight;

                            container.scrollTo({
                                top: top - (containerHeight / 2) + (linkHeight / 2),
                                behavior: 'smooth'
                            });
                        }
                    }
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
    }
});
