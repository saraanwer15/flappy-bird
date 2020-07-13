// JavaScript source code

window.onload = function () {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

  
    //loading images

    var bird = new Image();
    var fg = new Image();
    var bg = new Image();
    var pipeNorth = new Image();
    var pipeSouth = new Image();

    bird.src = ("images/bird.png");
    bg.src = ("images/bg.png");
    fg.src = ("images/fg.png");
    pipeNorth.src = ("images/pipeNorth.png");
    pipeSouth.src = ("images/pipeSouth.png");


    var gap = 100;
    var bx = 50;
    var by = 150;
    var gravity = 1;

    //on key down

    document.addEventListener("keydown", moveUp);

    function moveUp() {
        by -= 40;
    }

    //coordinates of pipe

    var pipe = [];
    pipe[0] = {
        x: canvas.width,
        y: 0
    };
    var score = 0;
    //drawing images

    function draw() {
        context.drawImage(bg, 0, 0);
        context.drawImage(fg, 0, canvas.height - fg.height);
        for (var i = 0; i < pipe.length; i++) {
            context.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
            context.drawImage(pipeSouth, pipe[i].x, pipe[i].y + pipeNorth.height + gap);
            pipe[i].x--;
            if (pipe[i].x == 125) {
                pipe.push({
                    x: canvas.width,
                    y: Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height
                })
            }
            //detect collision

            if (bx + bird.width >= pipe[i].x && bx <= pipeNorth.width + pipe[i].x && (by <= pipe[i].y + pipeNorth.height || by+ bird.height>=pipe[i].y +pipeNorth.height+gap) || by+bird.height>=canvas.height-fg.height) {
                location.reload();
            }

            if (pipe[i].x == 5) {
                score++;
            }
        }
        context.drawImage(bird, bx, by);
        by += gravity;
        context.fillStyle = "#000";
        context.font = "20px Verdana";
        context.fillText("Score : " + score, 10,canvas.height-20);


        window.requestAnimationFrame(draw);
    }
    draw();

}