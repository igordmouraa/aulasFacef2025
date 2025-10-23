export async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Resposta retornada: ' + response.statusText);
        }
        const users = await response.json();
        return users;
    }
    catch (error) {
        console.error('Erro ao buscar usuários:', error);
        return [];
    }
}

export function displayUsers(users) {
    const userListElement = document.querySelector('#user-list ul');
    userListElement.innerHTML = '';
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.name} (${user.email}) (${user.phone})`;
        userListElement.appendChild(listItem);
    }
    );
}

document.querySelector('button').addEventListener('click', async () => {
    const users = await fetchUsers();
    displayUsers(users);
});
