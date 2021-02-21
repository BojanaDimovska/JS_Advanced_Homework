let table = document.getElementById('table');


document.getElementById("btn").addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
        response.json().then((data) => {
            console.log(data)
            table.style.display = 'table'
                table.innerHTML += `
                    <td>${data.id}</td>
                    <td>${data.name}</td>
                    <td>${data.username}</td>
                    <td>${data.email}</td>
                    <td>${data.address.city}</td>
                    <td>${data.address.street}</td>
                    <td>${data.address.suite}</td>
                    <td>${data.address.zipcode}</td>
                    <td>${data.company.name}</td>
                `
                
        })
    })
});


