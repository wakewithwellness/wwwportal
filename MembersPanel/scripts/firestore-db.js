const userDetails  = document.querySelector('.userDetails')
const editProfile  = document.querySelector('#editProfile')


function createUserCollection(user){
   firebase.firestore().collection('users')
   .doc(user.uid)
   .set({
       uid:user.uid,
       name:user.displayName,
       email:user.email,
       regno:"",
       phone:"",
       whatsapp:"",
       department:"",
       department2:"",
       college:"",
       status:"",
       blood:"",
       gender:"",
       address:"",
       state:"",
       pincode:"",
       exp:"",
       agreement: "",
       idcard:"",
       certificate:"",
       status:""

   })
}


async function getuserInfo(userID){
    if(userID){
      const userInfoSnap = await  firebase.firestore()
    .collection('users')
    .doc(userID)
    .get()

   const userInfo = userInfoSnap.data()
   if(userInfo){
       userDetails.innerHTML = `
       <h3>${userInfo.name}</h3>
       <h3>${userInfo.email}</h3>
       <h3>${userInfo.phone}</h3>
       `
   }    
    }else{
      userDetails.innerHTML = `<div id="content_container" class="container" style=" width: 47vh;
      height: 43vh;margin-top:180px">
      
      <div id="form_container" style="width: 100%;height: 100%;background-color: #222222;box-shadow: 0 0 50px -20px #000;border-radius: 2%;overflow: hidden;">
      <div id="form_header_container" style="width: 100%;
      height: 5%;display: flex; justify-content: center;align-items: center;float: left; padding: 20px;padding-bottom: 30px; padding-top: 30px;
      border-bottom: 1px solid transparent; border-color: cornflowerblue;background: #000;">
          <h2 id="form_header" style="display: inline-block; font-size: 15px;font-family: Bowlby One SC;
          font-weight: 900;  text-transform: uppercase;letter-spacing: 1px; background-color: rgb(255, 255, 255);-webkit-background-clip: text;-webkit-text-fill-color: transparent;"> MEMBERS PORTAL </h2>
      </div>
      <div id="form_content_container" style="width: 100%; height: 90%; float: left; display: flex;justify-content: center;align-items: center;padding-top: 30px;">
          <div id="form_content_inner_container" style="width: 75%;height: 100%;float: left;">
           
          <form autocomplete="off" onsubmit="login(event)" >
              
            <input type="email" id="loginEmail" placeholder="Email" style="width: 100%;
              height: 40px;padding-left: 10px;margin-bottom: 20px;background: #000;font-family: Montserrat;font-weight: 500;color: #fff;
              font-size: 12px; border-bottom: 2px solid transparent;border-top-left-radius: 2%; border-top-right-radius: 2%;border-color: cornflowerblue;">
             
              <input type="password" id="loginPassword" placeholder="Password" style="width: 100%;
              height: 40px;padding-left: 10px;margin-bottom: 20px;background: #000;font-family: Montserrat;font-weight: 500;color: #fff;
              font-size: 12px; border-bottom: 2px solid transparent;border-top-left-radius: 2%; border-top-right-radius: 2%;border-color: cornflowerblue;">
              <a class="modal-trigger" href="#modal2">Forgot Password</a><br>
              
              <div id="button_container" style="width: 100%;height: 45px;background-color: cornflowerblue;color: #fff;margin-top: 15px;" >
                  <button type="submit" style="width: 100%;height: 100%;background: transparent;color: inherit;font-family: Montserrat;letter-spacing: 1px;
                  font-weight: 900;font-size: 12px;cursor: pointer;align-items: center;">Login</button>
                  
              </div>
           </form>
          </div>
      </div></div>
  </div>
      `
    
       
    }


}



