const botao = document.getElementById('botao');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}
var button = document.getElementById('read_button');

button.addEventListener('click', function() {
    var card = document.querySelector('.card','.card2');
    card.classList.toggle('active');

    if (card.classList.contains('active')) {
        return button.textContent = 'Read less';
    }
    
    button.textContent = 'Read more';
});