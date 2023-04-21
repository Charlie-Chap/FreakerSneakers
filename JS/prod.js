var P = 0;

localStorage.setItem("P",0)
function count(){
    P=P+1;    
}
let div = document.querySelectorAll('.bpanier')
div.forEach(function(x){
    x.addEventListener('click', count())
    console.log(P);
})
let mdr = document.querySelector('.form-popup').textContent;
mdr.innerHTML += P;