const btnAdicionar = document.getElementById("addTaf")
const btnExcluir = document.getElementsByClassName("excluir")
const btnConcluir = document.getElementsByClassName("concluir")
const valorTarefa = document.getElementById("texto-input")

btnAdicionar.addEventListener('click', (evento) => {
    evento.preventDefault();
    if(valorTarefa.value == ''){
        alert('digite uma tarefa ai mermão')
    } else {
        const tarefa = criarTarefa(valorTarefa.value)
        renderizarTarefa(tarefa)
    }
    valorTarefa.value=''

    

    
})
const listaTarefas = document.querySelector('ul')
listaTarefas.addEventListener('click',(elemento) =>{
        const itemClicado = elemento.target
        

        if(itemClicado.classList.contains("excluir")){
            itemClicado.parentElement.parentElement.remove()
        }
        if(itemClicado.classList.contains("concluir")){
            itemClicado.parentElement.parentElement.firstChild.classList.toggle('concluido')
        }
        
    })


function criarTarefa (valorTarefa){
const lista = document.createElement('li')
    lista.innerHTML = `<p>${valorTarefa}</p>
    <div>
    <button class="excluir">❌</button>
    <button class="concluir">✔️</button></div>`
    return lista
}
function renderizarTarefa(tarefa){
     const listaTarefas = document.querySelector('ul')
     listaTarefas.appendChild(tarefa)
 }

 let itenslista = Array.from(caixa.children)

 for (let i = 0; i < itenslista.length; i++){
    item[i] = itenslista[i].innerHTML
    console.log(item)
 }

 console.log(itenslista)





