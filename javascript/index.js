var navbar = $("#navbar")

var slider = $(".slider")

var middleSection = $("#middle-section");
var bottomSection = $("#bottom-section");
var options = $(".options")

var wings = $("#wings")

options.hide();
middleSection.hide();
bottomSection.hide();


wings.fadeOut(300)
wings.fadeIn(300);

slider.click(function(){
    
    
    slider.fadeOut(300);
    $(".tagline").fadeOut(300);
    $(".title").fadeOut(300);
    wings.fadeOut(300);
    options.show();
    middleSection.show();
    bottomSection.show();
    navbar.animate({
    height:"3.5rem"
},1800);

$(".title").fadeIn(800);

})

