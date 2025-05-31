fetch("./src/js/laptops.json")
  .then((res) => res.json())
  .then((laptops) => {
    const container = document.getElementById("laptop-list");

    laptops.forEach((laptop) => {
      container.innerHTML += `
          <div class="text-center border border-white hover:border hover:border-primary group">
            <img src="${laptop.image}" alt="${laptop.name}" class="mx-auto mb-2 h-[200px] object-contain" />
            <h3 class="font-medium px-9">${laptop.name}</h3>
            <p class="text-gray-700">${laptop.price}$</p>
            <button class="bg-primary text-white px-12 py-3 mt-4 mb-4 invisible group-hover:visible">BUY</button>
          </div>
        `;
    });
  });
