function showCard() {
    document.querySelector(".card").classList.remove("hidden");
}

// Vẽ cây hoa trên canvas
const canvas = document.getElementById("treeCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawBranch(x, y, length, angle, depth) {
    if (depth === 0) return;

    const x2 = x + length * Math.cos(angle);
    const y2 = y - length * Math.sin(angle);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = depth > 2 ? "#8B4513" : "#ff69b4";
    ctx.lineWidth = depth;
    ctx.stroke();

    setTimeout(() => {
        drawBranch(x2, y2, length * 0.7, angle - Math.PI / 6, depth - 1);
        drawBranch(x2, y2, length * 0.7, angle + Math.PI / 6, depth - 1);
    }, 500);
}

function growTree() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBranch(canvas.width / 2, canvas.height, 100, -Math.PI / 2, 10);
}

growTree();