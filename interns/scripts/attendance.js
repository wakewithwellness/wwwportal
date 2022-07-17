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
        Atten.innerHTML = `<div id="content_container" class="container" style=" width: 47vh;
        height: 50vh;margin-top:80px">
        
        <div id="form_container" style="width: 100%;height: 100%;background-color: #222222;box-shadow: 0 0 50px -20px #000;border-radius: 2%;overflow: hidden;">
        <div id="form_header_container" style="width: 100%;
        height: 5%;display: flex; justify-content: center;align-items: center;float: left; padding: 20px;padding-bottom: 30px; padding-top: 30px;
        border-bottom: 1px solid transparent; border-color: cornflowerblue;background: #000;">
            <h2 id="form_header" style="display: inline-block; font-size: 15px;font-family: Bowlby One SC;
            font-weight: 900;  text-transform: uppercase;letter-spacing: 1px; background-color: rgb(255, 255, 255);-webkit-background-clip: text;-webkit-text-fill-color: transparent;"> INTERN'S PORTAL </h2>
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
                        Atten.innerHTML = `

                        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="assets/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">


    

    <div class="sidebar" id="sidebar">
    <div class="sidebar-inner slimscroll">
        <div id="sidebar-menu" class="sidebar-menu">
            <ul>
                <li class="menu-title">Main</li>

               

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
            <div class="content">
          
                <div class="row">
                    <div class="col-lg-12">
						
                        
                        <div class="testbox">
                        <form onsubmit="updateattendance(event)" id="attendanceform">
                        <h1 style="color: cornflowerblue;text-align: center;">WEEKLY ATTENDANCE</h1>
                       
                          <hr>
                          <p class="container-fluid" style="text-align: center;font-size: 20px;color: #fff;background-color: rgba(78, 207, 3, 0.979);padding: 5px;" id="demo"></p>
                          
                          <h4 style="color: rgb(173, 137, 137);font-weight: 200;">I, <span style="color:red;font-weight:500">${userInfo.name} [${userInfo.regno}]</span> post my attendance for the month of<span style="font-weight: 500;"> July</span> <span style="font-size: 14px;color: tomato;">[01/07/2022 - 31/07/2022]</span></h4>
                          <br><label>Works:</label>
                        <textarea id="work" maxlength="300" style="padding: 1px;"  required ></textarea>
                          
                          <select id="attend" style="color: rgb(19, 19, 19);font-weight: 600;">
                            <option style="color: rgb(5, 216, 33);font-weight: 600;" value="Present">Present</option>
                            <option style="color: red;font-weight: 600;" value="Absent">Absent</option>
                          </select>
                                <div class="alert">Attendance posted successfully</div>
                          <div class="btn-block">
                            <button onclick="location.href='activities.html'" style="background-color:tomato;"><i class="fa fa-home" aria-hidden="true"></i> Home</button>
                            <button style="margin-left:16px" id="send" type="submit" >Post</button> 
                             </div>
                          <div class="container-fluid" style="margin-bottom:40px;">
           
            </div>
                        </form>
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
        Atten.innerHTML = `<div id="content_container" class="container" style=" width: 47vh;
        height: 50vh;margin-top:80px">
        
        <div id="form_container" style="width: 100%;height: 100%;background-color: #222222;box-shadow: 0 0 50px -20px #000;border-radius: 2%;overflow: hidden;">
        <div id="form_header_container" style="width: 100%;
        height: 5%;display: flex; justify-content: center;align-items: center;float: left; padding: 20px;padding-bottom: 30px; padding-top: 30px;
        border-bottom: 1px solid transparent; border-color: cornflowerblue;background: #000;">
            <h2 id="form_header" style="display: inline-block; font-size: 15px;font-family: Bowlby One SC;
            font-weight: 900;  text-transform: uppercase;letter-spacing: 1px; background-color: rgb(255, 255, 255);-webkit-background-clip: text;-webkit-text-fill-color: transparent;"> INTERN'S PORTAL </h2>
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





//Attendance


function updateattendance(event){
    event.preventDefault()
    var Jul = document.getElementById('attend').value
    var Julf = document.getElementById('work').value
    var userRef = firebase.firestore().collection('attendance').doc(firebase.auth().currentUser.uid);
  
    var setWithMerge = userRef.set({
      Jul:Jul,
      Julf:Julf
  
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
     var countDownDate = new Date("July 31, 2022 22:00:00").getTime();
     
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
       }
     }, 1000);
    
