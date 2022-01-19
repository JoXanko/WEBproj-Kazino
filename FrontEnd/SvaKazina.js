import { Kazino } from "./Kazino.js"

export class SvaKazina {
    constructor(listaKazina) {
        this.listaKazina = listaKazina;
        this.kont = null;
        this.promena = 1;
    }
    crtaj(host) {
        this.kont = document.createElement("div");
        this.kont.className = "GlavniKontejner";
        host.appendChild(this.kont);

        let izborKazina = document.createElement("div");
        izborKazina.className = "izborKazina";
        this.kont.appendChild(izborKazina);

        let crtajTabelu = document.createElement("div");
        crtajTabelu.className = "prikazKazina";
        this.kont.appendChild(crtajTabelu);

        //Div gde ce se crtati graf
        let crtajGraf = document.createElement("div");
        crtajGraf.className = "prikazGrafa";
        this.kont.appendChild(crtajGraf);
        //

        let l = document.createElement("h4");
        l.className = "hKazina";
        l.innerHTML = "Dostupna kazina";
        izborKazina.appendChild(l);

        let se = document.createElement("select");
        se.className = ".selekt"
        izborKazina.appendChild(se);

        let op;
        this.listaKazina.forEach(p => {
            op = document.createElement("option");
            op.innerHTML = p.naziv;
            op.value = p.id;
            se.appendChild(op);
        })

        let btnNadji = document.createElement("button");
        btnNadji.onclick = (ev) => this.nadjiKazino();
        btnNadji.className = "btn btn-outline-secondary";
        btnNadji.innerHTML = "Nadji";
        izborKazina.appendChild(btnNadji);

        let btnTema = document.createElement("button");
        btnTema.innerHTML = "Dark";
        btnTema.onclick = (ev) => {
            this.promeniCSS();
            if (this.promena == 1)
                btnTema.innerHTML = "Dark";
            else
                btnTema.innerHTML = "Light";
        };
        btnTema.className = "btn btn-outline-secondary";
        izborKazina.appendChild(btnTema);
    }

    nadjiKazino() {
        var kazinoID = document.getElementsByClassName(".selekt")[0].value;
        this.ucitajKazineFromBody(kazinoID);
    }

    ucitajKazineFromBody(kazinoID) {
        fetch("https://localhost:5001/Kazino/KazinoPretragaFromBody/" + kazinoID,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(kazinoID)
            }).then(s => {
                if (s.ok) {
                    var teloTabele = this.obrisiPrethodniSadrzaj();
                    var graf = this.obrisiGraf();
                    s.json().then(data => {
                        data.forEach(s => {
                            let st = new Kazino(s.id, s.naziv, s.drzava, s.grad, s.godinaOsnivanja);
                            st.crtajKazino(teloTabele, graf);
                        })

                    })
                }
            })
    }
    obrisiPrethodniSadrzaj() {
        var teloTabele = document.querySelector(".prikazKazina");
        var roditelj = teloTabele.parentNode;
        roditelj.removeChild(teloTabele);

        teloTabele = document.createElement("div");
        teloTabele.className = "prikazKazina";
        roditelj.appendChild(teloTabele);

        return teloTabele;
    }
    obrisiGraf() {
        var telo = document.querySelector(".prikazGrafa");
        var rod = telo.parentNode;
        rod.removeChild(telo);

        let crtajGraf = document.createElement("div");
        crtajGraf.className = "prikazGrafa";
        this.kont.appendChild(crtajGraf);

        return crtajGraf;
    }

    promeniCSS() {
        if (this.promena == 1)
            document.getElementsByClassName(".stil1")[0].setAttribute("href", "Dark.css");
        else
            document.getElementsByClassName(".stil1")[0].setAttribute("href", "Bright.css");
        this.promena = this.promena * (-1);
    }
}