document.addEventListener('DOMContentLoaded', () => {
    const gamesContainer = document.getElementById('gamesContainer');
    const searchInput = document.getElementById('searchInput');

    const games = [
        {
            title: "2048",
            description: "El famoso juego de unir números para llegar al 2048.",
            imageUrl: "https://via.placeholder.com/250x150/3498db/ffffff?text=2048",
            gameUrl: "https://play2048.co/"
        },
        {
            title: "Snake",
            description: "El clásico juego de la serpiente. ¡Come y crece!",
            imageUrl: "https://via.placeholder.com/250x150/2ecc71/ffffff?text=Snake",
            gameUrl: "https://snake-game.io/"
        },
        {
            title: "Tetris",
            description: "El juego de bloques clásico. ¡Organiza las piezas!",
            imageUrl: "https://via.placeholder.com/250x150/e74c3c/ffffff?text=Tetris",
            gameUrl: "https://tetris.com/play-tetris"
        },
        {
            title: "Pacman",
            description: "El legendario pacman. ¡Come todos los puntos!",
            imageUrl: "https://via.placeholder.com/250x150/f1c40f/000000?text=Pacman",
            gameUrl: "https://www.arcadegames.com/pacman.html"
        }
    ];

    function renderGames(filterText = '') {
        gamesContainer.innerHTML = '';
        
        const filteredGames = games.filter(game => 
            game.title.toLowerCase().includes(filterText.toLowerCase()) ||
            game.description.toLowerCase().includes(filterText.toLowerCase())
        );

        filteredGames.forEach(game => {
            const card = document.createElement('div');
            card.className = 'game-card';
            card.innerHTML = `
                <img src="${game.imageUrl}" alt="${game.title}">
                <h3>${game.title}</h3>
                <p>${game.description}</p>
            `;
            card.addEventListener('click', () => {
                window.open(game.gameUrl, '_blank');
            });
            gamesContainer.appendChild(card);
        });
    }

    searchInput.addEventListener('input', (e) => {
        renderGames(e.target.value);
    });

    renderGames();
});
