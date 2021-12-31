let botao = document.getElementById('criar-tarefa');
let inputDigitado=document.getElementById('texto-tarefa').value
botao.addEventListener('click', ()=>{
    let elementoPai =document.getElementById('lista-tarefas')   
    let inputDigitado=document.getElementById('texto-tarefa')
    let elementoASerCriado =document.createElement('li')
    elementoPai.appendChild(elementoASerCriado)
    elementoASerCriado.innerText =inputDigitado.value
    inputDigitado.value="";
    elementoASerCriado.addEventListener('click', ()=>{
      let li=  document.querySelectorAll('li')
        for(let liAchado of li){
            liAchado.style.backgroundColor=''
        }
        elementoASerCriado.style.backgroundColor= 'rgb(128, 128, 128)';
    })
  
    
})