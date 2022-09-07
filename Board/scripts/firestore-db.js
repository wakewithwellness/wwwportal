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
    <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="assets/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">


    

                        <div class="sidebar" id="sidebar">
            <div class="sidebar-inner slimscroll">
                <div id="sidebar-menu" class="sidebar-menu">
                    <ul>
                        <li class="menu-title" style="text-align: left">Boards Panel</li>

                       

                    <li >
                    <a href="attenUpdates.html"><i class="fa fa-calendar"></i> <span>Attendance</span></a>
                    </li>


                    <li>
                    <a href="members.html"><i  class="fa fa-users"></i> <span>Members</span></a>
                   </li>

  

                       <li>
                       <a href="leavepanel.html"><i class=" fa fa-edit"></i> <span>Leaves</span></a>
                      </li>

                      <li>
                      <a href="payments.html"><i  class="fa fa-money"></i> <span>Payments</span></a>
                     </li>

                     <li>
                     <a href="recruitments.html"><i  class="fa fa-user"></i> <span>Registrations</span></a>
                    </li>
          

                       

                    </ul>
                </div>
            </div>
        </div>





        
        <div class="page-wrapper">

        <div style="float: right; margin-right:15px">
        <a type="button" style="background-color:red;padding:8.5px;color:white;margin-left: 5px; border-radius: 4px; cursor: pointer" data-toggle="modal" data-target="#staticBackdrop"> <i class="fa fa-sign-out"></i> SignOut</a>
        
       
      </div>

        <div class="content" style="background-color: #fff;margin: 15px;border-top: 3px solid #0d6efd;padding: 20px;border-radius: 5px">
        
        <div class="row">
           <div class="col-sm-12">
               <h4 class="page-title" style="float:left">My Profile <a style="font-size: 15px;color: #0d6efd" class="modal-trigger" href="#modal3">[ <i class="fa fa-pencil" aria-hidden="true"></i> Edit ]</a></h4><br><br>
               <hr>
           </div>
           </div>


           <div class="row">
           <div class="col-sm-2"> 
          
           <div class="profile-view">
                   <div class="profile-img-wrap" style="height:25vh;width:24vh" >
                       <div class="profile-img">
                           <img id="proimg" class="pic modal-trigger" style="border-radius: 10px" href="#modal4" src="../assets/user.png" alt=""><br>

                           <i href="#modal4" class="fa fa-upload modal-trigger" style="margin-top: 10px"> Upload</i>
                       </div>
                       
                   </div>
           </div>
           
           </div>
           <div class="col-sm"> 
           <div class="row" style="text-align:left">


           <div class="col-sm">
           <h4 style="font-size: 13px">Name: <span style="color: #0d6efd">${userInfo.name}</span></h4>
           </div>

           <div class="col-sm">
           <h4 style="font-size: 13px">Registration no.: <span style="color: #0d6efd">${userInfo.regno}</span></h4>
           </div>

           <div class="col-sm">
           <h4 style="font-size: 13px">E-mail: <span style="color: #0d6efd">${userInfo.email}</span></h4>
           </div>

         

           </div>


           <div class="row" style="text-align:left">

           <div class="col-sm">
           <h4 style="font-size: 13px">Contact no.: <span style="color: #0d6efd">${userInfo.phone}</span></h4>
           </div>

           <div class="col-sm">
           <h4 style="font-size: 13px">Whatsapp no.: <span style="color: #0d6efd">${userInfo.whatsapp}</span></h4>
           </div>

           <div class="col-sm">
           <h4 style="font-size: 13px">Department: <span style="color: #0d6efd">${userInfo.department}</span></h4>
           </div>

           </div>


           <div class="row" style="text-align:left">
           <div class="col-sm">
           <h4 style="font-size: 13px">Address: <span style="color: #0d6efd">${userInfo.address}</span></h4>
           </div>

           </div>

           </div>
           </div>

</div>






<div class="content" style="background-color: #fff;margin: 15px;border-top: 3px solid #0d6efd;border-radius: 5px"">



