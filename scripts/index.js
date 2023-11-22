// JAIME FERNÁNDEZ CALVO
// https://github.com/jaimecamocha/ExamenT3DWEC.git

//importamos
import { Ball, random } from "./balls.js";
import { width, height, ctx } from "./canvas_setup.js";

//metemos las bolas que vamos generando en el array
const balls = [];

while (balls.length < 25) { // ATENCIÓN: cambiamos el número de bolas
    const size = random(10, 20);
    const ball = new Ball(
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        size
    ); 
  
    balls.push(ball);
}
 

//recorremos el array mostrando las bolas en el lienzo 
function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)'; //FALLO: cambiamos el color del fondo a negro
    ctx.fillRect(0, 0, width, height);

    for (const ball of balls) {
        ball.draw();
        ball.update();
        for (const otherBall of balls) {
            if (ball !== otherBall) {
                ball.collisionDetect(otherBall);
            }
        }
    } 

    requestAnimationFrame(loop);
}

loop();