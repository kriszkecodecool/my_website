(function () {
	var button = document.getElementById("Button");
	button.addEventListener("click", sendMessage);
	
    function validateContactData() {
		var nameValue = document.getElementById("name").value;
		var emailValue = document.getElementById("email").value;
		var messageValue = document.getElementById("message").value;
		
        var checkEmail = /^\w+@[a-zA-Z_]+?\.[a-z]{2,3}$/;
        var checkName = /^[A-Za-z ]+$/
        var checkMsg = /^[A-Za-z ]{20,500}/
        return checkEmail.exec(emailValue) && checkName.exec(nameValue) && checkMsg.exec(messageValue);
    }
	
    function sendMessage() {
		alert("Teszt");
        if (validateContactData() {
            alert("Your message was sent!");
        } else {
            alert("Something's wrong, message not sent.");
        }
    }
		
})();