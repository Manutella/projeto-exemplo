
    //Armazenar dados no localStorage
var peopleRaw = localStorage.getItem('people')

if (peopleRaw != null){
    var people = JSON.parse(peopleRaw)
}else {
    var people = [];
}

function desenhaTabela(){

    //remover elementos da tabela
    currentLines = [...document.querySelectorAll('table.lista tbody .dinamic-content')]; //array concatenado
    currentLines.forEach((element)=> {
        element.remove()
    })


    for (person in people){
        //Looping para que a tabela apareça dinâmicamente.


        document.querySelector('table.lista tbody').innerHTML +=  
                    `<tr class="dinamic-content" style= "background-color: ${ ((person % 2 == 0) ? '#fff' : '#eee' )}">
                    <td>
                    ${people[person].name}
                    </td> 
                    
                    <td>
                    ${people[person].tel}
                    </td>

                    <td>
                    ${ (people[person].xp ? ' <strong style="color:green"> Sim </strong>' : '<strong style="color:red"> Não </strong>') }
                    </td>
        
                    <td>
                        <button onclick="deletUser(${person})">Excluir</button>
                        <a href = "./form.html?person=${person}"> Editar </a>
                    </td>
                    
                </tr>`
    }
}


function deletUser(p){
//quando deletar usuário ao recarregar a página, ele continuará deletado

    people.splice(p,1);
    desenhaTabela(); 
    localStorage.setItem('people', JSON.stringify(people))
}

desenhaTabela()