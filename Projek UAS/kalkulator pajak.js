let kendaraan = document.getElementById('kendaraan').value;
let tipe_kendaraan = document.getElementById('tipe').value;
let hargaInput = document.getElementById('harga');
const harga = Number(hargaInput.value); 
hargaInput.innerHTML = harga; 

if (kendaraan === 'Mobil') {
    let pkb = (2 / 100) * harga;
    let bbnkb = (10 / 100) * harga;
    const swdkllj = 143000; 
    const biaya_administrasiTNKB = 100000; 
    const biaya_penerbitanSTNK = 50000 + 200000; 
    
    let hasil = bbnkb + pkb + swdkllj + biaya_administrasiTNKB + biaya_penerbitanSTNK;

    document.write(`Maka pajak mobil ${tipe_kendaraan} tahun pertama adalah BBN KB Rp${bbnkb}+ PKB Rp${pkb}+ SWDKLLJ Rp${swdkllj}+ TNKB Rp${biaya_administrasiTNKB}+ terbit STNK Rp${biaya_penerbitanSTNK} = ${hasil}`);
} else if (kendaraan === 'Motor') {
    let pkb = (10 / 100) * harga;
    let bbnkb = (2 / 100) * harga;
    const swdkllj = 35000; 
    const biaya_administrasiTNKB = 100000;
    const biaya_penerbitanSTNK = 50000 + 100000; 

    let hasil = bbnkb + pkb + swdkllj + biaya_administrasiTNKB + biaya_penerbitanSTNK;

    document.write(`Maka pajak motor ${tipe_kendaraan} tahun pertama adalah BBN KB Rp${bbnkb}+ PKB Rp${pkb}+ SWDKLLJ Rp${swdkllj}+ TNKB Rp${biaya_administrasiTNKB}+ terbit STNK Rp${biaya_penerbitanSTNK} = ${hasil}`);
} else {
    alert("Jenis kendaraan yang anda masukkan tidak valid!");
}
