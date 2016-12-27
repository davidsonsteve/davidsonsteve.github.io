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
        $("#winelist").fadeOut(200,"swing");
        $("#winebutton").removeAttr("style");
        $("#makinglabel").fadeIn(300,"swing");
        $("#projectslabel").fadeIn(300,"swing");
        $("#bloglabel").fadeIn(300,"swing");
      }
      else{
        $("#wineslabel").fadeIn(300,"swing");
        $("#makinglabel").fadeOut(300,"swing");
        $("#projectslabel").fadeOut(300,"swing");
        $("#bloglabel").fadeOut(300,"swing");
        $( "#winelist" ).delay( 300 ).fadeToggle( 1000,"swing");
        $("#winebutton").css("box-shadow"," 0px 0px 20px #c6ddf0").css("border-radius","20px");
        
      }

      if( $( "#winemaking" ).is(":visible")) {
        $("#winemaking").fadeOut(200,"swing");
        $("#makingbutton").removeAttr("style");
      }
      if( $( "#projects" ).is(":visible")) {
        $("#projects").fadeOut(200,"swing");
        $("#projectsbutton").removeAttr("style");
      }
      if( $( "#blog" ).is(":visible")) {
        $("#blog").fadeOut(200,"swing");
        $("#blogbutton").removeAttr("style");
      }

        
    });

    $("#makingbutton").click(function(){

      if( $( "#winemaking" ).is(":visible")) {
        $("#winemaking").fadeOut(200,"swing");
        $("#makingbutton").removeAttr("style");
        $("#wineslabel").fadeIn(300,"swing");
        $("#projectslabel").fadeIn(300,"swing");
        $("#bloglabel").fadeIn(300,"swing");
      }
      else{
        $("#makinglabel").fadeIn(300,"swing");
        $("#wineslabel").fadeOut(300,"swing");
        $("#projectslabel").fadeOut(300,"swing");
        $("#bloglabel").fadeOut(300,"swing");
        $( "#winemaking" ).delay( 300 ).fadeToggle( 1000,"swing");
        $("#makingbutton").css("box-shadow"," 0px 0px 20px #c6ddf0").css("border-radius","20px");
        
      }

      if( $( "#winelist" ).is(":visible")) {
        $("#winelist").fadeOut(200,"swing");
        $("#winebutton").removeAttr("style");
      }
      if( $( "#projects" ).is(":visible")) {
        $("#projects").fadeOut(200,"swing");
        $("#projectsbutton").removeAttr("style");
      }
      if( $( "#blog" ).is(":visible")) {
        $("#blog").fadeOut(200,"swing");
        $("#blogbutton").removeAttr("style");
      }

     
    });

    $("#projectsbutton").click(function(){

      if( $( "#projects" ).is(":visible")) {
        $("#projects").fadeOut(200,"swing");
        $("#projectsbutton").removeAttr("style");
        $("#wineslabel").fadeIn(300,"swing");
        $("#makinglabel").fadeIn(300,"swing");
        $("#bloglabel").fadeIn(300,"swing");
      }
      else{
        $("#projectslabel").fadeIn(300,"swing");
        $( "#projects" ).delay( 300 ).fadeToggle( 1000,"swing");
        $("#projectsbutton").css("box-shadow"," 0px 0px 20px #c6ddf0").css("border-radius","20px");
        $("#wineslabel").fadeOut(300,"swing");
        $("#makinglabel").fadeOut(300,"swing");
        $("#bloglabel").fadeOut(300,"swing");
      }

      if( $( "#winelist" ).is(":visible")) {
        $("#winelist").fadeOut(200,"swing");
        $("#winebutton").removeAttr("style");
      }
      if( $( "#winemaking" ).is(":visible")) {
        $("#winemaking").fadeOut(200,"swing");
        $("#makingbutton").removeAttr("style");
      }
      if( $( "#blog" ).is(":visible")) {
        $("#blog").fadeOut(200,"swing");
        $("#blogbutton").removeAttr("style");
      }
        
    });

    $("#blogbutton").click(function(){

      if( $( "#blog" ).is(":visible")) {
        $("#blog").fadeOut(200,"swing");
        $("#blogbutton").removeAttr("style");
        $("#wineslabel").fadeIn(300,"swing");
        $("#makinglabel").fadeIn(300,"swing");
        $("#projectslabel").fadeIn(300,"swing");
      }
      else{
        $("#bloglabel").fadeIn(300,"swing");
        $( "#blog" ).delay( 300 ).fadeToggle( 1000,"swing");
        $("#blogbutton").css("box-shadow"," 0px 0px 20px #c6ddf0").css("border-radius","20px");
        $("#wineslabel").fadeOut(300,"swing");
        $("#makinglabel").fadeOut(300,"swing");
        $("#projectslabel").fadeOut(300,"swing");
      }

      if( $( "#winelist" ).is(":visible")) {
        $("#winelist").fadeOut(200,"swing");
        $("#winebutton").removeAttr("style");
      }
      if( $( "#winemaking" ).is(":visible")) {
        $("#winemaking").fadeOut(200,"swing");
        $("#makingbutton").removeAttr("style");
      }
      if( $( "#projects" ).is(":visible")) {
        $("#projects").fadeOut(200,"swing");
        $("#projectsbutton").removeAttr("style");
      }
        
    });

});