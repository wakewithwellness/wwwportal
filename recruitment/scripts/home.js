const userDetails = document.querySelector(".userDetails");
const editProfile = document.querySelector("#editProfile");

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
    userDetails.innerHTML = `    <div class="container" style="max-width: 60vh;margin-top:120px">
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





<div style="float: right; margin-right:15px;margin-top:-12px">

<a href="#modal-logout" class="link" style="background-color:#F16D44;padding:8.5px;color:white;margin-left: 5px; border-radius: 4px; cursor: pointer" data-toggle="modal" data-target="#exampleModal"> <i class="fa fa-sign-out"></i> Log Out</a>

</div>

<br>

          <div class="container-fluid">

          <div class="row">
              <div class="col-lg-4 my-2">
              <div class="container" style="text-align:center;background-color:#2E3035;border-radius:10px;padding:10px;color: white"><br>

                  <div class="profile-img">
                      <img id="proimg" class="pic" style="border-radius: 10px" src="https://cdn-icons-png.flaticon.com/512/4140/4140061.png" alt="">
                    
                     </div>
                  

                <h3 style="margin-top:15px">${userInfo.name}</h3>
                <p><i style="color: red" class="fa fa-map-marker" aria-hidden="true"></i> ${userInfo.dist}, ${userInfo.state}</p><hr style="color:#242629;height:3px">
                        <div style="text-align: left; margin-left:15px">
                          <p><img src="assets/gmail.png" alt="" style="width:15px"/> ${userInfo.email}</p>

                              <div class="row">
                              <div class="col"><p><img src="assets/phone.png" alt="" style="width:15px"/> ${userInfo.phone}</p></div>
                              <div class="col"><p><img src="assets/whatsapp.png" alt="" style="width:15px"/> ${userInfo.whatsapp}</p></div>
                              </div>
                          <p><img src="assets/blood.png" alt="" style="width:15px"/> ${userInfo.blood}</p>
                          <p><img src="assets/college.png" alt="" style="width:15px"/> ${userInfo.college}</p>
                        </div>

                        <hr style="color:#242629;height:3px;margin-top:20px">

                        <button onclick="location.href='profile.html'" class="btn" style="border-radius:10px;height:40px;width:180px;margin-bottom:9px;margin-top:5px;background-color:#191B20;color:white">Edit Profile</button>
              </div>
              </div>

              <div class="col-lg-8 my-2">
                    <div class="container" id="rrr" style="background-color:#2E3035;border-radius:10px;padding:10px;color: white;width:100%">

                    <div class="container" id="resultcenter">
                    <h5>Recruitment Result’23</h5>
                    <button onclick="location.href='result.html'" class="btn" style="border-radius:8px;height:40px;width:200px;margin-bottom:9px;margin-top:5px;background-color:#3281FF;color:white">View Result</button>
                    </div>


                    </div>
              </div>


          </div>
          
          </div>
             
    
          

      
<div style="position:fixed;bottom: 0px;background-color: #191B20;padding:20px;height:70px; width:100%;">
<div class="container">
  <div class="row">
        <div class="col-auto mr-auto" >
          <p style="color:white;margin-top:2px;font-weight:bold">Recruitment Test’23</p>
        </div>
        <div class="col-auto"> 
           <a href="#modal-test" class="link btn" style="border:none;min-width:100px;margin-top:-2px;background: linear-gradient(to right, #fb5444 0%, #feb645 100%);color:white;font-weight:bold;">Take Test</a>
        </div>
  </div>
</div>
</div>              
                        `;
          editProfile["name"].value = userInfo.name;
          editProfile["profileEmail"].value = userInfo.email;
          editProfile["phoneno"].value = userInfo.phone;
          editProfile["whatsapp"].value = userInfo.whatsapp;
          editProfile["blood"].value = userInfo.blood;
          editProfile["college"].value = userInfo.college;
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
  const userDocRef = firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid);

  userDocRef.update({
    name: editProfile["name"].value,
    email: editProfile["profileEmail"].value,
    phone: editProfile["phoneno"].value,
    whatsapp: editProfile["whatsapp"].value,
    blood: editProfile["blood"].value,
    college: editProfile["college"].value,
  });
  document.querySelector(".alert").style.display = "block";

  // Show alert
  document.querySelector(".alert").style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 3000);
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







