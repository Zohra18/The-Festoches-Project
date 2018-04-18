

//SLIDER
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 5000); // Change image every 5 seconds
}

//CODE NICO HIGHLIGHT

 $(document).ready(() => {

   $('[class$=logo]').on('click', () => {
     $('[class$="-highlight"]').removeClass('[class$="-highlight"]')
     $('.darkened').removeClass('darkened')
   })

   $('.rock-logo').on('click', () => {

     $('.rock').toggleClass('rock-highlight')

      $('.col > ul> li:not(".rock")').toggleClass('darkened')
   })

   $('.reggae-logo').on('click', () => {

     $('.reggae').toggleClass('reggae-highlight')

      $('.col > ul> li:not(".reggae")').toggleClass('darkened')
   })

   $('.electro-logo').on('click', () => {

     $('.electro').toggleClass('electro-highlight')

      $('.col > ul> li:not(".electro")').toggleClass('darkened')
   })

   $('.rap-logo').on('click', () => {

     $('.rap').toggleClass('rap-highlight')

      $('.col > ul> li:not(".rap")').toggleClass('darkened')
   })

// effet test changement couleur glaces

/*$(function () {
      $(".logo").css("background-size","cover");
    var logo = $('#logo');
    var backgrounds = [
      'url(images/logo1.png)',
      'url(images/logo2.png)',
      'url(images/logo4.png)',
      'url(images/logo3.png)'];
    var current = 0;

    function nextBackground() {
        logo.css(
            'background',
        backgrounds[current = ++current % backgrounds.length]);

        setTimeout(nextBackground, 8000);
    }
    setTimeout(nextBackground, 8000);
    logo.css('background', backgrounds[0]);

});*/




})//fin du document ready

//CODE MATTHIEU POPUP

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Effet de beats en dessous de la barre de nav

var elem = $('.soundeffect');
var count = elem.length;
var setColor = function() {
  elem.each(function(){
    var $this = $(this);
    var color = '#00e6e6';
    $this.css({'background': color});
  });
};
var loop = function(){

  setTimeout(function(){
    elem.each(function(){
      var $this = $(this);
      var height = (Math.random() * 30) + 1;
      $this.css({
        'bottom': height,
        'height': height,
        'width': '3px'
      });
    });
    loop();
  }, 400);

}
setColor();
loop();
