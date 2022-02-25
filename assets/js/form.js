function testaFormulario(e){
    e.preventDefault(); 
    //evento que previne função, e evita da pagina recarregar 

    //validando o campo de telefone para apenas números. 
    /* for(i in e.target.elements['phone'].value){
        
        if ( '0123456789'.indexOf(e.target.elements['phone'].value[i]) == -1){
            alert('Apenas números são permitidos no campo telefone!')
            return false;
        }
    }*/

    //validando o campo de telefone para apenas números com expressão regular

    var phonePattern = /[^0-9-() ]+/g //tudo que não estiver na lista [de 0 a 9]
    
    if ( phonePattern.test(e.target.elements['phone'].value)) {
        alert('Apenas números são permitidos no campo telefone!')
        return false;
    
}

    //validando tamanho do campo telefone 
    if( e.target.elements['phone'].value.replace(/[-() ]/g, '').length < 11){
        alert('Número inválido!')
        return false;
    }
    
        //Armazenar dados no localStorage
    var peopleRaw = localStorage.getItem('people')

    if (peopleRaw != null){
        var people = JSON.parse(peopleRaw)
    }else {
        var people = [];
    }

    //adicionando elemento novo
    if (id !== null){
        people[id]= {
            name:e.target.elements['name'].value ,
            tel:e.target.elements['phone'].value ,
            xp: (e.target.elements['xp'].value == 'true')  
        }
    } else{
        people.push({
            name:e.target.elements['name'].value ,
            tel:e.target.elements['phone'].value ,
            xp: (e.target.elements['xp'].value == 'true')  
        })
    }

    localStorage.setItem('people', JSON.stringify(people))

    document.getElementById('goHome').click()
}


//editando elemento

var urlPrincipal = new URL(window.location.href)

var id = urlPrincipal.searchParams.get('person')

if(id !== null){
    var peopleRaw = localStorage.getItem('people')

    if (peopleRaw != null){
        var people = JSON.parse(peopleRaw)
    }else {
        var people = [];
    }

    console.log(people[id])

    document.getElementById('name').value = people[id].name
    document.getElementById('phone').value = people[id].tel
    if (people[id].xp){
        document.getElementById('xp-yes').checked = true;
    } else{
        document.getElementById('xp-no').checked = false;
    }
}


//Mascara no campo telefone para não permitir que letras sejam escritas
function testaCampoTelefone(e){
    e.preventDefault()
    console.log(e)

    //adicionando '()' e '-' no formato do telefone
    if (e.target.value.length == 0){
        e.target.value += '(' 
    }

    
    if (e.target.value.length == 3){
        e.target.value += ')' 
    }

    if (e.target.value.length == 10){
        e.target.value += '-' 
    }

    if ((/[0-9 -()]/g).test(e.key) && e.target.value.length < 15){
    
        e.target.value += e.key
    }
}