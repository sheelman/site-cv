//fonction qui permet d'avoir un scroll lisse sur la page

$(function(){
    //on selectionne les liens et on dit que sur le click
    $(".navbar a, footer a").on("click", function(event){
        //la fonction arrète l'event
        event.preventDefault();
        var hash = this.hash;
        //ici pour animé la propriété scroll en 900ms
        $('body,html').animate({scrollTop: $(hash).offset().top} , 900 , function(){window.location.hash = hash;})
    });
})