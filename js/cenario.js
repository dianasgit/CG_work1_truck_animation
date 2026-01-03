class Cenario {
  constructor(canvas) {
	this.canvas = canvas;
	this.ctx = canvas.getContext("2d");
	this.centerX = canvas.width / 2;
	this.centerY = canvas.height / 2;

	this.fundo = new Image();
	this.fundo.src = "media/fundo.png";
	this.fundoCarregado = false;

	this.fundo.onload = () => {
	  this.fundoCarregado = true;
	};
  }

  draw() {
	const ctx = this.ctx;
	const { width, height } = this.canvas;

	// Fundo
	if (this.fundoCarregado) {
	  ctx.drawImage(this.fundo, 0, 0, width, height);
	}

	// Rua
	ctx.fillStyle = "#2c2c2cff";
	ctx.fillRect(0, this.centerY + 130, width, 100);

	// Faixas
	const larguraFaixa = 90;
	const numFaixas = 20;

	ctx.fillStyle = "#fff";
	for (let i = 0; i < numFaixas; i++) {
	  const x = i * larguraFaixa;
	  ctx.fillRect(x, this.centerY + 170, 40, 4);
	}
  }
}
