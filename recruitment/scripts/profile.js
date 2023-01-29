const userDetails = document.querySelector(".userDetails");


function createUserCollection(user) {
  firebase.firestore().collection("users").doc(user.uid).set({
    uid: user.uid,
    name: user.displayName,
    email: user.email,
    regno: "",
    phone: "",
    whatsapp: "",
    department: "",
    department2: "",
    college: "",
    status: "",
    blood: "",
    gender: "",
    address: "",
    state: "",
    pincode: "",
    exp: "",
    status: "",
  });
}

async function getuserInfo(userID) {
  if (userID) {
    const userInfoSnap = await firebase
      .firestore()
      .collection("users")
      .doc(userID)
      .get();

    const userInfo = userInfoSnap.data();
    if (userInfo) {
      userDetails.innerHTML = `
       <h3>${userInfo.name}</h3>
       <h3>${userInfo.email}</h3>
       <h3>${userInfo.phone}</h3>
       `;
    }
  } else {
    userDetails.innerHTML = `<div class="container" style="max-width: 60vh;margin-top:120px">
    <div class="card" style="background-color: #2E3035; border-radius:14px">
    <div class="card-body" style="text-align: left">
    <h4 class="card-title" style="color: #fff; font-weight: 700; font-size:26px">USER LOGIN</h4>
<br>
    <form autocomplete="off" onsubmit="login(event)">
        <input type="email" id="loginEmail" placeholder="REGISTERED EMAIL" style="width: 98%;
        height: 40px;padding-left:8px;font-size: 13px;border-radius:5px; background-color:#242629;color: #fff"><br>

        <input type="password" id="loginPassword" placeholder="PASSWORD" style="width: 98%;margin-top:10px;
        height: 40px;padding-left:8px;font-size: 13px;border-radius:5px; background-color:#242629;color: #fff">
        <br> 
        <div style="text-align:left;margin-top:15px;"> <a href="#modal-forgot" class="link" style="text-decoration: none; color: #FFA800; font-size: 12px;cursor:pointer" >FORGOT PASSWORD</a></div>
        <br>
        <div class="text-center">
        <button type="submit" class="btn" style="background-color:#13C15C;color: #fff;width:15vh"><i class="fa fa-sign-in" aria-hidden="true"></i> LOGIN</button>
        </div>
</form>
      <div>



     
    </div>
  </div></div>
      `;
  }
}

