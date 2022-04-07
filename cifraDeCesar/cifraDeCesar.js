// Declaraçao das variaveis que receberao os elementos do html
var selectCripto = document.getElementById('selectCripto'); // criei uma variavel que recebe o elemento cripto
var txtCarta = document.getElementById('txtCarta'); // criei uma variavel para receber o elemento textarea 'txtCarta '
var rdAcao = document.getElementsByName('rdAcao'); // criei uma radio button que vai receber o elemento 'btncodificacao'
var txtFinal = document.getElementById('txtFinal'); // criei uma variavel que vai receber o elemento textarea'txtFinal'
var nmbChave = document.getElementById('nmbChave'); // criei uma variavel que vai receber o elemento number 'nmbChave'

// declaração das variaveis que receberão os valores selecionados
var criptoSelecionada = '';
var textoCartaEscrito = '';
var AcaoSelecionada = '';
var textoFinal = '';
var ChaveSelecionada = '';


//essa funcao ira captar a opção de escolha de criptografi do usuario e mostrar no console log 
function CriptoEscolhida() {
  //instanciação de variavel
  criptoSelecionada = selectCripto.options[selectCripto.selectedIndex].value;

  console.log(criptoSelecionada);
}


//cxtexto = vou pegar o texto que o usuario me der e fazer uma verificaçao das palavras para poder substituir 
//na caixa de texto vamos ter uma frase feita pelo usuario, para ser criptografada



function textoCriptografico() {
  var textParaCripto = txtCarta.value;
  console.log(textParaCripto)
}



//escolhaDoBtn
var btnDefinido = '';

function decisaoDoBotao() {
  btnDefinido = escolha.value;
  console.log(btnDefinido);
}


//cxResultado

//matrix para a criptografia

function textoCriptografico() {
  var textParaCripto = textoPosto.value;
  console.log(textParaCripto)
}

//numDaSubsti
var numDeSubsti = '';

function teste() {
  numeroDeSubsti = numero.value;
  console.log(numDeSubsti);

}

//botao