// Declaraçao das variaveis que receberao os elementos do html
var selectCripto = document.getElementById('selectCripto'); // criei uma variavel que recebe o elemento cripto
var txtCarta = document.getElementById('txtCarta'); // criei uma variavel para receber o elemento textarea 'txtCarta '
var rdAcao = document.getElementsByName('rdAcao'); // criei uma radio button que vai receber o elemento 'btncodificacao'
var txtFinal = document.getElementById('txtFinal'); // criei uma variavel que vai receber o elemento textarea'txtFinal'
var nmbChave = document.getElementById('nmbChave'); // criei uma variavel que vai receber o elemento number 'nmbChave'

// declaração das variaveis que receberão os valores selecionados
var criptoSelecionada = '';
var textoCartaEscrito = '';
var acaoSelecionada = '';
var chaveSelecionada = 0;

// declaração do alfabeto para a Cifra de Cesar
var alfabeto = [
  'a','b','c','d','e','f','g','h'
  ,'i','j','k','l','m','n','o','p'
  ,'q','r','s','t','u','v','w','x'
  ,'y','z'
];
//
var novosChar = [];

// a funcao vai receber os elementos html e armazenar seus respectivos valores para preparar a criptografia ou descriptografia do texto finl
function PrepararCarta() {
  // utilizamos as variaveis dos elementos para obter seus valores
  criptoSelecionada = selectCripto.options[selectCripto.selectedIndex].value;
  textoCartaEscrito = txtCarta.value;
  chaveSelecionada = parseInt(nmbChave.value); 

  for( i = 0; i < rdAcao.length; i++){
    if(rdAcao[i].checked){
      acaoSelecionada = rdAcao[i].value;
      break;
    }
  }
  
  if(criptoSelecionada == '' && 
    textoCartaEscrito == '' &&  
    chaveSelecionada == '' && 
    acaoSelecionada == ''){ 
      alert('Por favor, preencha os campos');
      return 0;
  }
  
  if(criptoSelecionada == "cifraCesar"){
    if( acaoSelecionada == 'cripto'){
      for(i= 0; i < textoCartaEscrito.length; i++){
        if( textoCartaEscrito[i] != ' '){
          for(j = 0; j < alfabeto.length; j++){
            if(textoCartaEscrito[i] == alfabeto[j] ){
              novosChar[i] = alfabeto[(j+chaveSelecionada)%alfabeto.length]
            }
          }
        }
        else {
          novosChar[i] = ' ';
        }
      }
    }
    else{
      for(i= 0; i < textoCartaEscrito.length; i++){
        if( textoCartaEscrito[i] != ' '){
          for(j = 0; j < alfabeto.length; j++){
            if(textoCartaEscrito[i] == alfabeto[j] ){
              novosChar[i] = alfabeto[(j-chaveSelecionada)];
            }
          }
        }
        else {
          novosChar[i] = ' ';
        }
      }   
    }
    txtFinal.value = novosChar.join("");
  } else {
    if( acaoSelecionada == 'cripto'){
      txtFinal.value = btoa(textoCartaEscrito);
    }
    else{
      txtFinal.value = atob(textoCartaEscrito);
    }
  }
}
