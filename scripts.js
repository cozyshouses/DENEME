// script.js

// JSON veri dosyasını yükleyip işleme
async function fetchEvData() {
    const response = await fetch('data.json'); // data.json dosyasını okur
    const data = await response.json();
    return data;
}

// İlçe seçiminden sonra sonuçları filtrele ve göster
async function filtrele() {
    const ilce = document.getElementById('ilce-secimi').value; // Kullanıcının seçtiği ilçe
    const sonuclarDiv = document.getElementById('ev-listesi'); // Sonuçların gösterileceği alan

    // Önceki sonuçları temizle
    sonuclarDiv.innerHTML = '';

    // JSON verisini getir
    const evler = await fetchEvData();

    // Seçilen ilçeye göre filtrele
    const filtrelenmisEvler = evler.filter(ev => ev.ilce === ilce);

    if (filtrelenmisEvler.length === 0) {
        sonuclarDiv.innerHTML = `<p>Seçilen ilçede ev bulunamadı.</p>`;
    } else {
        filtrelenmisEvler.forEach(ev => {
            // Her bir ev için bir kart oluştur
            const evKart = document.createElement('div');
            evKart.classList.add('ev-karti');

            evKart.innerHTML = `
                <h3>${ev.evIsmi}</h3>
                <p><strong>Fiyat:</strong> ${ev.fiyat}</p>
                <p><strong>İlçe:</strong> ${ev.ilce}</p>
                <p><strong>Adres:</strong> ${ev.adres}</p>
                <a href="${ev.url}" target="_blank">Detayları Gör</a>
            `;

            // Kartı listeye ekle
            sonuclarDiv.appendChild(evKart);
        });
    }
}

// Filtreleme butonuna tıklama olayını bağla
document.getElementById('filtrele-buton').addEventListener('click', filtrele);// Add JavaScript functionality here (if needed)
