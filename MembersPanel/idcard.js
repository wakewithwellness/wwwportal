 // Reference messages collection
         var dataRef = firebase.database().ref('IDreg');

// Listen for form submit
document.getElementById('idreg').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var Email = getInputVal('email');
  var Contact = getInputVal('contact');
  var Blood = getInputVal('blood');
  var Address = getInputVal('address');


  


  // Save message
  saveData(name, Email, Contact, Blood, Address);

}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveData(name, Email, Contact, Blood, Address){
  var newDataRef = dataRef.push();
  newDataRef.set({
    name: name,
    Email:Email,
    Contact:Contact,
    Blood:Blood,
    Address:Address
  
    

  });
}


