import jQuery from "jquery";

let punteggi = {
    "1A":900,
    "2A":1040,
    "3A":800
}

//riordino prima per punteggi
punteggi_ordinati = Object.values(punteggi).sort((a,b)=>a-b);

//imposto altezza colonna

//imposto label sul podio
