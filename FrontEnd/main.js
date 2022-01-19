import { Kazino } from "./Kazino.js"
import { SvaKazina } from "./SvaKazina.js"

var listaKazina = [];
fetch("https://localhost:5001/Kazino/PreuzmiKazine").then(p => {
    p.json().then(kazinovi => {
        kazinovi.forEach(kazino => {
            var r = new Kazino(kazino.id, kazino.naziv, kazino.drzava, kazino.grad, kazino.godinaOsnivanja);
            listaKazina.push(r);
        })

        var f = new SvaKazina(listaKazina);
        f.crtaj(document.body);
    })
})