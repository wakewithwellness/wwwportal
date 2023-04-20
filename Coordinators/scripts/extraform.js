//Connection
const firebaseConfig = {
  apiKey: "AIzaSyDoiXHxMG_vZPHz0eeJj5s661xhfU-Y4_4",
  authDomain: "members-76725.firebaseapp.com",
  databaseURL: "https://members-76725-default-rtdb.firebaseio.com",
  projectId: "members-76725",
  storageBucket: "members-76725.appspot.com",
  messagingSenderId: "734645197873",
  appId: "1:734645197873:web:808127fdb4d643d4d24910",
  measurementId: "G-7LYZ3R48GT",
};

//Init Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var dataRef = firebase.database().ref("Coordinatoragreement");

// Listen for form submit
document.getElementById("extraForm").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var Membername = getInputVal("Membername");
  var Email = getInputVal("Email");
  var Contact = getInputVal("Contact");
  var Whatsapp = getInputVal("Whatsapp");
  var Alternate = getInputVal("Alternate");
  var College = getInputVal("College");
  var dob = getInputVal("dob");
  var Checkbox1 = getInputVal("Checkbox1");
  var Checkbox2 = getInputVal("Checkbox2");
  var Checkbox3 = getInputVal("Checkbox3");
  var Checkbox4 = getInputVal("Checkbox4");
  var Checkbox5 = getInputVal("Checkbox5");
  var Checkbox6 = getInputVal("Checkbox6");
  var Checkbox7 = getInputVal("Checkbox7");

  const date = new Date();

  // Save message
  saveData(
    Membername,
    Email,
    Contact,
    Whatsapp,
    Alternate,
    College,
    dob,
    Checkbox1,
    Checkbox2,
    Checkbox3,
    Checkbox4,
    Checkbox5,
    Checkbox6,
    Checkbox7,
    date
  );

  // Show alert
  document.querySelector(".alert").style.display = "block";
  document.getElementById("submit").innerHTML = "Submitted";
  document.querySelector("#submit").disabled = "disabled";
  document.querySelector("#submit").style.cursor = "not-allowed";
  document.querySelector("#submit").style.background = "#70c6ff";
  document.querySelector("#submit").style.border = "none";

  // Clear form
  document.getElementById("extraForm").reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveData(
  Membername,
  Email,
  Contact,
  Whatsapp,
  Alternate,
  College,
  dob,
  Checkbox1,
  Checkbox2,
  Checkbox3,
  Checkbox4,
  Checkbox5,
  Checkbox6,
  Checkbox7,
  date
) {
  var newDataRef = dataRef.push();
  newDataRef.set({
    Membername: Membername,
    Email: Email,
    Contact: Contact,
    Whatsapp: Whatsapp,
    Alternate: Alternate,
    College: College,
    dob: dob,
    Checkbox1: Checkbox1,
    Checkbox2: Checkbox2,
    Checkbox3: Checkbox3,
    Checkbox4: Checkbox4,
    Checkbox5: Checkbox5,
    Checkbox6: Checkbox6,
    Checkbox7: Checkbox7,
    date: date,
  });
}

// Set the date we're counting down to
var countDownDate = new Date("April 21, 2023 23:59:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
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
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Submissions closed";
    document.getElementById("demo").style.color = "red";
    document.getElementById("demo").style.borderColor = "red";

    document.querySelector("#submit").style.color = "white";
    document.querySelector("#submit").style.background = "#cccccc";
    document.querySelector("#submit").style.border = "none";
    document.querySelector("#submit").disabled = "disabled";
    document.querySelector("#submit").style.cursor = "not-allowed";
  }
}, 1000);
