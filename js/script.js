$(document).ready(function(){
		// filter portfolio
		$('.portfolio-items').isotope({
			itemSelector : '.portfolio-item',
			layoutMode : 'fitRows'
		});

		$('.portfolio-filter >li >a').click(function(){
			$(this).removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$('.portfolio-items').isotope({ filter: selector });
			return false;
		});

    //animation
    $('.item .carousel-caption>h1').first().addClass('animated bounceInLeft');
    $('.item .carousel-caption>p').first().addClass('animated bounceInRight');
    $('.item .carousel-caption>h1').addClass('animated bounceInDown');
    $('.item .carousel-caption>p').addClass('animated bounceInUp');
});

//google Map
	function initMap() {
        var coordinates = {lat: 16.075583, lng: 108.153732};

        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('googleMap'), {
          center: coordinates,
          scrollwheel: false,
          zoom: 15
        });

        // Create a marker and set its position.
        var marker = new google.maps.Marker({
          map: map,
          position: coordinates,
          title: 'My position'
        });
    }