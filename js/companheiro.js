class Andorinha {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.fase = 0;
    }

    seguir(alvoX, alvoY) {
        this.x += (alvoX - this.x - 60) * 0.03;
        this.y += (alvoY - this.y - 60) * 0.05;
        this.fase += 0.3;
    }

    draw(ctx) {
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + 12, this.y);
        ctx.stroke();

        const asa = Math.sin(this.fase) * 6;
        ctx.beginPath();
        ctx.moveTo(this.x + 4, this.y);
        ctx.lineTo(this.x - 6, this.y - 6 - asa);
        ctx.moveTo(this.x + 8, this.y);
        ctx.lineTo(this.x + 18, this.y - 6 - asa);
        ctx.stroke();
    }
}
