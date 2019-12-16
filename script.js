
$(document).ready(function(){

	/* Show dropdown menu */

	function showMenu (e) {
    e.stopPropagation();
		$(".dropdown-menu").fadeToggle(200);
    /*$(".dropdown-menu").toggleClass("hidden");*/
    }


    /* Show navigation menu - Header nav section */
    $(".dropdown-button").on("click", showMenu);
    $(".dropdown-menu").on("click", showMenu);
});