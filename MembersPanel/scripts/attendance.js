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
        Atten.innerHTML = `<div id="content_container" class="container" style=" width: 47vh;
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
              <div id="button_container" style="width: 100%;height: 45px;background-color: cornflowerblue;color: #fff;margin-top: 5px;" >
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
            <div class="content" style="background-color: #fff;margin-left: 12px;margin-right: 12px;margin-top: -8px;border-top: 3px solid #5793D1;padding: 18px">

            <div class="row">
            <div class="col-sm-12">
            <h2 style="text-align: center;">WEEKLY ATTENDANCE</h2><hr>
            </div>
            </div>
            <p class="container-fluid" style="text-align: center;font-size: 18px;color:#009e1a;border: 1px solid  #009e1a; border-radius:5px;padding: 5px;margin-top:-5px" id="demo"></p>

            <div class="alert">Attendance posted successfully</div>
<div style="text-align: left; margin-bottom:5px">  <a onclick="location.href='attenUpdates.html'" style="color:#009efb;font-size:14px;text-align:left"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Updates</a></div>

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
                   
                    <td rowspan="2" id=month> <h4>September 2022</h4>
                   
                    </td>
                    <td id="datecolor2"><a>15/09/2022 to 30/09/2022</a></td>
                    <td>${userInfo.Sept22b}</td>
                    <td>${userInfo.Sept22bf}</td>
                    </tr>

                    <tr>
                    <td id="datecolor1" style="color:black"><a>01/09/2022 to 15/09/2022</a></td>
                    <td>${userInfo.Sept22a}</td>
                    <td>${userInfo.Sept22af}</td>
                    </tr>

                    </tbody>
                </table>
                
            </div>
         
    </div>
          
                <div class="row">
                    <div class="col-lg-12">
						
                    <h5 style="color: grey;font-weight: 200;font-size:13px;text-align:left">I, <span style="font-weight: 500;font-size:14px">${userInfo.name} [${userInfo.regno}]</span> post my attendance 
                    from 
                    <span style="font-size: 14px;color: #009efb;font-weight:600" id="date">01/09/2022 - 15/09/2022</span></h5>
                              <div class="testbox" >
                          
                                              <form onsubmit="updateattendance(event)" id="attendanceform">
                                            
                                                <label style="text-align: left;margin-top: -5vh">Tasks Updates</label>
                                                <textarea id="work" maxlength="300" style="padding: 5px;" required ></textarea>
                                                
                                                <select id="attend" style="color: white;font-weight: 400;">
                                                  <option style="color: rgb(5, 216, 33);font-weight: 400;" value="Present">Present</option>
                                                
                                                </select>
                                                     

                                                  <div class="btn-block">
                                                  <button style="background-color:#009e1a; font-size:13px;font-weight:500; border-radius:5px" id="send" type="submit" >Post Attendance</button> 
                                                  </div>

                                                <div class="container-fluid" style="margin-bottom:70px;">
                                
                                              </div>
                                              </form>

                                           
                              </div> 
                    
                    
                    </div>
                </div>
           
        </div>

        <br> 
    </div>
         
        </div>

        
                       
                        `
               
                
                      

                }    
             }
        })


    }else{
        Atten.innerHTML = `<div id="content_container" class="container" style=" width: 47vh;
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
                
                <div id="button_container" style="width: 100%;height: 45px;background-color: cornflowerblue;color: #fff;margin-top: 5px;" >
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





//Attendance


function updateattendance(event){
  event.preventDefault()
  var Sept22a = document.getElementById('attend').value
  var Sept22af = document.getElementById('work').value
  var userRef = firebase.firestore().collection('attendance').doc(firebase.auth().currentUser.uid);

  var setWithMerge = userRef.set({
    Sept22a:Sept22a,
    Sept22af:Sept22af

  },{ merge: true}).then(()=>{
    document.querySelector('.alert').style.display = 'block';

     // Show alert
 document.querySelector('.alert').style.display = 'block';

 // Hide alert after 3 seconds
 setTimeout(function(){
   document.querySelector('.alert').style.display = 'none';
 },5000);

 // Clear form
 document.getElementById('attendanceform').reset();

  });
}




           

     // Set the date we're counting down to
     var countDownDate = new Date("September 15, 2022 22:00:00").getTime();
     
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
         document.getElementById("datecolor1").style.color = "red";
      
       }
     }, 1000);
    
