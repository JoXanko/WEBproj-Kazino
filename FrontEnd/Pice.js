export class Pice {
    constructor(id, naziv, alkohol, procenatAlkohola, cena) {
        this.id = id;
        this.naziv = naziv;
        this.alkohol = alkohol;
        this.procenatAlkohola = procenatAlkohola;
        this.cena = cena;
    }
    crtajPica(host) {
        var tr = document.createElement("tr");
        tr.className = "trLevo";
        host.appendChild(tr);

        var el = document.createElement("td");
        el.innerHTML = this.naziv + " (alk: " + this.procenatAlkohola + "%)" + "&emsp;" + "&emsp;";
        tr.appendChild(el);

        el = document.createElement("td");
        el.innerHTML = this.cena + " din";
        tr.appendChild(el);
    }
}