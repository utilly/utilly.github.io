$(function(){
	
	$("#form").validate({  	// form id (or class name)
		rules: {	// rules
			name: { 		// specify the name of the field for which rules are entered
				required: true, // a value must be entered in the field
				minlength: 2	// set the minimum value of the field value
			},
			company: {
				required: true
			},
			phone: {
				required: true,
				number: true,	// the field value must be a decimal integer
				minlength: 10
			},
			email: {
				required: true,
				email: true	// the field value must have the correct email address format
			},
			message: {
				required: true
			}
		},
		messages: {	// client messages
			name: {
				required: 'This field must be filled!',
				minlength: 'Minimal length: 2'
			},
			phone: {
				required: 'This field must be filled!',
				number: 'Invalid phone number format. Phone number must be intered including U.S. or Canada area code. (Example: 8001231100)',
				minlength: 'Minimal length: 10'
			},
			email: 'Invalid email address format',
			message: {
				required: 'This field must be filled!'
			}
		},
		success: function(label) {
			// Set the class 'OK' for the error message and turn it off after 2 seconds
			label.html('OK').removeClass('error').addClass('ok');
			setTimeout(function(){
				label.fadeOut(500);
			}, 2000)
		}
	});
	
});