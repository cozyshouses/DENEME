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

      // Seçilen ilçedeki evleri filtrele
      const filteredHouses = data.filter(house => house["İlçe"] === selectedDistrict);

      if (filteredHouses.length === 0) {
        averageResult.textContent = 'Bu ilçede veri bulunamadı';
        return;
      }

      // Gecelik fiyatları sayıya dönüştür ve toplamını al
      const totalPrice = filteredHouses.reduce((sum, house) => {
        const price = house["Gecelik Fiyat"]
          .replace('₺', '') // ₺ sembolünü kaldır
          .replace(/\./g, '') // Binlik ayraçları kaldır
          .replace(',', '.'); // Virgül yerine nokta koy
        return sum + parseFloat(price);
      }, 0);

      // Ortalama fiyatı hesapla
      const averagePrice = totalPrice / filteredHouses.length;

      // Ortalama fiyatı sonuç kutusunda göster
      averageResult.textContent = `${averagePrice.toFixed(2).replace('.', ',')} ₺`;
    });
  })
  .catch(error => console.error('Veri yüklenirken hata oluştu:', error));
