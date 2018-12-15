//<![CDATA[
			/* window.onload=function(){
			(function () {
			var textFile = null,
			  makeTextFile = function (text) {
				var data = new Blob([text], {type: 'text/plain'});
			
				// If we are replacing a previously generated file we need to
				// manually revoke the object URL to avoid memory leaks.
				if (textFile !== null) {
				  window.URL.revokeObjectURL(textFile);
				}
			
				textFile = window.URL.createObjectURL(data);
			
				return textFile;
			  };
			
			
			  var create = document.getElementById('create'),
				textbox = document.getElementById('textbox');
			
			  create.addEventListener('click', function () {
				var link = document.getElementById('downloadlink');
				link.href = makeTextFile(textbox.value);
				link.style.display = 'block';
			  }, false);
			})();
			
			} *///]]> 

			// This will generate the text file content based on the form data





$.getScript("captcha.js", ValidCaptcha(){



            function buildData(){
                var txtData = "Name: "+$("#name").val()+
                        "\r\nEmail: "+$("#email").val()+
                        "\r\nDepartment: "+$("#department").val()+
                        "\r\nPriority: "+$("#priority").val()+
                        // "\r\nGender: "+($("#genderMale").is(":checked")?"Male":"Female");
                        "\r\nMessage: "+$("#message").val()
            
                return txtData;
            }
            // This will be executed when the document is ready


            $(function(){


                    if (res) {
                    

                        // This will act when the submit BUTTON is clicked
                        $("#txtForm").submit(function(event){
                            event.preventDefault();
                            var txtData = buildData();
                            window.location.href="data:application/octet-stream;base64,"+Base64.encode(txtData);
                        });

                        // This will act when the submit LINK is clicked
                        $("#submit").click(function(event){
                            var txtData = buildData();
                            $(this).attr('download',''+ $("#name").val() + '.txt')
                                .attr('href',"data:application/octet-stream;base64,"+Base64.encode(txtData));
                            });

                            function(response) { // Data was sent
                                $('#txtForm').html('<script>alert("Thank you for your feedback!\n We will review your feedback and reply as soon as possible.");</script>');
                        
                                }


                        } else {

                            function(response) { // Data not sent
                                $('#txtForm').html('<script>alert("Error. Data cannot be sent.");</script>');
                        
                                }
                            }
                        });



});