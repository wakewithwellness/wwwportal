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
       college:"",
       gender:"",
       address:"",
       agreement: "",
       idcard:"",
       certificate:"",
       depthref:"",
     

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
      userDetails.innerHTML = `<div class="container" style="max-width: 80vh;margin-top:180px">
      <div class="card" style="border-top: 3px solid #0d6efd">
      <div class="card-body" style="text-align: center">
      <h5 class="card-title" style="text-align: center; color: #0d6efd; font-weight: 700; font-size:30px">BOARD PORTAL</h5><hr>
<br>
      <form autocomplete="off" onsubmit="login(event)">
          <input type="email" class="form-control" id="loginEmail" placeholder="Email" style="width: 98%;
          height: 40px;padding-left:8px;font-size: 13px;border: 1px solid #e8e8e8; border-radius:5px">

          <input type="password" class="form-control" id="loginPassword" placeholder="Password" style="width: 98%;
          height: 40px;padding-left:8px;font-size: 13px;border: 1px solid #e8e8e8; border-radius:5px">

          <br>
          <button type="submit" class="btn" style="background-color:#0d6efd;color: #fff; padding-bottom:38px; float: left"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</button>
          
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
        .collection('users')
        .doc(userID)
        userdocRef.onSnapshot((doc)=>{
            if(doc.exists){
                 const userInfo = doc.data()
                    if(userInfo){
                        userDetails.innerHTML = `

                        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="../assets/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="../assets/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="../assets/css/style.css">


    

        <div class="sidebar" id="sidebar">
            <div class="sidebar-inner slimscroll">
                <div id="sidebar-menu" class="sidebar-menu">
                    <ul>
                        <li class="menu-title" style="text-align: left">Boards Panel</li>

                       

                    <li >
                    <a href="../attenUpdates.html"><i class="fa fa-calendar"></i> <span>Attendance</span></a>
                    </li>


                    <li>
                    <a href="../members.html"><i  class="fa fa-users"></i> <span>Members</span></a>
                   </li>

  

                       <li>
                       <a href="../leavepanel.html"><i class=" fa fa-edit"></i> <span>Leaves</span></a>
                      </li>

                      <li>
                      <a href="../payments.html"><i  class="fa fa-money"></i> <span>Payments</span></a>
                     </li>

                     <li>
                     <a href="../recruitments.html"><i  class="fa fa-user"></i> <span>Registrations</span></a>
                    </li>
          

                       

                    </ul>
                </div>
            </div>
        </div>





        
        <div class="page-wrapper">

        <div style="float: right; margin-right:15px">
      
      </div>

        <div class="content" style="background-color: #fff;margin: 15px;border-top: 3px solid #0d6efd;padding: 20px;border-radius: 5px">
        
        <div class="row">
           <div class="col-sm-12">
               <h4 class="page-title" style="float:left">My Profile</h4><br><br>
               <hr>
           </div>
           </div>


           <div class="row" style="margin-top: -15px;margin-bottom:-15px">
          
           <div class="col-sm"> 
           <div class="row" style="text-align:left">


           <div class="col-sm">
           <h4 style="font-size: 13px">Name: <span style="color: #0d6efd">${userInfo.name}</span></h4>
           </div>

           <div class="col-sm">
           <h4 style="font-size: 13px">Registration no.: <span style="color: #0d6efd">${userInfo.regno}</span></h4>
           </div>

           <div class="col-sm">
           <h4 style="font-size: 13px">Department: <span style="color: #0d6efd">${userInfo.department}</span></h4>
           </div>

         

           </div>

           </div>
           </div>

</div>




<div class="content" style="background-color: #fff;margin: 15px;border-top: 3px solid #0d6efd;padding: 20px;border-radius: 5px">
        
<div class="row" style="margin-left:20px;color: red; font-size:12.5px; margin-bottom:-10px">
<p><i class="fa fa-eercast" aria-hidden="true"></i> Minimum 70% attendance is required.</p>
   </div>


  

