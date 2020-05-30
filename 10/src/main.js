import sum from './sum';
import avg from './avg';
import random from './random';

document.getElementById('debug').innerHTML = sum(10, 2);
document.getElementById('avgtest').innerHTML = avg([22, 'a', 30]);
document.getElementById('rantest').innerHTML = random(100);
