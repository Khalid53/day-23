 /*
 Syntax: $('selector').event(action)
selector:
html element
html tag
id
class
attribute
value of attribute

JavaScript Object:
Defenation:
var khalid = {
	name : 'Abdul Khalek', ------------------Property
	add : function(){------------------------Method
		document.write('Hello Add');
	} 
};
Calling:
khalid.add();


 */
// var khalid = {
// 	name : 'Abdul Khalek',
// 	add : function(){
// 		document.write('Hello Add');
// 	} 
// };
// khalid.add();
/*$('h1').html(function() {
	$('h1').css({
		'color' : 'red',
		'font-size' : '36px',
		'background-color' : 'green',

	});
} );*/
	// var scrollDivPosition = $('#scrollDiv').position();
	// alert(scrollDivPosition.top); --------------------------------------for mejerment scroll position


	$(window).scroll( function () {
		//alert('test');
		var windowScrollPosition = $(window).scrollTop();
		var stickyDiv = $('#stickyDiv').position();
		// $('#p1').text(windowScrollPosition);
		// $('#p2').text(stickyDiv.top);
		if (windowScrollPosition>=stickyDiv.top) {
			$('#stickyDiv').css({
				'position' : 'fixed',
				'top' : '0px',

			});
		} else {
			$('#stickyDiv').css({
				 
			});	
		}

	});



	var firstScrollPosition = 0;
 $('#scrollDiv').scroll( function() {
 	//alert('test');
 	//$('#h2').css('display', 'block').fadeOut(1000); for checking scroll event
 	var scrollPosition = $('#scrollDiv').scrollTop();
 	if (scrollPosition>firstScrollPosition){
 		$('#h2').text('Your are scrolling down');
 	} else {
 		$('#h2').text('Your are scrolling up');
 	}
 	firstScrollPosition = scrollPosition;

 });




$('#firstName').keyup( function(){
	var firstName = $('#firstName').val();
	$('#res1').text(firstName);
} );

$('#lastName').keyup( function() {
	var lastName = $('#lastName').val();
	$('#res2').text(lastName);
});
$('#lastName').blur( function() {
	var firstName = $('#firstName').val();
	var lastName = $('#lastName').val();
	$('#res3').text(firstName+' '+lastName);
});




 // $('#btn').click( function (){
// 	var firstName = $('#firstName').val();
// 	var lastName = $('#lastName').val();
// 	var fullName = firstName+' '+lastName;
// 	$('#fullName').val(fullName);
// } );