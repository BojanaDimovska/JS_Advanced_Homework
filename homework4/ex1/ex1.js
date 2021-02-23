let user = document.getElementById('userDetails');

async function getFirstDetails() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    let data = await response.json()
    user.innerHTML += `
    
    <h3>User ID: ${data.userId}</h3>
    <h3>ID: ${data.id}</h3>
    <h3>Title: ${data.title}</h3>
    <h3>Body: ${data.body}</h3>    
    `
}

async function getSecondDetails(){
    user.innerHTML = ''
    let response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    let data = await response.json()
    user.innerHTML += `

    <h3>User ID: ${data.id}</h3>
    <h3>Name: ${data.name}</h3>
    <h3>Username: ${data.username}</h3>
    <h3>Email: ${data.email}</h3>
    <h3>Street: ${data.address.street}</h3>
    <h3>City: ${data.address.city}</h3>
    <h3>Phone: ${data.phone}</h3>    
    `
}


try{
    getFirstDetails();
    setTimeout(getSecondDetails, 2000)
  }
  catch(error){
    console.log(error);
  }