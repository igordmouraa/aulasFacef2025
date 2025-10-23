async function carregaUsuarios() {
    try {
        const response      = await fetch('https://jsonplaceholder.typicode.com/users');
        const users         = await response.json();
        const listUsers     = document.getElementById('user-list');
        listUsers.innerHTML = '';

        for(let i = 0; i < users.length; i++) {
            const li = document.createElement('li');
            li.textContent = `${users[i].name} - ${users[i].email} - ${users[i].phone}`;
            listUsers.appendChild(li);
        }
    } catch (e) {
        alert('Não foi possível carregar os dados da API.');
        console.log('Error message: ' + e);
    }    
}

window.carregaUsuarios = carregaUsuarios;