// ===== CENARIO =====
class Cenario {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.centerX = canvas.width / 2;
        this.centerY = canvas.height / 2;
    }

    draw() {
        const ctx = this.ctx;
        const { width, height } = this.canvas;

        ctx.clearRect(0, 0, width, height);

        // Céu
        ctx.fillStyle = "#9fd3ff";
        ctx.fillRect(0, 0, width, height);

        // Prédios (estáticos)
        const larguraPredio = 180;
        const numPredios = 12;

        for (let i = 0; i < numPredios; i++) {
            const x = i * larguraPredio;

            ctx.fillStyle = "#b5b5b5";
            ctx.fillRect(x, this.centerY - 30, 120, 130);
            ctx.fillStyle = "#9a9a9a";
            ctx.fillRect(x + 25, this.centerY - 60, 70, 160);
        }

        // Rua
        ctx.fillStyle = "#252525";
        ctx.fillRect(0, this.centerY + 100, width, 100);

        // Faixas
        const larguraFaixa = 80;
        const numFaixas = 20;

        for (let i = 0; i < numFaixas; i++) {
            const x = i * larguraFaixa;
            ctx.fillStyle = "#fff";
            ctx.fillRect(x, this.centerY + 145, 40, 5);
        }
    }
}
