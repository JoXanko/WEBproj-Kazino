export class Dealer {
    constructor(id, jmbg, ime, prezime, pol, godine, godineRada, plataEUR, kazinoID) {
        this.id = id;
        this.jmbg = jmbg;
        this.ime = ime;
        this.prezime = prezime;
        this.pol = pol;
        this.godine = godine;
        this.godineRada = godineRada;
        this.plataEUR = plataEUR;
        this.kazinoID = kazinoID;
    }
    crtajRadnike(host, i) {
        var tr = document.createElement("tr");
        tr.className = "trBrisi" + i;
        host.appendChild(tr);

        var el = document.createElement("td");
        el.className = "tdDesno";
        el.innerHTML = this.jmbg;
        tr.appendChild(el);

        el = document.createElement("td");
        el.className = "tdDesno";
        el.innerHTML = this.ime;
        tr.appendChild(el);
        el = document.createElement("td");
        el.className = "tdDesno";
        el.innerHTML = this.prezime;
        tr.appendChild(el);
        el = document.createElement("td");
        el.className = "tdDesno";
        el.innerHTML = this.pol;
        tr.appendChild(el);
        el = document.createElement("td");
        el.className = "tdDesno";
        el.innerHTML = this.godine;
        tr.appendChild(el);
        el = document.createElement("td");
        el.className = "tdDesno";
        el.innerHTML = this.godineRada;
        tr.appendChild(el);
        el = document.createElement("td");
        el.className = "tdDesno";
        el.innerHTML = this.plataEUR;
        tr.appendChild(el);


        el = document.createElement("td");
        el.className = "tdDesno";
        tr.appendChild(el);
        let dugmeObrisi = document.createElement("button");
        dugmeObrisi.innerHTML = "Otpusti";
        dugmeObrisi.className = "btn btn-outline-danger";
        el.appendChild(dugmeObrisi);
        dugmeObrisi.onclick = (ev) => {
            fetch("https://localhost:5001/Dealer/IzbrisatiDealera/" + this.id, {
                method: "DELETE"
            }).then(p => {
                if (p.ok) {
                    var teloTabele = document.querySelector(".trBrisi" + i);
                    var roditelj = teloTabele.parentNode;
                    roditelj.removeChild(teloTabele);
                }
                else {
                    alert("Doslo je do greske!");
                }
            });
        }
    }
}