async function getuserInfoRealtime(userID) {
  if (userID) {
    const userdocRef = await firebase
      .firestore()
      .collection("users")
      .doc(userID);
    userdocRef.onSnapshot((doc) => {
      if (doc.exists) {
        const userInfo = doc.data();
        if (userInfo) {
          userDetails.innerHTML = `
          <style>
          .pic {
              height: 100%;
              width: 100%;
              -o-object-fit: cover;
              object-fit: cover;
              -o-object-position: center;
              object-position: center;
            }
      
            #cameraicon{
              margin-right: 22px
            }
      
        
      
            @media (max-width: 557px) {
              #cameraicon{
                margin-right: -10px
              }
      
              
            }
          </style>




          <form autocomplete="off" id="editProfile" onsubmit="updateUserProfile(event)">



          <div class="container my-2" style="max-width:150vh">
          <div class="row">
                    <div class="col-lg">
                        <div class="container" style="text-align:center;background-color:#2E3035;border-radius:10px;padding:10px;color: white;">

                               
                      

                        <div class="profile-img">
                            <img id="proimg" class="pic" style="border-radius: 10px" src="${userInfo.photo}" alt="">
                          
                        </div>
                           <a href="#modal-pic" class="link btn my-4" style="border:none;margin-top:-2px;background-color:#191B20;font-size:13px;color:white;font-weight:bold;" >Change Profile Picture</a>
                                      <div class="form-group row">
                                          <label class="col-form-label col-2"><img src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png" style="width:25px" alt="name"/></label>
                                          <div class="col-10">
                                              <input type="text" id="name" style="background-color:#313438;border: 1.5px solid #242629;color:white;" class="form-control">
                                          </div>
                                      </div>
      
                                      <div class="form-group row">
                                          <label class="col-form-label col-2"><img src="./assets/gmail.png" style="width:25px" alt="email"/></label>
                                          <div class="col-10">
                                              <input type="text" id="email" style="background-color:#313438;border: 1.5px solid #242629;color:grey;" disabled="disabled" class="form-control">
                                          </div>
                                      </div>
      
                                      <div class="form-group row">
                                          <label class="col-form-label col-2"><img src="./assets/phone.png" style="width:25px" alt="phone"/></label>
                                          <div class="col-10">
                                              <input type="tel" id="phoneno" style="background-color:#313438;border: 1.5px solid #242629;color:white;" class="form-control">
                                          </div>
                                      </div>
      
                                      <div class="form-group row">
                                          <label class="col-form-label col-2"><img src="./assets/whatsapp.png" style="width:25px" alt="whatsapp"/></label>
                                          <div class="col-10">
                                              <input type="tel" id="whatsapp" style="background-color:#313438;border: 1.5px solid #242629;color:white;" class="form-control" >
                                          </div>
                                      </div>
                                
                                      <div class="form-group row">
                                          <label class="col-form-label col-2"><img src="./assets/blood.png" style="width:25px" alt="blood"/></label>
                                          <div class="col-10">
                                              <select id="blood" style="background-color:#313438;border: 1.5px solid #242629;color:white;" class="form-control">
                                                  <option>-- Select --</option>
                                                  <option value="A +ve">A +ve</option>
                                                  <option value="B +ve">B +ve</option>
                                                  <option value="AB +ve">AB +ve</option>
                                                  <option value="O +ve">O +ve</option>
                                                  <option value="A -ve">A -ve</option>
                                                  <option value="B -ve">B -ve</option>
                                                  <option value="O -ve">O -ve</option>
                                                  <option value="AB -ve">AB -ve</option>
                                              </select>
                                          </div>
                                      </div>
      
                                   
      
      
                          
                                </div>
      
      
                
                              
                            
                     
                    </div>

                    

                    <div class="col-lg">

                    <div class="container my-2" style="text-align:center;background-color:#2E3035;border-radius:10px;padding:20px;color: white;">

                    <div class="form-group row">
                    <label class="col-form-label col-2"><img src="./assets/college.png" style="width:25px" alt="name"/></label>
                    <div class="col-10">
                    <textarea row="2" id="college" style="background-color:#313438;border: 1.5px solid #242629;color:white;" class="form-control"></textarea>  
                    </div>
                    </div>


                    <div class="form-group row">
                    <label class="col-form-label col-2"><img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" style="width:25px" alt="dist"/></label>
                    <div class="col-10">
                          <div class="row">
                          <div class="col"> <input type="text" id="dist" placeholder="District" style="background-color:#313438;border: 1.5px solid #242629;color:white;" class="form-control"></div>
                                  <div class="col">
                                        <select id="state" style="background-color:#313438;border: 1.5px solid #242629;color:white;" class="form-control">
                                              <option value="Andhra Pradesh">Andhra Pradesh</option>
                                              <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                              <option value="Assam">Assam</option>
                                              <option value="Bihar">Bihar</option>
                                              <option value="Chandigarh">Chandigarh</option>
                                              <option value="Chhattisgarh">Chhattisgarh</option>
                                              <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                              <option value="Daman and Diu">Daman and Diu</option>
                                              <option value="Delhi">Delhi</option>
                                              <option value="Lakshadweep">Lakshadweep</option>
                                              <option value="Puducherry">Puducherry</option>
                                              <option value="Goa">Goa</option>
                                              <option value="Gujarat">Gujarat</option>
                                              <option value="Haryana">Haryana</option>
                                              <option value="Himachal Pradesh">Himachal Pradesh</option>
                                              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                              <option value="Jharkhand">Jharkhand</option>
                                              <option value="Karnataka">Karnataka</option>
                                              <option value="Kerala">Kerala</option>
                                              <option value="Madhya Pradesh">Madhya Pradesh</option>
                                              <option value="Maharashtra">Maharashtra</option>
                                              <option value="Manipur">Manipur</option>
                                              <option value="Meghalaya">Meghalaya</option>
                                              <option value="Mizoram">Mizoram</option>
                                              <option value="Nagaland">Nagaland</option>
                                              <option value="Odisha">Odisha</option>
                                              <option value="Punjab">Punjab</option>
                                              <option value="Rajasthan">Rajasthan</option>
                                              <option value="Sikkim">Sikkim</option>
                                              <option value="Tamil Nadu">Tamil Nadu</option>
                                              <option value="Telangana">Telangana</option>
                                              <option value="Tripura">Tripura</option>
                                              <option value="Uttar Pradesh">Uttar Pradesh</option>
                                              <option value="Uttarakhand">Uttarakhand</option>
                                              <option value="West Bengal">West Bengal</option>
                                              </select>
                                  </div>
                              </div>    
                          </div>
                      </div>
               


                    </div>

              

                        <div class="container my-2" style="text-align:center;background-color:#2E3035;border-radius:10px;padding:20px;color: white;">
                              <div style="text-align:left">
                              <h4>Contact Us : </h4>
                              <br>
                                <div class="row" style="font-size:13px">
                                <div class="col"><p><img src="./assets/phone.png" style="width:20px" alt="dist"/><a style="color:white;margin-left:10px;text-decoration:none" href="telto: 7086952212">+91-7086952212</a></p></div>
                                <div class="col">  <p><img src="./assets/whatsapp.png" style="width:20px" alt="dist"/><a style="color:white;margin-left:10px;text-decoration:none" href="telto: 6385334226">+91-6385334226</a></p></div>
                                </div>
                              <p  style="font-size:13px"><img src="./assets/gmail.png" style="width:20px" alt="dist"/><a style="color:white;margin-left:10px;text-decoration:none" href="mailto: wakewithwellness@gmail.com">wakewithwellness@gmail.com</a></p>
                              <p  style="font-size:13px"><img src="./assets/gmail.png" style="width:20px" alt="dist"/><a style="color:white;margin-left:10px;text-decoration:none" href="mailto: technicalteam.wakewithwellness@gmail.com">technicalteam.wakewithwellness@gmail.com</a></p>
                              </div>
                        </div>
                    </div>
          </div>
    </div>





        


          <br>    <br>    <br>    <br>
             
    
          <div style="position:fixed;bottom: 0px;left:0px;background-color: #191B20;padding:20px;height:70px; width:100%;">
          <div class="container">
            <div class="row">
                  <div class="col-auto mr-auto" >
                    <p style="color:white;margin-top:2px;font-weight:bold">Confirm your update:</p>
                  </div>
                  <div class="col-auto"> 
                     <button type="submit" class="btn" style="border:none;min-width:100px;margin-top:-2px;background-color: #3C9E65;color:white;font-weight:bold;">Confirm</button>
                  </div>
            </div>
          </div>
          </div> 


          </form>

      
          
                        `;

                        document.getElementById("name").value = userInfo.name
                        document.getElementById("email").value = userInfo.email     
                        document.getElementById("phoneno").value = userInfo.phone
                        document.getElementById("whatsapp").value = userInfo.whatsapp
                        document.getElementById("blood").value = userInfo.blood
                        document.getElementById("college").value = userInfo.college
                        document.getElementById("dist").value = userInfo.dist
                        document.getElementById("state").value = userInfo.state
                      
                     


                        if(firebase.auth().currentUser.photoURL){
                          document.querySelector('#proimg').src = firebase.auth().currentUser.photoURL
                      }
  
        }
      }
    });
  } else {
    userDetails.innerHTML = `
    <div class="container" style="max-width: 60vh;margin-top:120px">
    <div class="card" style="background-color: #2E3035; border-radius:14px">
    <div class="card-body" style="text-align: left">
    <h4 class="card-title" style="color: #fff; font-weight: 700; font-size:26px">USER LOGIN</h4>
<br>
    <form autocomplete="off" onsubmit="login(event)">
        <input type="email" id="loginEmail" placeholder="REGISTERED EMAIL" style="width: 98%;
        height: 40px;padding-left:8px;font-size: 13px;border-radius:5px; background-color:#242629;color: #fff"><br>

        <input type="password" id="loginPassword" placeholder="PASSWORD" style="width: 98%;margin-top:10px;
        height: 40px;padding-left:8px;font-size: 13px;border-radius:5px; background-color:#242629;color: #fff">
        <br> 
        <div style="text-align:left;margin-top:15px;"> <a href="#modal-forgot" class="link" style="text-decoration: none; color: #FFA800; font-size: 12px;cursor:pointer" >FORGOT PASSWORD</a></div>
        <br>
        <div class="text-center">
        <button type="submit" class="btn" style="background-color:#13C15C;color: #fff;width:15vh"><i class="fa fa-sign-in" aria-hidden="true"></i> LOGIN</button>
        </div>
</form>
      <div>



     
    </div>
  </div></div>
        
        


        `;
  }
}


