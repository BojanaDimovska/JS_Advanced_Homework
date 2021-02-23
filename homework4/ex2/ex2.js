function strUppercase (par){
    return new Promise((resolve, reject) => {
        if(typeof par !== 'string') {
            reject(par)
        }
        resolve(par.toUpperCase())
    })
}
setTimeout(() => {
    strUppercase(2)
.then(success => console.log(success))
.catch(error => console.log(`Error: ${error}`))
}, 4000) 