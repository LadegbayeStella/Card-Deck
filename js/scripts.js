$(document).ready(function () {
  $("#ident").click(function () {

    
    let suits = ["diamond", "hearts", "clubs", "spades"];
    let values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "king", "queen"];

    suits.forEach(function (suit) {
      values.forEach(function (value) {
        $("#output").append("<li>" + value + " " + suit + "</li>" )

      });
    });
  });
});