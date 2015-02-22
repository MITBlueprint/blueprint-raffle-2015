var winners = [];

$(document).ready(function(){
  $('h1').fitText();
  function replace(e) {
    if (winners.indexOf(e) == -1) {
      $("h1").fadeOut("slow", function(){
        $("h1").html(e);
      });
      $("h1").fadeIn("slow");
      winners.push(e);
    } else {
      name();
    }
  }
  function name() {
    $.ajax({
      url: "/name",
      success: replace
    });
  }
  $(document).keydown(function(e) {
    if (e.keyCode == 32) { name(); }
  });
  $(document).click(name);
});
