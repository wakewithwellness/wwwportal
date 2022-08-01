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
      height: 50vh;margin-top:80px">
      
      <div id="form_container" style="width: 100%;height: 100%;background-color: #222222;box-shadow: 0 0 50px -20px #000;border-radius: 2%;overflow: hidden;">
      <div id="form_header_container" style="width: 100%;
      height: 5%;display: flex; justify-content: center;align-items: center;float: left; padding: 20px;padding-bottom: 30px; padding-top: 30px;
      border-bottom: 1px solid transparent; border-color: cornflowerblue;background: #000;">
          <h2 id="form_header" style="display: inline-block; font-size: 15px;font-family: Bowlby One SC;
          font-weight: 900;  text-transform: uppercase;letter-spacing: 1px; background-color: rgb(255, 255, 255);-webkit-background-clip: text;-webkit-text-fill-color: transparent;"> BOARD PORTAL </h2>
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

              <a href="#" onclick="forgotPass()">Forgot Password</a><br>
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


    

                        <div class="sidebar" id="sidebar">
            <div class="sidebar-inner slimscroll">
                <div id="sidebar-menu" class="sidebar-menu">
                    <ul>
                        <li class="menu-title">Admins Panel</li>

                       

                        <li>
                            <a href="main.html"><i class="fa fa-user"></i> <span>Home</span></a>
                        </li>

                        <li >
                        <a href="activities.html"><i class="fa fa-bell-o"></i> <span>Notifications</span></a>
                    </li>

                    <li >
                    <a href="adminattendance.html"><i class="fa fa-calendar"></i> <span>Attendance</span></a>
                </li>

  

                       <li>
                       <a href="../leavepanel.html"><i class=" fa fa-edit"></i> <span>Leaves</span></a>
                      </li>

                      <li>
                      <a href="payments.html"><i  class="fa fa-money"></i> <span>Payments</span></a>
                     </li>
          

                       

                    </ul>
                </div>
            </div>
        </div>





        
        <div class="page-wrapper" style="background-color:white">

		<div class="content">
			<div class="row">
			    <div class="col-sm-7 col-6">
				   <h4 class="page-title" style="text-align:left;background-color:rgb(231, 231, 231);padding:8px">My Profile</h4>
			    </div>

			 
			</div>
			<div class="card-box profile-header" style="background-color:white">
			    <div class="row">
				   <div class="col-md-12">
					  <div class="profile-view">
						 <div class="profile-img-wrap">
							<div class="profile-img">
							    <a href="#"><img class="avatar" src="../assets/img/user.png" alt=""></a>
							</div>
						 </div>
						 <div class="profile-basic">
							<div class="row">
							    <div class="col-md-5">
								   <div class="profile-info-left" style="text-align:left">
									  <h3 class="user-name m-t-0 mb-0">${userInfo.name}</h3>
									  <small class="text-muted" style="font-size:15px;">${userInfo.department}</small>
									  <div class="staff-id">Registration ID : ${userInfo.regno}</div>
									  
								   </div>
							    </div>
							    <div class="col-md-7">
								   <ul class="personal-info" style="text-align:left">
									  <li>
										 <span class="title">Phone:</span>
										 <span class="text"><a href="">${userInfo.phone}</a></span>
									  </li>
									  <li>
										 <span class="title">Email:</span>
										 <span class="text"><a href=""><span class="__cf_email__" data-cfemail="97f4e5fee4e3fef9f6f0e5f8e1f2e4d7f2eff6fae7fbf2b9f4f8fa">${userInfo.email}</span></a></span>
									  </li>
									 
									  <li>
										 <span class="title">Address:</span>
										 <span class="text">${userInfo.address}</span>
									  </li>
									  <li>
										 <span class="title">Gender:</span>
										 <span class="text">${userInfo.gender}</span>
									  </li>
								   </ul>
							    </div>
							</div>
						 </div>
					  </div>                        
				   </div>
			    </div>
			</div>
			 
		 </div>




            <div class="content">
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
                        <div class="dash-widget">
							<span class="dash-widget-bg1"><i class="fa fa-user-o" aria-hidden="true"></i></span>
							<div class="dash-widget-info text-right">
								<h3>16</h3>
								<span class="widget-title1">Curation <i class="fa fa-check" aria-hidden="true"></i></span>
							</div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
                        <div class="dash-widget">
                            <span class="dash-widget-bg2"><i class="fa fa-user-o"></i></span>
                            <div class="dash-widget-info text-right">
                                <h3>15</h3>
                                <span class="widget-title2">Editorial <i class="fa fa-check" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
                        <div class="dash-widget">
                            <span class="dash-widget-bg3"><i class="fa fa-user-o" aria-hidden="true"></i></span>
                            <div class="dash-widget-info text-right">
                                <h3>14</h3>
                                <span class="widget-title3">Public Relation <i class="fa fa-check" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
                        <div class="dash-widget">
                            <span class="dash-widget-bg4"><i class="fa fa-user-o" aria-hidden="true"></i></span>
                            <div class="dash-widget-info text-right">
                                <h3>12</h3>
                                <span class="widget-title4">Events <i class="fa fa-check" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
                         <div class="dash-widget">
                             <span class="dash-widget-bg3"><i class="fa fa-user-o" aria-hidden="true"></i></span>
                             <div class="dash-widget-info text-right">
                                 <h3>7</h3>
                                 <span class="widget-title3">Design & Media<i class="fa fa-check" aria-hidden="true"></i></span>
                             </div>
                         </div>
                     </div>

                     <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
                         <div class="dash-widget">
                                    <span class="dash-widget-bg1"><i class="fa fa-user-o" aria-hidden="true"></i></span>
                                    <div class="dash-widget-info text-right">
                                         <h3>6</h3>
                                         <span class="widget-title1">Marketing<i class="fa fa-check" aria-hidden="true"></i></span>
                                    </div>
                         </div>
                     </div>
                </div>
				
				<div class="row">
					<div class="col-12 col-md-6 col-lg-8 col-xl-8">
						<div class="card">
							<div class="card-header">
								<h4 class="card-title d-inline-block">MEMBER'S PANEL</h4> 
							</div>
							<div class="card-body p-0">
								<div class="table-responsive">
									<table class="table mb-0">
									
										<tbody>
											<tr>
												<td style="min-width: 200px;">
													
													<h2><a href="adminattendance.html"  style="color: green;font-weight: 500;">Attendance</a></h2>
												</td>                 

												<td class="text-right">
													<a href="adminattendance.html"  class="btn btn-outline-success take-btn">View</a>
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
													
													<h2><a href="../leavepanel.html">Leave Requests</a></h2>
												</td>                 
					
												<td class="text-right">
													<a href="../../leavepanel.html" class="btn btn-outline-primary take-btn">View</a>
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



                 

                                        

										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>

                    

                  
                
				</div>



                <div class="col-12 col-md-6 col-lg-8 col-xl-8">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title d-inline-block">EXTRA PANEL</h4> 
                    </div>
                    <div class="card-body p-0">
                        <div class="table-responsive">
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
                    </div>
                </div>
            </div>
				

                    <div class="row">
					<div class="col-12 col-md-6 col-lg-8 col-xl-8">
						<div class="card">
							<div class="card-header">
								<h4 class="card-title d-inline-block">INTERNS'S PANEL</h4> 
							</div>
							<div class="card-body p-0">
								<div class="table-responsive">
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

                        
                  
                        



                                   
     
                                        

            </div>
           
        </div>



    



                       
                        `
                        editProfile["name"].value = userInfo.name
                        editProfile["profileEmail"].value = userInfo.email
                        editProfile["phoneno"].value = userInfo.phone
                        editProfile["whatsapp"].value = userInfo.whatsapp
                        editProfile["college"].value = userInfo.college
                        editProfile["department"].value = userInfo.department
                        editProfile["status"].value = userInfo.status

                      

                }    
             }
        })


    }else{
        userDetails.innerHTML = `<div id="content_container" class="container" style=" width: 47vh;
        height: 50vh;margin-top:80px">
        
        <div id="form_container" style="width: 100%;height: 100%;background-color: #222222;box-shadow: 0 0 50px -20px #000;border-radius: 2%;overflow: hidden;">
        <div id="form_header_container" style="width: 100%;
        height: 5%;display: flex; justify-content: center;align-items: center;float: left; padding: 20px;padding-bottom: 30px; padding-top: 30px;
        border-bottom: 1px solid transparent; border-color: cornflowerblue;background: #000;">
            <h2 id="form_header" style="display: inline-block; font-size: 15px;font-family: Bowlby One SC;
            font-weight: 900;  text-transform: uppercase;letter-spacing: 1px; background-color: rgb(255, 255, 255);-webkit-background-clip: text;-webkit-text-fill-color: transparent;"> BOARD PORTAL </h2>
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

                <a href="#" onclick="forgotPass()">Forgot Password</a><br>
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


