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
bgrandom();

localStorage.setItem("P",0)
function count(n){
    return n+1;
}

