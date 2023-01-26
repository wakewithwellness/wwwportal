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
      userDetails.innerHTML = ` <div class="container" style="max-width: 80vh;margin-top:180px">
      <div class="card" style="border-top: 3px solid #333333">
      <div class="card-body" style="text-align: center">
      <h5 class="card-title" style="text-align: center; color: #333333; font-weight: 700; font-size:30px">RECRUITMENT PORTAL</h5><hr>
<br>
      <form autocomplete="off" onsubmit="login(event)">
          <input type="email" class="form-control" id="loginEmail" placeholder="Email" style="width: 98%;
          height: 40px;padding-left:8px;font-size: 13px;border: 1px solid #e8e8e8; border-radius:5px">

          <input type="password" class="form-control" id="loginPassword" placeholder="Password" style="width: 98%;
          height: 40px;padding-left:8px;font-size: 13px;border: 1px solid #e8e8e8; border-radius:5px">
          <br>
          <div style="text-align:left"> <a style="text-decoration: none; color: #333333; font-size: 12px; margin-left: 10px" class="modal-trigger" href="#modal2">Forgot Password</a></div>
          <br>
          <button type="submit" class="btn" style="background-color:#333333;color: #fff; padding-bottom:38px; float: left"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</button>
          
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
    
          
        <br>
        <div class="page-wrapper">

       <div style="float: right; margin-right:15px">

        <a type="button" style="background-color:red;padding:8.5px;color:white;margin-left: 5px; border-radius: 4px; cursor: pointer"  class="modal-trigger" href="#modal"> <i class="fa fa-sign-out"></i>Log Out</a>

      </div>
        <div class="content" style="background-color: #fff;margin: 15px;border-top: 3px solid #333333;padding: 20px;border-radius: 5px">
        
                 <div class="row">
                    <div class="col-sm-12">
                        <h4 class="page-title" style="float:left">My Profile <a style="font-size: 15px;color: #333333" class="modal-trigger" href="#modal3">[ <i class="fa fa-pencil" aria-hidden="true"></i> Edit ]</a></h4><br><br>
                        <hr>
                    </div>
                    </div>


                    <div class="row" >
                    <div class="col-lg-2" style="margin-top:-20px"> 
                   
                   <img src="./robo.png" alt="" style="width:100px"/>
                    
                   </div>


                    <div class="col-lg"> 
                    <div class="row" style="text-align:left">


                    <div class="col-lg">
                    <h4 style="font-size: 13px">Name: <span style="color: #333333">${userInfo.name}</span></h4>
                    </div>

                    <div class="col-lg">
                    <h4 style="font-size: 13px">E-mail: <span style="color: #333333">${userInfo.email}</span></h4>
                    </div>

                  

                    </div>




                    <div class="row" style="text-align:left; margin-top:-9px">

                    <div class="col-lg">
                    <h4 style="font-size: 13px">Contact no.: <span style="color: #333333">${userInfo.phone}</span></h4>
                    </div>

                    <div class="col-lg">
                    <h4 style="font-size: 13px">Whatsapp no.: <span style="color: #333333">${userInfo.whatsapp}</span></h4>
                    </div>

                 
                    </div>



                    <div class="row" style="text-align:left; margin-top:-9px">
                    <div class="col-lg">
                    <h4 style="font-size: 13px">Blood Group: <span style="color: #333333">${userInfo.blood}</span></h4>
                    </div>

                    <div class="col-lg">
                    <h4 style="font-size: 13px">College: <span style="color: #333333">${userInfo.college}</span></h4>
                    </div>

                    </div>

                    </div>
                    </div>

                   


        </div>







        <div class="container">
        <div class="row">
        
        <div class="col-lg">
        <div class="content" style="background-color: #fff;border-top: 3px solid #333333;padding: 20px;border-radius: 5px">
        <h5>Recruitment Test 2023</h5><hr>
        <a style="font-size: 15px" class="btn btn-success modal-trigger" href="#modal5">Take the Test</a>
        </div>
        </div>

        <div class="col-lg">
        <div class="content" style="background-color: #fff;border-top: 3px solid #333333;padding: 20px;border-radius: 5px;display:${userInfo.text}">
        <h5>Recruitment Test Result</h5><hr>
        <a style="font-size: 15px" class="btn btn-primary" href="./result.html">See Answers</a>
        </div>
        </div>


        </div>
        </div>

      



      


<br><br>





</div>


    </div>
        </div><br>
        

      
                       
                        `
                        editProfile["name"].value = userInfo.name
                        editProfile["profileEmail"].value = userInfo.email
                        editProfile["phoneno"].value = userInfo.phone
                        editProfile["whatsapp"].value = userInfo.whatsapp
                        editProfile["blood"].value = userInfo.blood
                        editProfile["college"].value = userInfo.college
                      
                  


                        if(firebase.auth().currentUser.photoURL){
                            document.querySelector('#proimg').src = firebase.auth().currentUser.photoURL
                        }
                      

                }    
             }
        })


    }else{
        userDetails.innerHTML = `
        <div class="container-fluid" style="max-width: 80vh;margin-top:180px">
        <div class="card" style="border-top: 3px solid #333333">
        <div class="card-body" style="text-align: center">
        <h5 class="card-title" style="text-align: center; color: #333333; font-weight: 700; font-size:25px">RECRUITMENT PORTAL</h5><hr>
<br>
        <form autocomplete="off" onsubmit="login(event)">
            <input type="email" class="form-control" id="loginEmail" placeholder="Email" style="width: 98%;
            height: 40px;padding-left:8px;font-size: 13px;border: 1px solid #e8e8e8; border-radius:5px">

            <input type="password" class="form-control" id="loginPassword" placeholder="Password" style="width: 98%;
            height: 40px;padding-left:8px;font-size: 13px;border: 1px solid #e8e8e8; border-radius:5px">
            <br>
            <div style="text-align:left"> <a style="text-decoration: none; color: #333333; font-size: 12px; margin-left: 10px" class="modal-trigger" href="#modal2">Forgot Password</a></div>
            <br>
            <button type="submit" class="btn" style="background-color:#333333;color: #fff; padding-bottom:38px; float: left"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</button>
            
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
        blood:editProfile["blood"].value,
        college:editProfile["college"].value,
 

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







