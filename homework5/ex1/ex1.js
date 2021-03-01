async function getDetailsForTallinn(){
    let response = await fetch('https://restcountries.eu/rest/v2/capital/tallinn')
    let data = await response.json()
    for(i of data){
        console.log(data);
        return;
    }
    
}

async function getCurrencies(){
    let response = await fetch('https://restcountries.eu/rest/v2/currency/EUR')
    let data = await response.json()
    for(i of data){
        console.log(data);
        return;
    }
}
try{
    getDetailsForTallinn()
    setTimeout(getCurrencies, 3000)
} catch(error){
    console.log(error)
}
