canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="grey";
ctx.LineWidth=4;
ctx.rect(150 , 143 , 430 , 200 );
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=5;
ctx.arc(250 , 210 , 40, 0 , 2 * Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=5;
ctx.arc(350 , 210 , 40 , 0 , 2 * Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "red" ;
ctx.lineWidth=5;
ctx.arc(450 , 210 , 40 , 0 , 2 * Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "yellow" ;
ctx.lineWidth=5;
ctx.arc(550 , 500 , 40 , 0 , 2 * Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "green" ;
ctx.lineWidth=5;
ctx.arc(750 , 400 , 40 , 0 , 2 * Math.PI );
ctx.stroke();
