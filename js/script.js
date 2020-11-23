// Creiamo BoolzApp:
// una copia della webApp di whatsApp, o almeno in parte, le funzionalità come visto non saranno complete ma saranno concentrate sulla gestione delle chat e dei messaggi.
// Ci saranno varie milestones di release del progetto, una per giorno di lavoro.

// Milestone 1: creare la struttura html e il layout completi.

// Milestone 2: chat differenziate:
// cliccando sulla chat vedo quella corrispondente;
// con header con dati relativi a chat attiva;
// relativa chat in elenco rimane selezionata

// istanzio Vue e definisco i data
var app = new Vue({
  el: "#app",
  data: {
    selezionato: 0,
    contatti: [
      {
        nome: "Michele",
        avatar: "img/avatar_1.jpg",
        chat: [
          {
            testo: "Ciao Michele, come va?",
            data: "12/11/2020 13:11:43",
            inviato: true
          },
          {
            testo: "Tutto a posto, te che mi dici?",
            data: "12/11/2020 13:12:21",
            inviato: false
          },
          {
            testo: "Mi servirebbero 500 testoni, non é che puoi prestarmeli?",
            data: "12/11/2020 13:14:02",
            inviato: true
          },
          {
            testo: "Ti prego, sono al verde. Mi sfrattano se non pago entro due giorni...",
            data: "12/11/2020 13:17:30",
            inviato: true
          },
          {
            testo: "Michele ci sei?",
            data: "12/11/2020 14:47:22",
            inviato: true
          },
        ]
      },
      {
        nome: "Gianni",
        avatar: "img/avatar_2.jpg",
        chat: [
          {
            testo: "placeholder",
            data: "12/11/2020 13:11:43",
            inviato: true
          }
        ]
      },
      {
        nome: "Luisa",
        avatar: "img/avatar_3.jpg",
        chat: [
          {
            testo: "placeholder",
            data: "12/11/2020 13:11:43",
            inviato: true
          }
        ]
      },
      {
        nome: "Machete",
        avatar: "img/avatar_4.jpg",
        chat: [
          {
            testo: "placeholder",
            data: "12/11/2020 13:11:43",
            inviato: true
          }
        ]
      }
    ]
  },
  methods: {
    // funzione per selezionare il profilo amico cliccato
    selectProfile: function(i) {
      this.selezionato = i;
    }
  }
});
