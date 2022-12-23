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
    .collection('attendance')
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
        .collection('attendance')
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

<div class="content" style="background-color: #fff;margin: 12px;border-top: 3px solid #198754;padding: 20px;border-radius: 5px;">
<div class="row">
<div class="col-sm-12">
<h2 style="text-align: center;">WEEKLY ATTENDANCE</h2><hr>
</div>
</div>


<div style="text-align: left; margin-bottom:5px">  
<a onclick="location.href='attenUpdates.html'" style="color:#198754;font-size:14px;text-align:left;cursor: pointer"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Updates</a></div>

            <div class="row">
          
            <div class="table-responsive">
                <table class="table table-bordered" style="font-size: 12px">
                    <thead style="background-color: #f7f7f7">
                        <tr>
                          
                            <th style="width: 10vh">Month</th>
                            <th style="width: 15vh">Week</th>
                            <th style="width: 20vh">Status</th>
                            <th>Activity</th>
                           
                        </tr>
                    </thead>
                    <tbody>

                    <tr>
                   
                    <td rowspan="2" id=month> <h4>November 2022</h4>
                   
                    </td>
                    <td ><a>01/12/2022 to 15/12/2022</a></td>
                    <td>${userInfo.Dec22a}</td>
                    <td>${userInfo.Dec22af}</td>
                    </tr>

                    <tr>
                    <td><a>15/12/2022 to 31/12/2022</a></td>
                    <td>${userInfo.Dec22b}</td>
                    <td>${userInfo.Dec22bf}</td>
                    </tr>

                    </tbody>
                </table>
                
            </div>


            
</div>


</div>




            <div class="content" style="background-color: #fff;margin: 12px;border-top: 3px solid #198754;padding: 20px; max-height: 57vh; border-radius: 5px;">
            <div class="row">
            <div class="col-sm-12">
            <h2 style="text-align: center;">POST ATTENDANCE</h2><hr>
            </div>
            </div>
        
            <p class="container-fluid" style="text-align: center;font-size: 18px;color:#009e1a;border: 1px solid  #009e1a; border-radius:5px;padding: 5px;margin-top:-5px" id="demo"></p>

   

         
  
          
                <div class="row">
                    <div class="col-lg-12">
						
                    <h5 style="color: grey;font-weight: 200;font-size:13px;text-align:left">I, <span style="font-weight: 500;font-size:14px">${userInfo.name} [${userInfo.regno}]</span> post my attendance 
                    from 
                    <span style="font-size: 14px;color: #198754;font-weight:600" id="date">15/12/2022 - 31/12/2022</span></h5>
                              <div class="testbox" >
                          
                                              <form onsubmit="updateattendance(event)" id="attendanceform">
                                            
                                                <label style="text-align: left;margin-top: -5vh">Tasks Updates</label>
                                                <textarea id="work" maxlength="500" style="padding: 5px;" minlength="5" required ></textarea>
                                                
                                                <select id="attend" style="color: white;font-weight: 400;">
                                                  <option style="color: rgb(5, 216, 33);font-weight: 400;" value="Present">Present</option>
                                                
                                                </select>
                                                     

                                                  <div class="btn-block">
                                                  <button style="background-color:#198754; font-size:13px;font-weight:500; border-radius:5px" id="send" type="submit" >Post Attendance</button> 
                                                  </div>

                                                <div class="container-fluid" style="margin-bottom:70px;">
                                
                                              </div>
                                              </form>

                                           
                              </div> 
                    
                    
                    </div>
                </div>



                </div>
           
        </div>

        <br> 
        <br><br>

      
        <div class="container-fluid" id="footerbar">
        <div class="row">
        <div class="col"><a href="./activities.html"><img style="width:54px; height:auto" src="./assets/img/notifications.png" alt=""/></a></div>
        <div class="col"><a href="./payments.html"><img style="width:54px; height:auto" src="./assets/img/payments.png" alt=""/></a></div>
        <div class="col"><a ><img style="width:54px; height:auto" src="./assets/img/attendance.png" alt=""/></a></div>
        <div class="col"><a href="./main.html"><img style="width:54px; height:auto" src="./assets/img/home.png" alt=""/></a></div>
        
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
  var Dec22b = document.getElementById('attend').value
  var Dec22bf = document.getElementById('work').value
  var userRef = firebase.firestore().collection('attendance').doc(firebase.auth().currentUser.uid);

  var setWithMerge = userRef.set({
    Dec22b:Dec22b,
    Dec22bf:Dec22bf

  },{ merge: true}).then(()=>{
   

     // Show alert
     M.toast({html:`<div><i style="font-size: 20px" class="fa fa-check-circle" aria-hidden="true"></i> Attendance posted successfully</div>`,classes:"green"})



 // Clear form
 document.getElementById('attendanceform').reset();

  }).catch((err) => {
    console.log(err)
    M.toast({html:`<div><i style="font-size: 20px" class="fa fa-exclamation-triangle" aria-hidden="true"></i>Error ! Attendance not posted</div>`,classes:"red"})
  });
}




           

     // Set the date we're counting down to
     var countDownDate = new Date("December 31, 2022 22:00:00").getTime();
     
     // Update the count down every 1 second
     var x = setInterval(function() {
     
       // Get today's date and time
       var now = new Date().getTime();
     
       // Find the distance between now and the count down date
       var distance = countDownDate - now;
     
       // Time calculations for days, hours, minutes and seconds
       var days = Math.floor(distance / (1000 * 60 * 60 * 24));
       var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
       var seconds = Math.floor((distance % (1000 * 60)) / 1000);
     
       // Display the result in the element with id="demo"
       document.getElementById("demo").innerHTML = days + "d " + hours + "h "
       + minutes + "m " + seconds + "s ";


 
     
       // If the count down is finished, write some text
       if (distance < 0) {
         clearInterval(x);
         document.getElementById("demo").innerHTML = "Attendance closed for the week";
         document.getElementById("demo").style.color = "red";
         document.getElementById("demo").style.borderColor = "red";
         document.querySelector('#work').disabled = "disabled";
         document.querySelector('#work').style.cursor = "not-allowed";
         document.querySelector('#send').style.color = "white";
         document.querySelector('#send').style.background = "#fc5c3f";
         document.querySelector('#send').disabled = "disabled";
         document.querySelector('#send').style.cursor = "not-allowed";
         document.getElementById("send").innerHTML = "Locked";
         document.getElementById("date").style.color = "red";
    
      
       }
     }, 1000);
    
