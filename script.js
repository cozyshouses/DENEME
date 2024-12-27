// JSON verisini fetch ile çekiyoruz
fetch('data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("JSON verisi alınamadı");
        }
        return response.json();
    })
    .then(data => {
        // Listeyi başlangıçta tümüyle göster
        renderList(data);

        // Filtreleme işlemi için butona event ekle
        const filterButton = document.getElementById('filter-button');
        filterButton.addEventListener('click', () => {
            const selectedIlce = document.getElementById('ilce-select').value;

            // İlçe seçilmişse filtrele, değilse tümünü göster
            const filteredData = selectedIlce
                ? data.filter(item => item.ilce === selectedIlce)
                : data;

            // Filtrelenmiş listeyi render et
            renderList(filteredData);
        });
    })
    .catch(error => {
        console.error('Hata:', error);
    });

// Listeyi render eden fonksiyon
function renderList(items) {
    const listContainer = document.getElementById('list-container');
    listContainer.innerHTML = ''; // Mevcut listeyi temizle

    if (items.length === 0) {
        listContainer.innerHTML = '<p>Bu ilçede herhangi bir ev bulunamadı.</p>';
        return;
    }

    items.forEach(item => {
        const listItem = document.createElement('div');
        listItem.className = 'list-item';
        listItem.innerHTML = `
            <h3>${item.evIsmi}</h3>
            <p>Fiyat: ${item.fiyat}</p>
            <p>İlçe: ${item.ilce}</p>
            <a href="${item.url}" target="_blank">Detayları Gör</a>
        `;
        listContainer.appendChild(listItem);
    });
}
