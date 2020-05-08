const $button = document.getElementById('btn');
let index = 50;
let randomNum = 0;

function outputRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function pickRandom() {
  const $inputMin = document.getElementById('min').value;
  const $inputMax = document.getElementById('max').value;
  const num = outputRandom($inputMin, $inputMax);
  randomNum = num;
}

$button.addEventListener('click', () => {
  pickRandom();
  let effect = setInterval(function () {
    console.log(randomNum);
    $button.disabled = true;
    let printnum = randomNum - index;
    document.getElementById('box').innerHTML = printnum;
    index--;
    if (printnum === randomNum) {
      clearInterval(effect);
      $button.disabled = false;
      index = 50;
    }
  }, 3);
});
