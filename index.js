var totalCount = 60;
var count = 0;
var percent, degs;

function displayCircle() {
    var demo = document.getElementById('demo');
    demo.innerHTML = `
    <div class="o-circle">
        <div id="outer-circle" class="outer-circle" style="${getBar(percent)}" >
            <div class="circle">${percent}%</div>
        </div>
    </div>`;
}

var startTimer = setInterval(() => {
    if(count == totalCount) {
        clearInterval(startTimer);
    }
    percent = Math.round(count / totalCount * 100);
    count += 1;
    displayCircle()
}, 60);

function getBar(perc) {
    degs = perc / 100 * 360;
    if (degs <= 180) {
        return `background-image: linear-gradient(${90 + degs}deg, transparent 50%, #E2E8F0  50%),linear-gradient(90deg, #E2E8F0 50%, transparent 50%);`;
    } else {
        return `background-image: linear-gradient(${degs - 90}deg, transparent 50%, #E65962  50%),linear-gradient(90deg, #E2E8F0 50%, transparent 50%);`;
    }
}