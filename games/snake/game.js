const canvas=document.getElementById('gameCanvas');
const ctx=canvas.getContext('2d');
const grid=20; let count=0;
let snake=[{x:160,y:160}]; let dx=grid, dy=0;
let apple={x:320,y:320};
let score=0; const scoreEl=document.querySelector('#score');
function getRandomInt(min,max){ return Math.floor(Math.random()*(max-min)/grid)*grid; }
function gameLoop(){
    requestAnimationFrame(gameLoop);
    if(++count<4) return; count=0;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    snake.unshift({x:snake[0].x+dx, y:snake[0].y+dy});
    if(snake[0].x===apple.x && snake[0].y===apple.y){ score++; scoreEl.textContent=score;
        apple.x=getRandomInt(0,canvas.width); apple.y=getRandomInt(0,canvas.height); }
    else snake.pop();
    ctx.fillStyle='red'; ctx.fillRect(apple.x,apple.y,grid,grid);
    ctx.fillStyle='lime'; snake.forEach(s=>ctx.fillRect(s.x,s.y,grid-1,grid-1));
    for(let i=1;i<snake.length;i++){ if(snake[i].x===snake[0].x && snake[i].y===snake[0].y){
        snake=[{x:160,y:160}]; dx=grid; dy=0; score=0; scoreEl.textContent=score; } }
}
document.addEventListener('keydown',e=>{
    if(e.key==='ArrowLeft'&&dx===0){dx=-grid;dy=0;}
    if(e.key==='ArrowUp'&&dy===0){dx=0;dy=-grid;}
    if(e.key==='ArrowRight'&&dx===0){dx=grid;dy=0;}
    if(e.key==='ArrowDown'&&dy===0){dx=0;dy=grid;}
});
requestAnimationFrame(gameLoop);