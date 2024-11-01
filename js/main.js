const $searchBtn = document.getElementById('searcBtn');
const $inputBtn = document.getElementById('inputBtn');
const $searcMain = document.getElementById('searcMain');
const $headerInputLink = document.getElementById('header__inputLink');
const $headerIcon = document.getElementById('header__icons');
const $searchCloseBtn = document.getElementById('search__close');

$searcMain.style.display = 'none';
console.log($headerInputLink);

function searcWindow() {
    if ($searcMain.style.display === 'none') {
        $searcMain.style.display = 'flex';
        $headerInputLink.style.display = 'none';
        $headerIcon.style.gap = '5px';

    } else {
        $searcMain.style.display = 'none';
        $headerInputLink.style.display = 'block';
        $headerIcon.style.gap = '30px';
    }
}

$searchBtn.onclick = function (e) {
    e.preventDefault();
    searcWindow();
};

$searchCloseBtn.onclick = function () {
    $searcMain.style.display = 'none';
    $headerInputLink.style.display = 'block';
    $headerIcon.style.gap = '30px';
}