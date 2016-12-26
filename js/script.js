$( document ).ready(function() {

// $(".content").hide();
$("#winelist").hide();
$("#winemaking").hide();
$("#projects").hide();
$("#blog").hide();

//if screen size is smaller than 1200px, hide more info elements

// if ($(window).width() < 1024 ) {
	
// }


// else {
	

// }


// on click actions: hide button, show extra info.

    $("#winebutton").click(function(){

       $( "#winelist" ).slideToggle( 1000);
        
    });

    $("#makingbutton").click(function(){
       $( "#winemaking" ).slideToggle( 1000);
        
    });

    $("#projectsbutton").click(function(){
       $( "#projects" ).slideToggle( 1000);
        
    });

    $("#blogbutton").click(function(){
       $( "#blog" ).slideToggle( 1000);
        
    });

});