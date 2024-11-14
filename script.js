function updateClock() {
    const today = new Date();
    
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    document.getElementById('clock-nav').innerHTML =  hours + ":" + minutes + ":" + seconds;
    setInterval(updateClock, 1000); //  her saniye updateClock fonksiyonunun çalışmasını sağlar. 
 
}

function checkTime(i) { 
    if (i < 10) {i = "0" + i};  // sayı 10'dan küçükse önüne sıfır koyuyor. 
    return i;
  }
// sayfa açıldığında saatin direkt gözükmesi için
updateClock();


// Hakkımda sayfası daha fazla gör butonu

function HideBioText() { 
    const additionInfo = document.getElementById("addition-info");
    const hideButton = document.getElementById("hide-button");

    if (additionInfo.style.display === "none") { // eğer none değerine eşit ise öğe gizli demektir.
        additionInfo.style.display = "inline"; // Bilgiyi gösterir
        hideButton.innerHTML = "Daha az Gör"; 
    } else {
        additionInfo.style.display = "none"; // Bilgiyi gizli hale getirir.
        hideButton.innerHTML = "Daha fazla Gör"; // metni değiştirir. 
    }
} 


