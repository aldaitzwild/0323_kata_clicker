const target = 25;
let count = 0;
let startTime;

function updateCount() {
    const countBlock = document.getElementById('count');
    countBlock.innerHTML = count;
}

function start() {
    startTime = new Date();
    count = 0;
    updateCount();
}


start();

document.getElementById('clicker').addEventListener('click', function() {
    count++;
    updateCount();

    if(count == target) {
        const endTime = new Date();
        let seconds = (startTime - endTime) / 1000;
        alert(seconds + " seconds");
        start();
    }
});