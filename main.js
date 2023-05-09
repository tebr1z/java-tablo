const btn = document.getElementById("btn")

btn.onclick = function() {
    const ad = document.getElementById('ad').value
    const SoyAd = document.getElementById('soyad').value
    const DogumIl = parseInt (document.getElementById('dogumil').value)
    const ID = document.getElementById('IDniz').value
    
    const yas = 2023 - DogumIl

    const trad = document.createElement("td")
    const trsoyad = document.createElement("td")
    const trdogumil = document.createElement("td")
    const trid = document.createElement("td")
    const tryas = document.createElement("td")

    trad.textContent = ad
    trsoyad.textContent = SoyAd
    trdogumil.textContent = DogumIl
    trid.textContent = ID
    tryas.textContent = yas

    let tr = document.createElement("tr")

    tr.appendChild(trad);
    tr.appendChild(trsoyad);
    tr.appendChild(trdogumil);
    tr.appendChild(trid)
    tr.appendChild(tryas)
    tablo.appendChild(tr)

    ad .value = "";
    soyad.value = "";
    dogumil.value = "";
    IDniz.value = "";

    ad.focus();
}