//TEST
let punteggi = [
    {
      "class": "1A",
      "score": 700,
      "ctr_class": 0
    },
    {
      "class": "1B",
      "score": 50,
      "ctr_class": 0
    },
    {
      "class": "1C",
      "score": 56,
      "ctr_class": 1
    },
    {
      "class": "1D",
      "score": 900,
      "ctr_class": 0
    },
    {
      "class": "1E",
      "score": 5,
      "ctr_class": 0
    },
    {
      "class": "1F",
      "score": 1500,
      "ctr_class": 0
    },
    {
      "class": "1G",
      "score": 2000,
      "ctr_class": 0
    }
  ];

//TODO modificare endpoint 
//function aggiornaDati() {
//$.getJSON('host/endpointPunteggi', function(punteggi) {
  //riordino prima per punteggi
  punteggi_ordinati = Object.values(punteggi).sort((a,b)=>b.score - a.score);

  //prendo i primi tre
  punteggi_podio = punteggi_ordinati.slice(0,3);
  console.log(punteggi_podio);

  let primo = punteggi_ordinati[0].score/100;
  //imposto altezza colonna
  $('#primo').css('height', '100%');
  $('#secondo').css('height', punteggi_podio[1].score/primo+'%');
  $('#terzo').css('height', punteggi_podio[2].score/primo+'%');

  //imposto label sul podio
  $('#primo').children('span').text(punteggi_podio[0].class);
  $('#secondo').children('span').text(punteggi_podio[1].class);
  $('#terzo').children('span').text(punteggi_podio[2].class);
  
  //imposto il title
  $('#primo').attr('title', punteggi_podio[0].score+' punti');
  $('#secondo').attr('title', punteggi_podio[1].score+' punti');
  $('#terzo').attr('title', punteggi_podio[2].score+' punti');

  //classifica totale a schermo
  for(let i=0; i<punteggi_ordinati.length; i++){
    let tr = $("<tr></tr>");
    tr.append($("<td></td>").text(i+1));
    tr.append($("<td></td>").text(punteggi_ordinati[i].class))
    tr.append($("<td></td>").text(punteggi_ordinati[i].score))

    $("tbody").append(tr);
  }
  
      
    //});
  //}
  
  //setInterval(aggiornaDati, 5000); // Aggiorna ogni 5 secondi
  