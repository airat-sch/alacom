$(document).ready(function () {

    $.mask.definitions['~'] = '[78]';
    $('input[type="tel"]').mask("~ (999) 999-9999");

    $('input[type="tel"]').click(function () {
        $(this).setCursorPosition(0);  // set position number
    });

    var button = $('#button-up');	
    $(window).scroll (function () {
        if ($(this).scrollTop () > 300) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });	 
    button.on('click', function(){
        $('body, html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});

$.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};

// Modals
if (typeof HystModal !== "undefined") {
    var xMod = new HystModal({
        linkAttributeName: 'data-hystmodal',
        catchFocus: true,
        beforeOpen: function(modal){
            let videoframe = modal.openedWindow.querySelector('iframe');
            if(videoframe){
                videoframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
            }
        },
        afterClose: function(modal){
            let videoframe = modal.openedWindow.querySelector('iframe');
            if(videoframe){
                videoframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
            }
        }
    });
}

function itemForm(Element) {
    var $form = Element.getAttribute("data-form");
    document.getElementById('form-name').value = $form;
    document.getElementById('title-modal').innerHTML = $form;
    
    return false;
}

$("#toggle").click(function () {
    $("#menu").slideToggle('normal', function(){
		if ($(this).is(':hidden')) {
			$(".navbar-toggler").removeClass("navbar-toggler-close");
		} else {
			$(".navbar-toggler").addClass("navbar-toggler-close");
		}
		return false;
	});
});

jQuery(function($){
	$(document).mouseup(function (e){
		var div = $(".right-block-menu");
		if ((!div.is(e.target) && div.has(e.target).length === 0)) {
            $("#menu").slideUp();
            $(".navbar-toggler").removeClass("navbar-toggler-close");
		}
	});
});

var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    $("#menu").slideUp();
    $(".navbar-toggler").removeClass("navbar-toggler-close");
    return false;
});

$('.category-list').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    prevArrow: '<button class="slick-prev slick-arrow"></button>',
    nextArrow: '<button class="slick-next slick-arrow"></button>',
	responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
              slidesToShow: 2,
              centerMode: true,
	      }
        },
	    {
	      breakpoint: 480,
	      settings: {
              slidesToShow: 1,
              centerMode: true,
	      }
        }        
    ]
});