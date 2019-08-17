
function firstNameCheck(){
	var firstName = $('#firstName').val();
	var reg = /^[a-zA-Z -.]{2,20}$/;
	if (reg.test(firstName)) {
	$('#firstNameError').text(' ');
		return true;
	} else {
	$('#firstNameError').text('First name should be 2 to 20 charecter');
		return false;
	}
}

$('#firstName').keyup( function (){
	firstNameCheck();
});

function lastNameCheck(){
	var lastName = $('#lastName').val();
	var reg = /^[a-zA-Z -.]{2,20}$/;
	if (reg.test(lastName)) {
	$('#lastNameError').text(' ');
	return true;
	} else {
	$('#lastNameError').text('Last name should be 2 to 20 charecter');
		return false;
	}
}

$('#lastName').keyup( function (){
	lastNameCheck();
});

function emailAddressCheck(){
	var emailAddress = $('#emailAddress').val();
	var regEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;
	if (regEmail.test(emailAddress)) {
	$('#emailError').text(' ');
		return true;
	} else {
	$('#emailError').text('Email address is invalid');
		return false;
	}
}

$('#emailAddress').keyup( function (){
	emailAddressCheck();
});
function checkPassword(){
	var password = $('#password').val();
	var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
	if (reg.test(password)) {
	$('#passwordError').text(' ');
		return true;
	} else {
	$('#passwordError').text('Password must have 1 uppercase and lowercase letter, 1 number, 1 sepcial charecter like !@#$%^&* etc.');
		return false;
	}
}

$('#password').blur( function (){
	checkPassword();
});
$('#password').keyup( function (){
	$('#passwordError').text(' ');
});
$('#password').click( function (){
	$('#passwordError').text('Password must have 1 uppercase and lowercase letter, 1 number, 1 sepcial charecter like !@#$%^&* etc.');
});
function checkConfirmPassword(){
	var confirmPassword = $('#confirmPassword').val();
	var password = $('#password').val();
	if (password == confirmPassword) {
	$('#confirmPasswordError').text(' ');
		return true;
	} else {
	$('#confirmPasswordError').text('Password and Confirm Password should be same.');
		return false;
	}
}


$('#confirmPassword').click( function (){
	$('#confirmPasswordError').text('Password and Confirm Password should be same.');
});

$('#confirmPassword').keyup( function (){
	$('#confirmPasswordError').text(' ');
});

$('#confirmPassword').blur( function (){
	checkConfirmPassword();
});

$('#showHide').click( function() {
	var attrValue = $('#password').attr('type');
	if(attrValue == 'password'){
		$('#password').attr('type', 'text');
	} else {
		$('#password').attr('type', 'password');
	}
});

function checkGenderInfo(){
	var genderInfo= $('input[type="radio"]:checked').val();
	if(genderInfo == 'male' || genderInfo == "female") {
		$('#genderError').text(' ');
		return true;
	} else {
		$('#genderError').text('Please give your gender info!');
		return false;
	}
}

// $('#btn').click( function() {
// 	checkGenderInfo()
// });

function checkDistrictName(){
	var districtValue = $('#district').val();
	if (districtValue == ' ') {
		$('#districtError').text('Please give us your district info!');
		return false;
	} else {
		$('#districtError').text(' ');
		return true;
	}
}

$('#form').submit( function() {
	if(firstNameCheck() == true && lastNameCheck() == true && emailAddressCheck() == true && checkPassword() == true && checkConfirmPassword() == true && checkGenderInfo() == true && checkDistrictName() == true ) {
		return true;
	} else {
		return false;
	}
});















$(window).scroll( function () {
	var windowScrollPosition = $(window).scrollTop();
	//alert(windowScrollPosition);
	var menuPosition = $('#menuPosition').position();
	 //alert(menuPosition.left);
	if (windowScrollPosition >= menuPosition.top){
		$('#menuUl').css({
			'position'   	: 'fixed',
			'top' 	    	: '0px',
			'width'     	: '90%',
		});
	} else {
		$('#menuUl').css({
			'position'    : 'relative',
			'top'         : '0px',
		});
	}
});