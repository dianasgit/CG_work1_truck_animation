class Andorinha {
    constructor(x, y) {
        this.anX = x;
        this.anY = y;
        this.fase = 0;
    }

    seguir(alvoX, alvoY) {
        this.anX += (alvoX - this.anX - 60) *0.03;
        this.anY += (alvoY - this.anY -150) * 0.05;
        this.fase += 0.3;
    }

    draw(ctx) {
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(this.anX, this.anY);
        ctx.lineTo(this.anX + 12, this.anY); //corpo do pássaro
        ctx.stroke();

        const asa = Math.sin(this.fase) * 10; //varia entre +-10
        ctx.beginPath();
        ctx.moveTo(this.anX + 4, this.anY);
        ctx.lineTo(this.anX - 6, this.anY - asa);//asa esquerda
        ctx.moveTo(this.anX + 8, this.anY);
        ctx.lineTo(this.anX + 18, this.anY  - asa); //asa direita
        ctx.stroke();
    }
}
