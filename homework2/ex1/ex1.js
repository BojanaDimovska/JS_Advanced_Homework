let table = document.getElementById('tbl');
let next = document.getElementById('button');
let button = document.getElementById('btn');

let urlOne = 'https://swapi.dev/api/planets/?page=1'
let urlTwo = 'https://swapi.dev/api/planets/?page=2'

let toggleElement = function(toggleCondition, element){
    if (toggleCondition)
        element.css("display","block");
    else
        element.css("display","none");
}

function getData(url){
    fetch(url)
    .then(function(response){
        console.log(response);

        response.json().then(
            function(data){
                for(let i of data.results){
                    table.innerHTML += `
                        <td>${i.name}</td>
                        <td>${i.population}</td>
                        <td>${i.climate}</td>
                        <td>${i.gravity}</td>
                    `
                }
            }
        ).catch(e => {
            console.log(e)
        })
    })
}


button.addEventListener('click', () => {
    getData(urlOne)
    next.innerHTML = '<button>Next 10</button>'
    next.addEventListener('click', () => {
        getData(urlTwo)
        next.innerHTML = '<button>Previous 10</button>'
    })
})

