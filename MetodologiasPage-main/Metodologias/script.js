const botao = document.getElementById('botao');


function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

}

var click = false;

function trocadecor()
{
var change = document.getElementById('main');
var top = document.querySelector('h1');

if(!click) {
change.style.backgroundColor = '#222222';
change.style.color = '#fff';

click = true;


}else{
    change.style.backgroundColor = '#fff';
    change.style.color = '#222222';
    

    click = false;
}
}