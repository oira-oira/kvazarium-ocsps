
   jQuery(function($) {

	 jQuery('.menuHide').click(function( event ){

 		 var eventInMenu = $( event.target ).parents('.blockHideMenu');
 		 
  		 if( !eventInMenu.length ){

          		  $('.hiddenList').hide();
        }
    });

    jQuery('.menu-container').click(function(){
        $('.hiddenLis').show();
    });
});