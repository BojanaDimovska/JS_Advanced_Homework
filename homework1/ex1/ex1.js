let button = document.getElementById('btn').addEventListener('click', function(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status >= 200 && xhr.status < 300 && xhr.readyState == 4){
            // console.log(`XHR response ${xhr.response}`);
            let jsObject = JSON.parse(xhr.response);
            let ul = document.getElementById('unordered');
            let cutArr = jsObject.results;
                let n = 10;
                let newArr = cutArr.slice(0,n);
            for(let i of newArr){
                
                if(i < jsObject.results){
                ul.innerHTML += `<li>${i.name}</li>`;
                }
            }
            // console.log(jsObject);
        }
    }
    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon");
    xhr.send();
});