let tutar = Number(prompt("Ücret tutarını giriniz:"));

let kdvOran = tutar <= 1000 ? 0.18 : 0.08;
let kdvTutar = tutar * kdvOran;
let kdvliTutar = tutar + kdvTutar;

console.log("KDV'siz Tutar: " + tutar);
console.log("KDV Oranı: " + kdvOran);
console.log("KDV Tutarı: " + kdvTutar);
console.log("KDV'li Tutar: " + kdvliTutar);
