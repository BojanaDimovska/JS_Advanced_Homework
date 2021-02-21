let first = ['Boris', 'Bojana', 'Blagoj', 'Angela', 'Simona']
let last = ['Karakolev', 'Dimovska', 'Delovski', 'Gramosli', 'Stojanova']



for(let i = 0; i < first.length; i++) {
    let fullName = [];
    ((first, last)=> {
        fullName.push(`${first[i]} ${last[i]}`)
    })(first, last)
    console.log(fullName)
}

// Bonus task
function factorial(number) {
    if(number < 0){
        return -1;
    } 
    else if(number == 0 || number == 1){
        return 1;
    }
    else {
        return number * factorial(number - 1);
    }
}

console.log(factorial(5))