// Verileri JSON dosyasından yükleme
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const calculateBtn = document.getElementById('calculate-btn');
    const districtSelect = document.getElementById('district-select');
    const averageResult = document.getElementById('average-result');

    calculateBtn.addEventListener('click', () => {
      const selectedDistrict = districtSelect.value;

      if (!selectedDistrict) {
        averageResult.textContent = 'Lütfen bir ilçe seçin';
        return;
      }

      const filteredHouses = data.filter(house => house["İlçe"] === selectedDistrict);

      if (filteredHouses.length === 0) {
        averageResult.textContent = 'Bu ilçede veri bulunamadı';
        return;
      }

      const totalPrice = filteredHouses.reduce((sum, house) => {
        const price = parseFloat(house["Gecelik Fiyat"].replace('₺', '').replace(',', ''));
        return sum + price;
      }, 0);

      const averagePrice = totalPrice / filteredHouses.length;
      averageResult.textContent = `${averagePrice.toFixed(2).replace('.', ',')} ₺`;
    });
  })
  .catch(error => console.error('Veri yüklenirken hata oluştu:', error));
