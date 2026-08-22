document.addEventListener('DOMContentLoaded', () => {
    const gamesContainer = document.getElementById('gamesContainer');
    const searchInput = document.getElementById('searchInput');

    // CAMBIO: Ya no hay juegos. Ahora hay "Elementos del Archivo"
    const items = [
        {
            title: "Manual de Utilidad",
            description: "Guía completa para el uso de herramientas básicas.",
            icon: "📄",
            link: "#"
        },
        {
            title: "Calendario 2026",
            description: "Planificador anual de tareas y fechas importantes.",
            icon: "📅",
            link: "#"
        },
        {
            title: "Calculadora Avanzada",
            description: "Herramienta matemática para ejercicios prácticos.",
            icon: "🧮",
            link: "#"
        },
        {
            title: "Biblioteca de Texto",
            description: "Recopilación de textos de referencia rápida.",
            icon: "📚",
            link: "#"
        },
        {
            title: "Notas Rápidas",
            description: "Aplicación de toma de notas instantáneas.",
            icon: "📝",
            link: "#"
        },
        {
            title: "Reloj Global",
            description: "Horarios y zonas horarias de todo el mundo.",
            icon: "🌍",
            link: "#"
        }
    ];

    function renderItems(filterText = '') {
        gamesContainer.innerHTML = '';
        
        const filteredItems = items.filter(item => 
            item.title.toLowerCase().includes(filterText.toLowerCase()) ||
            item.description.toLowerCase().includes(filterText.toLowerCase())
        );

        if (filteredItems.length === 0) {
            gamesContainer.innerHTML = '<p style="text-align:center; color:#666; grid-column: 1/-1;">No se encontraron resultados.</p>';
            return;
        }

        filteredItems.forEach(item => {
            const card = document.createElement('div');
            card.className = 'game-card';
            card.innerHTML = `
                <div style="font-size: 3rem; margin-bottom: 10px;">${item.icon}</div>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            `;
            // El enlace es vacío (#) para que no salga nada al hacer click
            // O puedes ponerlo vacío para que no abra nada
            gamesContainer.appendChild(card);
        });
    }

    searchInput.addEventListener('input', (e) => {
        renderItems(e.target.value);
    });

    renderItems();
});
