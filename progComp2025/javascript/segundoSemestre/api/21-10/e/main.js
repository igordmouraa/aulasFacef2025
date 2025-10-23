import { fetchUsers, displayUsers } from './api.js';

const loadButton = document.querySelector('#load-users');

loadButton.addEventListener('click', async () => {

    loadButton.textContent = 'Carregando...';
    loadButton.disabled = true;

    const users = await fetchUsers();
    
    displayUsers(users);
    
    loadButton.textContent = 'Carregar Usuários';
    loadButton.disabled = false;
});