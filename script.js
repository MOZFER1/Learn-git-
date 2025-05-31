// Toggle active state for type buttons
const typeBtns = document.querySelectorAll('.type-btn');
typeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        typeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// Prevent form submission for demo
const form = document.querySelector('.content-form');
if(form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('هذه مجرد واجهة تجريبية. لم يتم تنفيذ إنشاء المحتوى بعد.');
    });
}