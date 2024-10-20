// Display current date
        const date = new Date();
        const dateOptions = { day: '2-digit', month: 'short', year: 'numeric' };
        currentDate.textContent = date.toLocaleDateString('en-GB', dateOptions);

        // Display current time
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        currentTime.textContent = `${hours}:${minutes}`;
        
// Fungsi untuk menghasilkan angka acak 16 digit
function generatenoreff() {
    let noreff = 'No Ref. ';
    for (let i = 0; i < 16; i++) {
        noreff += Math.floor(Math.random() * 10);
    }
    return noreff;
}

// Fungsi untuk menghasilkan angka acak 3 digit
function generatenorek() {
    let norek = 'xxx xxx ';
    for (let i = 0; i < 3; i++){
        norek += Math.floor(Math.random() * 10);
    }
    return norek;
}

    let firstSet = generatenorek(); // 3 angka acak
            let lastNumber = Math.floor(Math.random() * 10); // 1 angka acak

function displayText() {
    // Ambil teks dari input pengguna
    const userInput0 = document.getElementById("textInput0").value;
    const userInput1 = document.getElementById("textInput1").value;
    const userInput2 = document.getElementById("textInput2").value;
    const userInput3 = document.getElementById("textInput3").value;
    const userInput4 = document.getElementById("textInput4").value;
    const currentDate = document.getElementById('currentDate');
    const currentTime = document.getElementById('currentTime');
    const canvas = document.getElementById('output-canvas');
    const ctx = canvas.getContext('2d');
    const image = new Image();


    // Tampilkan teks di atas gambar
    document.getElementById("text-overlay-0").textContent = userInput0;
    document.getElementById("text-overlay-1").textContent = userInput1;
    document.getElementById("text-overlay-2").textContent = userInput2;
    document.getElementById("text-overlay-3").textContent = userInput3;
    document.getElementById("text-overlay-4").textContent = userInput4;
    document.getElementById('noreff').textContent = generatenoreff();
    document.getElementById("norek").innerHTML = `${firstSet} ${lastNumber}`;
    
    
    // Tampilkan gambar dan teks, sembunyikan input dan tombol
    document.getElementById("image-container").style.display = "flex";
    document.getElementById("input-container").style.display = "none";
    
                //Display current time without seconds
            //const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            //document.getElementById('clock').textContent = `${currentTime} WIB`;

}


// Jalankan fungsi jam dan angka acak saat halaman dimuat
//updateClock();
//setInterval(updateClock, 1000);
