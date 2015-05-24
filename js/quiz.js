/*
 * 
 * Project Name: HTML5 Quiz Application
 * Author Name: Yubaraj Shrestha
 * URI: http://www.yubarajshrestha.com.np/
 * 
 */
 
 var score = 0; // Set score to 0
 var total = 6; // Set questions no
 var point = 1; // Point for correct answer
 var highest = total * point;

 // Initializer
 function init() {
 	// set correct answers
 	sessionStorage.setItem('a1','b');
 	sessionStorage.setItem('a2','d');
 	sessionStorage.setItem('a3','c');
 	sessionStorage.setItem('a4','a');
 	sessionStorage.setItem('a5','b');
 	sessionStorage.setItem('a6','a');
 }

 $(document).ready(function() {
 	// Hide Question Holder
 	$('article:last').hide();

 	// Hide all questions
 	$('.questionForm').hide();
 	
 	// Show first question
 	$('#q1').show();

 	$('.contactForm #submit').click(function() {
 		var x = document.forms["contact"]["fullname"].value;
 		var y = document.forms["contact"]["address"].value;

 		if (x == null || x == "") {
 			return true;
	    } else if(y == null || y == "") {
		 	return true;
	    } else {
	    	sessionStorage.setItem('name',x);
	    	sessionStorage.setItem('address',y);

	    	$('article:first').hide();
		 	$('article:last').show(300);
	    	return false;
	    } 		
 	});

 	$('.questionForm #submit').click(function() {
 		// Get data attributes
 		current = $(this).parents('form:first').data('question');
 		next = $(this).parents('form:first').data('question')+1;
 		// Hide all questions
 		$('.questionForm').hide();

 		// Show next question
 		$('#q'+next+'').fadeIn(300);
 		process(''+current+'');
 		return false;
 	})
 });

 // Process the answers
 function process(n) {
 	// Get input value
 	var submitted = $('input[name=q'+n+']:checked').val();
 	//console.log('input[name=q'+n+']:checked');
 	if(submitted == sessionStorage.getItem('a'+n+'')) {
		score++;
	}
 	if(n  == total) {
 		$('#results').html('<h2>Fullname: ' + sessionStorage.getItem('name') + '<br>Address: ' + sessionStorage.getItem('address') + '<h3>Your final score is: ' + score + ' out of '+ total + '</h3><br><a href="index.html">Take Quiz Again</a>');
 		$('#results').html('<p style="text-align: center">Fullname: ' + sessionStorage.getItem('name') + '<br>Address: ' + sessionStorage.getItem('address') + '<br>Your final score is: <strong class="blink"> ' + score + '</strong> out of ' + total + '.<br><a href="index.html">Take Quiz Again</a>');
 		if(score == highest) {
 			$('#results').append('<p>You are the HTML5 master!');
 		}
 	}
 	return false;
 }

 // Add event listener
 window.addEventListener('load', init, false);