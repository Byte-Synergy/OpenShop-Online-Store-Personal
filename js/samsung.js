fetch("./js/samsung.json")
  .then((res) => res.json())
  .then((samsung) => {
    const container = document.getElementById("samsung-list");

    samsung.forEach((samsungPhone) => {
      container.innerHTML += `
          <div class="text-center border border-white hover:border hover:border-primary group">
            <img src="${samsungPhone.image}" alt="${samsungPhone.name}" class="mx-auto mb-2 h-[200px] object-contain" />
            <h3 class="font-medium px-9">${samsungPhone.name}</h3>
            <p class="text-gray-700">${samsungPhone.price}$</p>
            <button class="bg-primary text-white px-12 py-3 mt-4 mb-4 invisible group-hover:visible">BUY</button>
          </div>
        `;
    });
  });
