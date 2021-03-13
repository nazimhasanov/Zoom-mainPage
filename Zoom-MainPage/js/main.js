$(document).ready(function () {
  $(".gallery-2").fancybox({
    transitionIn: "elastic",
    transitionEffect: "fade",
    transitionOut: "elastic",
    speedIn: 600,
    speedOut: 200,
    overlayShow: true,
    opacity: true,
    cyclic: true,
  });

  $.fancybox.defaults.buttons = ["zoom", "slideShow", "close"];
});
