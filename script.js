document.addEventListener('DOMContentLoaded', () => {
    const gamesContainer = document.getElementById('gamesContainer');
    const searchInput = document.getElementById('searchInput');

    // ESTO ES LO NUEVO: Lista vacía o items neutros. Sin juegos.
    const items = [
        {
            title: "Archivo 1",
            description: "Documento de referencia general.",
            icon: "📁"
        },
        {
            title: "Archivo 2",
            description: "Herramienta de cálculo básico.",
            icon: "🧮"
        },
        {
            title: "Archivo 3",
            description: "Guía de usuario e instrucciones.",
            icon: "📖"
        },
        {
            title: "Archivo 4",
            description: "Plantilla de notas rápidas.",
            icon: "📝"
        }
    ];

    function renderItems(filterText = '') {
        gamesContainer.innerHTML = '';
        
        const filteredItems = items.filter(item => 
            item.title.toLowerCase().includes(filterText.toLowerCase()) ||
            item.description.toLowerCase().includes(filterText.toLowerCase())
        );

        if (filteredItems.length === 0) {
            gamesContainer.innerHTML = '<p style="text-align:center; color:#666; grid-column: 1/-1;">No hay resultados.</p>';
            return;
        }

        filteredItems.forEach(item => {
            const card = document.createElement('div');
            card.className = 'game-card';
            card.innerHTML = `
                <div style="font-size: 2.5rem; margin-bottom: 10px;">${item.icon}</div>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            `;
            gamesContainer.appendChild(card);
        });
    }

    searchInput.addEventListener('input', (e) => {
        renderItems(e.target.value);
    });

    renderItems();
});
