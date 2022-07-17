//Connection
const firebaseConfig = {
  apiKey: "AIzaSyBTOvD0aod-fntZ0VYbT6EAp9z1L_bqKwY",
  authDomain: "website-818ed.firebaseapp.com",
  databaseURL: "https://website-818ed-default-rtdb.firebaseio.com",
  projectId: "website-818ed",
  storageBucket: "website-818ed.appspot.com",
  messagingSenderId: "542030860652",
  appId: "1:542030860652:web:ee0bef0509915aa1da2349",
  measurementId: "G-2VWCQ9QR4S"
};

//Init Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var dataRef = firebase.database().ref('agreement');

// Listen for form submit
document.getElementById('extraForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var Membername = getInputVal('Membername');
  var Email = getInputVal('Email');
  var Contact = getInputVal('Contact');
  var Whatsapp = getInputVal('Whatsapp');
  var Alternate = getInputVal('Alternate');
  var College = getInputVal('College');
  var Department = getInputVal('Department');
  var Department2 = getInputVal('Department2');
  var Checkbox1 = getInputVal('Checkbox1');
  var Checkbox2= getInputVal('Checkbox2');
  var Checkbox3 = getInputVal('Checkbox3');
  var Checkbox4 = getInputVal('Checkbox4');
  var Checkbox5 = getInputVal('Checkbox5');
  var Checkbox6 = getInputVal('Checkbox6');
  var Checkbox7 = getInputVal('Checkbox7');
  


  // Save message
  saveData(Membername, Email, Contact, Whatsapp, Alternate, College, Department,Department2, Checkbox1, Checkbox2, Checkbox3, Checkbox4, Checkbox5, Checkbox6, Checkbox7);


 // Show alert
 document.querySelector('.alert').style.display = 'block';

 // Hide alert after 3 seconds
 setTimeout(function(){
   document.querySelector('.alert').style.display = 'none';
 },3000);

 // Clear form
 document.getElementById('extraForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveData(Membername, Email, Contact, Whatsapp, Alternate, College, Department,Department2, Checkbox1, Checkbox2, Checkbox3, Checkbox4, Checkbox5, Checkbox6, Checkbox7){
  var newDataRef = dataRef.push();
  newDataRef.set({
    Membername: Membername,
    Email:Email,
    Contact:Contact,
    Whatsapp:Whatsapp,
    Alternate:Alternate,
    College:College,
    Department:Department,
    Department2:Department2,
    Checkbox1:Checkbox1,
    Checkbox2:Checkbox2,
    Checkbox3:Checkbox3,
    Checkbox4:Checkbox4,
    Checkbox5:Checkbox5,
    Checkbox6:Checkbox6,
    Checkbox7:Checkbox7

  });
}
