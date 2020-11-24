// Creiamo BoolzApp:
// una copia della webApp di whatsApp, o almeno in parte, le funzionalità come visto non saranno complete ma saranno concentrate sulla gestione delle chat e dei messaggi.
// Ci saranno varie milestones di release del progetto, una per giorno di lavoro.

// Milestone 1: creare la struttura html e il layout completi.

// Milestone 2: chat differenziate:
// cliccando sulla chat vedo quella corrispondente;
// con header con dati relativi a chat attiva;
// relativa chat in elenco rimane selezionata

// Milestone 2: inserimento msg in chat e relativa risposta:
// l’utente può scrivere nel campo di input in basso;
// al click sull’invio succedono 2 cose:
// 1. il mio msg viene inviato alla chat relativa;
// 2. ottengo un msg di risposta automatico dopo 1 secondo;
// tutto ciò viene agganciato/creato solo nella chat attiva;
// possibili BONUS:
// l'invio messaggio funziona sia al click sull’elemento in pagina, sia dal tasto ENTER della tastiera;
// metto data e ora reali;
// scrollo la chat per far vedere i nuovi msg;


// istanzio Vue e definisco i data
var app = new Vue({
  el: "#app",
  data: {
    selezionato: 0,
    userText: "",

    contatti: [
      {
        nome: "Michele",
        avatar: "img/avatar_1.jpg",
        chat: [
          {
            testo: "Ciao Stella, grandissima! Come va?",
            data: "12/11/2020 13:11:43",
            inviato: false
          },
          {
            testo: "Quanto ti serve a sto giro?",
            data: "12/11/2020 13:12:21",
            inviato: true
          },
          {
            testo: "No Stella cara, cosí peró mi offendi. Cioé io ti scrivo perché mi manca la tua compagnia e tu pensi che io voglia dei soldi. Sei davvero insensibile...",
            data: "12/11/2020 13:14:02",
            inviato: false
          },
          {
            testo: "Cioé peró se vuoi darmi dei soldi mica te lo impedisco. Tipo un 500 euro che devo comprarmi la PS5. Solo se vuoi eh. Mica sono un approfittatore.",
            data: "12/11/2020 13:17:30",
            inviato: false
          },
          {
            testo: "Che poi se 500 sono troppi mi accontento anche di 300 per la Series S. Non é la stessa cosa, ma farei un sacrificio per questa volta.",
            data: "12/11/2020 14:47:22",
            inviato: false
          },
          {
            testo: "Stella?",
            data: "12/11/2020 18:11:13",
            inviato: false
          }
        ]
      },
      {
        nome: "Mister X",
        avatar: "img/killer.jpg",
        chat: [
          {
            testo: "So cosa hai fatto. La mia vendetta sará terribile.",
            data: "18/11/2020 19:01:51",
            inviato: false
          },
          {
            testo: "Come scusa? Ma tu chi sei?",
            data: "18/11/2020 19:08:21",
            inviato: true
          },
          {
            testo: "Aspetta, non sei Sandra?",
            data: "18/11/2020 19:11:51",
            inviato: false
          },
          {
            testo: "No sono Stella...",
            data: "18/11/2020 19:12:32",
            inviato: true
          },
          {
            testo: "Ops ho sbagliato chat, scusami. Oddio che figura del piffero!",
            data: "18/11/2020 19:15:09",
            inviato: false
          }
        ]
      },
      {
        nome: "Luisa",
        avatar: "img/avatar_4.jpg",
        chat: [
          {
            testo: "Stella aiutami, sono diventata un uomo!",
            data: "02/11/2020 22:03:12",
            inviato: false
          },
          {
            testo: "Scusami? Come é possibile???",
            data: "02/11/2020 22:05:43",
            inviato: true
          },
          {
            testo: "Non lo sooooooooooo. So solo che ora ho il pipino!!!!!!!",
            data: "02/11/2020 22:06:15",
            inviato: false
          },
          {
            testo: "AH!",
            data: "02/11/2020 22:06:50",
            inviato: true
          },
          {
            testo: "Oddio é terribile, ora penso solo a macchine sportive e calcio... Temo che a breve non saró piú me stessa...",
            data: "02/11/2020 22:09:08",
            inviato: false
          },
          {
            testo: "Hey sventola, sei libera stasera?",
            data: "03/11/2020 14:11:27",
            inviato: false
          }
        ]
      },
      {
        nome: "Machete",
        avatar: "img/machete.jpeg",
        chat: [
          {
            testo: "Ciao Machete, non mi scrivi mai...",
            data: "19/11/2020 16:20:12",
            inviato: true
          },
          {
            testo: "Machete non manda messaggi",
            data: "20/11/2020 07:45:16",
            inviato: false
          },
          {
            testo: "Tecnicamente me ne hai appena inviato uno...",
            data: "20/11/2020 10:06:56",
            inviato: true
          },
          {
            testo: "Machete improvvisa",
            data: "21/11/2020 07:58:32",
            inviato: false
          },
        ]
      }
    ]
  },
  methods: {
    // funzione per selezionare il profilo amico cliccato
    selectProfile: function(i) {
      this.selezionato = i;
    },
    // funzione che aggiunge un nuovo messaggio utente alla lista
    addChat: function() {
      // controllo che la casella di input non sia vuota
      if (this.userText != "") {
        // creo il nuovo oggetto da pushare
        let newMessage = {
          testo: this.userText,
          data: "12/11/2020 13:11:43",
          inviato: true
        }
        // pusho l'oggetto nella chat selezionata e resetto la casella di input
        this.contatti[this.selezionato].chat.push(newMessage);
        this.userText = "";
      }
    }
  }
});
