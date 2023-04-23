let stopButtonEl = document.getElementById('stopButton');
let readyButtonEl = document.getElementById('readyButton');
let goButtonEl = document.getElementById('goButton');
let stopLightEl = document.getElementById('stopLight');
let redyLightEl = document.getElementById('redyLight');
let goLightEl = document.getElementById('goLight');

function onStopButton(){
    stopButtonEl.style.backgroundColor = "#cf1124";
    readyButtonEl.style.backgroundColor = "#4b5069";
    goButtonEl.style.backgroundColor = "#4b5069";

    stopLightEl.style.backgroundColor = "#cf1124";
    redyLightEl.style.backgroundColor = "#4b5069";
    goLightEl.style.backgroundColor = "#4b5069";

}
function onReadyButton(){
    stopButtonEl.style.backgroundColor = "#4b5069";
    readyButtonEl.style.backgroundColor = "#f7c948";
    goButtonEl.style.backgroundColor = "#4b5069";

    stopLightEl.style.backgroundColor = "#4b5069";
    redyLightEl.style.backgroundColor = "#f7c948";
    goLightEl.style.backgroundColor = "#4b5069";

}
function onGoButton(){
    stopButtonEl.style.backgroundColor = "#4b5069";
    readyButtonEl.style.backgroundColor = "#4b5069";
    goButtonEl.style.backgroundColor = "#199473";

    stopLightEl.style.backgroundColor = "#4b5069";
    redyLightEl.style.backgroundColor = "#4b5069";
    goLightEl.style.backgroundColor = "#199473";

}