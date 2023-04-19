function bgrandom(){
let bgImage = [
    'image/aleatoire/image-1.png',
    'image/aleatoire/image-2.png',
    'image/aleatoire/image-3.png',
    'image/aleatoire/image-4.png',
    'image/aleatoire/image-5.png',
    'image/aleatoire/image-6.png',
    'image/aleatoire/image-7.png',
    'image/aleatoire/image-8.png',
    'image/aleatoire/image-9.png',
    'image/aleatoire/image-10.png',
    'image/aleatoire/image-11.png',
    'image/aleatoire/image-12.png'
    ];

    let myDiv = document.getElementById("toto");
    let myDiv1 = document.getElementById("toto1");
    let myDiv2 = document.getElementById("toto2");
    let myDiv3 = document.getElementById("toto3");

myDiv.style.backgroundImage = "url('"+bgImage[Math.floor(Math.random() * bgImage.length)]+"')";
myDiv1.style.backgroundImage = "url('"+bgImage[Math.floor(Math.random() * bgImage.length)]+"')";
myDiv2.style.backgroundImage = "url('"+bgImage[Math.floor(Math.random() * bgImage.length)]+"')";
myDiv3.style.backgroundImage = "url('"+bgImage[Math.floor(Math.random() * bgImage.length)]+"')";    

}
bgrandom()

//Pop-up connexion
/* Afficher le pop-up */
document.getElementById("lien-connexion").addEventListener("click", function() {
    document.getElementById("popup").style.display = "block";
  });
  /* Cacher le pop-up quand on clique en dehors */
  window.addEventListener("click", function(event) {
      if (event.target == document.getElementById("popup")) {
          document.getElementById("popup").style.display = "none";
        }
    });
// Fin pop-up connexion

//Pop up de contact page artiste
function openPopup() {
    var popup = document.getElementById("contact-popup");
    popup.style.display = "block";
  }
  
  function closePopup() {
    var popup = document.getElementById("contact-popup");
    popup.style.display = "none";
  }
  //Fin pop up de contact


//   const carousel = document.querySelector(".carouseljazonator");
//   const dragging = e => {
//     carousel.scrollLeft = e.pageX;
//   }

//   carousel.addEventListener("mousemove", dragging);
