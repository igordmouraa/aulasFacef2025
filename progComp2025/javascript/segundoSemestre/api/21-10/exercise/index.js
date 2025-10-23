async function carregaUsuarioseEnderecos() {
    try {
        const response     = await fetch('https://jsonplaceholder.typicode.com/users');
        const users        = await response.json();
        const listUsers    = document.getElementById('user-list');
        listUsers.innerHTML = '';

        for(let i = 0; i < users.length; i++) {
            const li = document.createElement('li');
            li.textContent = `${users[i].name} - ${users[i].email} - ${users[i].phone} - ${users[i].address.street}, ${users[i].address.suite}, ${users[i].address.city}, ${users[i].address.zipcode}`;
            listUsers.appendChild(li);
        }
    } catch (e) {
        alert('Não foi possível carregar os dados da API.');
        console.log('Error message: ' + e);
    } 
}

window.carregaUsuarioseEnderecos = carregaUsuarioseEnderecos;