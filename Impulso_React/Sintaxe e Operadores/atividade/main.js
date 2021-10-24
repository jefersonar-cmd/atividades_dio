const btn = document.getElementById('btn');
//var btn = document.getElementById('btn');

function calc() {
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    const result = document.getElementById('output');
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    if (!n1 || !n2) return result.innerHTML = 'Informe dois números';
    const soma = n1 + n2;
    console.log(soma)
    if (n1 == n2){
        if (soma > 10){
            if (soma > 20){
                result.innerHTML = `Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20.`;
                
            } else {
                result.innerHTML = `Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20.`;
            }
        } else{
            result.innerHTML = `Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20.`;
        }
    } else {
        if (soma > 10){
            if (soma > 20){
                result.innerHTML = `Os números ${n1} e ${n2} não são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20.`;
            } else {
                result.innerHTML = `Os números ${n1} e ${n2} não são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20.`;
            }
        } else{
            result.innerHTML = `Os números ${n1} e ${n2} não são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20.`;
        }
    }
}

btn.addEventListener('click', calc)