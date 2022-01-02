let botaoAdicionar = document.getElementById('criar-tarefa');
let inputDigitado=document.getElementById('texto-tarefa').value
let listaDeLi = document.getElementById('lista-tarefas');
let listaDeLiTachada = document.getElementById('lista-tarefas');


botaoAdicionar.addEventListener('click', ()=>{
    let elementoPai =document.getElementById('lista-tarefas')   
    let inputDigitado=document.getElementById('texto-tarefa')
    let elementoASerCriado =document.createElement('li')
    let lisCriada = document.getElementsByTagName('li')
    elementoPai.appendChild(elementoASerCriado)
    elementoASerCriado.innerText =inputDigitado.value
    inputDigitado.value="";
    let li=  document.querySelectorAll('li')
    let listaDeclass = document.querySelectorAll('.selected')

})


    
listaDeLi.addEventListener('click', (event)=>{
    if (event.detail ===1) {
        console.log('1 click'); 
        let classeSelecionada = document.getElementsByClassName('selected')
             
        let evento = event.target
        let listaDeclass = document.getElementsByClassName('selected')

        for(let i=0; i<listaDeclass.length; ++i){
               let classlist =listaDeclass[i]
              classlist.classList.remove('selected')
        }
       evento.classList.add('selected') 
      
          
        }
      
      
       
        
    })
    
    listaDeLiTachada.addEventListener('dblclick', (event)=>{
        let evento = event.target
   
        if (event.detail === 2) {
          console.log('2 click');  
          

            if (evento.classList.contains('completed')){   
                evento.classList.remove('completed')
            } else {
                 evento.classList.add('completed')
            }
       
           
        }    
            
          
    
    

    })
    



