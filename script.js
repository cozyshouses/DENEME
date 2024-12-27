// İlçeye göre ortalama fiyat hesaplama
const prices = {
    "İzmir Ortalaması": 3000,
    "Konak": 3500,
    "Karşıyaka": 3200,
    "Çeşme": 5500,
    "Bornova": 2800,
    "Buca": 2500,
    // Diğer ilçelerin fiyatlarını ekleyin
};

// Sayaçları oluştur
const counterContainer = document.getElementById('counter-container');
for (let i = 0; i < 9; i++) {
    const counter = document.createElement('div');
    counter.className = 'counter';
    counter.innerText = "00";
    counterContainer.appendChild(counter);
}

// Filtreleme işlemi
document.getElementById('filter-button').addEventListener('click', () => {
    const selectedIlce = document.getElementById('ilce-select').value;
    const averagePrice = prices[selectedIlce] || 3000;

    // Sayaç döndürme animasyonu
    const counters = document.querySelectorAll('.counter');
    counters.forEach((counter, index) => {
        setTimeout(() => {
            let value = 0;
            const interval = setInterval(() => {
                value = Math.floor(Math.random() * 100000);
                counter.innerText = value.toLocaleString('tr-TR', {
                    minimumIntegerDigits: 6,
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                });
            }, 50);

            setTimeout(() => {
                clearInterval(interval);
                counter.innerText = averagePrice.toLocaleString('tr-TR', {
                    minimumIntegerDigits: 6,
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                });
            }, 2000);
        }, index * 200);
    });
});
