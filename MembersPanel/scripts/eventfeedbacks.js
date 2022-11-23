const Atten  = document.querySelector('.Atten')



function createUserCollection(user){
   firebase.firestore().collection('users')
   .doc(user.uid)
   .set({
       uid:user.uid,
       name:user.displayName,
       email:user.email,
     

       

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
    Atten.innerHTML = `
       <h3>${userInfo.name}</h3>
       <h3>${userInfo.email}</h3>

       `
   }    
    }else{
        Atten.innerHTML = `<div class="container-fluid" style="max-width: 80vh;margin-top:180px">
        <div class="card" style="border-top: 3px solid #198754">
        <div class="card-body" style="text-align: center">
        <h5 class="card-title" style="text-align: center; color: #198754; font-weight: 700; font-size:25px">MEMBERS PORTAL</h5><hr>
<br>
        <form autocomplete="off" onsubmit="login(event)">
            <input type="email" class="form-control" id="loginEmail" placeholder="Email" style="width: 98%;
            height: 40px;padding-left:8px;font-size: 13px;border: 1px solid #e8e8e8; border-radius:5px">
          
            <input type="password" class="form-control" id="loginPassword" placeholder="Password" style="width: 98%;margin-top:10px;
            height: 40px;padding-left:8px;font-size: 13px;border: 1px solid #e8e8e8; border-radius:5px">
            <br>
            <div style="text-align:left"> <a style="text-decoration: none; color: #198754; font-size: 12px; margin-left: 10px" class="modal-trigger" href="#modal2">Forgot Password</a></div>
            <br> 
            <button type="submit" class="btn" style="width:17vh;background-color:#198754;color: #fff; padding-bottom:37px; float: left"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</button>
            
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
                        Atten.innerHTML = `

                        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="assets/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">


    <div class="sidebar" id="sidebar">
    <div class="sidebar-inner slimscroll">
        <div id="sidebar-menu" class="sidebar-menu">
            <ul>
                <li class="menu-title" style="text-align: left">Main</li><hr>

               

                <li>
                    <a href="main.html"><i class="fa fa-dashboard"></i> <span>Dashboard</span></a>
                </li>

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
                    <a href="payments.html"><i class="fa fa-money active"></i> <span>Payments</span></a>
                </li>

            </ul>
        </div>
    </div>
</div>

        


 <div class="page-wrapper">






            <div class="content" style="background-color: #fff;margin: 12px;border-top: 3px solid #198754;padding: 20px; border-radius: 5px;">
            <div class="row">
            <div class="col-sm-12">
            <h2 style="text-align: center;color: orange">Hepah: From Welfare to Well-being <span style="color: grey">Feedback form</span></h2><hr>
            </div>
            </div>
        
   

         
  
          
                <div class="row">
                    <div class="col-lg-12">
						
      
                              <div class="testbox" >
                          
                                              <form onsubmit="updateattendance(event)" id="attendanceform" style="text-align:left">
                                              
                                            
                                                <div class="form-group">
                                                <label for="exampleFormControlSelect1"> 1. Overall, how would the rate the <strong>Hepah: From Welfare to Well-being</strong><span style="color: red; font-size:15px">*</span></label>
                                                <select id="q1" class="form-control" required>
                                                <option selected disabled value="">--Select--</option>
                                                  <option value="1">1</option>
                                                  <option value="2">2</option>
                                                  <option value="3">3</option>
                                                  <option value="4">4</option>
                                                  <option value="5">5</option>
                                                  <option value="6">6</option>
                                                  <option value="7">7</option>
                                                  <option value="8">8</option>
                                                  <option value="9">9</option>
                                                  <option value="10">10</option>
                                                </select>
                                                </div>


                                                <div class="form-group">
                                                <label for="exampleFormControlSelect1">2. After the event, how inspired did you feel?<span style="color: red; font-size:15px">*</span></label>
                                                <select id="q2" class="form-control" required>
                                                <option selected disabled value="">--Select--</option>
                                                  <option value="1">1</option>
                                                  <option value="2">2</option>
                                                  <option value="3">3</option>
                                                  <option value="4">4</option>
                                                  <option value="5">5</option>
                                                  <option value="6">6</option>
                                                  <option value="7">7</option>
                                                  <option value="8">8</option>
                                                  <option value="9">9</option>
                                                  <option value="10">10</option>
                                                </select>
                                                </div>



                                          

                                                <div class="form-group">
                                                <label >3. Are you willing to participate in our future drives?<span style="color: red; font-size:15px">*</span></label>
                                                <select id="q3" class="form-control" required>
                                                <option selected disabled value="">--Select--</option>
                                                  <option value="Yes">Yes, definitely</option>
                                                  <option value="Maybe">Maybe</option>
                                                  <option value="No">No, never</option>
                                                </select>
                                                </div>


                                                <div class="form-group">
                                                <label for="exampleFormControlSelect1">4. Overall rating for the management of the event<span style="color: red; font-size:15px">*</span></label>
                                                <select id="q4" class="form-control" required>
                                                <option selected disabled value="">--Select--</option>
                                                  <option value="1">1</option>
                                                  <option value="2">2</option>
                                                  <option value="3">3</option>
                                                  <option value="4">4</option>
                                                  <option value="5">5</option>
                                                  <option value="6">6</option>
                                                  <option value="7">7</option>
                                                  <option value="8">8</option>
                                                  <option value="9">9</option>
                                                  <option value="10">10</option>
                                                </select>
                                                </div>


                                            


                                                <div class="form-group">
                                                <label for="exampleFormControlSelect1">5. Feedback regarding the overall experience about the drive and management<span style="color: red; font-size:15px">*</span></label>
                                                <textarea id="q5" class="form-control" id="work" maxlength="500" style="padding: 5px;height:100px" minlength="5" required ></textarea>
                                                </div>

                                                <div class="form-group">
                                                <label for="exampleFormControlSelect1">6. Feedback regarding the participated members in general </label>
                                                <textarea id="q6" class="form-control" id="work" maxlength="500" style="padding: 5px;height:100px" minlength="5"></textarea>
                                                </div>


                                                <div class="form-group">
                                                <label for="exampleFormControlSelect1">7. Feedback regarding the board members</label>
                                                <textarea id="q7" class="form-control" id="work" maxlength="500" style="padding: 5px;height:100px"></textarea>
                                                </div>

                                               

                                                <div class="form-group">
                                                <label for="exampleFormControlSelect1">8. Any suggestion how can we improve the future events<span style="color: red; font-size:15px">*</span></label>
                                                <textarea id="q8" class="form-control" id="work" maxlength="500" style="padding: 5px;height:100px" required></textarea>
                                                </div>
                                            
                                      

                                                  <div class="btn-block">
                                                  <button style="background-color:#198754; font-size:13px;font-weight:500; border-radius:5px" id="send" type="submit" >Submit</button> 
                                                  </div>

                                                <div class="container-fluid" style="margin-bottom:70px;">
                                
                                              </div>
                                              </form>

                                           
                              </div> 
                    
                    
                    </div>
                </div>



                </div>
           
        </div>

    


 


        
    </div>
         
        </div>

        
                       
                        `
               
                
                      

                }    
             }
        })


    }else{
        Atten.innerHTML = `<div class="container-fluid" style="max-width: 80vh;margin-top:180px">
        <div class="card" style="border-top: 3px solid #198754">
        <div class="card-body" style="text-align: center">
        <h5 class="card-title" style="text-align: center; color: #198754; font-weight: 700; font-size:25px">MEMBERS PORTAL</h5><hr>
<br>
        <form autocomplete="off" onsubmit="login(event)">
            <input type="email" class="form-control" id="loginEmail" placeholder="Email" style="width: 98%;
            height: 40px;padding-left:8px;font-size: 13px;border: 1px solid #e8e8e8; border-radius:5px">
          
            <input type="password" class="form-control" id="loginPassword" placeholder="Password" style="width: 98%;margin-top:10px;
            height: 40px;padding-left:8px;font-size: 13px;border: 1px solid #e8e8e8; border-radius:5px">
            <br>
            <div style="text-align:left"> <a style="text-decoration: none; color: #198754; font-size: 12px; margin-left: 10px" class="modal-trigger" href="#modal2">Forgot Password</a></div>
            <br> 
            <button type="submit" class="btn" style="width:17vh;background-color:#198754;color: #fff; padding-bottom:37px; float: left"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</button>
            
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





//Attendance


function updateattendance(event){
  event.preventDefault()
  var q1 = document.getElementById('q1').value
  var q2 = document.getElementById('q2').value
  var q3 = document.getElementById('q3').value
  var q4 = document.getElementById('q4').value
  var q5 = document.getElementById('q5').value
  var q6 = document.getElementById('q6').value
  var q7 = document.getElementById('q7').value
  var q8 = document.getElementById('q8').value
 

  var userRef = firebase.firestore().collection('EventsFeedbacks').doc('Swachh Prayaakh').collection('Drive2').doc(firebase.auth().currentUser.uid);

  var setWithMerge = userRef.set({
    q1:q1,
    q2:q2,
    q3:q3,
    q4:q4,
    q5:q5,
    q6:q6,
    q7:q7,
    q8:q8,




  },{ merge: true}).then(()=>{
   

     // Show alert
     M.toast({html:`<div><i style="font-size: 20px" class="fa fa-check-circle" aria-hidden="true"></i> Feedback submitted successfully</div>`,classes:"green"})



 // Clear form
 document.getElementById('attendanceform').reset();

  }).catch((err) => {
    console.log(err)
    M.toast({html:`<div><i style="font-size: 20px" class="fa fa-exclamation-triangle" aria-hidden="true"></i>Error ! Feedback not submitted</div>`,classes:"red"})
  });
}




    
