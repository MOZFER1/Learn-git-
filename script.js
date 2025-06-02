// Tab switching logic
document.addEventListener("DOMContentLoaded", () => {
  // Tab switching
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

  // Style button selection
  const styleBtns = document.querySelectorAll('.style-buttons button');
  styleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      styleBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });

  // Dropdown toggle on click
  const userMenu = document.querySelector('.user-menu');
  const dropdown = userMenu?.querySelector('.dropdown');
  const dropdownArrow = userMenu?.querySelector('.dropdown-arrow');
  let isOpen = false;

  if (userMenu && dropdown) {
    userMenu.addEventListener('click', (e) => {
      e.stopPropagation();
      isOpen = !isOpen;
      dropdown.style.display = isOpen ? 'block' : 'none';
      if (dropdownArrow) {
        dropdownArrow.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
      }
    });

    document.addEventListener('click', (e) => {
      if (!userMenu.contains(e.target)) {
        isOpen = false;
        dropdown.style.display = 'none';
        if (dropdownArrow) {
          dropdownArrow.style.transform = 'rotate(0deg)';
        }
      }
    });
  }
});


 
// Toggle between tabs in the Gallery
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".gallery-tabs .tab");
  const gallerySection = document.querySelector(".gallery-empty");
  const headerTitle = gallerySection.querySelector("h2");
  const message = gallerySection.querySelector(".empty-content p");
  const image = gallerySection.querySelector(".empty-content img");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs
      tabs.forEach((t) => t.classList.remove("active"));
      // Add active to clicked tab
      tab.classList.add("active");

      // Change content dynamically based on tab
      if (tab.textContent.includes("My Content")) {
        headerTitle.textContent = "Your Creations (0)";
        image.src = "no-content-icon.png"; // أو أيقونة خاصة بك
        message.textContent = "Start creating your first AI-generated content!";
      } else if (tab.textContent.includes("Community")) {
        headerTitle.textContent = "Community Showcase";
        image.src = "community-icon.png"; // تأكد أنك وضعت هذه الصورة أو بدّلها
        message.textContent = "Explore content shared by other creators.";
      }
    });
  });
});
