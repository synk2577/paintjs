const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d'); // 캔버스에 그림그리는 도구를 얻어내기
const colors = document.getElementsByClassName('jsColor');

// canvas size
canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = '#2c2c2c';
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(evnet) {
  const x = event.offsetX;
  const y = event.offsetY;

  if (!painting) {
    // painting === false; 클릭하지 않고 마우스를 움직이기만 했을 때
    ctx.beginPath(); // 1) 새로운 빈 경로 생성
    ctx.moveTo(x, y); // 2) 시작점 설정
  } else {
    // mousedown 이벤트 발생 (startPainting) > painting === true > else문 실행
    ctx.lineTo(x, y); // 3) 끝점 설정
    ctx.stroke(); // 4) 경로를 그리기 (외곽선)
  }
}

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  // console.log(color);
  ctx.strokeStyle = color; // 색 변경
}

if (canvas) {
  // mousemove: 마우스 움직였을 때
  canvas.addEventListener('mousemove', onMouseMove);

  // canvas click; start painting
  // mousedown: 마우스 누르고 있을 때
  canvas.addEventListener('mousedown', startPainting);

  // mouseup: 마우스 땔 떄
  canvas.addEventListener('mouseup', stopPainting);

  // mouseleave: 마우스가 벗어남
  canvas.addEventListener('mouseleave', stopPainting);
}

// Array.from: object로 부터 array를 만듦
console.log(Array.from(colors));
Array.from(colors).forEach((color) =>
  color.addEventListener('click', handleColorClick)
);
