let botao = document.getElementById('criar-tarefa');
let inputDigitado=document.getElementById('texto-tarefa').value
botao.addEventListener('click', ()=>{
    let elementoPai =document.getElementById('lista-tarefas')   
    let inputDigitado=document.getElementById('texto-tarefa')
    let elementoASerCriado =document.createElement('li')
    elementoPai.appendChild(elementoASerCriado)
    elementoASerCriado.innerText =inputDigitado.value
    inputDigitado.value="";
    let li=  document.querySelectorAll('li')
    let listaDeclass = document.querySelectorAll('.selected')
    elementoASerCriado.addEventListener('click', (event)=>{
        let classeSelecionada = document.getElementsByClassName('selected')
         
         
             let evento = event.target
             evento.classList.add('selected')
             let listaDeclass = document.querySelectorAll('.selected')

             for(let i=0; i<listaDeclass.length; ++i){
                    let classlist =listaDeclass[i]
                    classlist.className ='';
              
            }
            evento.classList.add('selected') 
              
    })
    
    elementoASerCriado.addEventListener('dblclick', (event)=>{
        let evento = event.target
      //  evento.style.backgroundColor = 'rgb(128, 128, 128)'
        if (evento.classList.contains('completed')){   
            evento.classList.remove('completed')
        } else {
             evento.classList.add('completed')
}


    })
    
})


