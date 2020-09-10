export class Drawing {
    constructor() {

        this.canvas = document.getElementById('canvasport');
        this.mascara = document.querySelector('.textMask img');
        this.ctx = this.canvas.getContext('2d');
        this.rect = this.canvas.getBoundingClientRect();
        this.ctx.fillStyle = "#333333";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.x = 0;
        this.y = 0;
        this.dibujando = false;
        this.color = 'white';
        this.grosor = 3;
        this.iniciarCanvas();
    }

    iniciarCanvas() {
        this.mascara.addEventListener('mouseenter', (e) => {
            this.x = e.clientX - this.rect.left;
            this.y = e.clientY - this.rect.top;
            this.dibujando = true;

        });

        this.mascara.addEventListener('mousemove', (e) => {

            if (this.dibujando === true) {
                this.dibujar(this.x, this.y, e.clientX - this.rect.left, e.clientY - this.rect.top);
                this.x = e.clientX - this.rect.left;
                this.y = e.clientY - this.rect.top;

            }

        });

        this.mascara.addEventListener('mouseout', (e) => {
            if (this.dibujando === true) {
                this.dibujar(this.x, this.y, e.clientX - this.rect.left, e.clientY - this.rect.top);
                this.x = 0;
                this.y = 0;
                this.dibujando = false;

            }

        });


    }
    dibujar(x1, y1, x2, y2) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = 50;
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
        this.ctx.closePath();

    }



}