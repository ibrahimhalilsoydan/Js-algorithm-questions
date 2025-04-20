

/*

let matematik = parseInt(prompt("Matematik notunu giriniz :"));
let fizik = parseInt(prompt("Fizik notunu giriniz:"));
let kimya = parseInt(prompt("Kimya notunu giriniz:"));
let turkce = parseInt(prompt("Türkçe notunu giriniz:"));
let tarih = parseInt(prompt("Tarih notunu giriniz:"));
let muzik = parseInt(prompt("Müzik notunu giriniz:"));

let ortalama = (matematik+fizik+kimya+turkce+tarih+muzik)/6;

console.log(ortalama);

if(ortalama >=60){
    console.log("Sınıfı geçtiniz")

}else{
    console.log("Sınıf tekrarı")
}*/


let notlar = ["Matematik", "Fizik", "Kimya", "Türkçe", "Tarih", "Müzik"].map((ders)=>{
    let not =prompt(`${ders} notunu gir: `);
    while(isNaN(not) || not ==="" || not ===null){
        not =prompt(`${ders} notunu gir (geçerli bir sayı olmalı):`);
    }
    return parseInt(not)
});

let ortalama = notlar.reduce((a, b) => a + b) / notlar.length;
console.log(`Ortalama: ${ortalama.toFixed(2)} - ${ortalama >= 60 ? "Geçtiniz" : "Kaldınız"}`);