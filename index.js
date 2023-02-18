function init() {

     const on = document.getElementById('on');
    on.addEventListener('click', function () { speedUpdate(3); });

     const off = document.getElementById('off');
    off.addEventListener('click', function () { speedUpdate(0); });

   const clockwise = document.getElementById('clockwise');
    clockwise.addEventListener('click', function () { speedUpdate(1); });

    const anticlockwise = document.getElementById('anticlockwise');
    anticlockwise.addEventListener('click', function () { speedUpdate(-1); });

    const increaseButton = document.getElementById('increasesButton');
    increaseButton.addEventListener('click', function () { speedUpdate(2); });

    const decreaseButton = document.getElementById('decreasesButton');
    decreaseButton.addEventListener('click', function () { speedUpdate(0.5); });

    const canvas = document.getElementsByTagName('canvas')[0];
    const c = canvas.getContext('2d');

    c.translate(400, 400);
    let rotateAngle = 0.005;
    let nr = rotateAngle;


    function draw(time) {
        //console.log(time);
        c.clearRect(-400, -400, canvas.width, canvas.height);
        c.beginPath();
        c.fillStyle = 'hsl(25,100%,50%)';
        c.moveTo(200, 0);

        for (let angle = 0; angle < 2 * Math.PI; angle += 0.01) {
            let x = 200 * Math.cos(3 * angle) * Math.cos(angle);
            let y = 200 * Math.cos(3 * angle) * Math.sin(angle);
            c.lineTo(x, y);
        }

        c.fill();
        c.rotate(rotateAngle);
        requestAnimationFrame(draw);
    }

    requestAnimationFrame(draw);
 
    function speedUpdate(factor) {
        if (factor == 1)
        {
            if(rotateAngle <= -0.005)
                rotateAngle = -1 * rotateAngle; 
            nr = rotateAngle;
        }
        else if(factor == -1)
        {
            console.log(rotateAngle);
            if(rotateAngle >= 0.005)
                rotateAngle = -1 * rotateAngle; 
            nr = rotateAngle;
        }
        else if (factor == 3)
        {
            rotateAngle = nr; 
        }
        else if (factor == 0)
        {
            rotateAngle = 0;
            }
        else
       { rotateAngle = factor * rotateAngle; nr = rotateAngle;}
    }
        

}

//invoke function init once document is fully loaded
window.addEventListener('load', init);
