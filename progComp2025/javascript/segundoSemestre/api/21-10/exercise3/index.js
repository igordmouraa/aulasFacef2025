const apiKey = '................'; 

async function buscarFilme() {
    
    const nomeFilme = document.getElementById('inputFilme').value;
    const postsSection = document.getElementById('posts');
    postsSection.innerHTML = '';

    if (!nomeFilme) {
        postsSection.innerHTML = '<p>Por favor, digite o nome de um filme.</p>';
        return;
    }

    try {
        const url = `https://www.omdbapi.com/?t=${nomeFilme}&apikey=${apiKey}`;
        
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "False") {
            postsSection.innerHTML = '<p>Filme não encontrado!</p>';
            return;
        }

        const article = document.createElement('article');
        article.className = 'post';

        const title = document.createElement('h2');
        title.className = 'post-title';
        title.textContent = `${data.Title} (${data.Year})`;

        const body = document.createElement('p');
        body.className = 'post-body';
        body.textContent = data.Plot;

        const director = document.createElement('p');
        director.textContent = `Diretor: ${data.Director}`;
        
        const poster = document.createElement('img');
        poster.className = 'post-poster';
        poster.src = data.Poster;

        article.appendChild(title);
        article.appendChild(body);
        article.appendChild(director);
        article.appendChild(poster);
        postsSection.appendChild(article);

    } catch (e) {
        alert('Erro ao buscar filme.');
        console.error('Erro na API:', e);
    }
}

window.buscarFilme = buscarFilme;