// Get the form element
var form = document.querySelector('form');

// Get the input fields
var nameInput = document.getElementById('name');
var ageInput = document.getElementById('age');
var addressInput = document.getElementById('address');
var contactInput = document.getElementById('contact');
var question1Input = document.getElementById('question1');
var question2Input = document.getElementById('question2');
var question3Input = document.getElementById('question3');

// Add event listener to form submit button
form.addEventListener('submit', function(event) {
  // Prevent default form submission
  event.preventDefault();

  // Check if all fields are filled
  if (nameInput.value && ageInput.value && addressInput.value && contactInput.value && question1Input.value && question2Input.value && question3Input.value) {
    // Create CSV row
    var csvRow = nameInput.value + ',' + ageInput.value + ',' + addressInput.value + ',' + contactInput.value + ',' + question1Input.value + ',' + question2Input.value + ',' + question3Input.value + '\n';

    // Send CSV row to server in append mode
    // Send CSV row to server in append mode
    var xhttp = new XMLHttpRequest();
    xhttp.open('POST', 'http://localhost:5000/', true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send('name=' + encodeURIComponent(nameInput.value) + '&age=' + encodeURIComponent(ageInput.value) + '&address=' + encodeURIComponent(addressInput.value) + '&contact=' + encodeURIComponent(contactInput.value) + '&question1=' + encodeURIComponent(question1Input.value) + '&question2=' + encodeURIComponent(question2Input.value) + '&question3=' + encodeURIComponent(question3Input.value));


    // Display confirmation message
    alert('Thanks for submitting your slambook!');

    // Reset form
    form.reset();
  } else {
    // Display error message
    alert('Please fill in all fields.');
  }
});
