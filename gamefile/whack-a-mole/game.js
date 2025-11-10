const container = document.getElementById('game');
for(let i=0;i<6;i++){
    const hole = document.createElement('div');
    hole.className = 'hole';
    container.appendChild(hole);
}
const holes = document.querySelectorAll('.hole');
const scoreEl = document.getElementById('score');
let score=0;
function randomHole(){ return holes[Math.floor(Math.random()*holes.length)]; }
function showMole(){
    const hole = randomHole();
    const mole = document.createElement('div'); mole.className='mole';
    hole.appendChild(mole);
    mole.addEventListener('click', ()=>{ score++; scoreEl.textContent=score; mole.remove(); });
    setTimeout(()=>mole.remove(),1000);
}
setInterval(showMole,800);