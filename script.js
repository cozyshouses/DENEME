// Verileri JSON dosyasından yükleme
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const averageBtn = document.getElementById('average-btn');
    const districtSelect = document.getElementById('district-select');
    const averageResult = document.getElementById('average-result');

    averageBtn.addEventListener('click', () => {
      const selectedDistrict = districtSelect.value;
      const districtHouses = data.filter(
        house => house["İlçe"] === selectedDistrict
      );

      if (districtHouses.length === 0) {
        averageResult.textContent = 'Veri bulunamadı';
        return;
      }

      const totalPrice = districtHouses.reduce((sum, house) => {
        const price = parseFloat(house["Gecelik Fiyat"].replace('₺', '').replace(',', ''));
        return sum + price;
      }, 0);

      const averagePrice = totalPrice / districtHouses.length;
      averageResult.textContent = `${averagePrice.toFixed(2).replace('.', ',')} ₺`;
    });
  })
  .catch(error => console.error('Veri yüklenirken hata oluştu:', error));
