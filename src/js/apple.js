fetch('./js/apple.json')
    .then(res => res.json())
    .then(apple => {
      const container = document.getElementById('apple-list');

      apple.forEach(applePhone => {
        container.innerHTML += `
          <div class="text-center border border-white hover:border hover:border-primary group cursor-pointer" onclick="location.href='./apple.html'">
            <img src="${applePhone.image}" alt="${applePhone.name}" class="mx-auto mb-2 h-[200px] object-contain" />
            <h3 class="font-medium px-9">${applePhone.name}</h3>
            <p class="text-gray-700">${applePhone.price}$</p>
            <button class="bg-primary text-white px-12 py-3 mt-4 mb-4 invisible group-hover:visible">BUY</button>
          </div>
        `;
      });
    });