// Select color input
var colorPicker = document.getElementById('colorPicker');
// Select size input
var inputHeight = document.getElementById('inputHeight');
var inputWidth = document.getElementById('inputWidth');
var canvas = document.getElementById("pixelCanvas");
var sizePicker = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()
//function that uses the size picker submit to call makeGrid() funtion
sizePicker.addEventListener("submit", function(evt) {
    evt.preventDefault();
    if (canvas.hasChildNodes()) {
        canvas.removeChild(canvas.lastChild);
    }
    makeGrid(inputHeight.value, inputWidth.value);
});

//function to create grid and assign event listeners to all cells on creation
function makeGrid(height, width) {
    for (let y = 0; y < height; y++) {
        let row = canvas.insertRow(y);
        for (let x = 0; x < width; x++) {
            let cell = row.insertCell(x);
            cell.addEventListener("mousedown", function() {
                cell.style.backgroundColor = colorPicker.value;
            })
        }
    }
}