<div class="row">
<div class="col-lg">
<h4 class="page-title" style="text-align:left">Members Panel</h4>
<hr>
<div class="table-responsive" style="margin-bottom: 15px;overflow-x: hidden">
						<table class="table mb-0">
									
										<tbody>
											<tr>
												<td style="min-width: 200px;">
													
													<h2><a href="attenUpdates.html"  style="color: green;font-weight: 500;">Attendance</a></h2>
												</td>                 

												<td class="text-right">
													<a href="attenUpdates.html"  class="btn btn-outline-success take-btn">View</a>
												</td>
											</tr>

                                            <tr>
												<td style="min-width: 200px;">
													
													<h2><a href="./Meeting/${userInfo.depthref}.html"  style="color: red;font-weight: 500;">Meeting Attendance</a></h2>
												</td>                 

												<td class="text-right">
													<a href="./Meeting/${userInfo.depthref}.html"  class="btn btn-outline-success take-btn">View</a>
												</td>
											</tr>


											<tr>
												<td style="min-width: 200px;">
												
													<h2><a href="recruitments.html">Registrations</a></h2>
												</td>                 

												<td class="text-right">
													<a href="recruitments.html" class="btn btn-outline-primary take-btn">View</a>
												</td>
											</tr>

                                            <tr>
                                            <td style="min-width: 200px;">
                                                
                                                <h2><a href="members.html">Members List</a></h2>
                                            </td>                 

                                            <td class="text-right">
                                                <a href="members.html" class="btn btn-outline-primary take-btn">View</a>
                                            </td>
                                        </tr>


											<tr>
												<td style="min-width: 200px;">
												
													<h2><a href="agreementpanel.html">Agreements</a></h2>
												</td>                 

												<td class="text-right">
													<a href="agreementpanel.html" class="btn btn-outline-primary take-btn">View</a>
												</td>
											</tr>

                                        <tr>
                                            <td style="min-width: 200px;">    
                                                <h2><a href="payments.html">Payments</a></h2>
                                            </td>                 
                                            <td class="text-right">
                                                <a href="payments.html" class="btn btn-outline-primary take-btn">View</a>
                                            </td>
                                        </tr>


                                        <tr>
											<td style="min-width: 200px;">	
												<h2><a href="membersfeedback.html">Member's Feedbacks</a></h2>
											</td>                 
											<td class="text-right">
												<a href="membersfeedback.html" class="btn btn-outline-danger take-btn">View</a>
											</td>
										</tr>

				
										<tr>
											<td style="min-width: 200px;">
												<h2><a href="leavepanel.html">Leave Requests</a></h2>
											</td>                 
											<td class="text-right">
												<a href="leavepanel.html" class="btn btn-outline-primary take-btn">View</a>
											</td>
										</tr>


                                        <tr>
                                            <td style="min-width: 200px;"> 
                                                <h2><a href="../MembersPanel/agreement.html">Member Agreement Form</a></h2>
                                            </td>                 
                                            <td class="text-right">
                                                <a href="../MembersPanel/agreement.html" class="btn btn-outline-primary take-btn">View</a>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td style="min-width: 200px;">
                                                <h2><a href="detailUpdates.html">Attendance Details</a></h2>
                                            </td>                 
                                            <td class="text-right">
                                                <a href="detailUpdates.html" class="btn btn-outline-primary take-btn">View</a>
                                            </td>
                                        </tr>

										</tbody>
						</table>
			</div>
            <hr>
     </div>







    <div class="col-lg">
    <h4 class="page-title" style="text-align:left">Data Panel</h4>
<hr>
            <div class="table-responsive" style="margin-bottom: 15px;overflow-x: hidden">
            <table class="table mb-0">
            
                <tbody>

                <tr>
                <td style="min-width: 200px;">
                    
                    <h2><a href="bloodneeded.html"  >Blood Request</a></h2>
                </td>                 

                <td class="text-right">
                    <a href="bloodneeded.html"  class="btn btn-danger take-btn">View</a>
                </td>
            </tr>



                    <tr>
                    <td style="min-width: 200px;">
                        
                        <h2><a href="BloodCamp.html"  >Blood Camp Data</a></h2>
                    </td>                 

                    <td class="text-right">
                        <a href="BloodCamp.html"  class="btn btn-primary take-btn">View</a>
                    </td>
                </tr>


                <tr>
                        <td style="min-width: 200px;">
                            
                            <h2><a href="volunteershipadmin.html"  >Volunteership Program</a></h2>
                        </td>                 

                        <td class="text-right">
                            <a href="volunteershipadmin.html"  class="btn btn-outline-primary take-btn">View</a>
                        </td>
                    </tr>

                
                <tr>
                <td style="min-width: 200px;">
                    
                    <h2><a href="wellnessfund.html"  >Wellness Fundraiser</a></h2>
                </td>                 

                <td class="text-right">
                    <a href="wellnessfund.html"  class="btn btn-outline-primary take-btn">View</a>
                </td>
            </tr>



            <tr>
            <td style="min-width: 200px;">
                
                <h2><a href="finance.html"  >Finance Updates</a></h2>
            </td>                 

            <td class="text-right">
                <a href="finance.html"  class="btn btn-outline-primary take-btn">View</a>
            </td>
        </tr>



                </tbody>
            </table>
        </div>

