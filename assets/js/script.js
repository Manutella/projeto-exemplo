var people = [
//Array 'people' com tres objetos dentro.
    {
        name: 'manu',
        tel: '123',
        xp: 'true'
    },
    {
        name: 'unam',
        tel: '123',
        xp: 'true'
    },
    {
        name: 'numa',
        tel: '123',
        xp: 'false'
    }
]

console.log(document.querySelector('table.lista tbody').innerHTML)
for (person in people){
            `<tr>
                <td>
                ${people[person].name}
                </td> 
                
                <td>
                ${people[person].tel}
                </td>
    
                <td>${(people[person].xp ? 'Sim' : 'Não')}</td>
    
                <td>
                    <button>Alterar</button>
                </td>
                
            </tr>`
    //console.log(people[person].xp)
}