let startPosition = 0;
let prevEvent = null;
let currentImage = 0;



function startMove() {
    console.log('Mouse move: ' + event.clientX);
    startPosition = event.clientX;
    prevEvent = event;

}
function stopMove() {
    const endPosition = event.clientX;
    console.log('Mouse stop: ' + endPosition);
    if (startPosition < endPosition) {
        console.log('Stop Left');
    } else if (startPosition > endPosition) {
        console.log('Stop Right');
    } else {
        console.log('Stop No change');
    }
    prevEvent = event;
}

function makeMove() {
    if (prevEvent != null && prevEvent.type === 'mousedown') {


        const endPosition = event.clientX;

        if (startPosition < endPosition) {
            console.log('Left');
            
        } else if (startPosition > endPosition) {
            console.log('Right');
        } else {
            console.log('No change');
        }
    }
}



slider_list.addEventListener('mousedown', startMove);
slider_list.addEventListener('mousemove', makeMove);
slider_list.addEventListener('mouseup', stopMove );

