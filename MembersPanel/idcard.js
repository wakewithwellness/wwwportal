  // Reference messages collection
         var dataRef = firebase.database().ref('IDreg');

// Listen for form submit
document.getElementById('idreg').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  var rzp1 = new Razorpay(options);
  rzp1.open();
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var Email = getInputVal('email');
  var Contact = getInputVal('contact');
  var Blood = getInputVal('blood');
  var Amount = getInputVal('amount');
  var Address = getInputVal('address');


  


  // Save message
  saveData(name, Email, Contact, Blood,Amount, Address);


  document.getElementById('idreg').reset();

}



// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveData(name, Email, Contact, Blood,Amount, Address){
  var newDataRef = dataRef.push();
  newDataRef.set({
    name: name,
    Email:Email,
    Contact:Contact,
    Blood:Blood,
    Amount:Amount,
    Address:Address
  
    

  });
}





