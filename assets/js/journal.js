document.addEventListener('DOMContentLoaded', function () {
    const dayHeaders = document.querySelectorAll('.day-header');

    dayHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            if (!content || !content.classList.contains('day-content')) return;

            const isActive = content.classList.contains('active');

            document.querySelectorAll('.day-content').forEach(c => c.classList.remove('active'));
            document.querySelectorAll('.day-header').forEach(h => h.classList.remove('active'));

            if (!isActive) {
                content.classList.add('active');
                this.classList.add('active');
            }
        });
    });
});
