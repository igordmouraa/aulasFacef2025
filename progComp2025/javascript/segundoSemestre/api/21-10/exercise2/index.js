async function carregaPosts(params) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const posts    = await response.json();
        const postsSection = document.getElementById('posts');
        postsSection.innerHTML = '';
        
        for(let i = 0; i < posts.length; i++) {
            const postsSection = document.getElementById('posts');
            const article = document.createElement('article');
            const title   = document.createElement('h2');
            const body    = document.createElement('p');

            article.className = 'post';
            title.className   = 'post-title';
            body.className    = 'post-body';

            title.textContent = posts[i].title;
            body.textContent  = posts[i].body;
            article.appendChild(title);
            article.appendChild(body);
            postsSection.appendChild(article);
        }
    } catch (e) {
        alert('Erro ao carregar posts');
        console.error('Erro ao carregar posts:', e);
    }
}

window.carregaPosts = carregaPosts;