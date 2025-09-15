const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

let speed = 0;
let intervalId;

function drawMeter(speed) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(canvas.width/2, canvas.height/2, 100, 0, 2*Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(canvas.width/2, canvas.height/2);
  ctx.lineTo(canvas.width/2 + 80*Math.sin(speed), canvas.height/2 - 80*Math.cos(speed));
  ctx.stroke();
}

function startMeter() {
  intervalId = setInterval(function() {
    speed += 0.1;
    if (speed > 2*Math.PI) {
      speed = 0;
    }
    drawMeter(speed);
  }, 10);
}

function stopMeter() {
  clearInterval(intervalId);
}

startButton.addEventListener('click', startMeter);
stopButton.addEventListener('click', stopMeter);
