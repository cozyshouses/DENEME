fetch('data.json')
    .then(response => response.json())
    .then(data => {
        renderList(data);

        const filterButton = document.getElementById('filter-button');
        filterButton.addEventListener('click', () => {
            const selectedIlce = document.getElementById('ilce-select').value;
            if (selectedIlce === "Izmir Ortalaması") {
                renderList(data);
            } else {
                const filteredData = data.filter(item => item.ilce === selectedIlce);
                renderList(filteredData);
            }
        });
    })
    .catch(error => console.error('Hata:', error));

function renderList(items) {
    const listContainer = document.getElementById('list-container');
    listContainer.innerHTML = '';

    if (items.length === 0) {
        listContainer.innerHTML = '<p>Bu ilçede ev bulunamadı.</p>';
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
