const userDetails  = document.querySelector('.userDetails')
const editProfile  = document.querySelector('#editProfile')
const editProfileI  = document.querySelector('#editProfileI')
const editProfile1  = document.querySelector('#editProfile1')
const editProfile2  = document.querySelector('#editProfile2')

function createUserCollection(user){
   firebase.firestore().collection('idcards')
   .doc(user.uid)
   .set({
       uid:user.uid,
       name:user.displayName,
       email:user.email,
       contact:"",
       blood:"",
  
       

   })
}


async function getuserInfo(userID){
    if(userID){
      const userInfoSnap = await  firebase.firestore()
    .collection('idcards')
    .doc(userID)
    .get()

   const userInfo = userInfoSnap.data()
   if(userInfo){
       userDetails.innerHTML = `
       <h3>${userInfo.name}</h3>
       <h3>${userInfo.email}</h3>
       <h3>${userInfo.contact}</h3>
       `
   }    
    }else{
      userDetails.innerHTML = ` <div class="container" style="max-width: 80vh;margin-top:180px">
      <div class="card" style="border-top: 3px solid #198754">
      <div class="card-body" style="text-align: center">
      <h5 class="card-title" style="text-align: center; color: #198754; font-weight: 700; font-size:30px">MEMBERS PORTAL</h5><hr>
<br>
      <form autocomplete="off" onsubmit="login(event)">
          <input type="email" class="form-control" id="loginEmail" placeholder="Email" style="width: 98%;
          height: 40px;padding-left:8px;font-size: 13px;border: 1px solid #e8e8e8; border-radius:5px">
          <input type="password" class="form-control" id="loginPassword" placeholder="Password" style="width: 98%;
          height: 40px;padding-left:8px;font-size: 13px;border: 1px solid #e8e8e8; border-radius:5px">
          <br>
          <div style="text-align:left"> <a style="text-decoration: none; color: #198754; font-size: 12px; margin-left: 10px" class="modal-trigger" href="#modal2">Forgot Password</a></div>
          <br>
          <button type="submit" class="btn" style="background-color:#198754;color: #fff; padding-bottom:38px; float: left"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</button>
          
  </form>
        <div>
       
      </div>
    </div></div>
      `
    
       
    }


}



