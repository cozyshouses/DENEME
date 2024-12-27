document.getElementById("filter-button").addEventListener("click", () => {
    const sayaçlar = document.querySelectorAll(".sayaç");
    const intervalIds = [];

    // Her bir sayaç için rastgele sayı animasyonu başlat
    sayaçlar.forEach((sayaç, index) => {
        let count = 0;
        const intervalId = setInterval(() => {
            if (count >= 50) {
                clearInterval(intervalId);
                if (index === sayaçlar.length - 1) {
                    // Son sayaç tamamlandığında durdur
                    finalizeResults();
                }
                return;
            }
            sayaç.textContent = Math.floor(Math.random() * 10);
            count++;
        }, 50 + index * 50);

        intervalIds.push(intervalId);
    });

    function finalizeResults() {
        const finalResult = ["5", "2", "7", "0", "1", ",", "7", "8", "6"]; // Örnek sonuç
        sayaçlar.forEach((sayaç, index) => {
            sayaç.textContent = finalResult[index];
        });
    }
});
