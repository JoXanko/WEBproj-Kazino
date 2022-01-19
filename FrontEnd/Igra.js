export class Igra {
    constructor(id, naziv, maxBrIgraca, opis, minimalniUlog) {
        this.id = id;
        this.naziv = naziv;
        this.maxBrIgraca = maxBrIgraca;
        this.opis = opis;
        this.minimalniUlog = minimalniUlog;
    }
    crtajIgre(host) {
        var tr = document.createElement("tr");
        tr.className = "trLevo";
        host.appendChild(tr);

        var el = document.createElement("td");
        el.innerHTML = this.naziv + " (max. br. igraca " + this.maxBrIgraca + ")" + "&emsp;" + "&emsp;";
        tr.appendChild(el);

        el = document.createElement("td");
        el.innerHTML = this.minimalniUlog + "c";
        tr.appendChild(el);
    }
}