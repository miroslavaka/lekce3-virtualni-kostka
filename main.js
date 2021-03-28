// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/

// sem začni psát svůj program

let panacek = document.querySelector('#panacek');
let mince = document.querySelector('#mince');
let obrazok = document.querySelector('img');
let score = document.querySelector('#score');

function load() {
    let maxHeight = window.innerHeight;
    let maxWidth = window.innerWidth;
    panacek.style.top = maxHeight - 100 + 'px';
    panacek.style.left = maxWidth - 100 + 'px';
}
window.onload = load();

function getKeyAndMove(event) {
    let keycode = event.keyCode;
    //console.log(keycode);
    if (keycode == 37) {
        moveLeft();
    } else if (keycode == 38) {
        moveUp();
    } else if (keycode == 39) {
        moveRight();
    } else {
        moveDown();
    }
}

let width = window.innerWidth - 64;
let height = window.innerHeight - 70;

function moveLeft() {
    let panacekleft = parseInt(panacek.style.left);
    panacek.style.left = panacekleft - 5 + 'px';
    obrazok.src = 'obrazky/panacek-vlevo.png';
    if (panacekleft < 0) {
        panacek.style.left = 0;
    }
}

function moveUp() {
    let panacektop = parseInt(panacek.style.top);
    panacek.style.top = panacektop - 5 + 'px';
    obrazok.src = 'obrazky/panacek-nahoru.png';
    if (panacektop < 0) {
        panacek.style.top = 0;
    }
}

function moveRight() {
    let panacekleft = parseInt(panacek.style.left);
    panacek.style.left = panacekleft + 5 + 'px';
    obrazok.src = 'obrazky/panacek-vpravo.png';
    if (panacekleft > width) {
        panacek.style.left = width + 'px';
    }
}

function moveDown() {
    let panacektop = parseInt(panacek.style.top);
    panacek.style.top = panacektop + 5 + 'px';
    if (panacektop > height) {
        panacek.style.top = height + 'px';
    }
}

function getRandomPosition() {
    let x = window.innerHeight - 36;
    let y = window.innerWidth - 36;
    let randX = Math.floor(Math.random() * x);
    let randY = Math.floor(Math.random() * y);

    mince.style.top = randX + 'px';
    mince.style.left = randY + 'px';

}
getRandomPosition();

s = 0;

function checkCollision() {
    let panacekX = panacek.getBoundingClientRect().left;
    let panacekY = panacek.getBoundingClientRect().top;
    console.log("panacek x: " + panacekX);
    console.log("panacek y: " + panacekY);

    let minceX = mince.getBoundingClientRect().left;
    let minceY = mince.getBoundingClientRect().top;
    console.log("mince x: " + minceX);
    console.log("mince y: " + minceY);

    let panacekSirka = panacek.getBoundingClientRect().width;
    let panacekVyska = panacek.getBoundingClientRect().height;
    console.log("panacek sirka: " + panacekSirka);
    console.log("panacek vyska: " + panacekVyska);

    let minceSirka = mince.getBoundingClientRect().width + 28;
    let minceVyska = mince.getBoundingClientRect().height + 34;
    console.log("mince sirka: " + minceSirka);
    console.log("mince vyska: " + minceVyska);

    /*if (!(panacekX + panacekSirka < minceX)) {
        console.log('podmienka1 plati');
    } else if (!(minceX + minceSirka < panacekX)) {
        console.log('podmienka2 plati');
    } else if (!(panacekY + panacekVyska < minceY)) {
        console.log('podmienka3 plati');
    } else {
        console.log('podmienka4 plati');
    }*/


    if (!(panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
        console.log('panacek a mince se prekryvaji');
        s = s + 1;
        console.log(s);
        score.innerHTML = s;
    }
}
checkCollision();


/*function checkCollision() {
    let rect1 = panacek.getBoundingClientRect();
    let rect2 = mince.getBoundingClientRect();

    if (rect1.x < rect2.x + rect2.width) {
        alert('true');
    }

    /* if (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y) {
        console.log('collision');
    }
checkCollision();*/