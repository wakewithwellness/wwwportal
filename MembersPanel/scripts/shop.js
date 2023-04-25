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
   var dataRef = firebase.database().ref('Shop');
   
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
 
     var item = getInputVal('item');
     var address = getInputVal('address');
     var pin = getInputVal('pin');
     var state = getInputVal('state');
     
   
   
     // Save message
     saveData(Membername, Email, Contact, Whatsapp, item, address,pin, state);
   
   
    // Show alert
    document.querySelector('.alert').style.display = 'block';
   

    // Clear form
    document.getElementById('extraForm').reset();
   }
   
   // Function to get get form values
   function getInputVal(id){
     return document.getElementById(id).value;
   }
   
   // Save message to firebase
   function saveData(Membername, Email, Contact, Whatsapp, item, address,pin, state){
     var newDataRef = dataRef.push();
     newDataRef.set({
       Membername: Membername,
       Email:Email,
       Contact:Contact,
       Whatsapp:Whatsapp,
       item:item,
       address:address,
       pin:pin,
       state:state
   
     });
   }
   