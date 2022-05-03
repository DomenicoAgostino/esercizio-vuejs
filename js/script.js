
const app = new Vue({

  el : '#app',

  data : {
    message : 'Ciao Mondo', 
    photos: [
      {
        urlImage: 'img/img1.jpg',
        title: 'Prima immagine'
      },

      {
        urlImage: 'img/img2.jpg',
        title: 'Seconda immagine'
      },

      {
        urlImage: 'img/img3.jpg',
        title: 'Terza immagine'
      },

      {
        urlImage: 'img/img4.jpg',
        title: 'Quarta immagine'
      }

    ],

    indexImage: 1
  
  },

  mounted() {
    console.log('applicazione montata');
    this.indexImage = 0;
  },


  


})





