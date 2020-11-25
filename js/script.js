// Creiamo BoolzApp:
// una copia della webApp di whatsApp, o almeno in parte, le funzionalità come visto non saranno complete ma saranno concentrate sulla gestione delle chat e dei messaggi.
// Ci saranno varie milestones di release del progetto, una per giorno di lavoro.

// Milestone 1: creare la struttura html e il layout completi.

// Milestone 2: chat differenziate:
// cliccando sulla chat vedo quella corrispondente;
// con header con dati relativi a chat attiva;
// relativa chat in elenco rimane selezionata

// Milestone 3: inserimento msg in chat e relativa risposta:
// l’utente può scrivere nel campo di input in basso;
// al click sull’invio succedono 2 cose:
// 1. il mio msg viene inviato alla chat relativa;
// 2. ottengo un msg di risposta automatico dopo 1 secondo;
// tutto ciò viene agganciato/creato solo nella chat attiva;
// possibili BONUS:
// 1. l'invio messaggio funziona sia al click sull’elemento in pagina, sia dal tasto ENTER della tastiera;
// 2. metto data e ora reali;
// 3. scrollo la chat per far vedere i nuovi msg;

// Milestone 4: filtro su listato chat attive:
// l’utente può scrivere nel campo di input a sx;
// alla digitazione, ad ogni carattere digitato il listato si aggiorna in base alla corrispondenza della stringa scritta nell’input, rispetto al nomeContatto/Chat.
// possibili BONUS:
// cancellazione msg singolo dalla chat;


// istanzio Vue e definisco i data
var app = new Vue({
  el: "#app",
  data: {
    selezionato: 0,
    userText: "",
    filterChat: "",
    contatti: [
      {
        id: 0,
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
        id: 1,
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
        id: 2,
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
        id: 3,
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
      // scrollo la chat in basso dopo 1 millisecondo (senza il delay non funziona)
      setTimeout(this.scrollChat, 1);
    },
    // funzione che aggiunge un nuovo messaggio utente alla lista
    addChat: function() {
      // controllo che la casella di input non sia vuota
      if (this.userText != "") {
        // creo il nuovo oggetto da pushare
        let newMessage = {
          testo: this.userText,
          data: this.getTime(),
          inviato: true
        }
        // pusho l'oggetto nella chat selezionata e resetto la casella di input
        this.contatti[this.selezionato].chat.push(newMessage);
        this.userText = "";
        // scrollo la chat in basso
        setTimeout(this.scrollChat, 1);
        // dopo 1 secondo faccio partire la funzione di risposta automatica
        setTimeout(this.autoReply, 1000);
      }
    },
    // funzione di risposta automatica ai messaggi
    autoReply: function() {
      // creo il nuovo oggetto da pushare
      let newMessage = {
        testo: "Ok",
        data: this.getTime(),
        inviato: false
      }
      // pusho l'oggetto nella chat selezionata
      this.contatti[this.selezionato].chat.push(newMessage);
      // scrollo la chat in basso
      setTimeout(this.scrollChat, 1);
    },
    // funzione che scrolla la chat in fondo
    scrollChat: function() {
      this.$refs.chatbox.scrollTop = this.$refs.chatbox.scrollHeight;
    },
    // funzione che ottiene la data e l'orario dalla macchina utente
    getTime: function() {
      let date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let hours = this.addZero(date.getHours());
      let minutes = this.addZero(date.getMinutes());
      let seconds = this.addZero(date.getSeconds());
      return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    },
    // funzione per aggiungere lo 0 a ore, minuti e secondi se sono inferiori a 10 (altrimenti stampa 1:3:4 al posto di 01:03:04)
    addZero: function(time) {
      return time < 10 ? "0" + time : time;
    }
  },
  computed: {
    // funzione che filtra in automatico la lista amici in base a quanto digitato nella casella di input relativa
    // dato che gli amici non filtrati non vengono renderizzati nel DOM, si perde l'index originale e diventa impossibile selezionare la chat corretta
    // per fixare questo problema ho aggiunto una nuova proprietá ID agli oggetti che contiene la loro posizione nell'array
    dynamicList: function() {
      return this.contatti.filter(contatto => {
        if (contatto.nome.toUpperCase().includes(this.filterChat.toUpperCase())) {
          return contatto;
        }
      });
    }
  }
});
