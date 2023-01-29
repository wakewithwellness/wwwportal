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





                  <div style="float: right; margin-right:15px;margin-top:-12px">
                  <a href="#modal-logout" class="link" style="background-color:#FF261F;padding:8.5px;color:white;margin-left: 5px; border-radius: 4px; cursor: pointer" data-toggle="modal" data-target="#exampleModal"> <i class="fa fa-sign-out"></i> Log Out</a>
                  </div>



                  <br>

                <div class="container" style="max-width:150vh">
                      <div class="row">
                                <div class="col-lg">
                                 <div class="container my-2" style="text-align:center;background-color:#2E3035;border-radius:10px;padding:10px;color: white"><br>
                                              <div class="profile-img">
                                                <img id="proimg" class="pic" style="border-radius: 10px" src="${userInfo.photo}" alt="">
                                              </div>
                                          <h3 style="margin-top:15px">${userInfo.name}</h3>
                                          <p style="font-size:13px"><img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="" style="width:20px;"/> ${userInfo.dist}, ${userInfo.state}</p><hr style="color:#242629;height:3px">
                                          <div style="text-align: left; margin-left:15px;font-size:13px">
                                              <p><img src="assets/gmail.png" alt="" style="width:20px;margin-right:7px"/> ${userInfo.email}</p>
                                                <div class="row">
                                                <div class="col"><p><img src="assets/phone.png" alt="" style="width:20px;margin-right:7px"/> ${userInfo.phone}</p></div>
                                                <div class="col"><p><img src="assets/whatsapp.png" alt="" style="width:20px;margin-right:7px"/> ${userInfo.whatsapp}</p></div>
                                                </div>
                                                <p><img src="assets/blood.png" alt="" style="width:20px;margin-right:7px;"/> ${userInfo.blood}</p>
                                              <p><img src="assets/college.png" alt="" style="width:20px;margin-right:7px"/> ${userInfo.college}</p>
                                          </div>
                                          <hr style="color:#242629;height:3px;margin-top:20px">
                                          <button onclick="location.href='profile.html'" class="btn" style="border-radius:10px;height:40px;width:180px;margin-bottom:9px;margin-top:5px;background-color:#1890FF;color:white">Edit Profile</button>
                                    </div>
                                </div>

                                <div class="col-lg">

                                <div class="container my-2" style="text-align:center;background-color:#2E3035;border-radius:10px;padding:20px;color: white;">
                                <div style="text-align:left">
                                  <h6>Your Social Media handle: </h6>
                                        <br>

                                        <div class="container">
                                        <div class="row">
                                        <div class="col"><a style="color:white;margin-left:10px;text-decoration:none;" href="${userInfo.ins}"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" style="width:30px" alt="dist"/></a></div>
                                        <div class="col"><a style="color:white;margin-left:10px;text-decoration:none" href=" ${userInfo.fb}"><img src="https://cdn-icons-png.flaticon.com/512/174/174848.png" style="width:30px" alt="dist"/></a></div>
                                        <div class="col"><a style="color:white;margin-left:10px;text-decoration:none" href=" ${userInfo.tr}"><img src="https://cdn-icons-png.flaticon.com/512/3256/3256013.png" style="width:30px" alt="dist"/></a></div>
                                        <div class="col"><a style="color:white;margin-left:10px;text-decoration:none" href=" ${userInfo.ln}"><img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" style="width:30px" alt="dist"/></a></div>
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
                                            <p style="font-size:13px"><img src="./assets/gmail.png" style="width:20px" alt="dist"/><a style="color:white;margin-left:10px;text-decoration:none" href="mailto: wakewithwellness@gmail.com">wakewithwellness@gmail.com</a></p>
                                            <p style="font-size:13px"><img src="./assets/gmail.png" style="width:20px" alt="dist"/><a style="color:white;margin-left:10px;text-decoration:none" href="mailto: technicalteam.wakewithwellness@gmail.com">technicalteam.wakewithwellness@gmail.com</a></p>
                                          </div>
                                    </div>
                                </div>
                      </div>
                </div>

       

 



    

 

<br><br><br>


      
          

             
    
          

      
<div style="position:fixed;bottom: 0px;background-color: #191B20;padding:20px;height:70px; width:100%;">
<div class="container">
  <div class="row">
        <div class="col-auto mr-auto" >
          <p style="color:white;margin-top:2px;font-weight:bold">Recruitment Test’23</p>
        </div>
        <div class="col-auto"> 
           <a onclick="location.href='./${userInfo.btn}.html'" class="btn" style="border:none;min-width:100px;margin-top:-2px;background: linear-gradient(to right, #fb5444 0%, #feb645 100%);color:white;font-weight:bold;">Take Test</a>
        </div>
  </div>
</div>
</div>              
                        `;

  
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



