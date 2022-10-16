const redCircle = document.createElement('div');
redCircle.setAttribute('id', 'red-circle');
redCircle.style.backgroundColor = 'red';

const yellowCircle = document.createElement('div');
yellowCircle.setAttribute('id', 'red-circle');
yellowCircle.style.backgroundColor = 'yellow';

const blueCircle = document.createElement('div');
blueCircle.setAttribute('id', 'red-circle');
blueCircle.style.backgroundColor = 'blue';

const listCircles = [redCircle, yellowCircle, blueCircle];

for(i = 0; i < listCircles.length; i++){
    listCircles[i].style.width = '130px';
    listCircles[i].style.height = '130px';
    listCircles[i].style.borderRadius = '50%'
    listCircles[i].style.float = 'left';
    listCircles[i].style.marginRight = '50px';
}

const body = document.body;

body.append(redCircle);
body.append(yellowCircle);
body.append(blueCircle);

redCircle.onclick = function () {
    redCircle.remove();
};

yellowCircle.onclick = function () {
    yellowCircle.remove();
};

blueCircle.onclick = function () {
    blueCircle.remove();
};

// make all circles visible again.
window.onkeydown = function (event) {
    if (event.ctrlKey && event.key == "Escape") {
        body.append(redCircle);
        body.append(yellowCircle);
        body.append(blueCircle);
    }
}