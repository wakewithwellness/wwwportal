const userDetails = document.querySelector(".userDetails");
const editProfile = document.querySelector("#editProfile");

function createUserCollection(user) {
  firebase.firestore().collection("Coordinators").doc(user.uid).set({
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
    agreement: "",
    idcard: "",
    certificate: "",
    status: "",
  });
}

async function getuserInfo(userID) {
  if (userID) {
    const userInfoSnap = await firebase
      .firestore()
      .collection("Coordinators")
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
    userDetails.innerHTML = ` <div class="container" style="max-width: 80vh;margin-top:180px">
      <div class="card" style="border-top: 3px solid rgb(53, 53, 53)">
      <div class="card-body" style="text-align: center">
      <h5 class="card-title" style="text-align: center; color: rgb(53, 53, 53); font-weight: 700; font-size:30px">COORDINATOR'S PORTAL</h5><hr>
<br>
      <form autocomplete="off" onsubmit="login(event)">
          <input type="email" class="form-control" id="loginEmail" placeholder="Email" style="width: 98%;
          height: 40px;padding-left:8px;font-size: 13px;border: 1px solid #e8e8e8; border-radius:5px">

          <input type="password" class="form-control" id="loginPassword" placeholder="Password" style="width: 98%;
          height: 40px;padding-left:8px;font-size: 13px;border: 1px solid #e8e8e8; border-radius:5px">
          <br>
          <div style="text-align:left"> <a style="text-decoration: none; color: rgb(53, 53, 53); font-size: 12px; margin-left: 10px" class="modal-trigger" href="#modal2">Forgot Password</a></div>
          <br>
          <button type="submit" class="btn" style="background-color:rgb(53, 53, 53);color: #fff; padding-bottom:38px; float: left"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</button>
          
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
      .collection("Coordinators")
      .doc(userID);
    userdocRef.onSnapshot((doc) => {
      if (doc.exists) {
        const userInfo = doc.data();
        if (userInfo) {
          userDetails.innerHTML = `
                        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="assets/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">

    

    


    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">

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
    
                        <div class="sidebar" id="sidebar">
            <div class="sidebar-inner slimscroll">
                <div id="sidebar-menu" class="sidebar-menu">
                <ul>
                <li class="menu-title" style="text-align:left">Main</li><hr>
               
          
                          <li>
                        <a href="activities.html"><i class="fa fa-bell-o"></i> <span>Notifications</span></a>
                          </li>

                                            <li>
                                            <a href="events.html"><i class="fa fa-users"></i> <span>Events</span></a>
                                            </li>
                                
                                            <li>
                                            <a href="coordinators.html"><i class="fa fa-users"></i> <span>Coordinators List</span></a>
                                            </li>

                                            <li>
                                            <a href="payments.html"><i class="fa fa-money"></i> <span>Payment History</span></a>
                                            </li>
                              
                            
                              </ul>
                </div>
            </div>
        </div>
        
        
        <div class="page-wrapper">



        







       <div style="float: right; margin-right:15px">
        <a href="activities.html" style="background-color:grey;padding:10px;color:white;border-radius: 4px">Dashboard</a>
        <a type="button" style="background-color:red;padding:8.5px;color:white;margin-left: 5px; border-radius: 4px; cursor: pointer" data-toggle="modal" data-target="#exampleModal"> <i class="fa fa-sign-out"></i></a>

      </div>
        <div class="content" style="background-color: #fff;margin: 15px;border-top: 3px solid rgb(53, 53, 53);padding: 20px;border-radius: 5px">
        
                 <div class="row">
                    <div class="col-sm-12">
                        <h4 class="page-title" style="float:left">My Profile <a style="font-size: 15px;color: rgb(53, 53, 53)" class="modal-trigger" href="#modal3">[ <i class="fa fa-pencil" aria-hidden="true"></i> Edit ]</a></h4><br><br>
                        <hr>
                    </div>
                    </div>


                    <div class="row">
                    <div class="col-lg-2"> 
                   
                    <div class="profile-view">
                            <div class="profile-img-wrap" style="height:25vh;width:24vh" >
                                <div class="profile-img">
                             
                                    <img id="proimg" class="pic modal-trigger" style="border-radius: 10px" href="#modal4" src="../assets/user.png" alt="">
                                    
                                 
                                  
                                    <div id="cameraicon" style="color: white; margin-top: -18px; text-align: right;"><i href="#modal4" class="fa fa-camera modal-trigger" ></i></div>
                                  
                                 
                                  
  
                                
                                
                                   </div>
                                
                            </div>
                    </div>
                    
                </div>
                    <div class="col-lg"> 
                    <div class="row" style="text-align:left">


                    <div class="col-lg">
                    <h4 style="font-size: 13px">Name: <span style="color: rgb(53, 53, 53)">${userInfo.name}</span></h4>
                    </div>

                    <div class="col-lg">
                    <h4 style="font-size: 13px">Registration no.: <span style="color: rgb(53, 53, 53)">${userInfo.regno}</span></h4>
                    </div>

                    <div class="col-lg">
                    <h4 style="font-size: 13px">E-mail: <span style="color: rgb(53, 53, 53)">${userInfo.email}</span></h4>
                    </div>

                  

                    </div>




                    <div class="row" style="text-align:left; margin-top:-9px">

                    <div class="col-lg">
                    <h4 style="font-size: 13px">Gender: <span style="color: rgb(53, 53, 53)">${userInfo.gender}</span></h4>
                    </div>

                    <div class="col-lg">
                    <h4 style="font-size: 13px">Contact no.: <span style="color: rgb(53, 53, 53)">${userInfo.phone}</span></h4>
                    </div>

                    <div class="col-lg">
                    <h4 style="font-size: 13px">Whatsapp no.: <span style="color: rgb(53, 53, 53)">${userInfo.whatsapp}</span></h4>
                    </div>

                 
                    </div>



                    <div class="row" style="text-align:left; margin-top:-9px">
                    <div class="col-lg">
                    <h4 style="font-size: 13px">Address: <span style="color: rgb(53, 53, 53)">${userInfo.address}, ${userInfo.state}, ${userInfo.pincode}</span></h4>
                    </div>

                    </div>




                    <div class="row" style="text-align:left; margin-top:-9px">
                    <div class="col-lg">
                    <h4 style="font-size: 13px">State: <span style="color: rgb(53, 53, 53)">${userInfo.state}</span></h4>
                    </div>

                    </div>

                    </div>
                    </div>

                   


        </div>



        <div class="content" style="background-color: #fff;margin: 15px;border-top: 3px solid rgb(53, 53, 53);border-radius: 5px"">

        <div class="row">
        <div class="col-sm-12">
            <h4 class="page-title" style="text-align:left">About me </h4>
            <hr>
        </div>
        </div>


        <div style="text-align:left">
        <h4 style="font-size: 13px">Education Informations: <span style="color: rgb(53, 53, 53)">${userInfo.college}</span></h4>
        <br>
        <h4 style="font-size: 13px">Experience <span style="font-style: italic; color: grey">[Prior Experience in working for a NGO/CBO]</span> : <span style="color: rgb(53, 53, 53)">${userInfo.exp}</span></h4>
       
        </div>
                               
        </div>




        <div class="content" style="background-color: #fff;margin: 15px;border-top: 3px solid rgb(53, 53, 53);border-radius: 5px"">

        <div class="row">
        <div class="col-sm-12">
            <h4 class="page-title" style="text-align:left">My Files </h4>
            <hr>
        </div>
        </div>


        <div style="text-align:left; cursor:pointer">
        <h5 style="font-size: 13px" onclick="location.href='${userInfo.agreement}'">Agreement letter <a style="color: rgb(53, 53, 53)"><i class="fa fa-hand-o-right" aria-hidden="true"></i> Download</a></h5>
        <h5 style="font-size: 13px" onclick="location.href='${userInfo.certificate}'">Download your certificate <a style="color: rgb(53, 53, 53)"><i class="fa fa-hand-o-right" aria-hidden="true"></i> Download</a></h5>          
        <h5 style="font-size: 13px" onclick="location.href='${userInfo.idcard}'">ID Card  <a style="color: rgb(53, 53, 53)"><i class="fa fa-hand-o-right" aria-hidden="true"></i> View</a></h5>
        </div>
                               
        </div>



        <div class="content" style="background-color: #fff;margin: 15px;border-top: 3px solid rgb(53, 53, 53);border-radius: 5px"">

        <div class="row">
        <div class="col-sm-12">
            <h4 class="page-title" style="text-align:left">Code of Ethics and Professional Conduct</h4>
            <hr>
        </div>
        </div>


        <div style="text-align:left; cursor:pointer">
        <h5 style="font-size: 13px" onclick="location.href='https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/CodeofEthics.pdf?alt=media&token=6af5a5ee-3079-45f1-a14e-0b35ccafe36c'">Code of Ethics and Professional Conduct <a style="color: rgb(53, 53, 53)"><i class="fa fa-hand-o-right" aria-hidden="true"></i> Download</a></h5>
        </div>
                               
        </div>


<br><br>

      
        <div class="container-fluid" id="footerbar">
        <div class="row">
        <div class="col"><a href="./activities.html"><img style="width:54px; height:auto" src="../MembersPanel/assets/img/notifications.png" alt=""/></a></div>
        <div class="col"><a href="./payments.html"><img style="width:54px; height:auto" src="../MembersPanel/assets/img/payments.png" alt=""/></a></div>
        <div class="col"><a href="./events.html"><img style="width:54px; height:auto" src="../MembersPanel/assets/img/events.png" alt=""/></a></div>
        <div class="col"><a><img style="width:54px; height:auto" src="../MembersPanel/assets/img/home.png" alt=""/></a></div>
        
        </div>
        </div>






</div>



    </div>
        </div><br>

      
                       
                        `;
          editProfile["name"].value = userInfo.name;
          editProfile["profileEmail"].value = userInfo.email;
          editProfile["regno"].value = userInfo.regno;
          editProfile["phoneno"].value = userInfo.phone;
          editProfile["whatsapp"].value = userInfo.whatsapp;
          editProfile["blood"].value = userInfo.blood;

          editProfile["college"].value = userInfo.college;
          editProfile["address"].value = userInfo.address;
          editProfile["state"].value = userInfo.state;
          editProfile["pincode"].value = userInfo.pincode;
          editProfile["exp"].value = userInfo.exp;

          if (firebase.auth().currentUser.photoURL) {
            document.querySelector("#proimg").src =
              firebase.auth().currentUser.photoURL;
          }
        }
      }
    });
  } else {
    userDetails.innerHTML = `
        <div class="container-fluid" style="max-width: 80vh;margin-top:180px">
        <div class="card" style="border-top: 3px solid rgb(53, 53, 53)">
        <div class="card-body" style="text-align: center">
        <h5 class="card-title" style="text-align: center; color: rgb(53, 53, 53); font-weight: 700; font-size:25px">COORDINATOR'S PORTAL</h5><hr>
<br>
        <form autocomplete="off" onsubmit="login(event)">
            <input type="email" class="form-control" id="loginEmail" placeholder="Email" style="width: 98%;
            height: 40px;padding-left:8px;font-size: 13px;border: 1px solid #e8e8e8; border-radius:5px">

            <input type="password" class="form-control" id="loginPassword" placeholder="Password" style="width: 98%;
            height: 40px;padding-left:8px;font-size: 13px;border: 1px solid #e8e8e8; border-radius:5px">
            <br>
            <div style="text-align:left"> <a style="text-decoration: none; color: rgb(53, 53, 53); font-size: 12px; margin-left: 10px" class="modal-trigger" href="#modal2">Forgot Password</a></div>
            <br>
            <button type="submit" class="btn" style="background-color:rgb(53, 53, 53);color: #fff; padding-bottom:38px; float: left"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</button>
            
    </form>
          <div>



         
        </div>
      </div></div>
        
        


    <div class="sidebar-overlay" data-reff=""></div>
    <script src="assets/js/jquery-3.2.1.min.js"></script>
	<script src="assets/js/popper.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/jquery.slimscroll.js"></script>
    <script src="assets/js/Chart.bundle.js"></script>
    <script src="assets/js/chart.js"></script>
    <script src="assets/js/app.js"></script>
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
    regno: editProfile["regno"].value,
    phone: editProfile["phoneno"].value,
    whatsapp: editProfile["whatsapp"].value,
    blood: editProfile["blood"].value,

    college: editProfile["college"].value,
    address: editProfile["address"].value,
    state: editProfile["state"].value,
    pincode: editProfile["pincode"].value,
    exp: editProfile["exp"].value,
  });
  document.querySelector(".alert").style.display = "block";

  // Show alert
  document.querySelector(".alert").style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 3000);
}

function uploadImage(e) {
  console.log(e.target.files[0]);
  const uid = firebase.auth().currentUser.uid;
  const fileRef = firebase
    .storage()
    .ref()
    .child(`/coordinators/${uid}/profile`);
  const uploadTask = fileRef.put(e.target.files[0]);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      if (progress == "100")
        // Show alert
        document.querySelector(
          ".success"
        ).innerHTML = `<i class="fa fa-check-circle" aria-hidden="true"></i> Updated Successfully`;

      // Hide alert after 10 seconds
      setTimeout(function () {
        document.querySelector(".success").innerHTML = ``;
      }, 10000);

      uploader.value = progress;

      console.log("Upload is " + progress + "% done");
      document.querySelector(".prog").innerHTML = `${progress}%`;

      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log("Upload is paused");

          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log("Upload is running");

          break;
      }
    },
    function (error) {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case "storage/unauthorized":
          // User doesn't have permission to access the object
          break;

        case "storage/canceled":
          // User canceled the upload
          break;

        case "storage/unknown":
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    },

    function () {
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log("File available at", downloadURL);
        document.querySelector("#proimg").src = downloadURL;
        firebase.auth().currentUser.updateProfile({
          photoURL: downloadURL,
        });
      });
    }
  );
}



