// Highlight the active navigation link
const navLinks = document.querySelectorAll('.admin-nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Demo: Show alert for panel buttons
const panelBtns = document.querySelectorAll('.admin-panel-btn');
panelBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        alert('This is a demo button. Functionality not implemented.');
    });
});