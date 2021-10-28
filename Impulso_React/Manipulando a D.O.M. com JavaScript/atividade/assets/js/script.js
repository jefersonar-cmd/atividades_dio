function mudaCor(){
    mudaClasse();
    mudaTexto();
};

function mudaClasse(){
    body.classList.toggle(darkModeOn);
    botao.classList.toggle(darkModeOn);
    footer.classList.toggle(darkModeOn);
};

function mudaTexto(){
    const darkMode = 'Dark Mode';
    const lightMode = 'Light Mode';

    if(body.classList.contains(darkModeOn)){
        botao.innerHTML = lightMode;
        h2.innerHTML = darkMode + ' ON';
        return;
    }

    botao.innerHTML = darkMode;
    h2.innerHTML = lightMode + ' ON';
    return;
}

const darkModeOn = 'dark-mode';
const h2 = document.getElementById('texto');
const botao = document.getElementById('botao');
const footer = document.getElementsByTagName('footer')[0];
const body = document.getElementsByTagName('body')[0];

botao.addEventListener('click', mudaCor);