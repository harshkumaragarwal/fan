(function(){

    function init(){
        var canvas = document.getElementsByTagName('canvas')[0];
        var c = canvas.getContext('2d');

        c.translate(400,400);
        var rotateAngle = 0.005;


        function draw(time){
            //console.log(time);
            c.clearRect(-400,-400,canvas.width,canvas.height);
            c.beginPath();
            c.fillStyle = 'hsl(25,100%,50%)';
            c.moveTo(200,0);

            for(var angle=0; angle <2*Math.PI;angle+=0.01){
                var x = 200*Math.cos(6*angle)*Math.cos(angle);
                var y = 200*Math.cos(6*angle)*Math.sin(angle);
                c.lineTo(x,y);
            }

            c.fill();
            c.rotate(rotateAngle);
            requestAnimationFrame(draw);
        }

        requestAnimationFrame(draw);

        function speedUpdate(factor){
            rotateAngle = factor*rotateAngle;
        }

        var increaseButton = document.getElementById('increaseButton');
        increaseButton.addEventListener('click',function(){speedUpdate(2);},false);

        var decreaseButton = document.getElementById('decreaseButton');
        decreaseButton.addEventListener('click',function(){speedUpdate(0.5);},false);




    }

//invoke function init once document is fully loaded
    window.addEventListener('load',init,false);

}()); //self invoking function