<hr>
        <h4 class="page-title" style="text-align:left;">Intern's Panel</h4>
        <hr>

        <div class="table-responsive" style="overflow-x: hidden">
									<table class="table mb-0">
									
										<tbody>
											
									
											
											<tr>
												<td style="min-width: 200px;">
													
													<h2><a href="internmembers.html">Members List</a></h2>
												</td>                 

												<td class="text-right">
													<a href="internmembers.html" class="btn btn-outline-primary take-btn">View</a>
												</td>
											</tr>
											

                                                      
										</tbody>
									</table>
								</div>



    </div>

</div>
                      
</div>







            <div class="content">
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
                        <div class="dash-widget" style="border-top: 3px solid #0d6efd;border-radius: 5px">
							<span class="dash-widget-bg1"><i class="fa fa-user-o" aria-hidden="true"></i></span>
							<div class="dash-widget-info text-right">
								<h3>16</h3>
								<span class="widget-title1">Curation <i class="fa fa-check" aria-hidden="true"></i></span>
							</div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
                        <div class="dash-widget" style="border-top: 3px solid #0d6efd;border-radius: 5px">
                            <span class="dash-widget-bg2"><i class="fa fa-user-o"></i></span>
                            <div class="dash-widget-info text-right">
                                <h3>15</h3>
                                <span class="widget-title2">Editorial <i class="fa fa-check" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
                        <div class="dash-widget" style="border-top: 3px solid #0d6efd;border-radius: 5px">
                            <span class="dash-widget-bg3"><i class="fa fa-user-o" aria-hidden="true"></i></span>
                            <div class="dash-widget-info text-right">
                                <h3>14</h3>
                                <span class="widget-title3">Public Relation <i class="fa fa-check" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
                        <div class="dash-widget" style="border-top: 3px solid #0d6efd;border-radius: 5px">
                            <span class="dash-widget-bg4"><i class="fa fa-user-o" aria-hidden="true"></i></span>
                            <div class="dash-widget-info text-right">
                                <h3>12</h3>
                                <span class="widget-title4">Events <i class="fa fa-check" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4" >
                         <div class="dash-widget" style="border-top: 3px solid #0d6efd;border-radius: 5px">
                             <span class="dash-widget-bg3"><i class="fa fa-user-o" aria-hidden="true"></i></span>
                             <div class="dash-widget-info text-right">
                                 <h3>7</h3>
                                 <span class="widget-title3">Design & Media<i class="fa fa-check" aria-hidden="true"></i></span>
                             </div>
                         </div>
                     </div>

                     <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
                         <div class="dash-widget" style="border-top: 3px solid #0d6efd;border-radius: 5px">
                                    <span class="dash-widget-bg1"><i class="fa fa-user-o" aria-hidden="true"></i></span>
                                    <div class="dash-widget-info text-right">
                                         <h3>6</h3>
                                         <span class="widget-title1">Marketing<i class="fa fa-check" aria-hidden="true"></i></span>
                                    </div>
                         </div>
                     </div>
                </div>
				
                </div>

                

<div class="content" style="background-color: #fff;margin: 15px;border-top: 3px solid #0d6efd;border-radius: 5px">

<div class="row">
<div class="col-sm-12">
   <h4 class="page-title" style="text-align:left">My Files </h4>
   <hr>
</div>
</div>


<div style="text-align:left; cursor:pointer">
<h5 style="font-size: 13px" onclick="location.href='${userInfo.agreement}'">Agreement letter <a style="color: #0d6efd"><i class="fa fa-hand-o-right" aria-hidden="true"></i> Download</a></h5>
<h5 style="font-size: 13px" onclick="location.href='${userInfo.certificate}'">Download your certificate <a style="color: #0d6efd"><i class="fa fa-hand-o-right" aria-hidden="true"></i> Download</a></h5>          
<h5 style="font-size: 13px" onclick="location.href='${userInfo.idcard}'">ID Card  <a style="color: #0d6efd"><i class="fa fa-hand-o-right" aria-hidden="true"></i> View</a></h5>
</div>
                      
</div>



<div class="content" style="background-color: #fff;margin: 15px;border-top: 3px solid #0d6efd;border-radius: 5px"">

<div class="row">
<div class="col-sm-12">
   <h4 class="page-title" style="text-align:left">Code of Ethics and Professional Conduct</h4>
   <hr>
</div>
</div>


<div style="text-align:left; cursor:pointer">

<h4 style="font-size: 13px" class="modal-trigger" href="#exampleModal">Code of Ethics and Professional Conduct <a style="color: #0d6efd"><i class="fa fa-hand-o-right" aria-hidden="true"></i> Download</a></h4>
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
