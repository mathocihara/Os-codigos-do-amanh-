var textoCriptrografar = document.getElementById('text'); // texto que vai ser criptografado
var textoDescriptografado = document.getElementById('resultado'); // area do texto criptografado 
var shift = document.getElementById('numeral'); // numeros que serão usado para o cifra de cesar
// var selecao = document.getElementById('codigo'); 
var codificar = document.getElementById('codificar'); // selecao que codifica o texto
var decodificar = document.getElementById('decodificar'); // selecao que descodifica o texto

var Alfabeto = [
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
];














//   // enquanto meu codigo estiver sinalizando o cesar, ele  vai pegar as informações por 'get' do textarea e 
//     // // vai armazenar no setter.
//     // Após isso vou começar a fazer uma function para poder começar o codigo do cifra de cesar
//     // vou criar uma variavel matriz do alfabeto
//     // vou fazer o calculo da cifra de cesar
//     // vou pedir para ele me retornar o valor em forma de string