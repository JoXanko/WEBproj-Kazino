import { Dealer } from "./Dealer.js"
import { Igra } from "./Igra.js"
import { Pice } from "./Pice.js"
import { Osoba } from "./Osoba.js";

export class Kazino {
    constructor(id, naziv, drzava, grad, godinaOsnivanja) {
        this.id = id;
        this.naziv = naziv;
        this.drzava = drzava;
        this.grad = grad;
        this.godinaOsnivanja = godinaOsnivanja;
        this.osobe = [];

        this.kontejner = null;
    }

    crtajKazino(host, divGrafa) {
        if (!host) throw new Error("Greska!");
        this.crtajKontroluKazina(host);
        this.crtajGraf(divGrafa);
    }

    crtajKontroluKazina(host) {
        let divNaslov = document.createElement("div");
        divNaslov.className = "divNaslov";
        host.appendChild(divNaslov);

        //naziv
        let divRedNaziv = document.createElement("div");
        divRedNaziv.className = "divRedNaziv";
        divNaslov.appendChild(divRedNaziv);

        let labNazivConst = document.createElement("label");
        labNazivConst.className = "labNazivConst";
        labNazivConst.style.display = "block";
        labNazivConst.innerHTML = "Naziv kazina:";
        divRedNaziv.appendChild(labNazivConst);

        let labNaziv = document.createElement("label");
        labNaziv.className = "labNaziv";
        labNaziv.style.display = "block";
        labNaziv.innerHTML = this.naziv;
        divRedNaziv.appendChild(labNaziv);

        let inputNaziv = document.createElement("input");
        inputNaziv.style.display = "none";
        inputNaziv.className = "naziv";
        inputNaziv.type = "text";
        divRedNaziv.appendChild(inputNaziv);
        //naziv

        //drzava
        let divRedDrzava = document.createElement("div");
        divRedDrzava.className = "divRedDrzava";
        divNaslov.appendChild(divRedDrzava);

        let labDrzavaConst = document.createElement("label");
        labDrzavaConst.className = "labDrzavaConst";
        labDrzavaConst.style.display = "block";
        labDrzavaConst.innerHTML = "Drzava:";
        divRedDrzava.appendChild(labDrzavaConst);

        let labDrzava = document.createElement("label");
        labDrzava.className = "labDrzava";
        labDrzava.style.display = "block";
        labDrzava.innerHTML = this.drzava;
        divRedDrzava.appendChild(labDrzava);

        let inputDrzava = document.createElement("input");
        inputDrzava.style.display = "none";
        inputDrzava.className = "drzava";
        inputDrzava.type = "text";
        divRedDrzava.appendChild(inputDrzava);
        //drzava

        //grad
        let divRedGrad = document.createElement("div");
        divRedGrad.className = "divRedGrad";
        divNaslov.appendChild(divRedGrad);

        let labGradConst = document.createElement("label");
        labGradConst.className = "labGradConst";
        labGradConst.style.display = "block";
        labGradConst.innerHTML = "Grad:";
        divRedGrad.appendChild(labGradConst);

        let labGrad = document.createElement("label");
        labGrad.className = "labGrad";
        labGrad.style.display = "block";
        labGrad.innerHTML = this.grad;
        divRedGrad.appendChild(labGrad);

        let inputGrad = document.createElement("input");
        inputGrad.style.display = "none";
        inputGrad.className = "grad";
        inputGrad.type = "text";
        divRedGrad.appendChild(inputGrad);
        //grad

        //godina osnivanja
        let divRedGod = document.createElement("div");
        divRedGod.className = "divRedGod";
        divNaslov.appendChild(divRedGod);

        let labGodConst = document.createElement("label");
        labGodConst.className = "labGodConst";
        labGodConst.style.display = "block";
        labGodConst.innerHTML = "Godina osnivanja:";
        divRedGod.appendChild(labGodConst);

        let labGodOsnivanja = document.createElement("label");
        labGodOsnivanja.className = "labGodOsnivanja";
        labGodOsnivanja.style.display = "block";
        labGodOsnivanja.innerHTML = this.godinaOsnivanja;
        divRedGod.appendChild(labGodOsnivanja);

        let inputGodOsnivanja = document.createElement("input");
        inputGodOsnivanja.style.display = "none";
        inputGodOsnivanja.className = "godinaOsnivanja";
        inputGodOsnivanja.type = "number";
        divRedGod.appendChild(inputGodOsnivanja);
        //godina osnivanja

        let dugmeIzmeni = document.createElement("button");
        dugmeIzmeni.innerHTML = "Izmeni";
        dugmeIzmeni.className = "btn btn-outline-secondary dugme";
        dugmeIzmeni.style.display = "block";
        divNaslov.appendChild(dugmeIzmeni);

        let dugmeSacuvaj = document.createElement("button");
        dugmeSacuvaj.innerHTML = "Sacuvaj";
        dugmeSacuvaj.className = "btn btn-outline-success dugme";
        dugmeSacuvaj.style.display = "none";
        divNaslov.appendChild(dugmeSacuvaj);

        let dugmeOtkazi = document.createElement("button");
        dugmeOtkazi.innerHTML = "Otkazi";

        dugmeOtkazi.className = "btn btn-outline-secondary dugme";
        dugmeOtkazi.style.display = "none";
        divNaslov.appendChild(dugmeOtkazi);


        let prikazTabela = document.createElement("div");
        prikazTabela.className = "prikazTabela";
        host.appendChild(prikazTabela);

        //za tabelu dealera
        let labelaRadnik = document.createElement("h5");
        labelaRadnik.className = "hRadnici";
        labelaRadnik.innerHTML = "Radnici kazina";
        prikazTabela.appendChild(labelaRadnik);


        var tabela1 = document.createElement("table");
        tabela1.className = "tabela1 table-striped";
        prikazTabela.appendChild(tabela1);

        var tabelahead1 = document.createElement("thead");
        tabela1.appendChild(tabelahead1);

        var tr1 = document.createElement("tr");
        tabelahead1.appendChild(tr1);

        var tabelaBody1 = document.createElement("tbody");
        tabelaBody1.className = "TabelaPodaci1";
        tabela1.appendChild(tabelaBody1);

        let th1;
        var zag1 = ["JMBG", "Ime", "Prezime", "Pol", "Godine", "Godine rada", "Plata u EUR"];
        zag1.forEach(el => {
            th1 = document.createElement("th");
            th1.innerHTML = el;
            tr1.appendChild(th1);
        })
        //kraj za tabelu dealera

        //za tabelu osoba
        labelaRadnik = document.createElement("h5");
        labelaRadnik.className = "hGosti";
        labelaRadnik.innerHTML = "Gosti kazina";
        prikazTabela.appendChild(labelaRadnik);

        var tabela2 = document.createElement("table");
        tabela2.className = "tabela2 table-striped";
        prikazTabela.appendChild(tabela2);

        var tabelahead2 = document.createElement("thead");
        tabela2.appendChild(tabelahead2);

        var tr2 = document.createElement("tr");
        tabelahead2.appendChild(tr2);

        var tabelaBody2 = document.createElement("tbody");
        tabelaBody2.className = "TabelaPodaci2";
        tabela2.appendChild(tabelaBody2);

        let th2;
        var zag2 = ["JMBG", "Ime", "Prezime", "Pol", "Godine", "Trenutno cipova", "Potroseno cipova"];
        zag2.forEach(el => {
            th2 = document.createElement("th");
            th2.innerHTML = el;
            tr2.appendChild(th2);
        })
        //kraj za tabelu osoba

        dugmeIzmeni.onclick = (ev) => {
            labNaziv.style.display = "none";
            labDrzava.style.display = "none";
            labGrad.style.display = "none";
            labGodOsnivanja.style.display = "none";

            inputNaziv.style.display = "block";
            inputDrzava.style.display = "block";
            inputGrad.style.display = "block";
            inputGodOsnivanja.style.display = "block";

            dugmeIzmeni.style.display = "none";
            dugmeSacuvaj.style.display = "block";
            dugmeOtkazi.style.display = "block";
            divNaslov.querySelector(".naziv").value = this.naziv;
            divNaslov.querySelector(".drzava").value = this.drzava;
            divNaslov.querySelector(".grad").value = this.grad;
            divNaslov.querySelector(".godinaOsnivanja").value = this.godinaOsnivanja;

        }

        this.popuniListuRadnika();
        this.popuniListuOsoba();

        dugmeSacuvaj.onclick = (ev) => {
            let naziv = divNaslov.querySelector(".naziv").value;
            let drzava = divNaslov.querySelector(".drzava").value;
            let grad = divNaslov.querySelector(".grad").value;
            let godinaOsnivanja = divNaslov.querySelector(".godinaOsnivanja").value;

            //radi
            fetch("https://localhost:5001/Kazino/PromeniKazino/" + this.id + "/" + naziv + "/" + drzava + "/" + grad + "/" + godinaOsnivanja, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "id": this.id,
                    "naziv": naziv,
                    "drzava": drzava,
                    "grad": grad,
                    "godinaOsnivanja": godinaOsnivanja
                })
            }).then(p => {
                if (p.ok) {
                    console.log("PROSLO");
                    labNaziv.innerHTML = naziv;
                    labNaziv.style.display = "block";
                    labDrzava.innerHTML = drzava;
                    labDrzava.style.display = "block";
                    labGrad.innerHTML = grad;
                    labGrad.style.display = "block";
                    labGodOsnivanja.innerHTML = godinaOsnivanja;
                    labGodOsnivanja.style.display = "block";

                    inputNaziv.style.display = "none";
                    inputDrzava.style.display = "none";
                    inputGrad.style.display = "none";
                    inputGodOsnivanja.style.display = "none";

                    dugmeIzmeni.style.display = "block";
                    dugmeSacuvaj.style.display = "none";
                    dugmeOtkazi.style.display = "none";
                }
                else {
                    console.log("NIJE PROSLO");
                    labNaziv.innerHTML = this.naziv;
                    labNaziv.style.display = "block";
                    labDrzava.innerHTML = this.drzava;
                    labDrzava.style.display = "block";
                    labGrad.innerHTML = this.grad;
                    labGrad.style.display = "block";
                    labGodOsnivanja.innerHTML = this.godOsnivanja;
                    labGodOsnivanja.style.display = "block";

                    inputNaziv.style.display = "none";
                    inputDrzava.style.display = "none";
                    inputGrad.style.display = "none";
                    inputGodOsnivanja.style.display = "none";

                    dugmeIzmeni.style.display = "block";
                    dugmeSacuvaj.style.display = "none";
                    dugmeOtkazi.style.display = "none";
                }
            })
        }

        dugmeOtkazi.onclick = (ev) => {
            labNaziv.innerHTML = this.naziv;
            labNaziv.style.display = "block";
            labDrzava.innerHTML = this.drzava;
            labDrzava.style.display = "block";
            labGrad.innerHTML = this.grad;
            labGrad.style.display = "block";
            labGodOsnivanja.innerHTML = this.godinaOsnivanja;
            labGodOsnivanja.style.display = "block";

            inputNaziv.style.display = "none";
            inputDrzava.style.display = "none";
            inputGrad.style.display = "none";
            inputGodOsnivanja.style.display = "none";

            dugmeIzmeni.style.display = "block";
            dugmeSacuvaj.style.display = "none";
            dugmeOtkazi.style.display = "none";
        }


        let dugmeObrisi = document.createElement("button");
        dugmeObrisi.innerHTML = "Obrisi";
        dugmeObrisi.className = "btn btn-outline-danger dugme";
        dugmeObrisi.style.display = "block";
        divNaslov.appendChild(dugmeObrisi);

        //radi
        dugmeObrisi.onclick = (ev) => {
            fetch("https://localhost:5001/Kazino/IzbrisatiKazino/" + this.id, {
                method: "DELETE"
            }).then(p => {
                if (p.ok) {

                    alert("Uspesno ste obrisali Kazino");
                    document.location.reload()
                }
                else {
                    alert("Doslo je do greske!");
                }
            });
        }
        this.unosPicaIIgara(divNaslov);
        this.crtajDodavanjeRadnika(divNaslov);
    }

    
    crtajDodavanjeRadnika(divNaslov) {
        //zaposli radnika
        let dugmeDodajRadnika = document.createElement("button");
        dugmeDodajRadnika.innerHTML = "Zaposli radnika";
        dugmeDodajRadnika.className = "btn btn-outline-info dugme";
        dugmeDodajRadnika.style.display = "block";
        divNaslov.appendChild(dugmeDodajRadnika);

        //JMBG
        let divRedJMBG = document.createElement("div");
        divRedJMBG.className = "divRedJMBG";
        divNaslov.appendChild(divRedJMBG);

        let labJMBGConst = document.createElement("label");
        labJMBGConst.className = "labJMBGConst";
        labJMBGConst.style.display = "none";
        labJMBGConst.innerHTML = "JMBG:";
        divRedJMBG.appendChild(labJMBGConst);

        let inputJMBG = document.createElement("input");
        inputJMBG.style.display = "none";
        inputJMBG.className = "JMBG";
        inputJMBG.type = "number";
        divRedJMBG.appendChild(inputJMBG);
        //JMBG

        //Ime
        let divRedIme = document.createElement("div");
        divRedIme.className = "divRedIme";
        divNaslov.appendChild(divRedIme);

        let labImeConst = document.createElement("label");
        labImeConst.className = "labImeConst";
        labImeConst.style.display = "none";
        labImeConst.innerHTML = "Ime:";
        divRedIme.appendChild(labImeConst);

        let inputIme = document.createElement("input");
        inputIme.style.display = "none";
        inputIme.className = "inputIme";
        inputIme.type = "text";
        divRedIme.appendChild(inputIme);
        //Ime
        //Prezime
        let divRedPrezime = document.createElement("div");
        divRedPrezime.className = "divRedPrezime";
        divNaslov.appendChild(divRedPrezime);

        let labPrezimeConst = document.createElement("label");
        labPrezimeConst.className = "labPrezimeConst";
        labPrezimeConst.style.display = "none";
        labPrezimeConst.innerHTML = "Prezime:";
        divRedPrezime.appendChild(labPrezimeConst);

        let inputPrezime = document.createElement("input");
        inputPrezime.style.display = "none";
        inputPrezime.className = "inputPrezime";
        inputPrezime.type = "text";
        divRedPrezime.appendChild(inputPrezime);
        //Prezime
        //Pol
        let divRedPol = document.createElement("div");
        divRedPol.className = "divRedPol";
        divNaslov.appendChild(divRedPol);

        let labPolConst = document.createElement("label");
        labPolConst.className = "labPolConst";
        labPolConst.style.display = "none";
        labPolConst.innerHTML = "Pol:";
        divRedPol.appendChild(labPolConst);

        let inputPol = document.createElement("input");
        inputPol.style.display = "none";
        inputPol.className = "inputPol";
        inputPol.type = "text";
        divRedPol.appendChild(inputPol);
        //Pol
        //Godine
        let divRedGodine = document.createElement("div");
        divRedGodine.className = "divRedGodine";
        divNaslov.appendChild(divRedGodine);

        let labGodineConst = document.createElement("label");
        labGodineConst.className = "labGodineConst";
        labGodineConst.style.display = "none";
        labGodineConst.innerHTML = "Godine:";
        divRedGodine.appendChild(labGodineConst);

        let inputGodine = document.createElement("input");
        inputGodine.style.display = "none";
        inputGodine.className = "inputGodine";
        inputGodine.type = "number";
        divRedGodine.appendChild(inputGodine);
        //Godine
        //Plata
        let divRedPlata = document.createElement("div");
        divRedPlata.className = "divRedPlata";
        divNaslov.appendChild(divRedPlata);

        let labPlataConst = document.createElement("label");
        labPlataConst.className = "labPlataConst";
        labPlataConst.style.display = "none";
        labPlataConst.innerHTML = "Plata (eur):" + "&emsp;";
        divRedPlata.appendChild(labPlataConst);

        let inputPlata = document.createElement("input");
        inputPlata.style.display = "none";
        inputPlata.className = "inputPlata";
        inputPlata.type = "number";
        divRedPlata.appendChild(inputPlata);

        dugmeDodajRadnika.onclick = (ev) => {
            labJMBGConst.style.display = "block";
            inputJMBG.style.display = "block";
            labImeConst.style.display = "block";
            inputIme.style.display = "block";
            labPrezimeConst.style.display = "block";
            inputPrezime.style.display = "block";
            labPolConst.style.display = "block";
            inputPol.style.display = "block";
            labGodineConst.style.display = "block";
            inputGodine.style.display = "block";
            labPlataConst.style.display = "block";
            inputPlata.style.display = "block";
            dugmeOtkaziRad.style.display = "block";
            dugmeSacuvajRad.style.display = "block";
        }

        let dugmeSacuvajRad = document.createElement("button");
        dugmeSacuvajRad.innerHTML = "Sacuvaj";
        dugmeSacuvajRad.className = "btn btn-outline-success dugme";
        dugmeSacuvajRad.style.display = "none";
        divNaslov.appendChild(dugmeSacuvajRad);
        dugmeSacuvajRad.onclick = (ev) => {
            let jmbg = divNaslov.querySelector(".JMBG").value;
            if (jmbg < 1000000000000 || jmbg > 9999999999999)
                alert("Niste uneli ispravnu vrednost jmbg-a.");
            let ime = divNaslov.querySelector(".inputIme").value;
            if (ime.length <= 0 || ime.length > 25)
                alert("Niste uneli ispravnu vrednost za ime.");
            let prezime = divNaslov.querySelector(".inputPrezime").value;
            if (prezime.length <= 0 || prezime.length > 25)
                alert("Niste uneli ispravnu vrednost za prezime.");
            let pol = divNaslov.querySelector(".inputPol").value;
            if (pol.length <= 0 || pol.length > 8)
                alert("Niste uneli ispravnu vrednost za pol.");
            let godine = divNaslov.querySelector(".inputGodine").value;
            if (godine < 18 || godine > 64)
                alert("Niste uneli ispravnu vrednost za godine.");
            let plata = divNaslov.querySelector(".inputPlata").value;
            if (plata <=0)
                alert("Niste uneli ispravnu vrednost za platu.");


            fetch("https://localhost:5001/Dealer/DodajDealera/" + jmbg + "/" + ime + "/" + prezime + "/" + pol + "/" + godine + "/" + plata + "/" + this.id,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(jmbg, ime, prezime, pol, godine, plata, this.id)
                }).then(s => {
                    if (s.ok) {
                        this.popuniListuRadnika();
                    }
                })

            labJMBGConst.style.display = "none";
            inputJMBG.style.display = "none";
            labImeConst.style.display = "none";
            inputIme.style.display = "none";
            labPrezimeConst.style.display = "none";
            inputPrezime.style.display = "none";
            labPolConst.style.display = "none";
            inputPol.style.display = "none";
            labGodineConst.style.display = "none";
            inputGodine.style.display = "none";
            labPlataConst.style.display = "none";
            inputPlata.style.display = "none";
            dugmeOtkaziRad.style.display = "none";
            dugmeSacuvajRad.style.display = "none";
        }


        let dugmeOtkaziRad = document.createElement("button");
        dugmeOtkaziRad.innerHTML = "Otkazi";
        dugmeOtkaziRad.className = "btn btn-outline-secondary dugme";
        dugmeOtkaziRad.style.display = "none";
        divNaslov.appendChild(dugmeOtkaziRad);

        dugmeOtkaziRad.onclick = (ev) => {
            labJMBGConst.style.display = "none";
            inputJMBG.style.display = "none";
            labImeConst.style.display = "none";
            inputIme.style.display = "none";
            labPrezimeConst.style.display = "none";
            inputPrezime.style.display = "none";
            labPolConst.style.display = "none";
            inputPol.style.display = "none";
            labGodineConst.style.display = "none";
            inputGodine.style.display = "none";
            labPlataConst.style.display = "none";
            inputPlata.style.display = "none";
            dugmeOtkaziRad.style.display = "none";
            dugmeSacuvajRad.style.display = "none";
        }

    }
    unosPicaIIgara(divNaslov){
        //glavni div igara i pica
        let redIgraPice = document.createElement("div");
        redIgraPice.className = "redIgraPice";
        divNaslov.appendChild(redIgraPice);

        //lsita pica        
        var listaPica = [];
        let dPica = document.createElement("div");
        dPica.className = "dPica";
        redIgraPice.appendChild(dPica);

        fetch("https://localhost:5001/Pice/PicaUKazinu/" + this.id,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.id)
            }).then(s => {
                if (s.ok) {
                    s.json().then(data => {
                        var teloTabele = this.obrisiPrethodniSadrzajPica();
                        data.forEach(pice => {
                            let r = new Pice(pice.id, pice.naziv, pice.alkohol, pice.procenatAlkohola, pice.cena);
                            listaPica.push(r);
                            r.crtajPica(teloTabele);
                        })

                    })
                }
            })

        let divPice = document.createElement("div");
        divPice.className = "divPice";
        redIgraPice.appendChild(divPice);

        var tabelaPica = document.createElement("table");
        tabelaPica.className = "tabelaPica";
        divPice.appendChild(tabelaPica);

        var tabelaheadPica = document.createElement("thead");
        tabelaPica.appendChild(tabelaheadPica);

        var trPica = document.createElement("tr");
        tabelaheadPica.appendChild(trPica);

        var tabelaBodyPica = document.createElement("tbody");
        tabelaBodyPica.className = "tabelaBodyPica";
        tabelaPica.appendChild(tabelaBodyPica);
        //lista pica

        //lista igara
        var listaIgara = [];

        let dIgra = document.createElement("div");
        dIgra.className = "dIgra";
        redIgraPice.appendChild(dIgra);

        fetch("https://localhost:5001/Igra/IgreUKazinu/" + this.id,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.id)
            }).then(s => {
                if (s.ok) {
                    s.json().then(data => {
                        var teloTabele = this.obrisiPrethodniSadrzajIgra();
                        data.forEach(igra => {
                            let r = new Igra(igra.id, igra.naziv, igra.maxBrIgraca, igra.opis, igra.minimalniUlog);
                            listaIgara.push(r);
                            r.crtajIgre(teloTabele);
                        })

                    })
                }
            })

        let divIgra = document.createElement("div");
        divIgra.className = "divIgra";
        redIgraPice.appendChild(divIgra);

        var tabelaIgara = document.createElement("table");
        tabelaIgara.className = "tabelaIgara";
        divIgra.appendChild(tabelaIgara);

        var tabelaheadIgra = document.createElement("thead");
        tabelaIgara.appendChild(tabelaheadIgra);

        var trIgra = document.createElement("tr");
        tabelaheadIgra.appendChild(trIgra);

        var tabelaBodyIgra = document.createElement("tbody");
        tabelaBodyIgra.className = "tabelaBodyIgra";
        tabelaIgara.appendChild(tabelaBodyIgra);
        //lista igara
    }
    popuniListuRadnika() {
        fetch("https://localhost:5001/Dealer/VratiDealere/" + this.id,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.id)
            }).then(s => {
                if (s.ok) {
                    var teloTabele = this.obrisiPrethodniSadrzaj();
                    s.json().then(data => {
                        var i = 0;
                        data.forEach(el => {
                            let dealer = new Dealer(el.id, el.jmbg, el.ime, el.prezime, el.pol, el.godine, el.godineRada, el.plataEUR, el.kazinoID);
                            dealer.crtajRadnike(teloTabele, i++);
                        })

                    })
                }
            })
    }
    popuniListuOsoba() {
        fetch("https://localhost:5001/Osoba/OsobeUKazinu/" + this.id,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.id)
            }).then(s => {
                if (s.ok) {
                    var teloTabele = this.obrisiPrethodniSadrzaj2();

                    this.osobe = [];
                    s.json().then(data => {
                        data.forEach(el => {
                            let osoba = new Osoba(el.id, el.jmbg, el.ime, el.prezime, el.pol, el.godine, el.trenutnoCipova, el.potrosenoCipova);
                            this.osobe.push(osoba);
                            osoba.crtajGoste(teloTabele);
                        })
                    })
                }
            })
    }
    crtajGraf(host) {
        if (!host)
            throw new Error("Nije prosledjen host");

        const kontrola = document.createElement("div");
        kontrola.className = "kontrola";
        host.appendChild(kontrola);
        const naslov = document.createElement("h4");
        naslov.innerHTML = "Graf stanja cipova gostiju";
        kontrola.appendChild(naslov);

        const stubici = document.createElement("div");
        stubici.className = "stubici";
        host.appendChild(stubici);

        const dugmici = document.createElement("div");
        dugmici.className = "dugmici";
        kontrola.appendChild(dugmici);
        let niz = ["Trenutno cipova", "Potroseno cipova"];
        let rButton = null;
        let lab = null;
        niz.forEach(el => {
            rButton = document.createElement("input");
            rButton.type = "radio";
            rButton.value = el;
            rButton.name = "dugme";

            lab = document.createElement("label");
            lab.className = "labelaRadButton";
            lab.innerHTML = el;

            dugmici.appendChild(rButton);
            dugmici.appendChild(lab);
        })

        let se = document.createElement("select");
        se.className = "selekt";
        dugmici.appendChild(se);
        let op2 = document.createElement("option");
        op2.innerHTML = "Opadajuce";
        op2.value = 1;
        se.appendChild(op2);
        let op = document.createElement("option");
        op.innerHTML = "Rastuce";
        op.value = 0;
        se.appendChild(op);

        const dugme = document.createElement("button");
        dugme.innerHTML = "Prikazi";
        dugme.className = "btn btn-outline-info btnPrikaz";
        dugme.id = "prikaziDugme";
        kontrola.appendChild(dugme);

        const dugme2 = document.createElement("button");
        dugme2.innerHTML = "Sakrij";
        dugme2.className = "btn btn-outline-warning btnSakrij";
        dugme2.id = "sakrijDugme";
        kontrola.appendChild(dugme2);

        dugme.onclick = (ev) => {
            const stubici = this.obrisiGraf();

            stubici.innerHTML = "";
            this.popuniListuOsoba();

            const buttons = host.querySelector("input:checked").value;
            var max = 0;

            if (buttons == "Trenutno cipova") {
                this.sortirajCipove(1, parseInt(host.querySelector(".selekt").value));
                this.osobe.forEach(el => {
                    if (el.trenutnoCipova > max) {
                        max = el.trenutnoCipova;
                    }
                })
            } else {
                this.sortirajCipove(0, parseInt(host.querySelector(".selekt").value));
                this.osobe.forEach(el => {
                    if (el.potrosenoCipova > max) {
                        max = el.potrosenoCipova;
                    }
                })
            }
            this.osobe.forEach(el => {
                el.crtajStub(stubici, max, buttons);
            })
        }

        dugme2.onclick = (ev) => {
            this.obrisiGraf();
        }
    }
    sortirajCipove(sta, redosled) {
        console.log(sta, redosled);
        if (sta == 1)
            for (var j = 0; j < this.osobe.length; j++)
                for (var i = 0; i < this.osobe.length - 1; i++) {
                    if (redosled == 1) {
                        if (this.osobe[i].trenutnoCipova < this.osobe[i + 1].trenutnoCipova) {
                            var o = this.osobe[i];
                            this.osobe[i] = this.osobe[i + 1]
                            this.osobe[i + 1] = o;
                        }
                    }
                    else {
                        if (this.osobe[i].trenutnoCipova > this.osobe[i + 1].trenutnoCipova) {
                            var o = this.osobe[i];
                            this.osobe[i] = this.osobe[i + 1]
                            this.osobe[i + 1] = o;
                        }
                    }
                }
        else
            for (var j = 0; j < this.osobe.length; j++)
                for (var i = 0; i < this.osobe.length - 1; i++) {
                    if (redosled == 1) {
                        if (this.osobe[i].potrosenoCipova < this.osobe[i + 1].potrosenoCipova) {
                            var o = this.osobe[i];
                            this.osobe[i] = this.osobe[i + 1]
                            this.osobe[i + 1] = o;
                        }
                    }
                    else {
                        if (this.osobe[i].potrosenoCipova > this.osobe[i + 1].potrosenoCipova) {
                            var o = this.osobe[i];
                            this.osobe[i] = this.osobe[i + 1]
                            this.osobe[i + 1] = o;
                        }
                    }

                }
    }
    obrisiPrethodniSadrzaj() {
        var teloTabele = document.querySelector(".TabelaPodaci1");
        var roditelj = teloTabele.parentNode;
        roditelj.removeChild(teloTabele);

        teloTabele = document.createElement("tbody");
        teloTabele.className = "TabelaPodaci1";
        roditelj.appendChild(teloTabele);
        return teloTabele;
    }
    obrisiPrethodniSadrzaj2() {
        var teloTabele = document.querySelector(".TabelaPodaci2");
        var roditelj = teloTabele.parentNode;
        roditelj.removeChild(teloTabele);

        teloTabele = document.createElement("tbody");
        teloTabele.className = "TabelaPodaci2";
        roditelj.appendChild(teloTabele);
        return teloTabele;
    }
    obrisiGraf() {
        var teloTabele = document.querySelector(".stubici");
        var roditelj = teloTabele.parentNode;
        roditelj.removeChild(teloTabele);

        const stubici = document.createElement("div");
        stubici.className = "stubici";
        roditelj.appendChild(stubici);
        return stubici;
    }
    obrisiPrethodniSadrzajPica() {
        var teloTabele = document.querySelector(".tabelaBodyPica");
        var roditelj = teloTabele.parentNode;
        roditelj.removeChild(teloTabele);

        teloTabele = document.createElement("tbody");
        teloTabele.className = "tabelaBodyPica";
        roditelj.appendChild(teloTabele);
        return teloTabele;
    }
    obrisiPrethodniSadrzajIgra() {
        var teloTabele = document.querySelector(".tabelaBodyIgra");
        var roditelj = teloTabele.parentNode;
        roditelj.removeChild(teloTabele);

        teloTabele = document.createElement("tbody");
        teloTabele.className = "tabelaBodyIgra";
        roditelj.appendChild(teloTabele);
        return teloTabele;
    }
}
