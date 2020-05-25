const $btn = document.querySelector('#search-btn');
const $text = document.querySelector('#search-text');
const $result = document.querySelector('#result');
const url = 'https://dapi.kakao.com/v2/search/web';
const headers = { Authorization: 'KakaoAK c04500aa5b3de262628e640a045612a4' };
const { value } = $text;
const $moreBtn = document.querySelector('#more-btn');
let num = 1;

function success(data) {
  const { documents } = data;
  const li = documents.map((doc) => {
    return `<li class="list-group-item"><a href="${doc.url}" target="_blank">${doc.contents}</a></li>`;
  });

  $result.innerHTML = `<ul class="list-group list-group-flush">${li.join('')}`;
  $moreBtn.disabled = false;
}

function error() {
  alert('데이터를 가져올 수 없습니다.');
}

function getFetch() {
  fetch(`${url}?query=${value}`, { headers })
    .then((res) => res.json())
    .then(success)
    .catch(error);
}

function search() {
  if (value === '') {
    // eslint-disable-next-line no-alert
    alert('검색어를 입력하세요');
    return false;
  }
  getFetch();
  return true;
}

function moreInfo(data) {
  const { documents } = data;
  const li = documents.map((doc) => {
    return `<li class="list-group-item"><a href="${doc.url}" target="_blank">${doc.title}</a></li>`;
  });

  $result.innerHTML += `<ul class="list-group list-group-flush">${li.join(
    '',
  )}</ul>`;
  $moreBtn.disabled = false;
}

function more() {
  num += 1;
  fetch(`${url}?query=${value}&page=${num}`, { headers })
    .then((res) => res.json())
    .then(moreInfo)
    .catch(error);
}

$btn.addEventListener('click', search);
$moreBtn.addEventListener('click', more);
