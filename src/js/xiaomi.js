fetch('./js/xiaomi.json')
    .then(res => res.json())
    .then(xiaomi => {
      const container = document.getElementById('xiaomi-list');

      xiaomi.forEach(xiaomiPhone => {
        container.innerHTML += `
          <div class="text-center border border-white hover:border hover:border-primary group">
            <img src="${xiaomiPhone.image}" alt="${xiaomiPhone.name}" class="mx-auto mb-2 h-[200px] object-contain" />
            <h3 class="font-medium px-9">${xiaomiPhone.name}</h3>
            <p class="text-gray-700">${xiaomiPhone.price}$</p>
            <button class="bg-primary text-white px-12 py-3 mt-4 mb-4 invisible group-hover:visible">BUY</button>
          </div>
        `;
      });
    });