async function getuserInfoRealtime(userID){
    if(userID){
      const userdocRef = await  firebase.firestore()
        .collection('users')
        .doc(userID)
        userdocRef.onSnapshot((doc)=>{
            if(doc.exists){
                 const userInfo = doc.data()
                    if(userInfo){
                        userDetails.innerHTML = `
                        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="assets/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">

    


    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">

    <style>
    .profile-img .pic {
        height: 90%;
        width: 90%;
        -o-object-fit: cover;
        object-fit: cover;
        -o-object-position: center;
        object-position: center;
      }
    </style>
    
                        <div class="sidebar" id="sidebar">
            <div class="sidebar-inner slimscroll">
                <div id="sidebar-menu" class="sidebar-menu">
                    <ul>
                        <li class="menu-title">Main</li>
                       
                  
                        <li >
							<a href="activities.html"><i class="fa fa-bell-o"></i> <span>Notifications</span></a>
						</li>
				
						         
                       
                        <li>
                        <a href="employees.html"><i class="fa fa-users"></i> <span>Members List</span></a>
                       </li>
                       <li>
                        <a href="attendance.html"><i class="fa fa-calendar-check-o"></i> <span>Attendance</span></a>
                       </li>
                       <li>
                       <a href="leaves.html"><i class=" fa fa-edit"></i> <span>Leaves</span></a>
                      </li>
                        <li>
                            <a href="payments.html"><i class="fa fa-money"></i> <span>Payments</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        
        <div class="page-wrapper">
        <div class="content">
        
            <div class="row">
          
          
          

                <div class="col-sm-7 col-6">
                    <h4 class="page-title" style="float:left;font-weight:500;">My Profile</h4>
                </div>
                <div class="col-sm-5 col-6 text-right m-b-30">
                    <a href="activities.html" style="background-color:#009efb;padding:10px;color:white;border">Dashboard</a>
                    
      <button type="button" style="margin-left:10px;border-color:#df0f00;background-color:black;padding:7px;"  data-toggle="modal" data-target="#exampleModal">
      <i class="fa fa-sign-out" style="color:#df0f00"></i>
    </button>
    
                </div>
            </div>


           


            <div class="container-fluid">
  <div class="row" style="margin-top:-25px ;border: 1px solid #009efb; margin-bottom:10px ;color:white;height:48px;text-align: left">
    <div class="col-8" style="padding-top:6px">Download our Android Portal App Now ! </div>
    <div onclick="location.href='https://firebasestorage.googleapis.com/v0/b/files-bf645.appspot.com/o/WWW.apk?alt=media&token=a467a626-80d4-436c-afe5-0de4d2562559'" class="col-4" style="cursor:pointer;background-color: #009efb;padding-top:6px"><i class="fa fa-download" aria-hidden="true"></i> Download</div>
    </div>
</div>
           
           
            
            <div class="card-box profile-header" style="box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.336);">
                <div class="row">
                    <div class="col-md-12">
                        <div class="profile-view">
                            <div class="profile-img-wrap" style="height:25vh;width:24vh;background-color:rgb(22, 22, 22)" >
                                <div class="profile-img">
                                    <img id="proimg"  class="pic circle modal-trigger" href="#modal4" src="../assets/user.png" alt=""><br>
 
                                    <i href="#modal4" class="fa fa-camera upload-button modal-trigger">Upload</i>
                                </div>
                                
                            </div>
                            
                            <div class="profile-basic">
                                <div class="row">
                                    <div class="col-md-5">
                                        <div class="profile-info-left" style="text-align:justify">
                                            <h3 class="user-name m-t-0 mb-0" style="color:white">${userInfo.name}</h3>
                                            <div class="staff-id">Registration ID : <span style="font-weight:500;color:#009efb;font-size: 15px">${userInfo.regno}</span></div>
                                            <h4 class="text-muted" style="margin-top:5px"><span style="font-weight: lighter;">Department I :</span><span style="font-weight:500;color:white"> ${userInfo.department}</span></h4>
                                            <h4 class="text-muted" style="margin-top:5px"><span style="font-weight: lighter;">Department II :</span><span style="font-weight:500;color:white"> ${userInfo.department2}</span></h4>
                                            
                                    
                                        </div>
                                    </div>
                                    <div class="col-md-7">
                                        <ul class="personal-info" style="text-align:left">
                                            <li>
                                                <span class="title">Phone:</span>
                                                <span class="text"><a>${userInfo.phone}</a></span>
                                            </li>
                                            <li>
                                                <span class="title">Whatsapp:</span>
                                                <span class="text"><a>${userInfo.whatsapp}</a></span>
                                            </li>
                                            <li>
                                                <span class="title">Email:</span>
                                                <span class="text"><a><span class="__cf_email__">${userInfo.email}</span></a></span>
                                            </li>
                                            
                                            <li>
                                                <span class="title">Address:</span>
                                                <span class="text">${userInfo.address}, ${userInfo.state}, ${userInfo.pincode}</span>
                                            </li>
                                            <li>
                                                <span class="title">Blood group:</span>
                                                <span class="text">${userInfo.blood}</span>
                                            </li>
                                            <li>
                                                <span class="title">Gender:</span>
                                                <span class="text">${userInfo.gender}</span>
                                            </li>

                                          
                                        </ul>
                                    </div>
                                    
                                    <button style="background-color: #009efb;border-radius: 5px;padding: 10px;border: none;cursor: pointer;color: white;margin-left:13px" class="modal-trigger" href="#modal3"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit details</button> 
         
                               
                               
                                    </div>

                                    <span class="btn btn-danger" onclick="location.href='${userInfo.agreement}'"><i class="fa fa-download" aria-hidden="true"></i> Agreement</span>
                                    <span class="btn btn-warning" onclick="location.href='${userInfo.idcard}'"><i class="fa fa-download" aria-hidden="true"></i> Identity Card</span>
                                    <span class="btn btn-success my-2" onclick="location.href='${userInfo.certificate}'"><i class="fa fa-download" aria-hidden="true"></i> Certificate</span>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
            
    <div class="profile-tabs" >
      <ul class="nav nav-tabs nav-tabs-bottom" style="background-color:black;border-color:#009efb">
        <li class="nav-item" style="background-color:black"><a style="background-color:black;color:white" class="nav-link active" href="#about-cont" data-toggle="tab">About</a></li>
      
      </ul>
      <div class="tab-content">
        <div class="tab-pane show active" id="about-cont">
            <div class="row">
                <div class="col-md-12">
                    <div class="card-box" style="text-align:left">
                        <h3 class="card-title" style="color:grey">Education Informations</h3>
                        <div class="experience-box">
                            <ul class="experience-list">
                                <li>
                                    
                                    <div class="experience-content">
                                        <div class="timeline-content">
                                            <a class="name">${userInfo.college}</a>
                                            
                                        </div>
                                    </div>
                                </li>
                            
                               
                            </ul>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        
        
      </div>
      <div class="card-box mb-0" style="text-align:left">
      <h3 class="card-title" style="color:grey">Experience [Prior Experience in working for a NGO/CBO]</h3>
      <div class="experience-box">
          <ul class="experience-list">
              <li>
                  <div class="experience-user">
                      <div class="before-circle"></div>
                  </div>
                  <div class="experience-content">
                      <div class="timeline-content">
                          <a class="name">${userInfo.exp}</a>
                        
                      </div>
                  </div>
              </li>
             
            
          </ul>
      </div>
  </div>
<br>
<hr style="background-color: #009efb">

  <div class="card-box mb-0" style="text-align:left; height:108px;">
  <h3 class="card-title" style="color:white;float:left">Code of Ethics and Professional Conduct</h3>
    
 <button style="width: 100px; background-color: #009efb;border-radius: 5px;padding: 10px;border: none;cursor: pointer;color: white;margin-right:13px;float:right" onclick="location.href='https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/CodeofEthics.pdf?alt=media&token=6af5a5ee-3079-45f1-a14e-0b35ccafe36c'"><i><img src="https://cdn-icons-png.flaticon.com/512/136/136522.png" style="height: 20px;"></i> View</button> 

</div>



    </div>
        </div><br>

      
                       
                        `
                        editProfile["name"].value = userInfo.name
                        editProfile["profileEmail"].value = userInfo.email
                        editProfile["regno"].value = userInfo.regno
                        editProfile["phoneno"].value = userInfo.phone
                        editProfile["whatsapp"].value = userInfo.whatsapp
                        editProfile["blood"].value = userInfo.blood
                        editProfile["department"].value = userInfo.department
                        editProfile["department2"].value = userInfo.department2
                        editProfile["college"].value = userInfo.college
                        editProfile["address"].value = userInfo.address
                        editProfile["state"].value = userInfo.state
                        editProfile["pincode"].value = userInfo.pincode
                        editProfile["exp"].value = userInfo.exp


                        if(firebase.auth().currentUser.photoURL){
                            document.querySelector('#proimg').src = firebase.auth().currentUser.photoURL
                        }
                      

                }    
             }
        })


    }else{
        userDetails.innerHTML = `<div id="content_container" class="container" style=" width: 47vh;
        height: 43vh;margin-top:180px">
        
        <div id="form_container" style="width: 100%;height: 100%;background-color: #222222;box-shadow: 0 0 50px -20px #000;border-radius: 2%;overflow: hidden;">
        <div id="form_header_container" style="width: 100%;
        height: 5%;display: flex; justify-content: center;align-items: center;float: left; padding: 20px;padding-bottom: 30px; padding-top: 30px;
        border-bottom: 1px solid transparent; border-color: cornflowerblue;background: #000;">
            <h2 id="form_header" style="display: inline-block; font-size: 15px;font-family: Bowlby One SC;
            font-weight: 900;  text-transform: uppercase;letter-spacing: 1px; background-color: rgb(255, 255, 255);-webkit-background-clip: text;-webkit-text-fill-color: transparent;"> MEMBERS PORTAL </h2>
        </div>
        <div id="form_content_container" style="width: 100%; height: 90%; float: left; display: flex;justify-content: center;align-items: center;padding-top: 30px;">
            <div id="form_content_inner_container" style="width: 75%;height: 100%;float: left;">
             
            <form autocomplete="off" onsubmit="login(event)" >
                
              <input type="email" id="loginEmail" placeholder="Email" style="width: 100%;
                height: 40px;padding-left: 10px;margin-bottom: 20px;background: #000;font-family: Montserrat;font-weight: 500;color: #fff;
                font-size: 12px; border-bottom: 2px solid transparent;border-top-left-radius: 2%; border-top-right-radius: 2%;border-color: cornflowerblue;">
               
                <input type="password" id="loginPassword" placeholder="Password" style="width: 100%;
                height: 40px;padding-left: 10px;margin-bottom: 20px;background: #000;font-family: Montserrat;font-weight: 500;color: #fff;
                font-size: 12px; border-bottom: 2px solid transparent;border-top-left-radius: 2%; border-top-right-radius: 2%;border-color: cornflowerblue;">
                <a class="modal-trigger" href="#modal2">Forgot Password</a><br>
                <div id="button_container" style="width: 100%;height: 45px;background-color: cornflowerblue;color: #fff;margin-top: 15px;" >
                
                 <button type="submit" style="width: 100%;height: 100%;background: transparent;color: inherit;font-family: Montserrat;letter-spacing: 1px;
                    font-weight: 900;font-size: 12px;cursor: pointer;align-items: center;">Login</button>
                    
                </div>
             </form>
            </div>
        </div></div>
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
        `
    }
}


function updateUserProfile(e){
    e.preventDefault()
    const userDocRef =  firebase.firestore()
    .collection('users')
    .doc(firebase.auth().currentUser.uid)


    userDocRef.update({
        name:editProfile["name"].value,
        email:editProfile["profileEmail"].value,
        regno:editProfile["regno"].value,
        phone:editProfile["phoneno"].value,
        whatsapp:editProfile["whatsapp"].value,
        blood:editProfile["blood"].value,
        department:editProfile["department"].value,
        department2:editProfile["department2"].value,
        college:editProfile["college"].value,
        address:editProfile["address"].value,
        state:editProfile["state"].value,
        pincode:editProfile["pincode"].value,
        exp:editProfile["exp"].value

    })
    document.querySelector('.alert').style.display = 'block';

    // Show alert
document.querySelector('.alert').style.display = 'block';

// Hide alert after 3 seconds
setTimeout(function(){
  document.querySelector('.alert').style.display = 'none';
},3000);
  
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







