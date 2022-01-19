export class Osoba {
    constructor(id, jmbg, ime, prezime, pol, godine, trenutnoCipova, potrosenoCipova) {
        this.id = id;
        this.jmbg = jmbg;
        this.ime = ime;
        this.prezime = prezime;
        this.pol = pol;
        this.godine = godine;
        this.trenutnoCipova = trenutnoCipova;
        this.potrosenoCipova = potrosenoCipova;
    }
    crtajGoste(host) {
        var tr = document.createElement("tr");
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
        el.innerHTML = this.trenutnoCipova;
        el.className = "trCipovi";
        tr.appendChild(el);

        el = document.createElement("td");
        el.className = "tdDesno";
        el.innerHTML = this.potrosenoCipova;
        tr.appendChild(el);
        el = document.createElement("td");
        el.className = "tdDesno";

        el = document.createElement("td");
        el.className = "tdDesno";
        tr.appendChild(el);

        let inputCipovi = document.createElement("input");
        inputCipovi.style.display = "block";
        inputCipovi.className = "cipovi";
        inputCipovi.type = "number";
        el.appendChild(inputCipovi);

        let dugmeKupi = document.createElement("button");
        dugmeKupi.innerHTML = "Kupi cipove";
        dugmeKupi.className = "btn btn-outline-success";
        el.appendChild(dugmeKupi);
        dugmeKupi.onclick = (ev) => {
            if (el.querySelector(".cipovi").value <= 0)
                alert("Niste uneli ispravnu vrednost za broj cipova.");
            else {
                fetch("https://localhost:5001/Osoba/osobaDodajCipove/" + this.id + "/" + el.querySelector(".cipovi").value, {
                    method: "PUT"
                }).then(p => {
                    document.getElementsByClassName("btn btn-outline-info btnPrikaz")[0].onclick();
                    document.getElementsByClassName("btn btn-outline-warning btnSakrij")[0].onclick();
                    if (p.ok) {
                        tr.querySelector(".trCipovi").innerHTML = parseInt(tr.querySelector(".trCipovi").innerHTML) + parseInt(el.querySelector(".cipovi").value);
                        el.querySelector(".cipovi").value = '';
                    }
                    else {
                        alert("Doslo je do greske!");
                    }
                });
            }
        }
    }

    crtajStub(host, max, tip) {
        const grafik = document.createElement("div");
        grafik.className = "grafik";
        host.appendChild(grafik);

        const stub = document.createElement("div");
        stub.className = "stub";

        const lab = document.createElement("div");
        lab.className = "labela";
        grafik.appendChild(lab);
        grafik.appendChild(stub);

        if (tip == "Trenutno cipova") {
            stub.style.height = (this.trenutnoCipova * 100) / max + "%";
            lab.innerHTML = this.ime + " " + this.trenutnoCipova;
        } else {
            stub.style.height = (this.potrosenoCipova * 100) / max + "%";
            lab.innerHTML = this.ime + " " + this.potrosenoCipova;
        }

    }
}