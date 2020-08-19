<<<<<<< HEAD
// JavaScript source code

window.onload = function () {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.canvas.height = 660;
    context.canvas.width = 512;
    //loading images

    var bird = new Image();
    var fg = new Image();
    var bg = new Image();
    var pipeNorth = new Image();
    var pipeSouth = new Image();
    var coin = new Image();


    bird.src = ("images/bird.png");
    bg.src = ("images/bg2.png");
    fg.src = ("images/fg2.png");
    pipeNorth.src = ("images/pipeNorth.png");
    pipeSouth.src = ("images/pipeSouth.png");
    coin.src = ("images/coin.png");

     
    var gap = canvas.height / 4;
    var bx = canvas.height / 4;
    var by = canvas.height / 3;
    var gravity = 1;
    
    //on key down

    document.addEventListener("keydown", function movement(event) {
        if (event.keyCode == '38') {

            by -= 50;
        }
        if (event.keyCode == '40') {
            by += 40;
        }
        if (event.keyCode == '32') {
            by -= 60;
        }
    });
    //coordinates of pipe

    var pipe = [];
    pipe[0] = {
        x: canvas.width,
        y: 0
    };
    

    //coordinates of coins

    var coins1 = [];
    coins1[0] = {
        x: canvas.width/3 + Math.floor(Math.random() * canvas.width/2),
        y: Math.floor(Math.random() * canvas.width / 2)+fg.height
    };

    var coins2 = [];
    coins2[0] = {
        x: canvas.width / 3 + Math.floor(Math.random() * canvas.width/2),
        y: Math.floor(Math.random() * canvas.width / 2) + fg.height
    };

    var score = 0;

    //variables for coin collision

    var cc1=[]
    var cc2 = [];
    cc1[0] = 0;
    cc2[0] = 0;
   

    //drawing images

    function draw() {

        context.drawImage(bg, 0, 0);
        context.drawImage(fg, 0, canvas.height - fg.height);
        for (var i = 0; i < pipe.length; i++) {
            console.log(i);
            context.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
            context.drawImage(pipeSouth, pipe[i].x, pipe[i].y + pipeNorth.height + gap);
            pipe[i].x--;
            if (cc1[i] == 0) {
                context.drawImage(coin, coins1[i].x, coins1[i].y);
            }
            coins1[i].x--;
            if (cc2[i] == 0) {
                context.drawImage(coin, coins2[i].x, coins2[i].y);
            }
            coins2[i].x--;
            if (pipe[i].x == 200) {
                pipe.push({
                    x: canvas.width,
                    y: Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height
                })
                coins1.push({
                    x: pipe[i].x + pipeNorth.width + (3 / 4) * Math.floor(Math.random() * (pipe[pipe.length - 1].x - pipe[i].x)),
                    y: Math.floor(Math.random() * canvas.width / 2) + fg.height
                })
                coins2.push({
                    x: pipe[i].x + pipeNorth.width + (3/4)*Math.floor(Math.random() * (pipe[pipe.length - 1].x - pipe[i].x)),
                    y: Math.floor(Math.random() * canvas.width / 2) + fg.height
                })
                cc1.push(0);
                cc2.push(0);
            }


            //detect collision for game end

            if (bx + bird.width >= pipe[i].x && bx <= pipeNorth.width + pipe[i].x && (by <= pipe[i].y + pipeNorth.height || by+ bird.height>=pipe[i].y +pipeNorth.height+gap) || by+bird.height>=canvas.height-fg.height) {
                location.reload();
            }
            if (by <= 0) {
                location.reload();
            }

            if (pipe[i].x == 5) {
                score++;
            }


            //detect collision for coins 

            if (cc1[i]==0 && ((bx >= coins1[i].x && bx <= coins1[i].x + coin.width) || (bx + bird.width >= coins1[i].x && bx + bird.width <= coins1[i].x + coin.width)) && ((by >= coins1[i].y && by <= coins1[i].y + coin.height) || (by + bird.height >= coins1[i].y && by + bird.height <= coins1[i].y + coin.height))){
                score += 2;
                cc1[i] =1;
            }

            if (cc2[i]==0 && ((bx >= coins2[i].x && bx <= coins2[i].x + coin.width) || (bx + bird.width >= coins2[i].x && bx + bird.width <= coins2[i].x + coin.width)) && ((by >= coins2[i].y && by <= coins2[i].y + coin.height) || (by + bird.height >= coins2[i].y && by + bird.height <= coins2[i].y + coin.height))) {
                score += 2;
                cc2[i] = 1;
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

=======
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

>>>>>>> 1707990219676969071b852a8c20341b8ef6b698
}