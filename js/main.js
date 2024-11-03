const $searchBtn = document.getElementById('searcBtn');
const $inputBtn = document.getElementById('inputBtn');
const $searcMain = document.getElementById('searcMain');
const $headerInputLink = document.getElementById('header__inputLink');
const $headerIcon = document.getElementById('header__icons');
const $searchCloseBtn = document.getElementById('search__close');
let $searcInput = document.getElementById('searc__input');

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

// $searchCloseBtn.onclick = function () {
//     $searcMain.style.display = 'none';
//     $headerInputLink.style.display = 'block';
//     $headerIcon.style.gap = '30px';
// }

$searcInput.addEventListener('input', function () {
    resetHighlight();

    const searchText = $searcInput.value.trim();
    if (searchText === '') {
        return; // Если поле пустое, ничего не подсвечиваем
    }
    const regex = new RegExp(searchText, 'gi');
    highlightMatches(document.body, regex);
});

// Кнопка для очистки поля ввода и подсветки
$searchCloseBtn.onclick = function() {
    $searcInput.value = ''; // Очищаем поле ввода
    resetHighlight();       // Убираем все подсветки
};

function highlightMatches(node, regex) {
    if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent;
        const match = text.match(regex);

        if (match) {
            const span = document.createElement('span');
            span.className = 'highlight';
            span.innerHTML = text.replace(regex, (matched) => `<mark>${matched}</mark>`);
            node.replaceWith(span);
        }
    } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName !== 'SCRIPT' && node.tagName !== 'STYLE') {
        node.childNodes.forEach((child) => highlightMatches(child, regex));
    }
}