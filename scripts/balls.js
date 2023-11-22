// JAIME FERNÁNDEZ CALVO
// https://github.com/jaimecamocha/ExamenT3DWEC.git

//importamos
import { ctx, width, height } from "./canvas_setup.js";

//creamos la clase que crea las bolas
export class Ball {
    constructor(x, y, velX, velY, size) { 
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = randomRGB();
        this.size = size;
    } 
 
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI); //FALLO: corregimos Math.PI 
        ctx.fill();
    }

    update() {
        if ((this.x + this.size) >= width || (this.x - this.size) <= 0) {
            this.velX = -this.velX;
        }
 
        if ((this.y + this.size) >= height || (this.y - this.size) <= 0) {
            this.velY = -this.velY;
        }

        this.x += this.velX;
        this.y += this.velY;
    }

    collisionDetect(otherBall) {
        const dx = this.x - otherBall.x;
        const dy = this.y - otherBall.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + otherBall.size) {
            otherBall.color = this.color = randomRGB();
        }
    }
}

//funcion para crear números random
export function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//función para crear colores random
export function randomRGB() {
    return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}