document.getElementById('showMessage').addEventListener('click', () => {
    const message = document.getElementById('message');
    message.classList.toggle('hidden');
});

// Snowflake effect
const snowContainer = document.getElementById('snow-container');

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    snowflake.innerText = '❄️';
    snowContainer.appendChild(snowflake);

    setTimeout(() => snowflake.remove(), 5000);
}

setInterval(createSnowflake, 200);
