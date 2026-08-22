document.addEventListener('DOMContentLoaded', () => {
    const gamesContainer = document.getElementById('gamesContainer');
    const searchInput = document.getElementById('searchInput');

    // --- AQUÍ PONDREMOS LA LISTA DE JUEGOS ---
    // Por ahora solo hay uno de ejemplo. Cuando me pases los links, los añado aquí.
    const games = [
        {
            title: "Juego de Ejemplo",
            url: "https://play2048.co/"
        }
        // Aquí irá el resto de los juegos que me pases...
    ];

    function renderGames(filterText = '') {
        gamesContainer.innerHTML = '';
        
        const filteredGames = games.filter(game => 
            game.title.toLowerCase().includes(filterText.toLowerCase())
        );

        filteredGames.forEach(game => {
            const link = document.createElement('a');
            link.href = game.url;
            link.textContent = game.title;
            link.target = '_blank'; // Esto hace que se abra en una nueva pestaña
            link.style.display = 'block';
            link.style.margin = '10px 0';
            link.style.color = '#3498db';
            link.style.textDecoration = 'none';
            link.style.fontSize = '18px';

            gamesContainer.appendChild(link);
        });
    }

    searchInput.addEventListener('input', (e) => {
        renderGames(e.target.value);
    });

    renderGames();
});
