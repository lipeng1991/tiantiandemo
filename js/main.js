jQuery(document).ready(function($) {

    /*Page Preloading*/
    $(window).load(function() {
        $('#spinner').fadeOut(200);
        $('#preloader').delay(200).fadeOut('slow');
        $('.wrapper').fadeIn(200);
        $('#custumize-style').fadeIn(200);
    });

    /* ---------------------------------------------------------------------- */
    /* -------------------------- Contact Form ------------------------------ */
    /* ---------------------------------------------------------------------- */

    // Needed variables
    var $contactform = $('#contactform'),
            $success = ' Your message has been sent. Thank you!';

    $contactform.submit(function() {
        $.ajax({
            type: "POST",
            url: "php/contact.php",
            data: $(this).serialize(),
            success: function(msg)
            {
                var msg_error = msg.split(",");
                var output_error = '';

                if (msg_error.indexOf('error-message') != -1) {
                    $("#contact-message").addClass("has-error");
                    $("#contact-message").removeClass("has-success");
                    output_error = 'Please enter your message.';
                } else {
                    $("#contact-message").addClass("has-success");
                    $("#contact-message").removeClass("has-error");
                }

                if (msg_error.indexOf('error-email') != -1) {

                    $("#contact-email").addClass("has-error");
                    $("#contact-email").removeClass("has-success");
                    output_error = 'Please enter valid e-mail.';
                } else {
                    $("#contact-email").addClass("has-success");
                    $("#contact-email").removeClass("has-error");
                }

                if (msg_error.indexOf('error-name') != -1) {
                    $("#contact-name").addClass("has-error");
                    $("#contact-name").removeClass("has-success");
                    output_error = 'Please enter your name.';
                } else {
                    $("#contact-name").addClass("has-success");
                    $("#contact-name").removeClass("has-error");
                }


                if (msg == 'success') {

                    response = '<div class="alert alert-success success-send">' +
                            '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
                            '<i class="glyphicon glyphicon-ok" style="margin-right: 5px;"></i> ' + $success
                            + '</div>';


                    $(".reset").trigger('click');
                    $("#contact-name").removeClass("has-success");
                    $("#contact-email").removeClass("has-success");
                    $("#contact-message").removeClass("has-success");

                } else {

                    response = '<div class="alert alert-danger error-send">' +
                            '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
                            '<i class="glyphicon glyphicon-remove" style="margin-right: 5px;"></i> ' + output_error
                            + '</div>';

                }
                // Hide any previous response text
                $(".error-send,.success-send").remove();
                // Show response message
                $contactform.prepend(response);
            }
        });
        return false;
    });
    /* ---------------------------------------------------------------------- */
    /* ------------------------------ Google Maps --------------------------- */
    /* ---------------------------------------------------------------------- */

    var map;
    function initialize() {
        map = new GMaps({
            div: '#map',
            lat: -37.817917,
            lng: 144.965065,
            zoom: 16

        });
        map.addMarker({
            lat: -37.81792,
            lng: 144.96506,
            title: 'Marker with InfoWindow',
            icon: 'images/pins-map/map-marker.png',
            infoWindow: {
                content: '<p>Melbourne Victoria, 300, Australia</p>'
            }
        });
    }


    /* ---------------------------------------------------------------------- */
    /* -------------------------------- skillbar ---------------------------- */
    /* ---------------------------------------------------------------------- */

    $('.tabs-resume').click(function() {

        $('.skillbar').each(function() {
            $(this).find('.skillbar-bar').width(0);
        });

        $('.skillbar').each(function() {
            $(this).find('.skillbar-bar').animate({
                width: $(this).attr('data-percent')
            }, 2000);
        });

    });

    $('#resume').prev('h2.resp-accordion').click(function() {

        $('.skillbar').each(function() {
            $(this).find('.skillbar-bar').width(0);
        });

        $('.skillbar').each(function() {
            $(this).find('.skillbar-bar').animate({
                width: $(this).attr('data-percent')
            }, 2000);
        });
    });
	
		
	//Change for demo page
    $('input:radio[name=page_builder]').on('change', function() {
		
		$('input:radio[name=page_builder]').each(function () {

			var $this = $(this);
	
			if ($(this).prop('checked')) {
				window.location.replace($this.val());
			}
		});
		
        return false;
    });



});