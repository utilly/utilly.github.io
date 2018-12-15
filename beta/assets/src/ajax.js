$( document ).ready(function() {
    $("#submit").click(
		function(){
			sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
			return false; 
		}
	);
});
 
function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //page url (action_ajax_form.php)
        type:     "POST", //send method
        dataType: "html", //data type
        data: $("#"+ajax_form).serialize(),  // serialize object
        success: function(response) { //Data successfully sent
        	result = $.parseJSON(response);
        	$('#result_form').html(
                'Name: '+result.name+
                '<br>Email: '+result.email+
                '<br>Department: '+result.department+
                '<br><br>Message:<br>'+result.message
                );
    	},
    	error: function(response) { // Data not sent
            $('#result_form').html('<script>alert("Error. Data cannot be sent.");</script>');
    	}
 	});
}