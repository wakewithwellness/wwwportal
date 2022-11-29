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
var dataRef = firebase.database().ref('NEConvene2022');

// Listen for form submit
document.getElementById('tshirtform').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var Membername = getInputVal('Membername');
  var contact = getInputVal('contact');


  // Save message
  saveData(Membername, contact);


 // Show alert
 document.querySelector('.alert').style.display = 'block';
 document.getElementById("submit").innerHTML = "Submitted";
 document.querySelector('#submit').disabled = "disabled";
 document.querySelector('#submit').style.cursor = "not-allowed";
 document.querySelector('#submit').style.background = "#70c6ff";
 document.querySelector('#submit').style.border = "none";
 


 // Clear form
 document.getElementById('tshirtform').reset();

}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveData(Membername, contact){
  var newDataRef = dataRef.push();
  newDataRef.set({
    Membername: Membername,
    contact:contact,
  


  });
}






           

     // Set the date we're counting down to
     var countDownDate = new Date("November 30, 2022 11:00:00").getTime();
     
     // Update the count down every 1 second
     var x = setInterval(function() {
     
       // Get today's date and time
       var now = new Date().getTime();
     
       // Find the distance between now and the count down date
       var distance = countDownDate - now;
     
       // Time calculations for days, hours, minutes and seconds
       var days = Math.floor(distance / (1000 * 60 * 60 * 24));
       var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
       var seconds = Math.floor((distance % (1000 * 60)) / 1000);
     
       // Display the result in the element with id="demo"
       document.getElementById("demo").innerHTML = days + "d " + hours + "h "
       + minutes + "m " + seconds + "s ";


 
     
       // If the count down is finished, write some text
       if (distance < 0) {
         clearInterval(x);
         document.getElementById("demo").innerHTML = "Registration closed";
         document.getElementById("demo").style.color = "red";
         document.getElementById("demo").style.borderColor = "red";
         document.getElementById("tag").style.display = "none";
         document.querySelector('#submit').style.color = "white";
         document.querySelector('#submit').style.background = "#cccccc";
         document.querySelector('#submit').style.border = "none";
         document.querySelector('#submit').disabled = "disabled";
         document.querySelector('#submit').style.cursor = "not-allowed";


      
       }
     }, 1000);
    
