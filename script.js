body {
    font-family: 'Roboto', sans-serif;
    background-color: #121212;
    color: #e0e0e0;
    margin: 0;
    padding: 0;
    line-height: 1.6;
}

header {
    background-color: #1e1e1e;
    padding: 1rem 2rem;
    text-align: center;
    border-bottom: 2px solid #444;
}

header h1 {
    margin: 0;
    color: #ccc;
    font-size: 2.5rem;
    letter-spacing: 2px;
}

header p {
    color: #888;
    margin-top: 5px;
}

.search-section {
    padding: 1rem 2rem;
    text-align: center;
}

#searchInput {
    width: 80%;
    max-width: 500px;
    padding: 0.8rem;
    font-size: 1rem;
    border-radius: 8px;
    border: 1px solid #444;
    background-color: #2c2c2c;
    color: #e0e0e0;
    outline: none;
}

#searchInput:focus {
    border-color: #666;
}

.games-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
    padding: 2rem;
}

.game-card {
    background-color: #1e1e1e;
    border: 1px solid #444;
    border-radius: 10px;
    overflow: hidden;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 150px;
}

.game-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
    border-color: #666;
}

.game-card h3 {
    margin: 0.5rem 0;
    font-size: 1.1rem;
    color: #fff;
}

.game-card p {
    margin: 0.5rem;
    font-size: 0.9rem;
    color: #aaa;
    padding: 0 1rem;
}

footer {
    text-align: center;
    padding: 1rem;
    background-color: #1e1e1e;
    border-top: 2px solid #444;
    margin-top: 2rem;
    color: #666;
}
