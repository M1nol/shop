const starryNight = document.getElementById('starry-night');
const numberOfStars = 200;

function getRandomSize() {
    return Math.random() * 3 + 1 + 'px';
}

function getRandomPosition() {
    return Math.floor(Math.random() * 100) + '%';
}

function getRandomDirection() {
    return (Math.random() - 0.5) * 20; // Создаёт значение в диапазоне от -10 до 10
}

for (let i = 0; i < numberOfStars; i++) {
    let star = document.createElement('div');
    star.classList.add('star');
    star.style.width = getRandomSize();
    star.style.height = star.style.width;
    star.style.top = getRandomPosition();
    star.style.left = getRandomPosition();
    star.style.setProperty('--moveX', getRandomDirection());
    star.style.setProperty('--moveY', getRandomDirection());
    starryNight.appendChild(star);
}

