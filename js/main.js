const listEl = document.getElementById('gameList');

games.forEach(game => {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
        <img src="${game.img}" alt="${game.name}">
        <h3>${game.name}</h3>
        <a href="game.html?game=${game.folder}">开始游戏</a>
    `;
    listEl.appendChild(card);
});
