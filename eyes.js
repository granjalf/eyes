const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';
  
  for (let e of balls){
    e.style.left = x;
    e.style.top = y;
    e.transform = 'translate(-' + x + ',-' + y + ')';
  }
};