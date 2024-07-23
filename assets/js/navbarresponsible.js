document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".toggle_btn");
  const toggleBtnIcon = document.querySelector(".toggle_btn i");
  const dropdownMenu = document.querySelector(".dropdown_menu");

  toggleBtn.onclick = function () {
    dropdownMenu.classList.toggle("open");
    const isOpen = dropdownMenu.classList.contains("open");

    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  }

  // Cerrar el menú al hacer clic en un enlace dentro del menú
  document.querySelectorAll('.navbar-links a').forEach(link => {
    link.addEventListener('click', () => {
      dropdownMenu.classList.remove('open');
      toggleBtnIcon.classList = "fa-solid fa-bars";
    });
  });
});
