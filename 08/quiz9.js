const $url = document.querySelector('#url');
const $btn = document.querySelector('#btn');
const $log = document.querySelector('#log');

function print(log) {
  $log.value = log;
}
function log() {
  const getUrl = fetch($url.value);
  getUrl.then((res) => {
    const text = res.text();
    text.then((data) => print(data));
  });
  getUrl.catch(function (err) {
    print(err);
  });
}

function enter(e) {
  if (e.keyCode === 13) {
    log();
  }
}

$btn.addEventListener('click', log);
$url.addEventListener('keypress', enter);
