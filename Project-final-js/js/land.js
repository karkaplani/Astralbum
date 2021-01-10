//Search 
function landSearch() {
  landSearchBox = document.getElementById("landSearchBox");
  window.location.href = 'search.html?' + landSearchBox.value;
}

// Initialize and add the map
function initMap() {
  // The location of Algonquin
  const algonquin = { lat: 45.350340, lng: -75.754730 };
  // The map, centered at Algonquin
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: algonquin,
  });
  // The marker, positioned at Algonquin
  const marker = new google.maps.Marker({
    position: algonquin,
    map: map,
  });
}

//changing the price according to number
function changePrice() {
  var quantity = document.getElementById('quantity').value;
  var rawPrice = document.getElementById('price').getAttribute('value');
  var finalPrice = quantity * rawPrice;
  document.getElementById('price').innerHTML = 'Price: $' + finalPrice;
}

function validate() {
  //Variables Declaration and getting values
  var email = document.querySelector('#email').value; //email
  var pass1 = document.querySelector('#psw').value; //first password
  var terms = document.querySelector('#terms').checked; //terms checkbox
  var regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/; //regular expression for email

  //Checking if the email structure is correct
  if (regex.test(email) == true) {
      //Check if the terms checkbox is checked
      if (terms == true) {
          return true;
      }
      alert('Please Agree to the terms and conditions')
      return false;
  }
  alert("The email address is invalid")
  return false;
}