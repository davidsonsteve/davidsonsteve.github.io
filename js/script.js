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

      if( $( "#winelist" ).is(":visible")) {
        $("#winelist").slideUp(800);
        $("#winebutton").removeAttr("style");
      }
      else{
        $( "#winelist" ).slideToggle( 1000);
        $("#winebutton").css("box-shadow"," 0px 0px 30px #eee").css("border-radius","20px");
      }

      if( $( "#winemaking" ).is(":visible")) {
        $("#winemaking").slideUp(800);
        $("#makingbutton").removeAttr("style");
      }
      if( $( "#projects" ).is(":visible")) {
        $("#projects").slideUp(800);
        $("#projectsbutton").removeAttr("style");
      }
      if( $( "#blog" ).is(":visible")) {
        $("#blog").slideUp(800);
        $("#blogbutton").removeAttr("style");
      }

        
    });

    $("#makingbutton").click(function(){

      if( $( "#winemaking" ).is(":visible")) {
        $("#winemaking").slideUp(800);
        $("#makingbutton").removeAttr("style");
      }
      else{
        $( "#winemaking" ).slideToggle( 1000);
        $("#makingbutton").css("box-shadow"," 0px 0px 30px #eee").css("border-radius","20px");
      }

      if( $( "#winelist" ).is(":visible")) {
        $("#winelist").slideUp(800);
        $("#winebutton").removeAttr("style");
      }
      if( $( "#projects" ).is(":visible")) {
        $("#projects").slideUp(800);
        $("#projectsbutton").removeAttr("style");
      }
      if( $( "#blog" ).is(":visible")) {
        $("#blog").slideUp(800);
        $("#blogbutton").removeAttr("style");
      }

     
    });

    $("#projectsbutton").click(function(){

      if( $( "#projects" ).is(":visible")) {
        $("#projects").slideUp(800);
        $("#projectsbutton").removeAttr("style");
      }
      else{
        $( "#projects" ).slideToggle( 1000);
        $("#projectsbutton").css("box-shadow"," 0px 0px 30px #eee").css("border-radius","20px");
      }

      if( $( "#winelist" ).is(":visible")) {
        $("#winelist").slideUp(800);
        $("#winebutton").removeAttr("style");
      }
      if( $( "#winemaking" ).is(":visible")) {
        $("#winemaking").slideUp(800);
        $("#makingbutton").removeAttr("style");
      }
      if( $( "#blog" ).is(":visible")) {
        $("#blog").slideUp(800);
        $("#blogbutton").removeAttr("style");
      }
        
    });

    $("#blogbutton").click(function(){

      if( $( "#blog" ).is(":visible")) {
        $("#blog").slideUp(800);
        $("#blogbutton").removeAttr("style");
      }
      else{
        $( "#blog" ).slideToggle( 1000);
        $("#blogbutton").css("box-shadow"," 0px 0px 30px #eee").css("border-radius","20px");
      }

      if( $( "#winelist" ).is(":visible")) {
        $("#winelist").slideUp(800);
        $("#winebutton").removeAttr("style");
      }
      if( $( "#winemaking" ).is(":visible")) {
        $("#winemaking").slideUp(800);
        $("#makingbutton").removeAttr("style");
      }
      if( $( "#projects" ).is(":visible")) {
        $("#projects").slideUp(800);
        $("#projectsbutton").removeAttr("style");
      }
        
    });

});