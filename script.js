// Script por Thiago Mendes

const myButtonModal = document.getElementById('myButtonModal')
const myTextModal = document.getElementById('myTextModal')

const inputUsuario = document.getElementById('inputUsuario') 
const inputSenha = document.getElementById('inputSenha') 

function autenticar(event) {
  // interromper o submit
  event.preventDefault()

  // consistencias
  if(inputUsuario.value == 'root' && inputSenha.value == '1234'){
    myTextModal.className = 'text-sucess'
    myTextModal.innerText = 'Usuário logado!!'
  }else{
    myTextModal.className = 'text-danger'
    myTextModal.innerText = 'Usuário ou senha inválida'
  }

  myButtonModal.click()
}