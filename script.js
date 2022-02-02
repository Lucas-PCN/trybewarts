const button = document.querySelector('#button');
const inputEmail = document.querySelector('#email');
const inputSenha = document.querySelector('#password');
const inputCheck = document.querySelector('#agreement');
const botaoEnviar = document.querySelector('#submit-btn');
const counter = document.querySelector('#counter');
const textArea = document.querySelector('#textarea');

function emitirAlerta() {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

button.addEventListener('click', emitirAlerta);

// referências utilizada para desenvolver a função abaixo: https://www.w3schools.com/howto/howto_js_display_checkbox_text.asp, https://developer.mozilla.org/pt-BR/docs/Web/API/Element/setAttribute, https://www.delftstack.com/pt/howto/javascript/javascript-disable-button/

function disableButton() {
  if (inputCheck.checked) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
}

inputCheck.addEventListener('click', disableButton);

function contagem() {
  const contaLetras = textArea.value.length;
  const contador = 500;
  counter.innerHTML = contador - contaLetras;
}

textArea.addEventListener('keyup', contagem);
