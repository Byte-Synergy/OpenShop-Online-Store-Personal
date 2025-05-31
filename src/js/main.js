const toggles = document.querySelectorAll(".dropdown-toggle");
const menus = document.querySelectorAll(".dropdown-menu");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    toggles.forEach((t) => t.classList.remove("underline"));
    toggle.classList.add("underline");

    const currentMenu = toggle.nextElementSibling;

    // Закрыть все меню, кроме текущего
    menus.forEach((menu) => {
      if (menu !== currentMenu) menu.classList.add("hidden");
    });

    // Переключить текущее меню
    currentMenu.classList.toggle("hidden");
  });
});

// Закрыть все при клике вне
document.addEventListener("click", () => {
  menus.forEach((menu) => menu.classList.add("hidden"));
  toggles.forEach((toggle) => toggle.classList.remove("underline"));
});

// Swiper 
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// pagination of phones.html
   const paginationEl = document.getElementById("pagination");
      const totalPages = 6;
      let currentPage = 2;

      function renderPagination() {
        paginationEl.innerHTML = "";

        const createPageBtn = (label, page, isActive = false) => {
          const btn = document.createElement("a");
          btn.href = "#";
          btn.textContent = label;
          btn.className =
            "px-4 py-2 border text-sm " +
            (isActive
              ? "bg-primary text-white border-primary cursor-pointer"
              : "text-gray-600 hover:bg-gray-200");
          btn.addEventListener("click", (e) => {
            e.preventDefault();
            if (page >= 1 && page <= totalPages) {
              currentPage = page;
              renderPagination();
            }
          });
          return btn;
        };

        paginationEl.appendChild(createPageBtn("«", currentPage - 1));

        for (let i = 1; i <= totalPages; i++) {
          paginationEl.appendChild(createPageBtn(i, i, i === currentPage));
        }

        paginationEl.appendChild(createPageBtn("»", currentPage + 1));
      }

      renderPagination();