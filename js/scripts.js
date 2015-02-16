$(function() {
  $("form#places").submit(function(event) {
    event.preventDefault();

    var newLocation = $("input#new-location").val();
    var newDate = $("input#new-date").val();
    var newNotes = $("input#new-notes").val();
    var newPlace = {location: newLocation, date: newDate, notes: newNotes};

    $("ul#places").append("<li><span class='place'>" + newPlace.location + "</span></li>");

    $("input#new-location").val("");
    $("input#new-date").val("");
    $("input#new-notes").val("")

    $(".place").last().click(function() {
      $(".show-places").show()
      $(".show-places h2").text(newPlace.location);
      $(".location").text(newPlace.location);
      $(".date").text(newPlace.date);
      $(".notes").text(newPlace.notes);

    });
  });
});
