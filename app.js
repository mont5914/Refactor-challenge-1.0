function fizzbuzz (maxValue) {

  for (var i = 1; i <= maxValue; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
      var html = $('<div>' + i + ': Fizz Buzz</div>');
      $('.result').append(html);

    } else if (i % 3 == 0) {
      var html = $('<div>'+ i + ': Fizz</div>'); 
      $('.result').append(html);
    }
      else if (i % 5 == 0) {
      var html = $('<div>' + i + ':Buzz</div>');
      $('.result').append(html);
    } else {
      var html = $('<div>' + i +'</div>');
      $('.result').append(html);
    } 
  }
}

function buttonPressed () {
	var text = document.getElementById('text');
	var maxValue = parseInt(text.value, 10);
	$('.result').html('');
	if (isNaN(maxValue)) {
		alert("Please use only a number from 1-1000");
		return;
	} 

	if (maxValue < 1){
		alert("To low. Please enter a higher value");
		return;
	}

	if (maxValue > 1000) {
		alert("To high. Please enter a lower number");
		return;
	}	



	fizzbuzz (maxValue);
}



		
	



	


 	

