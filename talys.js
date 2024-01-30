var t4Styles = document.documentElement;
var caixa = document.getElementById('caixa');
var body = document.getElementsByTagName('body')[0];

var larguraCaixa = caixa.offsetWidth;
var alturaCaixa = caixa.offsetHeight;

var larguraBody = body.offsetWidth;
var alturaBody = body.offsetHeight;

var limitadorLargura = larguraBody - larguraCaixa - 10;
var limitadorAltura = alturaBody - alturaCaixa - 10;

var novaLargura = 0
var novaAltura = 0

var imgTinhu = document.getElementById('tinhu');

var tentivasNao = 0;

function aceitou() {
    document.getElementById('caixa2').style.opacity = '0';
    document.getElementById('caixa2').style.display = 'flex';
    setTimeout(function(){
        document.getElementById('caixa2').style.opacity = '1';
    }, 500)
}

function aceitouEscolheu(opcao) {

    if (opcao == 'deck') {
        setTimeout(function () {
            window.location.href = "https://api.whatsapp.com/send?phone=5551992318517&text=oi, adorei o convite, gosto da ideia de um deck";
        }, 1000)
    }

    if (opcao == 'rothen') {
        setTimeout(function () {
            window.location.href = "https://api.whatsapp.com/send?phone=5551992318517&text=oi, adorei o convite, gosto da ideia da rothen";
        }, 1000)
    }

    if (opcao == 'outro') {
        setTimeout(function () {
            window.location.href = "https://api.whatsapp.com/send?phone=5551992318517&text=oi, adorei o convite, minha ideia é:";
        }, 1000)
    }
}



function reposicionar() {
    tentivasNao++;
    atualizarNegativas()

    novaLargura = Math.floor(Math.random() * (10 - limitadorLargura) + limitadorLargura);
    novaAltura = Math.floor(Math.random() * (10 - limitadorAltura) + limitadorAltura);

    caixa.style.left = novaLargura + 'px';
    caixa.style.top = novaAltura + 'px';
}

function atualizarNegativas() {
    if (tentivasNao == 1) {
        imgTinhu.src = "images/nivel-1.jpg"
    }
    if (tentivasNao == 2) {
        imgTinhu.src = "images/nivel-2.jpg"
    }
    if (tentivasNao == 3) {
        imgTinhu.src = "images/nivel-3.jpg"
    }
    if (tentivasNao == 4) {
        imgTinhu.src = "images/nivel-4.jpg"
    }
    if (tentivasNao == 5) {
        imgTinhu.src = "images/nivel-5.jpg"
    }
    if (tentivasNao == 6) {
        imgTinhu.src = "images/nivel-6.jpg"
    }
}