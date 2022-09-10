const userDetails  = document.querySelector('.userDetails')
const editProfileI  = document.querySelector('#editProfileI')
const editProfileII  = document.querySelector('#editProfileII')


function createUserCollection(user){
   firebase.firestore().collection('files')
   .doc(user.uid)
   .set({
       uid:user.uid,
       name:user.displayName,
       email:user.email,
       regno:"",
       department:"",
       upload1:"",
       

   })
}


async function getuserInfo(userID){
    if(userID){
      const userInfoSnap = await  firebase.firestore()
    .collection('files')
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
        .collection('files')
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
        
                    <div class="row" style="margin-bottom: -20px">
              
                    <div class="col-lg"> 
                    <div class="row" style="text-align:left">
                    <div class="col-lg">
                    <h4 style="font-size: 13px">Name : <span style="color: #198754">${userInfo.name}</span></h4>
                    </div>
                    <div class="col-lg">
                    <h4 style="font-size: 13px">Registration no. : <span style="color: #198754">${userInfo.regno}</span></h4>
                    </div>
                    <div class="col-lg">
                    <h4 style="font-size: 13px">Department : <span style="color: #198754">${userInfo.department}</span></h4>
                    </div>
                    
               
                    </div>
                    </div>
                    </div>
                   
        </div>
  
        <div class="content" style="background-color: #fff;margin: 15px;border-top: 3px solid #198754;border-radius: 5px"">
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
                  <th scope="col" style="min-width: 20vh">Due Date</th>
                  <th scope="col" style="width: 15vh">Upload/Edit</th>
                  <th scope="col" style="width: 15vh">Download</th>
               
               
                  </tr>
              </thead>
              <tbody >
                    <tr style="display: ${userInfo.a1}">
                         <td>1</td>
                         <td style="font-weight: 400">${userInfo.a1}</td>
                         <td style="font-weight: 500" id="date1">${userInfo.d1}</td>
                         <td style="text-align: center;color:orange;cursor:pointer" ><i style="display: ${userInfo.upload1}; font-size: 20px" href="#modal1" class="fa fa-pencil modal-trigger" aria-hidden="true"></i></td>
                         <td style="text-align: center;color:#198754;cursor:pointer"><a id="fileI" style="display: ${userInfo.down1};color: #198754;" href="${userInfo.file1}" target="_blank"><i class="fa fa-download" aria-hidden="true"></i></a></td>
                       
                    </tr>
                    <tr style="display: ${userInfo.a2}">
                         <td>2</td>
                         <td style="font-weight: 400">${userInfo.a2}</td>
                         <td style="font-weight: 500" id="date2">${userInfo.d2}</td>
                         <td style="text-align: center;color:orange;cursor:pointer" ><i style="display: ${userInfo.upload2}; font-size: 20px" href="#modal3" class="fa fa-pencil modal-trigger" aria-hidden="true"></i></td>
                         <td style="text-align: center;color:#198754;cursor:pointer"><a id="fileII" style="display: ${userInfo.down2};color: #198754" href="${userInfo.file2}" target="_blank"><i class="fa fa-download" aria-hidden="true"></i></a></td>
                         </tr>
                         <tr style="display: ${userInfo.a3}">
                         <td>2</td>
                         <td style="font-weight: 400">${userInfo.a3}</td>
                         <td style="font-weight: 500" id="date2">${userInfo.d3}</td>
                         <td style="text-align: center;color:orange;cursor:pointer" ><i style="display: ${userInfo.upload3}; font-size: 20px" href="#modal4" class="fa fa-pencil modal-trigger" aria-hidden="true"></i></td>
                         <td style="text-align: center;color:#198754;cursor:pointer"><a id="fileIII" style="display: ${userInfo.down3};color: #198754" href="${userInfo.file3}" target="_blank"><i class="fa fa-download" aria-hidden="true"></i></a></td>
                         </tr>
              </tbody>
          </table>
      </div>
  
                               
        </div>
      
</div>
    </div>
        </div><br>

        <script src="countdown">  var countDownDate = new Date("September 09, 2022 22:00:00").getTime();
        
        
        
        
        
        
        </script>
    
    
      
                       
                        `
                        editProfileI["down1"].value = userInfo.down1
                        editProfileII["down2"].value = userInfo.down2
                       


        

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
  .collection('files')
  .doc(firebase.auth().currentUser.uid)


  userDocRef.update({
    down1:editProfileI["down1"].value,
     

  })
  document.querySelector('.alert').style.display = 'block';

  // Show alert
document.querySelector('.alert').style.display = 'block';
document.querySelector('#submit1').disabled = "disabled";
document.querySelector('#submit1').style.cursor = "not-allowed";
document.querySelector('#submit1').style.background = "#adadad";
document.querySelector('#submit1').style.border = "none";


}






function updateUserProfileII(e){
  e.preventDefault()
  const userDocRef =  firebase.firestore()
  .collection('files')
  .doc(firebase.auth().currentUser.uid)


  userDocRef.update({
    down2:editProfileII["down2"].value,
     

  })
  document.querySelector('.alert').style.display = 'block';

  // Show alert
document.querySelector('.alert').style.display = 'block';
document.querySelector('#submit2').disabled = "disabled";
document.querySelector('#submit2').style.cursor = "not-allowed";
document.querySelector('#submit2').style.background = "#adadad";
document.querySelector('#submit2').style.border = "none";


}





function uploadImageI(e){
    console.log(e.target.files[0])
    const uid = firebase.auth().currentUser.uid
    const fileRef = firebase.storage().ref().child(`/files/${uid}/assignment1`)
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
 
    });
  }


  
);
}




function uploadImageII(e){
     console.log(e.target.files[0])
     const uid = firebase.auth().currentUser.uid
     const fileRef = firebase.storage().ref().child(`/files/${uid}/assignment2`)
     const uploadTask =  fileRef.put(e.target.files[0])
     uploadTask.on('state_changed', 
   (snapshot) => {
     
     var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
     if(progress=='100') 
      // Show alert
      document.querySelector('.successII').innerHTML=`<i class="fa fa-check-circle" aria-hidden="true"></i> Updated Successfully`;
               
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
       document.querySelector('#fileII').src = downloadURL
      
     });
   }
 
 
   
 );
 }
 


 
function uploadImageIII(e){
  console.log(e.target.files[0])
  const uid = firebase.auth().currentUser.uid
  const fileRef = firebase.storage().ref().child(`/files/${uid}/assignment3`)
  const uploadTask =  fileRef.put(e.target.files[0])
  uploadTask.on('state_changed', 
(snapshot) => {
  
  var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  if(progress=='100') 
   // Show alert
   document.querySelector('.successIII').innerHTML=`<i class="fa fa-check-circle" aria-hidden="true"></i> Updated Successfully`;
            
   // Hide alert after 10 seconds
setTimeout(function(){
document.querySelector('.successIII').innerHTML=``;
},10000);
    
uploaderIII.value = progress;
            
console.log('Upload is ' + progress + '% done');
document.querySelector('.proggg').innerHTML=`${progress}%`;

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
    document.querySelector('#fileIII').src = downloadURL
   
  });
}



);
}



