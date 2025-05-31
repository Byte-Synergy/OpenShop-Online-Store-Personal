fetch("./src/js/topSells.json")
  .then((res) => res.json())
  .then((topSells) => {
    const container = document.getElementById("topSell-list");

    topSells.forEach((topSell) => {
      container.innerHTML += `
          <div class="text-center border border-white hover:border hover:border-primary group">
            <img src="${topSell.image}" alt="${topSell.name}" class="mx-auto h-[200px] object-contain" />
            <h3 class="font-medium px-9">${topSell.name}</h3>
            <p class="text-gray-700">${topSell.price}$</p>
            <button class="bg-primary text-white px-12 py-3 mt-4 mb-4 invisible group-hover:visible">BUY</button>
          </div>
        `;
    });
  });
