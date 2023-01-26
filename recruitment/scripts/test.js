const userDetails  = document.querySelector('.userDetails')



function createUserCollection(user){
   firebase.firestore().collection('users')
   .doc(user.uid)
   .set({
       uid:user.uid,
       name:user.displayName,
 
    
  

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
                      
        <div class="content" style="background-color: grey; margin-top:-30px;padding-right:20px; color:white">
        <div class="text-right"><p style="text-transform: uppercase">${userInfo.name} - ${userInfo.email}</p></div>
      
        
        </div>
                      
                        <div class="container" style="max-width:450px;background-color:white; text-align:center;border-radius:10px; border:1px solid #dedede;padding:15px;margin-top:30px" id="hello">
                        <h2 style="font-weight: bold; color:#333333">RECRUITMENT TEST</h2><hr><br><br>
                        <img src="./test.png" alt=""/><br><br><br>
                        <div class="text-center">
                             <p style="background-color: rgba(255, 132, 0, 0.76); padding:7px; color: white; text-align:center;">Duration: <strong>15 mins</strong> | Marks: <strong>50</strong></p>
                        </div>
                       
                        <hr>



                        <form onsubmit="updatestartbtn(event)">                              
                                                <select id="btnstartdisplay" hidden>
                                                  <option value="none">Hide</option>
                                                </select>

                                                <select id="texttdisplay" hidden>
                                                <option value="Test is already submitted">Hide</option>
                                              </select>

                                             
                                                  <button onclick="muyh()" class="btn btn-success" style="min-width:200px;display:${userInfo.test}" >
                                                  <span style="color:white">Start ✓</span>
                                                  </button>
                                                  <p style="color:red;display:${userInfo.text}">${userInfo.text}</p>
                                            
                         </form>

                        </div>
                    
              
              
              
                        
                        <div id="qui" style="display:none">
                             <!-- <div class="text-left">
                                  <p>Time spent:
                                  <code id="do">...</code> seconds</p></div> -->
                                  <div class="container" style="padding:10px;margin-top:-22px;border-radius:10px">
                             <div class="row">
                                  <div class="col-lg-4">
                                       <div class="container" style="background-color:white;padding:20px;border-radius:10px; margin-top:5px">
                                       <div style="text-align:center">
                                            <code style="font-size: 15px;">Remaining time:<br><br>
                                                 <span style="font-size: 30px;background-color:#ff4d00; width:20vh; color: white; padding:10px; border-radius:5px" id="time">--:--:--</span></code>
                                       </div></div>
              
                                       <div class="container" style="padding:5px;">
                                           <div class="row">
                                            <div class="col" style="margin:5px;background-color:white;padding:20px;border-radius:10px"> <div style="text-align:center"><a>Total Mark: <strong>50</strong></a></div></div>
                                            <div class="col" style="margin:5px;background-color:white;padding:20px;border-radius:10px">  <div style="text-align:center"><a>Time: <strong>15 mins</strong></a></div></div>
                                           </div>
                                          
                                          
                                           <div class="container" style="background-color:white;padding:20px;border-radius:10px; margin-top:5px">
                                        
                                        <b>Instructions</b>
                                           <li style="font-size:12px">All the questions are compulsory.</li>
                                           <li style="font-size:12px">Changing tabs will be recorded.</li>
                                           
                                           </div>
                                          
                                       </div>
              
              
                                  </div>
              
                                  <div class="col-lg-8">
                                       <div class="container" style="background-color:white;padding:20px;border-radius:10px;margin-top:5px">
              <h4 style="color:rgba(255, 102, 0, 0.939)">Recruitment Test 2023</h4><hr><br>
                        
                                            <form name="quiz" onsubmit="questions(event)" id="questionsform">
                                        
                                            <select id="name" hidden>
                                            <option value="${userInfo.name}">Hide</option>
                                          </select>


                                          <select id="email" hidden>
                                          <option value="${userInfo.email}">Hide</option>
                                        </select>



                                              <div class="form-group">
                                                <label for="q1" style="font-size:14px">1. Why do you want to work in recruitment?</label>
                                                <textarea class="form-control" id="q1" rows="4" required></textarea>
                                              </div>
                          
                                              <div class="form-group">
                                                   <label for="q2" style="font-size:14px">2. What do you think is key to a successful career in recruitment?</label>
                                                   <textarea class="form-control" id="q2" rows="4" required></textarea>
                                                 </div>
                          
                                                 <div class="form-group">
                                                   <label for="q3" style="font-size:14px">3. How would you go about generating new business?</label>
                                                   <textarea class="form-control" id="q3" rows="4" required></textarea>
                                                 </div>
                          
                                                 <div class="form-group">
                                                   <label for="q4" style="font-size:14px">4.How would you deal with daily setbacks?</label>
                                                   <textarea class="form-control" id="q4" rows="4" required></textarea>
                                                 </div>
                          
                                                 <div class="form-group">
                                                   <label for="q5" style="font-size:14px">5. Which other recruitment companies have you applied for jobs with?</label>
                                                   <textarea class="form-control" id="q5" rows="4" required></textarea>
                                                 </div>
                                           
                                            
                                              <button name="data" type="submit" class="btn btn-success">Submit</button>
                                            </form>
                                         
                                       
                          
                                  </div>
                                  </div>
              
                                 </div>
                             </div>
                    
              
              
                     
                    
                      </div>







                      <div class="container" id="success" style="display:none;max-width:450px;background-color:white; text-align:center;border-radius:10px; border:1px solid #dedede;padding:15px;margin-top:30px" id="hello">
                      <img src="https://cdn-icons-png.flaticon.com/512/1355/1355667.png" style="width:20vh" alt=""/><br><br>
                      <div class="text-center">
                           <h5 style="color: green; padding:7px;">Your response has been submitted!</h5>
                      </div>
                      <hr><button onclick="location.href='./result.html'" class="btn btn-secondary"><i class="fa fa-bookmark" aria-hidden="true"></i> See Answers</button>
                      </div>



                
                       <div class="container" id="timeuppage" style="display:none;max-width:450px;background-color:white; text-align:center;border-radius:10px; border:1px solid #dedede;padding:15px;margin-top:30px" id="hello">
                       <img src="https://cdn-icons-png.flaticon.com/512/9474/9474001.png" style="width:20vh" alt=""/><br>
                       <div class="text-center">
                            <h5 style="color: red; padding:7px;">Your time is up!</h5>
                       </div>
                       <hr><button onclick="location.href='./home.html'" class="btn btn-secondary"><i class="fa fa-home" aria-hidden="true"></i> Home</button>
                       </div>

                        `
           
    

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



function updatestartbtn(event){
     event.preventDefault()
     var test = document.getElementById('btnstartdisplay').value 
     var text = document.getElementById('texttdisplay').value
     var userRef = firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid);
   
     var setWithMerge = userRef.set({
          test:test,
          text:text
     
   
     },{ merge: true}).then(()=>{
      console.log("success")
      document.getElementById('qui').style.display='block';
      document.getElementById('hello').style.display='none';


      myTimer = setInterval(myCounter, 1000);
      var fiveMinutes = 60 * 1,
      display = document.querySelector('#time');
      startTimer(fiveMinutes, display);

     }).catch((err) => {
       console.log(err)
           });
   }
   
   
   

function questions(event){
     event.preventDefault()
     var name = document.getElementById('name').value
     var email = document.getElementById('email').value
     var q1 = document.getElementById('q1').value
     var q2 = document.getElementById('q2').value
     var q3 = document.getElementById('q3').value
     var q4 = document.getElementById('q4').value
     var q5 = document.getElementById('q5').value
  
     var userRef = firebase.firestore().collection('test').doc(firebase.auth().currentUser.uid);
   
     var setWithMerge = userRef.set({
      name:name,
      email:email,
       q1:q1,
       q2:q2,
       q3:q3,
       q4:q4,
       q5:q5
   
     },{ merge: true}).then(()=>{
        document.getElementById('qui').style.display='none';
        document.getElementById('success').style.display='block';
       
   
   
    // Clear form
    document.getElementById('questionsform').reset();
   
     }).catch((err) => {
       console.log(err)
       M.toast({html:`<div><i style="font-size: 20px" class="fa fa-exclamation-triangle" aria-hidden="true"></i>Error ! Please contact the technical team</div>`,classes:"red"})
     });
   }
   
   
   



  
              
                    // function muyh() {
                    //  document.getElementById('qui').style.display='block';
                    //  document.getElementById('hello').style.display='none';
                    //  myTimer = setInterval(myCounter, 1000);


                 
                    // var fiveMinutes = 60 * 1,
                    //        display = document.querySelector('#time');
                    //     startTimer(fiveMinutes, display);
                    //  }
                



                     var c = 0;
                    function myCounter() {
                        document.getElementById("do").innerHTML = ++c;
                    }
                    function nextscore50() {
                    document.getElementById('finalcoop').style.display='block';
                    document.getElementById('qui').style.display='none';
                    }
                    function startTimer(duration, display) {
                        var timer = duration, minutes, seconds;
                        setInterval(function () {
                            minutes = parseInt(timer / 60, 10)
                            seconds = parseInt(timer % 60, 10);
                    
                            minutes = minutes < 10 ? "0" + minutes : minutes;
                            seconds = seconds < 10 ? "0" + seconds : seconds;
                    
                            display.textContent = "00" + ":" + minutes + ":" + seconds;
                    
                            if (--timer < 0) {
                                timer = duration;
                               
                                document.getElementById('qui').style.display='none';
                                document.getElementById('timeuppage').style.display='block';
                            }
                        }, 1000);
                    }
                    function tryagain() {
                    location.reload();
                    }
                    











