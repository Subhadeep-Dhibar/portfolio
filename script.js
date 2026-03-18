
const avatar = document.querySelector('.avatar');

document.addEventListener('mousemove', (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 25;
  const y = (window.innerHeight / 2 - e.clientY) / 25;

  avatar.style.transform = `
    rotateY(${x}deg)
    rotateX(${-y}deg)
  `;
});

z
