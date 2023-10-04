// code from prep work

/*
const dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace('px','');
    const left = parseInt(leftNumbers, 10);

    if (left < 360) {
        dodger.style.left = `${left +1}px`;
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});

*/

const dodger = document.getElementById('dodger');

dodger.style.backgroundColor = '#FF33C5';

dodger.style.bottom = '0px';

dodger.style.left = '180px';

document.addEventListener('keydown', e => console.log(e))

document.addEventListener('keydown', function(e){
  if (e.key === 'ArrowLeft') {
    moveDodgerLeft();
  }
})

function moveDodgerLeft(){
  const leftNumbers = dodger.style.left.replace('px','');
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left-5}px`
  }
}

document.addEventListener('keydown', function(e){
  if (e.key === 'ArrowRight') {
    moveDodgerRight();
  }
})

function moveDodgerRight(){
  const rightNumbers = dodger.style.left.replace('px','');
  const right = parseInt(rightNumbers, 10);

  if (right < 360) {
    dodger.style.left = `${right+ 5}px`
  }
}