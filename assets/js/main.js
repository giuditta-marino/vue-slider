var app = new Vue (
  {
    el: '#root',
    data: {
      index: 0,
      // ARRAY CONTENENTE GLI SRC DI TUTTE LE IMMAGINI
      arrayImg: [
        './assets/img/eraserhead.jpg',
        './assets/img/blue_velvet.jpg',
        './assets/img/fire_walk_with_me.jpg',
        './assets/img/mulholland_drive.jpg',
        './assets/img/inland_empire.jpg'
      ],
      timer: null

    },
    methods: {
      // AL CLICK SUL DIV NEXT, INCREMENTO L'INDICE DI 1 SE L'INDICE E' MINORE DEL NUMERO DELLE IMMAGINI NELL'ARRAY, ALTRIMENTI ASSEGNO ALL'INDICE VALORE 0 COSICCHE' SI POSSA TORNARE ALLA PRIMA IMMAGINE
      nextFunction: function() {
        if (this.index < this.arrayImg.length - 1) {
          return this.index = this.index + 1;
        } else {
          this.index = 0;
        }
      },
      // AL CLICK SUL DIV PREV, DECREMENTO L'INDICE DI 1 SE L'INDICE E' MAGGIORE DI 0, ALTRIMENTI SE E' 0 GLI ASSEGNO VALORE UGUALE ALLA LUNGHEZZA DELL'ARRAY IMG, QUINDI TORNO ALL'ULTIMA IMMAGINE
      prevFunction: function() {
        if (this.index > 0) {
          return this.index = this.index - 1;
        } else {
          this.index = this.arrayImg.length - 1;
        }
      },

      // AL CLICK SUL DOT, LA FUNZIONE ASSEGNA A INDEX VALORE UGUALE ALL'INDICE DEL DOT SELEZIONATO
      dotSelection: function(dotSelected){
        this.index = dotSelected;
      },

      automaticSlider: function() {
        this.timer = setInterval(this.nextFunction, 3000);
      }

    }
});
