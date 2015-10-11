<!-- Init Scrolls -->
window.sr = new scrollReveal();

<!-- Init annyang -->
if (annyang) {
  var commands = {
    'hello': function() {alert('Hello');}
  };
  annyang.addCommands(commands);
  annyang.start();
}

<!-- Init switches -->
$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});
$("[name='technical']").bootstrapSwitch();
$("[name='location']").bootstrapSwitch();
$("[name='extrapolate']").bootstrapSwitch();
$("[name='cache']").bootstrapSwitch();

<!-- Init tooltips -->
$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});
