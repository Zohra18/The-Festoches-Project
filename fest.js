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
     $('[class$="-highlight"]').removeClass('rock-highlight')
     $('[class$="-highlight"]').removeClass('reggae-highlight')
     $('[class$="-highlight"]').removeClass('electro-highlight')
     $('[class$="-highlight"]').removeClass('rap-highlight')
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

// effet test changement couleur glaces / beats





$(function () {
// variables logo glaces
    var logo = $('.logo');
    var backgrounds = [
      'url(images/logo1.png)',
      'url(images/logo2.png)',
      'url(images/logo4.png)',
      'url(images/logo3.png)'];
    var current = 0;
// loop des différents logo en fonction de l'index
    function nextBackground(){
        logo.css(
            'background',
        backgrounds[current = ++current % backgrounds.length]);
// durée du roulement des images
        setTimeout(nextBackground, 8000);
        logo.css('background-size','cover');
    }
// logo initial
    setTimeout(nextBackground, 8000);
    logo.css('background-size','cover','background', backgrounds[0]);

// meme chose pour les beats
    var beats = $('.soundeffect');
    var beatsColors = [
      '#00e6e6',
      '#a9ff16',
      '#e67612',
      '#e6206d'];
    var currentBeats = 0;
// on met la couleur de l'index[i] en loop
    function nextBeats() {
        beats.css(
            'background',
        beatsColors[currentBeats = ++currentBeats % beatsColors.length]);
// durée du roulement
        setTimeout(nextBeats, 8000);
    }
// couleur beats initial
    setTimeout(nextBeats, 8000);
    beats.css('background', beatsColors[0]);
});




})//fin du document ready

//CODE MATTHIEU POPUP

// Get the modal
var modal = document.getElementById('myModal');

// Get the links that open the modal
var links = Array.from(document.querySelectorAll(".fest-lien"));

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks one of the links, open the modal and display no content but the one we selected
links.forEach(x => x.addEventListener('click', openModal, false));

function openModal() {
	var divsContent = Array.from(document.querySelectorAll(".content"));
	divsContent.forEach(x => x.style.display = "none");
	var selectedContent = document.querySelector("#content-"+this.id);
	selectedContent.style.display = "block";
	console.log(selectedContent);
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
// met la couleur blue à chaque div soundeffect
var setColor = function() {
  elem.each(function(){
    var $this = $(this);
    var color = '#00e6e6';
    $this.css({'background': color});
  });
};
var loop = function(){
// pour chaque div soundeffect fais un math.random pour la taille
  setTimeout(function(){
    elem.each(function(){
      var $this = $(this);
      var height = (Math.random() * 30) + 1;
      $this.css({
        'bottom': height,
        'height': height,
        'width': '3px'
      });
    }); // fais ce math.random en loop
    loop();
  }, 400);

}
setColor();
loop();