</div>








                                                    <div class="container-fluid">

                                                    <div class="row">
  
                                                    <div class="col" >
                                                      <div class="card" style="background-color: #fff;margin: 5px;border-top: 3px solid #0d6efd;border-radius: 5px" style="background-color: #fff;">

                                                        <div class="card-body" style="text-align: center">
                                                          <h4 style="color: #16213E">Curation Department</h4>
                                                          <p class="card-text"></p>
                                                          <a href="${userInfo.curation}.html" style="width: 120px; background-color:  #0d6efd;color: #fff;display: ${userInfo.permittedC}" class="btn">View</a>
                                                          <h4 style="text-align: center;color:red;display: ${userInfo.permitC}">(Not permitted)</h4>
                                                        </div>
                                                      </div>
                                                    </div>
                                                
                                                    <div class="col">
                                                    <div class="card" style="background-color: #fff;margin: 5px;border-top: 3px solid #0d6efd;border-radius: 5px" style="background-color: #fff;">
                                                      
                                                        <div class="card-body" style="text-align: center">
                                                          <h4 style="color: #16213E">Editorial Department</h4>
                                                          <p class="card-text" ></p>
                                                          <a href="${userInfo.editorial}.html" style="width: 120px; background-color: #0d6efd;color: #fff;display: ${userInfo.permittedEd}" class="btn">View</a>
                                                          <h4 style="text-align: center;color:red;display: ${userInfo.permitEd}">(Not permitted)</h4>
                                                          </div>
                                                      </div>
                                                    </div>
                                                
                                                
                                                    <div class="col">
                                                    <div class="card" style="background-color: #fff;margin: 5px;border-top: 3px solid #0d6efd;border-radius: 5px" style="background-color: #fff">
                                                     
                                                        <div class="card-body" style="text-align: center">
                                                          <h4 style="color: #16213E">PR Department</h4>
                                                          <p class="card-text"></p>
                                                          <a href="${userInfo.pr}.html" style="width: 120px; background-color: #0d6efd; color: #fff;display: ${userInfo.permittedP}" class="btn">View</a>
                                                          <h4 style="text-align: center;color:red;display: ${userInfo.permitP}">(Not permitted)</h4>
                                                          </div>
                                                      </div>
                                                    </div>
                                                
                                                
                                                    <div class="col">
                                                    <div class="card" style="background-color: #fff;margin: 5px;border-top: 3px solid #0d6efd;border-radius: 5px" style="background-color: #fff">
                                                      
                                                        <div class="card-body" style="text-align: center">
                                                          <h4 style="color: #16213E">Events Department</h4>
                                                          <p class="card-text"></p>
                                                          <a href="${userInfo.events}.html" style="width: 120px; background-color: #0d6efd; color: #fff;display: ${userInfo.permittedEv}" class="btn">View</a>
                                                          <h4 style="text-align: center;color:red;display: ${userInfo.permitEv}">(Not permitted)</h4>
                                                          </div>
                                                      </div>
                                                    </div>


                                                    <div class="col">
                                                    <div class="card" style="background-color: #fff;margin: 5px;border-top: 3px solid #0d6efd;border-radius: 5px" style="background-color: #fff">
                                                      
                                                        <div class="card-body" style="text-align: center">
                                                          <h4 style="color: #16213E">Design Department</h4>
                                                          <p class="card-text"></p>
                                                          <a href="${userInfo.design}.html" style="width: 120px; background-color: #0d6efd; color: #fff;display: ${userInfo.permittedD}" class="btn">View</a>
                                                          <h4 style="text-align: center;color:red;display: ${userInfo.permitD}">(Not permitted)</h4>
                                                          </div>
                                                      </div>
                                                    </div>
                                                

                                                    <div class="col">
                                                    <div class="card" style="background-color: #fff;margin: 5px;border-top: 3px solid #0d6efd;border-radius: 5px" style="background-color: #fff">
                                                    
                                                      <div class="card-body" style="text-align: center">
                                                        <h4 style="color: #16213E">Marketing Department</h4>
                                                        <p class="card-text"></p>
                                                        <a href="${userInfo.marketing}.html" style="width: 120px; background-color: #0d6efd; color: #fff;display: ${userInfo.permittedM}" class="btn">View</a>
                                                        <h4 style="text-align: center;color:red;display: ${userInfo.permitM}">(Not permitted)</h4>
                                                        </div>
                                                    </div>
                                                  </div>
                                                
                                                  </div> 
                                                    </div>
                      






