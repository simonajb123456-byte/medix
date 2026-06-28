// Create floating hearts
const container = document.querySelector(".floating-hearts");

if (container) {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";

        heart.style.position = "absolute";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-10vh";
        heart.style.fontSize = (15 + Math.random() * 30) + "px";
        heart.style.opacity = 0.3 + Math.random() * 0.7;
        heart.style.animation = `float ${5 + Math.random() * 8}s linear infinite`;
        heart.style.animationDelay = Math.random() * 5 + "s";

        container.appendChild(heart);
    }
}

// Add animation styles
const style = document.createElement("style");
style.innerHTML = `
@keyframes float{
    0%{
        transform:translateY(-10vh) rotate(0deg);
    }
    100%{
        transform:translateY(110vh) rotate(360deg);
    }
}
`;
document.head.appendChild(style);

// Heartbeat animation
const heart = document.querySelector(".heart-ball");

if (heart) {
    setInterval(() => {
        heart.style.transform = "rotate(-45deg) scale(1.08)";
        setTimeout(() => {
            heart.style.transform = "rotate(-45deg) scale(1)";
        }, 250);
    }, 1000);
}
