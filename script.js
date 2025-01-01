// Verileri JSON dosyasından yükleme
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const houseList = document.getElementById('house-list');
    data.forEach(item => {
      const houseCard = document.createElement('div');
      houseCard.className = 'house-card';
      
      houseCard.innerHTML = `
        <h2>${item["Ev İsmi"]}</h2>
        <p><strong>Gecelik Fiyat:</strong> ${item["Gecelik Fiyat"]}</p>
        <p><strong>Ev Tipi:</strong> ${item["Ev Tipi"]}</p>
        <p><strong>İlçe:</strong> ${item["İlçe"]}</p>
        <a href="https://${item["Profil URL"]}" target="_blank">Detaylı Bilgi</a>
      `;
      houseList.appendChild(houseCard);
    });
  })
  .catch(error => console.error('Veri yüklenirken hata oluştu:', error));
