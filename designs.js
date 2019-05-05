/* Entering whole numbers in the "Height" and "Width" fields,
and submitting the form, causes an empty grid to appear on the page.

When the user clicks submit, keeping or changing the size of the Grid
the page reloads with a new empty Grid. */

// this function creates the Grid depending the size chose by the user
function makeGrid(x, y) {
   $('tr').remove();

// loop to insert the rows
   for (var i = 1; i<= x; i++) {
     $('#pixelCanvas').append('<tr id=table' + i + '></tr>');

  // loop to insert the columns
     for (var z = 1; z <= y; z++) {
       $('#table' + i).append('<td></td>');
     }
    }

// this function lets the user select the color and change it if needed

/* Choosing a color from the color selector and clicking on a grid square
causes that grid square (and only that square) to change color.
*/

// variable color definition
var color;
  // adding the click event to the color picked
    $('td').click(function addColor(){
      // storing the color picked
      color = $('#colorPicker').val();
      // if cell is clicked, the background color changes to the selected color
      // using this keyword to call the object related to the cell style 
      if ($(this).attr('style')){
        $(this).removeAttr('style')
      } else {
        $(this).attr('style', 'background-color:' + color);
      }
    })
 }

// variables definition for the size of the Grid
var row, column;
// this is the function for the Submit Query
$('#sizePicker').submit(function (event) {
  // prevents the browser to go back to default values
  event.preventDefault();
  // storing the Grid Height value
  row = $('#inputHeight').val();
  // storing the Grid Width value
  column = $('#inputWidth').val();
// when size is submitted by the user, call makeGrid()
  makeGrid(row, column);
})
