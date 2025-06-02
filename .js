function tampilkan() {
  var nama = document.getElementById("nama").value;
  var prodi = document.getElementById("prodi").value;
  var tanggal = document.getElementById("tanggal").value;

  if (!nama || !prodi || !tanggal) {
    alert("Semua field harus diisi!");
    return;
  }

  var hasil = `
    <p>Nama: ${nama}</p>
    <p>Program Studi: ${prodi}</p>
    <p>Tanggal Lahir: ${tanggal}</p>
  `;

  document.getElementById("hasil").innerHTML = hasil;
}
