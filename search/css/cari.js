$("#myInput").on("keyup", function(event) {
    if (event.target.value) {
      var value = $(this).val().toLowerCase();
      $("#myList li").filter(function() {
        $("#myList").show();
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    } else {
      $("#myList").hide();
    }
  });