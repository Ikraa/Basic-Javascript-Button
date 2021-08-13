function makeRed() {
    document.body.style.backgroundColor = "red";
}

//-----------------------------------------------------------
// handle blue button click by setting function name:

const blueButton = document.getElementById('make-blue-button');
//just set the name of the function
blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = "blue";
}

//------------------------------------------------------------
// handle event using anonymous function:

const greenButton = document.getElementById('make-green-button');
// anonymous function
greenButton.onclick = function () {
    document.body.style.backgroundColor = "green";
}

//---------------------------------------------------------------
// handle by using add eventLisenter:

const goldenButton = document.getElementById("make-goldenrod");
goldenButton.addEventListener('click', makeGoldenRod);

function makeGoldenRod() {
    document.body.style.backgroundColor = "goldenrod";
}

//-----------------------------------------------------------------
// add eventLisenter with direct function:
const hotPink = document.getElementById('make-hot-pink');
hotPink.addEventListener('click', function makePink() {
    document.body.style.backgroundColor = "hotpink";
})

//-----------------------------------------------------------------
// direct shortcut: using add evenlisenter:
document.getElementById('light-blue').addEventListener('click',
    function lighBlue() {
        document.body.style.backgroundColor = "lightblue";
    });