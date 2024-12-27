// JSON verisini çekmek için fetch kullanıyoruz
fetch('data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("JSON verisi alınamadı");
        }
        return response.json();
    })
    .then(data => {
        // Veriler alındı, listeyi oluştur
        renderList(data);

        // Filtreleme işlemini bağla
        const filterButton = document.getElementById('filter-button');
        filterButton.addEventListener('click', () => {
            console.log("Filtreleme Başlatıldı"); // Filtreleme işlemi başlatıldığında log
            const selectedIlce = document.getElementById('ilce-select').value;
            console.log("Seçilen İlçe:", selectedIlce); // Seçilen ilçeyi logla

            // Filtrelenmiş verileri hesapla
            const filteredData = data.filter(item => item.ilce === selectedIlce);
            console.log("Filtrelenmiş Veri:", filteredData); // Filtrelenmiş veriyi logla

            // Listeyi yeniden render et
            renderList(filteredData);
        });
    })
    .catch(error => {
        console.error('Hata:', error);
    });

// Listeyi render eden fonksiyon
function renderList(items) {
    const listContainer = document.getElementById('list-container');
    listContainer.innerHTML = ''; // Önceki listeyi temizle

    items.forEach(item => {
        const listItem = document.createElement('div');
        listItem.className = 'list-item';
        listItem.innerHTML = `
            <h3>${item.evIsmi}</h3>
            <p>Fiyat: ${item.fiyat}</p>
            <p>İlçe: ${item.ilce}</p>
            <p>Adres: ${item.adres}</p>
            <a href="${item.url}" target="_blank">Detayları Gör</a>
        `;
        listContainer.appendChild(listItem);
    });
}
