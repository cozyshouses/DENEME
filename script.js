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
            const selectedIlce = document.getElementById('ilce-select').value;
            const filteredData = selectedIlce
                ? data.filter(item => item.ilce === selectedIlce)
                : data; // Tümü seçildiyse tüm verileri göster
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
            <p>Adres: ${item.adres}</p>
            <a href="${item.url}" target="_blank">Detayları Gör</a>
        `;
        listContainer.appendChild(listItem);
    });
}
