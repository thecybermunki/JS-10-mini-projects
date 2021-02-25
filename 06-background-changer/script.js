const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    document.body.background = randomBg()
});

function randomBg() {
    return `hsl(${Math.floor(math.random()
        * 360)}, 100%, 50%)`;
}