<br><br>




           
   



    



                       
                        `
                        editProfile["name"].value = userInfo.name
                        editProfile["profileEmail"].value = userInfo.email
                        editProfile["regno"].value = userInfo.regno
                        editProfile["department"].value = userInfo.department
                        editProfile["phoneno"].value = userInfo.phone
                        editProfile["whatsapp"].value = userInfo.whatsapp
                        editProfile["address"].value = userInfo.address
                       
                      
                       

                        if(firebase.auth().currentUser.photoURL){
                            document.querySelector('#proimg').src = firebase.auth().currentUser.photoURL
                        }
                      

                }    
             }
        })


    }else{
        userDetails.innerHTML = `<div class="container" style="max-width: 80vh;margin-top:180px">
        <div class="card" style="border-top: 3px solid #0d6efd">
        <div class="card-body" style="text-align: center">
        <h5 class="card-title" style="text-align: center; color: #0d6efd; font-weight: 700; font-size:30px">BOARD PORTAL</h5><hr>
  <br>
        <form autocomplete="off" onsubmit="login(event)">
            <input type="email" class="form-control" id="loginEmail" placeholder="Email" style="width: 98%;
            height: 40px;padding-left:8px;font-size: 13px;border: 1px solid #e8e8e8; border-radius:5px">
  
            <input type="password" class="form-control" id="loginPassword" placeholder="Password" style="width: 98%;
            height: 40px;padding-left:8px;font-size: 13px;border: 1px solid #e8e8e8; border-radius:5px">
            <br>
           
            <button type="submit" class="btn" style="background-color:#0d6efd;color: #fff; padding-bottom:38px; float: left"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</button>
            
    </form>
          <div>
  
  
  
         
        </div>
      </div></div>


    <div class="sidebar-overlay" data-reff=""></div>
    <script src="../MembersPanel/assets/js/jquery-3.2.1.min.js"></script>
	<script src="../MembersPanel/assets/js/popper.min.js"></script>
    <script src="../MembersPanel/assets/js/bootstrap.min.js"></script>
    <script src="../MembersPanel/assets/js/jquery.slimscroll.js"></script>
    <script src="../MembersPanel/assets/js/Chart.bundle.js"></script>
    <script src="../MembersPanel/assets/js/chart.js"></script>
    <script src="../MembersPanel/assets/js/app.js"></script>
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
        phone:editProfile["phoneno"].value,
        whatsapp:editProfile["whatsapp"].value,
        college:editProfile["college"].value,
        department:editProfile["department"].value,
        status:editProfile["status"].value

    })

    M.Modal.getInstance(myModel[2]).close()
}





async function allUserDetails(){
  document.getElementById('table').style.display='table'
  const userRef = await firebase.firestore().collection('users').get()  
  userRef.docs.forEach(doc=>{
           const info =   doc.data()
           document.getElementById('tbody').innerHTML += `
           <tr>
            <td>${info.name}</td>
            <td>${info.email}</td>
            <td>${info.phone}</td>
            <td>${info.whatsapp}</td>
            <td>${info.experience}</td>
            <td>${info.college}</td>
            <td>${info.status}</td>
          </tr>
           `
    })
 
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
