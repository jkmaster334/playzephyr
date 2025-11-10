// 获取 URL 参数
function getQuery(name) {
    return new URLSearchParams(window.location.search).get(name);
}

const gameFolder = getQuery('game');
const iframe = document.getElementById('gameFrame');
const title = document.getElementById('gameTitle');

if (gameFolder) {
    // 查找对应游戏对象
    const game = games.find(g => g.folder === gameFolder);
    title.textContent = game ? game.name : gameFolder;
    iframe.src = `games/${gameFolder}/index.html`;
} else {
    iframe.srcdoc = '<p style="color:#ccc; text-align:center; padding:50px;">未指定游戏</p>';
}
