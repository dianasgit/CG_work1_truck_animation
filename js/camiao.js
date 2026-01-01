// ===== CAMINHÃO =====
class TruckPart {
    constructor(truck) {
        this.truck = truck;
    }
    get x() { return this.truck.x; }
    get y() { return this.truck.y; }
}

// Partes
class Lataria extends TruckPart {
    draw(ctx) {
        const x = this.x, y = this.y;
        const w = 150, h = 100, r = 10;

        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx.lineTo(x + w, y + 40 - r);
        ctx.quadraticCurveTo(x + w, y + 40, x + w + 10, y + 50);
        ctx.lineTo(x + w + 10, y + h);
        ctx.lineTo(x - 10, y + h);
        ctx.lineTo(x - 10, y + h - 30);
        ctx.lineTo(x, y + h - 30);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = "#aaaaaa";
        ctx.fillRect(x - 10, y + h - 10, 170, 10);
        ctx.fillRect(x + w - 12, y + h - 30, 23, 30);
        ctx.fillRect(x + w + 5, y + h - 50, 5, 30);
        ctx.fillStyle = "#faf8f8";
        ctx.fillRect(x + w, y + h - 50, 5, 30);
    }
}

class Vidros extends TruckPart {
    draw(ctx) {
        const x = this.x, y = this.y;
        ctx.fillStyle = "#5a5a5a";
        ctx.fillRect(x + 97, y + 7, 28, 28);
        ctx.fillStyle = "#6ce0db";
        ctx.fillRect(x + 100, y + 10, 22, 22);

        ctx.fillStyle = "#5a5a5a";
        ctx.fillRect(x + 135, y + 7, 15, 34);
        ctx.fillStyle = "#6ce0db";
        ctx.fillRect(x + 138, y + 10, 12, 28);
    }
}

class Roda extends TruckPart {
    constructor(truck, ox) {
        super(truck);
        this.ox = ox;
    }
    draw(ctx) {
        const x = this.x + this.ox, y = this.y + 93;
        ctx.fillStyle = "#363434";
        ctx.beginPath();
        ctx.arc(x, y, 18, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "silver";
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();
    }
}

class Paralama extends TruckPart {
    constructor(truck, ox) {
        super(truck);
        this.ox = ox;
    }
    draw(ctx) {
        const x = this.x + this.ox, y = this.y + 90;
        ctx.fillStyle = "#9e2424";
        ctx.beginPath();
        ctx.arc(x, y, 22, Math.PI, 0);
        ctx.fill();
        ctx.fillRect(x - 21, y - 5, 42, 15);
    }
}

class Escada extends TruckPart {
    draw(ctx) {
        const x = this.x, y = this.y;
        ctx.fillStyle = "#dbcfcf";
        ctx.fillRect(x + 5, y - 20, 95, 20);
        ctx.fillRect(x + 5, y - 20, 25, 30);

        ctx.fillStyle = "#9fd3ff";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 0.5;

        [30, 55, 80].forEach(dx => {
            ctx.fillRect(x + dx, y - 17, 15, 15);
            ctx.strokeRect(x + dx, y - 17, 15, 15);
        });
    }
}

class Sirene extends TruckPart {
    draw(ctx) {
        const x = this.x, y = this.y;
        ctx.fillStyle = "#9e2424";
        ctx.fillRect(x + 100, y - 12, 22, 12);

        ctx.fillStyle = "#da6161";
        ctx.beginPath();
        ctx.arc(x + 105, y - 6, 4.5, 0, Math.PI * 2);
        ctx.arc(x + 115, y - 6, 4.5, 0, Math.PI * 2);
        ctx.fill();
    }
}

class PinturaZ extends TruckPart {
    draw(ctx) {
        const x = this.x, y = this.y;
        ctx.fillStyle = "#f3ecec";
        ctx.beginPath();
        ctx.moveTo(x, y + 50);
        ctx.lineTo(x + 50, y + 50);
        ctx.lineTo(x + 70, y + 70);
        ctx.lineTo(x + 100, y + 70);
        ctx.lineTo(x + 100, y + 80);
        ctx.lineTo(x + 67, y + 80);
        ctx.lineTo(x + 45, y + 60);
        ctx.lineTo(x, y + 60);
        ctx.closePath();
        ctx.fill();
    }
}

class Truck {
    constructor(x, y, canvasWidth) {
        this.x = x;
        this.y = y;
        this.velocidade = 3;
        this.canvasWidth = canvasWidth;

        this.parts = [
            new Lataria(this),
            new PinturaZ(this),
            new Vidros(this),
            new Escada(this),
            new Sirene(this),
            new Paralama(this, 30),
            new Paralama(this, 112),
            new Roda(this, 30),
            new Roda(this, 112)
        ];
    }

    draw(ctx) {
        this.parts.forEach(p => p.draw(ctx));
    }

    update() {
        this.x += this.velocidade;
        if (this.x > this.canvasWidth + 200) this.x = -200; // loop infinito
    }
}
