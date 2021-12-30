let botao = document.getElementById('criar-tarefa');
let inputDigitado=document.getElementById('texto-tarefa').value
botao.addEventListener('click', ()=>{
    let elementoPai =document.getElementById('lista-tarefas')   
    let inputDigitado=document.getElementById('texto-tarefa')
    let lista =document.createElement('li')
    elementoPai.appendChild(lista)
    lista.innerText =inputDigitado.value
    document.getElementById('texto-tarefa').value='';
    
})