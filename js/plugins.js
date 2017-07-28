// JavaScript Document
/* global $ , jQuery , alert */
$(function(){
    
    "use strick";
    //Nice scroll
    
    $("html").niceScroll();
    
     $(window).scroll(function(){
         var scrol = $(this).scrollTop(),
             ofset = $('.Roto4').offset().top +50;
         
         
         if( scrol >= ofset )
         {
             $('.CenterOfHead').animate({
                 opacity: 0
             },40 );
         }
         else
         {
              $('.CenterOfHead').animate({
                 opacity: 1
             },40 );
         }
         
     
     });
    
    $(window).scroll(function(){
         var scrol2 = $(this).scrollTop(),
             ofset2 = $('.cneter').offset().top +190 ;
         
         if( scrol2 >= ofset2 )
         {
             $('.cneter').animate({
                 opacity: 0
             },40 );
         }
         else
         {
              $('.cneter').animate({
                 opacity: 1
             },100 );
         }
         
     
     });
    
    
    $(window).scroll(function(){
         var scrol3 = $(this).scrollTop(),
             ofset3 = $('.has_head').offset().top+180 ;
         
         if( scrol3 >= ofset3 )
         {
             $('.has_head').fadeOut();
         }
         else
         {
              $('.has_head').fadeIn();
         }
         
     
     });
    
     $(window).scroll(function(){
         var scrol4 = $(this).scrollTop();
         if(scrol4 >= 648)
         {
             $('.head2').show().addClass('clAss');
         }
         else
         {
             $('.head2').hide();
         }
    });
    
    
    
    
    
    
    
    
    
    
    
    
 
		$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
		$('html,body').animate({
			scrollTop: target.offset().top
		}, 700);
		return false;
		}
}
 
});
 
});