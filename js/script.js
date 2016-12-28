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
function mainmenuclick(button, label, lowermenu){
  // $(button).removeAttr("style");
  // $(label).removeAttr("label");

  if( $(lowermenu).is(":visible")) {
      $(lowermenu).fadeOut(300,"swing");
      $(button).removeAttr("style");
      $(label).removeAttr("style");

    }
    else{
      $("#winebutton").removeAttr("style");
      $("#wineslabel").removeAttr("style");
      $("#makingbutton").removeAttr("style");
      $("#makinglabel").removeAttr("style");
      $("#projectsbutton").removeAttr("style");
      $("#projectslabel").removeAttr("style");
      $("#blogbutton").removeAttr("style");
      $("#bloglabel").removeAttr("style");
      $("#winelist").fadeOut(300,"swing");
      $("#winemaking").fadeOut(300,"swing");
      $("#projects").fadeOut(300,"swing");
      $("#blog").fadeOut(300,"swing");
      $(lowermenu).delay( 300 ).fadeIn( 700,"swing");
      $(button).css("box-shadow"," 0px 0px 20px #c6ddf0");
      $(label).css("text-shadow"," 0px 2px 8px #333");
    }
}

// on click actions: hide button, show extra info.

    $("#winebutton").click(function(){

      mainmenuclick("#winebutton","#wineslabel","#winelist");
        
    });

    $("#makingbutton").click(function(){

      mainmenuclick("#makingbutton","#makinglabel","#winemaking");

    });

    $("#projectsbutton").click(function(){

      mainmenuclick("#projectsbutton","#projectslabel","#projects");
        
    });

    $("#blogbutton").click(function(){

      mainmenuclick("#blogbutton","#bloglabel","#blog");
        
    });

});