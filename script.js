document.getElementById('filter-button').addEventListener('click', () => {
    const reels = document.querySelectorAll('.reel');

    // İvme efekti ve slot makinesi animasyonu
    const intervalId = setInterval(() => {
        reels.forEach((reel, index) => {
            if (index !== 3 && index !== 6) { // Virgül ve nokta hariç
                reel.textContent = Math.floor(Math.random() * 10); // Rastgele rakam
            }
        });
    }, 50);

    // 3 saniye sonra animasyonu durdur
    setTimeout(() => {
        clearInterval(intervalId);

        const randomValue = (Math.random() * 99999.99).toFixed(2); // 0.00 - 99999.99 arasında bir sayı
        const formattedValue = randomValue.replace('.', ','); // Noktayı virgüle çevir

        // Slot makinesinde rakamları durdur
        for (let i = 0; i < formattedValue.length; i++) {
            const char = formattedValue[i];
            if (i < reels.length) {
                reels[i].textContent = char;
            }
        }
    }, 3000);
});