function updateUserProfile(e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phoneno").value;
  var whatsapp = document.getElementById("whatsapp").value;
  var blood = document.getElementById("blood").value;
  var college = document.getElementById("college").value;
  var dist = document.getElementById("dist").value;
  var state = document.getElementById("state").value;
  const userDocRef = firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid);

  userDocRef.update(
      {
        name: name,
        email: email,
        phone: phone,
        whatsapp: whatsapp,
        blood: blood,
        college: college,
        dist:dist,
        state:state
      })
    .then(() => {
      window.location.replace("./home.html");

    })
    .catch((err) => {
      console.log(err);
    });
}




function uploadImage(e){
  console.log(e.target.files[0])
  const uid = firebase.auth().currentUser.uid
  const fileRef = firebase.storage().ref().child(`/users/${uid}/profile`)
  const uploadTask =  fileRef.put(e.target.files[0])
  uploadTask.on('state_changed', 
(snapshot) => {
  
  var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  if(progress=='100') 
   // Show alert
   document.querySelector('.success').innerHTML=`<i class="fa fa-check-circle" aria-hidden="true"></i> Updated Successfully`;
            
   // Hide alert after 10 seconds
setTimeout(function(){
document.querySelector('.success').innerHTML=``;
},10000);
    
uploader.value = progress;
            
console.log('Upload is ' + progress + '% done');
document.querySelector('.prog').innerHTML=`${progress}%`;

switch (snapshot.state) {
   case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
     
        break;
   case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        
        break;
}
}, function (error) {

// A full list of error codes is available at
// https://firebase.google.com/docs/storage/web/handle-errors
switch (error.code) {
   case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;

   case 'storage/canceled':
        // User canceled the upload
        break;

   case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;
}
}, 

function () {
  
  uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
    console.log('File available at', downloadURL);
    document.querySelector('#proimg').src = downloadURL
    firebase.auth().currentUser.updateProfile({
      photoURL: downloadURL
    })
  });
}



);
}



