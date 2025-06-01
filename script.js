// Tab switching logic
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    tabContents.forEach(tc => tc.style.display = 'none');
    document.getElementById(btn.dataset.tab).style.display = '';
  });
});

// Style button selection logic
const styleBtns = document.querySelectorAll('.style-buttons button');
styleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    styleBtns.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  });
});

// Dropdown menu logic for user menu
const userMenu = document.querySelector('.user-menu');
const dropdown = document.querySelector('.dropdown');
if(userMenu && dropdown) {
  userMenu.addEventListener('mouseenter', () => {
    dropdown.style.display = 'block';
  });
  userMenu.addEventListener('mouseleave', () => {
    dropdown.style.display = 'none';
  });
}