async function getuserInfoRealtime(userID){
    if(userID){
      const userdocRef = await  firebase.firestore()
        .collection('idcards')
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
    
                        <div class="sidebar" id="sidebar">
            <div class="sidebar-inner slimscroll">
                <div id="sidebar-menu" class="sidebar-menu">
                    <ul>
                        <li class="menu-title" style="text-align:left">Main</li><hr>
                       
                  
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
                        <a href="attenUpdates.html"><i class="fa fa-pencil"></i> <span>Attendance Updates</span></a>
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
        <div class="content" style="background-color: #fff;margin: 15px;border-top: 3px solid #198754;padding: 20px;border-radius: 5px">
        <div class="row">
        <div class="col-sm-12">
            <h4 class="page-title" style="text-align:left">ID Card Registration</h4>
            <hr>
        </div>
        </div>
        <div style="display:${userInfo.i}">
       <div class="row" style="text-align: left; ">

       <div class="col-lg">
       <h4 style="font-size: 13px">Name: <span style="color: #198754"> ${userInfo.name}</span></h4>
       <h4 style="font-size: 13px">Email: <span style="color: #198754"> ${userInfo.email}</span></h4>
       <h4 style="font-size: 13px">Contact No.: <span style="color: #198754"> ${userInfo.contact}</span></h4>
      
       </div>

       <div class="col-lg">
       <h4 style="font-size: 13px">Blood Group: <span style="color: #198754"> ${userInfo.blood}</span></h4>
       <h4 style="font-size: 13px">Type: <span style="color: #198754"> ${userInfo.type}</span></h4>
       <h4 style="font-size: 13px">Address: <span style="color: #198754"> ${userInfo.address}</span></h4>
      
       </div>


       </div>

       </div> 
       <a style="display:  ${userInfo.ii};font-size: 15px;color: red" class="modal-trigger" href="#modal5">[ <i class="fa fa-pencil" aria-hidden="true"></i> Fill up the form ]</a>
<a style="display: ${userInfo.i} ;font-size: 15px;color: red" class="modal-trigger" href="#modal4">[ <i class="fa fa-pencil" aria-hidden="true"></i> Update the form ]</a>


<br>
        
                   
        </div>
  
        <div class="content" style="background-color: #fff;margin: 15px;border-top: 3px solid #198754;border-radius: 5px;display: ${userInfo.i}" >
        <div class="row">
        <div class="col-sm-12">
            <h4 class="page-title" style="text-align:left">Upload File</h4>
            <hr>
        </div>
        </div>
 
        <div class="table-responsive">
        <table class="table table-bordered" id="myTable">
         
          <thead style="background-color: #f7f7f7">
                  <tr style="text-align: left;"> 
                  <th scope="col">SNo.</th> 
                  <th scope="col" style="min-width: 22vh">Title</th>
                  <th scope="col" style="width: 15vh;text-align:center">Upload/Edit</th>
                  <th scope="col" style="width: 20vh;text-align:center">Status</th>
               
                  </tr>
              </thead>
              <tbody >
                    <tr>
                         <td>1</td>
                         <td style="font-weight: 400">Upload a recent photo</td>
                       
                         <td style="text-align: center;color:#198754;cursor:pointer" ><i style="display: ${userInfo.upload1}; font-size: 18px" href="#modal1" class="fa fa-upload modal-trigger" aria-hidden="true"></i></td>
                       
                         <td><p style="font-weight: 500; color: green;text-align:center;display: ${userInfo.down1}">Submitted</p></td>
                    </tr>
                    <tr>
                         <td>2</td>
                         <td style="font-weight: 400">Upload your signature (On a white paper)</td>
                      
                         <td style="text-align: center;color:#198754;cursor:pointer" ><i style="display: ${userInfo.upload2}; font-size: 18px" href="#modal3" class="fa fa-upload modal-trigger" aria-hidden="true"></i></td>
                     
                         <td><p style="font-weight: 500; color: green;text-align:center;display:${userInfo.down2}">Submitted</p></td>
                         </tr>
                       
              </tbody>
          </table>
      </div>
  
                               
        </div>



        <div class="content" style="background-color: #fff;margin: 15px;border-top: 3px solid #198754;border-radius: 5px;display: ${userInfo.down2}">
        <div class="row">
        <div class="col-sm-12">
            <h4 class="page-title" style="text-align:left">Payments</h4>
            <hr>
        </div>
        </div>

        <div class="row" style="text-align: left">
        <div class="col-lg">
        <h4 style="font-size: 13px">ID Card type: <span style="color: #198754"> ${userInfo.type}</span></h4></div>
        </div>

        <div class="col-lg">
        <button class="btn btn-dark" onclick="location.href=' ${userInfo.link}'">Continue to Payment</button>
        </div>
        
        
        </div>








      
</div>
    </div>
        </div>    <br><br><br><br>

      
        <div class="container-fluid" id="footerbar">
        <div class="row">
        <div class="col"><a href="./activities.html"><img style="width:54px; height:auto" src="./assets/img/notifications.png" alt=""/></a></div>
        <div class="col"><a href="./payments.html"><img style="width:54px; height:auto" src="./assets/img/payments.png" alt=""/></a></div>
        <div class="col"><a href="./attendance.html"><img style="width:54px; height:auto" src="./assets/img/attendance.png" alt=""/></a></div>
        <div class="col"><a href="./main.html"><img style="width:54px; height:auto" src="./assets/img/home.png" alt=""/></a></div>
        
        </div>
        </div>

 
    
    
      
                       
                        `
                        editProfile["name"].value = userInfo.name
                        editProfile["email"].value = userInfo.email
                        editProfile["contact"].value = userInfo.contact
                        editProfile["blood"].value = userInfo.blood
                        editProfile["address"].value = userInfo.address
                        editProfile["type"].value = userInfo.type
                        editProfile["link"].value = userInfo.link
                        editProfile["i"].value = "block"
                        editProfile["ii"].value = "none"
                        editProfile1["down1"].value = userInfo.down1
                        editProfile2["down2"].value = userInfo.down2

                        editProfileI["name"].value = ""
                        editProfileI["email"].value = " "
                        editProfileI["contact"].value = " "
                        editProfileI["blood"].value = " "
                        editProfileI["address"].value = " "
                        editProfileI["type"].value = " "
                        editProfileI["link"].value = userInfo.link
                        editProfileI["i"].value = "block"
                        editProfileI["ii"].value = "none"
                      
                      
                      
                       
        

                }    
             }
        })


    }else{
        userDetails.innerHTML = `
        <div class="container-fluid" style="max-width: 80vh;margin-top:180px">
        <div class="card" style="border-top: 3px solid #198754">
        <div class="card-body" style="text-align: center">
        <h5 class="card-title" style="text-align: center; color: #198754; font-weight: 700; font-size:25px">MEMBERS PORTAL</h5><hr>
<br>
        <form autocomplete="off" onsubmit="login(event)">
            <input type="email" class="form-control" id="loginEmail" placeholder="Email" style="width: 98%;
            height: 40px;padding-left:8px;font-size: 13px;border: 1px solid #e8e8e8; border-radius:5px">
            <input type="password" class="form-control" id="loginPassword" placeholder="Password" style="width: 98%;
            height: 40px;padding-left:8px;font-size: 13px;border: 1px solid #e8e8e8; border-radius:5px">
            <br>
            <div style="text-align:left"> <a style="text-decoration: none; color: #198754; font-size: 12px; margin-left: 10px" class="modal-trigger" href="#modal2">Forgot Password</a></div>
            <br>
            <button type="submit" class="btn" style="background-color:#198754;color: #fff; padding-bottom:38px; float: left"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</button>
            
    </form>
          <div>
         
        </div>
      </div></div>
        
        
    <div class="sidebar-overlay" data-reff=""></div>
    <script src="../assets/js/jquery-3.2.1.min.js"></scri>
	<script src="../assets/js/popper.min.js"></script>
    <script src="../assets/js/bootstrap.min.js"></script>
    <script src="../assets/js/jquery.slimscroll.js"></script>
    <script src="../assets/js/Chart.bundle.js"></script>
    <script src="../assets/js/chart.js"></script>
    <script src="../assets/js/app.js"></script>
        `
    }
}


function updateUserProfileI(e){
  e.preventDefault()
  const userDocRef =  firebase.firestore()
  .collection('idcards')
  .doc(firebase.auth().currentUser.uid)


  userDocRef.update({

  
      name:editProfileI["name"].value,
      email:editProfileI["email"].value,
      contact:editProfileI["contact"].value,
      blood:editProfileI["blood"].value,
      address:editProfileI["address"].value,
      type:editProfileI["type"].value,
      link:editProfileI["link"].value,
      i:editProfileI["i"].value,
      ii:editProfileI["ii"].value,
    
    
  
    

  })
  document.querySelector('.alert1').style.display = 'block';

  // Show alert
document.querySelector('.alert1').style.display = 'block';
document.querySelector('#proceed1').style.display = 'none';

// Hide alert after 3 seconds
setTimeout(function(){
document.querySelector('.alert1').style.display = 'none';

},3000);

}








function updateUserProfile(e){
  e.preventDefault()
  const userDocRef =  firebase.firestore()
  .collection('idcards')
  .doc(firebase.auth().currentUser.uid)


  userDocRef.update({

  
      name:editProfile["name"].value,
      email:editProfile["email"].value,
      contact:editProfile["contact"].value,
      blood:editProfile["blood"].value,
      address:editProfile["address"].value,
      type:editProfile["type"].value,
      link:editProfile["link"].value,
    
    

  })
  document.querySelector('.alert').style.display = 'block';

  // Show alert
document.querySelector('.alert').style.display = 'block';


// Hide alert after 3 seconds
setTimeout(function(){
document.querySelector('.alert').style.display = 'none';

},3000);

}






function uploadI(e){
  e.preventDefault()
  const userDocRef =  firebase.firestore()
  .collection('idcards')
  .doc(firebase.auth().currentUser.uid)


  userDocRef.update({
    down1:editProfile1["down1"].value,
     

  })
  document.querySelector('.alert3').style.display = 'block';

  // Show alert
document.querySelector('.alert3').style.display = 'block';
document.querySelector('#submit1').disabled = "disabled";
document.querySelector('#submit1').style.display = 'none';


}


function uploadII(e){
  e.preventDefault()
  const userDocRef =  firebase.firestore()
  .collection('idcards')
  .doc(firebase.auth().currentUser.uid)


  userDocRef.update({
    down2:editProfile2["down2"].value,
     

  })
  document.querySelector('.alert2').style.display = 'block';

  // Show alert
document.querySelector('.alert2').style.display = 'block';
document.querySelector('#submit2').disabled = "disabled";
document.querySelector('#submit2').style.display = 'none';


}







function uploadImageI(e){
    console.log(e.target.files[0])
    const uid = firebase.auth().currentUser.uid
    const fileRef = firebase.storage().ref().child(`/idcards/${uid}/assignment1`)
    const uploadTask =  fileRef.put(e.target.files[0])
    uploadTask.on('state_changed', 
  (snapshot) => {
    
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    if(progress=='100') 
     // Show alert
     document.querySelector('.success').innerHTML=`<i class="fa fa-spinner" aria-hidden="true"></i> Please wait...`;
     
              
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
          document.querySelector('.success').innerHTML=`<i class="fa fa-spinner" aria-hidden="true"></i> Please wait...`;
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
      document.querySelector('#submit1').style.display = 'block';
      document.querySelector('.success').style.display='none';
      document.querySelector('#uploadform1').style.display = 'none';
      
 
    });
  }


  
);
}




function uploadImageII(e){
     console.log(e.target.files[0])
     const uid = firebase.auth().currentUser.uid
     const fileRef = firebase.storage().ref().child(`/idcards/${uid}/assignment2`)
     const uploadTask =  fileRef.put(e.target.files[0])
     uploadTask.on('state_changed', 
   (snapshot) => {
     
     var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
     if(progress=='100') 
      // Show alert
      document.querySelector('.successII').innerHTML=`<i class="fa fa-spinner" aria-hidden="true"></i> Please wait...`;
               
      // Hide alert after 10 seconds
 setTimeout(function(){
 document.querySelector('.successII').innerHTML=``;
 },10000);
       
 uploaderII.value = progress;
               
 console.log('Upload is ' + progress + '% done');
 document.querySelector('.progg').innerHTML=`${progress}%`;
 
 switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
           console.log('Upload is paused');
        
           break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
           console.log('Upload is running');
           document.querySelector('.successII').innerHTML=`<i class="fa fa-spinner" aria-hidden="true"></i> Please wait...`;
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
       document.querySelector('#submit2').style.display = 'block';
       document.querySelector('.successII').style.display='none';
       document.querySelector('#uploadform2').style.display = 'none';
      
     });
   }
 
 
   
 );
 }
 

