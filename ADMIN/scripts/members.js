
const auth = firebase.auth()


// Set up our register function
function register () {
  // Get all our input fields
  email = document.getElementById('email').value
  password = document.getElementById('password').value
  name = document.getElementById('name').value
  regno = document.getElementById('regno').value
  phone = document.getElementById('phone').value
  whatsapp = document.getElementById('whatsapp').value
  department = document.getElementById('department').value
  department2 = document.getElementById('department2').value
  college = document.getElementById('college').value
  exp = document.getElementById('exp').value
  blood = document.getElementById('blood').value
  address = document.getElementById('address').value
  pincode = document.getElementById('pincode').value
  state = document.getElementById('state').value

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Invalid!!')
    return
    // Don't continue running the code
  }
  if (validate_field(name) == false || validate_field(regno) == false || validate_field(phone) == false || 
  validate_field(whatsapp) == false || validate_field(department) == false || validate_field(department2) == false || 
  validate_field(college) == false || validate_field(exp) == false || validate_field(blood) == false || 
  validate_field(address) == false){
    alert('One or More Extra Fields is Invalid!!')
    return
  }
 
  // Move on with Auth
  auth.createUserWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
 
  

    // Create User data
    var user_data = {
      email : email,
      name : name,
      regno : regno,
      phone : phone,
      whatsapp : whatsapp,
      department : department,
      department2 : department2,
      college : college,
      exp : exp,
      blood : blood,
      address : address,
      pincode : pincode,
      state : state,
      
    }

    // Push to Firebase Database
    firebase.firestore()
    .collection('users')
    .doc(user.uid).set(user_data)

    // DOne
    alert('User Created!!')
  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}



// Set up our login function
function login () {
  // Get all our input fields
  email = document.getElementById('email').value
  password = document.getElementById('password').value

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Outta Line!!')
    return
    // Don't continue running the code
  }

  auth.signInWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser


    // Create User data
    var user_data = {
      last_login : Date.now()
    }

    // Push to Firebase Database
    firebase.firestore()
    .collection('users')
    .doc(user.uid).update(user_data)

    // DOne
    alert('User details Updated!!')

  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}





// Validate Functions
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    // Email is good
    return true
  } else {
    // Email is not good
    return false
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false
  } else {
    return true
  }
}

function validate_field(field) {
  if (field == null) {
    return false
  }

  if (field.length <= 0) {
    return false
  } else {
    return true
  }
}