// Event onkeyup
function tampilkanNama() {
    let nama = document.getElementById("nama").value;
    console.log("Nama yang diketik: " + nama);
}

// Event onclick
function sapa() {
    let nama = document.getElementById("nama").value;

    if (nama === "") {
        alert("Silakan masukkan nama terlebih dahulu!");
    } else {
        alert("Halo, " + nama + "! Selamat datang 😊");
    }
}
