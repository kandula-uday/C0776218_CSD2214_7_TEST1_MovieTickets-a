const movieSelect = document.getElementById('movies');


document.getElementById('buy-seats').onclick = function() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
   alert(checkboxes.length);
   alert(movieSelect);

 }


// function getCheckboxCount() {
//     return document.querySelectorAll('input[type="checkbox"]:checked').length;
//   }

