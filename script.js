document.getElementById('filter-button').addEventListener('click', () => {
    const sayaçlar = document.querySelectorAll('.sayaç-kare');

    // Sayaçları sıfırla
    sayaçlar.forEach((sayaç, index) => {
        if (index !== 4 && index !== 7) { // Virgül ve nokta dışındakiler
            sayaç.innerText = '0';
        }
    });

    // İvme efektini başlat
    let interval = 50;
    let maxValue = 99999.99;
    let minValue = 0;

    const intervalId = setInterval(() => {
        const randomValue = (
            Math.random() * (maxValue - minValue) + minValue
        ).toFixed(2);
        const formattedValue = randomValue.replace('.', ','); // Noktayı virgüle çevir

        // Her haneyi güncelle
        for (let i = 0; i < formattedValue.length; i++) {
            const char = formattedValue[i];
            if (i < sayaçlar.length) {
                sayaçlar[i].innerText = char;
            }
        }
    }, interval);

    // İvme ile yavaşlat
    setTimeout(() => {
        clearInterval(intervalId);
        const finalValue = (
            Math.random() * (maxValue - minValue) + minValue
        ).toFixed(2);
        const formattedFinalValue = finalValue.replace('.', ',');
        for (let i = 0; i < formattedFinalValue.length; i++) {
            const char = formattedFinalValue[i];
            if (i < sayaçlar.length) {
                sayaçlar[i].innerText = char;
            }
        }
    }, 3000); // 3 saniye sonra duracak
});
