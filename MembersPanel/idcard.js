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




  var Email = getInputVal('email');
  var Contact = getInputVal('contact');
var Amount = getInputVal('amount');
var options = {
 
  "key": "rzp_live_HtAyNsIrtPOAM7", 
 
  "key_secret":"mZwUmUGtPJEVqpqrE36uVFYa",
   amount: Amount *100,
   name:"Wake With Wellness",
   description:"ID Card fee",
   close: false,
   callback_url: 'https://your-server/callback_url',
   redirect: true,
  "prefill":
  {

        email:Email,
        contact: Contact
  },


  config: {
    display: {
      blocks: {
        banks: {
          name: 'All payment methods',
          instruments: [
            {
              method: 'upi'
            },
            {
              method: 'card'
            },
            {
                method: 'wallet'
            },
            {
                method: 'netbanking'
            },
            {
                method: 'emi'
            }
          ],
        },
      },
      sequence: ['block.banks'],
      preferences: {
        show_default_blocks: false,
      },
    },
  },





  "handler": function (response) {
    alert(response.razorpay_payment_id);
  },
  "modal": {
    "ondismiss": function () {
      if (confirm("Are you sure, you want to close the form?")) {
        txt = "You pressed OK!";
        console.log("Checkout form closed by the user");
      } else {
        txt = "You pressed Cancel!";
        console.log("Complete the Payment")
      }
    }
  }
};


