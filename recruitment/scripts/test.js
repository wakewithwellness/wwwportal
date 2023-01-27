const userDetails = document.querySelector(".userDetails");

function createUserCollection(user) {
  firebase.firestore().collection("users").doc(user.uid).set({
    uid: user.uid,
    name: user.displayName,
  });
}

async function getuserInfo(userID) {
  if (userID) {
    const userInfoSnap = await firebase
      .firestore()
      .collection("users")
      .doc(userID)
      .get();

    const userInfo = userInfoSnap.data();
    if (userInfo) {
      userDetails.innerHTML = `
       <h3>${userInfo.name}</h3>
       <h3>${userInfo.email}</h3>
       <h3>${userInfo.phone}</h3>
       `;
    }
  } else {
    userDetails.innerHTML = `  <div class="container" style="max-width: 60vh;margin-top:120px">
    <div class="card" style="background-color: #2E3035; border-radius:14px">
    <div class="card-body" style="text-align: left">
    <h4 class="card-title" style="color: #fff; font-weight: 700; font-size:26px">USER LOGIN</h4>
<br>
    <form autocomplete="off" onsubmit="login(event)">
        <input type="email" id="loginEmail" placeholder="REGISTERED EMAIL" style="width: 98%;
        height: 40px;padding-left:8px;font-size: 13px;border-radius:5px; background-color:#242629;color: #fff"><br>

        <input type="password" id="loginPassword" placeholder="PASSWORD" style="width: 98%;margin-top:10px;
        height: 40px;padding-left:8px;font-size: 13px;border-radius:5px; background-color:#242629;color: #fff">
        <br> 
        <div style="text-align:left;margin-top:15px;"> <a style="text-decoration: none; color: #FFA800; font-size: 12px; class="modal-trigger" href="#modal2">FORGOT PASSWORD</a></div>
        <br>
        <div class="text-center">
        <button type="submit" class="btn" style="background-color:#13C15C;color: #fff;width:15vh"><i class="fa fa-sign-in" aria-hidden="true"></i> LOGIN</button>
        </div>
</form>
      <div>



     
    </div>
  </div></div>
      `;
  }
}

async function getuserInfoRealtime(userID) {
  if (userID) {
    const userdocRef = await firebase
      .firestore()
      .collection("users")
      .doc(userID);
    userdocRef.onSnapshot((doc) => {
      if (doc.exists) {
        const userInfo = doc.data();
        if (userInfo) {
          userDetails.innerHTML = `


                      
                        <div class="content" style="background-color: #2E3035;margin-top:-30px;padding-right:10px; color:white">
                        <div class="text-right"><p style="text-transform: uppercase; font-size:11px;padding:2px">${userInfo.name} - ${userInfo.email}</p></div>
                        </div>



                    
                    
                    <div id="hello">
                    <div class="container" id="startbox"  >
                       
                    <div style="color:white;margin-top:15px">
                    <h4>Do you want to start the test?</h4><br>
                    <p style="font-size:15px;color:#FF9900">You will have 15mins to complete the test</p>
                    <p style="font-size:12px; color:#CECECE">Press the cancel button if you want to take the test again later. When you begin the test, it will be monitored, and switching between tabs may cause the test to be immediately cancelled.
                    <br><br>
                    If you are sure about it please press the start button</p>
                    </div>
                    
                        <form onsubmit="updatestartbtn(event)">                              
                                                <select id="btnstartdisplay" hidden>
                                                  <option value="none">Hide</option>
                                                </select>

                                                <select id="texttdisplay" hidden>
                                                <option value="Test is already submitted">Hide</option>
                                                </select>
<br>
                                             
                                                <button onclick="muyh()" class="btn" style="background-color:#13C15C;min-width:120px;display:${userInfo.test}" >
                                                <span style="color:white;font-weight:bold">START</span>
                                                </button>     

                                                <div id="div1" class="hide" style="visibility: hidden;color:red;display:${userInfo.text}">
                                                ${userInfo.text}
                                                </div>

                                           
                                         
                                               
                         </form>
                        </div>


                                  <div class="content" style="position: absolute;bottom: 0px;background-color: #191B20;padding:20px;height:70px; width:100%">
                                  <div class="container">
                                  <div class="row">
                                  <div class="col-auto mr-auto" >
                                  <p style="color:white;margin-top:2px;font-weight:bold">Recruitment Test’23</p>
                                  </div>
                                  <div class="col-auto">
                                  <button onclick="location.href='./home.html'" class="btn" style="width:100px;margin-top:-2px;background-color:#2E3035" >
                                  <span style="color:white;font-weight:bold">Cancel</span>
                                  </button>  
                                  </div>
                                  </div>
                                  </div>
                                  </div>
                    
                        </div>
              
              


                        


                    <div id="qui" style="display:none">
                        <form name="quiz" onsubmit="questions(event)" id="questionsform" >
                        <div  style="position: fixed;width:100%"> 
                             <!-- <div class="text-left">
                                  <p>Time spent:
                                  <code id="do">...</code> seconds</p></div> -->
                            <div class="container" style="padding:10px;margin-top:-18px;border-radius:10px">
                             <div class="row">
                                  <div class="col-lg-4">
                                       <div class="container" style="background-color:#2E3035;padding:20px;border-radius:10px">
                                       <div style="text-align:center">
                                            <code style="font-size: 13px;color:#FFA800">Remaining time: <span style="font-size: 25px; padding:10px; border-radius:5px;" id="time">--:--:--</span></code>
                                       </div>
                                       </div>

                                       <div class="container" style="background-color:#2E3035;padding:20px;border-radius:10px; margin-top:5px;height:13vh">
                                       <div style="text-align:left;margin-top:-10px">
                                           <h6 style="color:#5DE094">Instructions</h6>
                                           <ol style="color:#ECECEC;font-size:12px"><li>All the questions are compulsory.</li>
                                           <li>Changing tabs will be recorded.</li></ol>
                                       </div>
                                       </div>


                                  </div>
           
                                  <div class="col-lg-8" >
                                       <div class="container" style="padding:8px;border-radius:10px;margin-top:10px;position: absolute;overflow: auto;height:100vh;width:93%">
                                     
                        
  
                                              <div class="form-group">
                                              <label style="font-size:13px;color:#A9A9A9">QUESTION 1 OF 5</label><br>
                                                <label for="q1" style="font-size:14px;color:#fff">Why do you want to work in recruitment?</label>
                                                <textarea style="background-color:#2E3035;color:white;border:none;font-size:12px" class="form-control" id="q1" rows="7" required></textarea>
                                              </div>
                          
                                              <div class="form-group">
                                              <label style="font-size:13px;color:#A9A9A9">QUESTION 2 OF 5</label><br>
                                                   <label for="q2" style="font-size:14px;color:#fff">What do you think is key to a successful career in recruitment?</label>
                                                   <textarea style="background-color:#2E3035;color:white;border:none;font-size:12px" class="form-control" id="q2" rows="7" required></textarea>
                                                 </div>
                          
                                                 <div class="form-group">
                                                 <label style="font-size:13px;color:#A9A9A9">QUESTION 3 OF 5</label><br>
                                                   <label for="q3" style="font-size:14px;color:#fff">How would you go about generating new business?</label>
                                                   <textarea style="background-color:#2E3035;color:white;border:none;font-size:12px" class="form-control" id="q3" rows="7" required></textarea>
                                                 </div>
                          
                                                 <div class="form-group">
                                                 <label style="font-size:13px;color:#A9A9A9">QUESTION 4 OF 5</label><br>
                                                   <label for="q4" style="font-size:14px;color:#fff">How would you deal with daily setbacks?</label>
                                                   <textarea style="background-color:#2E3035;color:white;border:none;font-size:12px" class="form-control" id="q4" rows="7" required></textarea>
                                                 </div>
                          
                                                 <div class="form-group">
                                                 <label style="font-size:13px;color:#A9A9A9">QUESTION 5 OF 5</label><br>
                                                   <label for="q5" style="font-size:14px;color:#fff">Which other recruitment companies have you applied for jobs with?</label>
                                                   <textarea style="background-color:#2E3035;color:white;border:none;font-size:12px" class="form-control" id="q5" rows="7" required></textarea>
                                                 </div>


                                                 <div id="space"></div>

                                           
      
                                  </div>

                                  </div>
                                 </div>    
                             </div>
                    
                    
                      </div>


                      <div data-ml-modal id="modal-14">
                      <a href="#!" class="modal-overlay"></a>
                      <div class="modal-dialog">
                        <div class="modal-content center" style="color:white; text-align:center">
                        
                        <h5>Do you want to end the test?</h5>
                        <p style="font-size:15px;color:#FF0000">You still have time remaining</p>
                        <p style="font-size:14px; color:#CECECE">If you want to end the test and submit your answers you can press confirm button.</p>
                       
                          <div class="text-center">
                               <button name="data" type="submit" class="btn" style="width:100px;margin-top:-2px;background-color:#13C15C;font-size:13px" >
                               <span style="color:white;font-weight:bold;">CONFIRM</span>
                               </button> 
                          </div>


                        </div>
                      </div>
                    </div>


                      <div class="content" style="position: absolute;bottom: 0px;background-color: #191B20;padding:20px;height:70px; width:100%">
                      <div class="container">
                      <div class="row">
                      <div class="col-auto mr-auto" >
                      <p style="color:white;margin-top:2px;font-weight:bold">Recruitment Test’23</p>
                      </div>
                      <div class="col-auto"> 
                      <a href="#modal-14" class="link btn" style="border:none;;width:100px;margin-top:-2px;background-color:#3281FF;font-size:13px;color:white;font-weight:bold;" >SUBMIT</a>
                      </div>
                      </div>
                      </div>
                      </div>
                      </form> </div>







                      <div class="container" id="success" id="hello">
                   
                      <video autoplay="" loop="" style="width:30vh">
                        <source type="video/mp4" src="https://cdnl.iconscout.com/lottie/free/preview/successfully-done-5379517-4503214.mp4"><br><br>
                        </video>
                      <div class="text-center">
                           <h5 style="color: green; padding:7px;">Your response has been submitted!</h5>
                      </div>
                      <hr><button onclick="location.href='./result.html'" style="background-color:#3281FF; color:white" class="btn"><i class="fa fa-bookmark" aria-hidden="true"></i> See Result</button>
                      </div>



                
                       <div class="container" id="timeuppage">
                      
                       <div class="text-center">
                            <p style="color: orange; padding:7px;">Your time is up! Please contact our technical team if you haven't submitted.</p>
                       </div>
                     <button onclick="location.href='./home.html'" class="btn btn-secondary"><i class="fa fa-home" aria-hidden="true"></i> Home</button>
                       </div>

                        `;
        }
      }
    });
  } else {
    userDetails.innerHTML = `
        <div class="container" style="max-width: 60vh;margin-top:120px">
        <div class="card" style="background-color: #2E3035; border-radius:14px">
        <div class="card-body" style="text-align: left">
        <h4 class="card-title" style="color: #fff; font-weight: 700; font-size:26px">USER LOGIN</h4>
<br>
        <form autocomplete="off" onsubmit="login(event)">
            <input type="email" id="loginEmail" placeholder="REGISTERED EMAIL" style="width: 98%;
            height: 40px;padding-left:8px;font-size: 13px;border-radius:5px; background-color:#242629;color: #fff"><br>

            <input type="password" id="loginPassword" placeholder="PASSWORD" style="width: 98%;margin-top:10px;
            height: 40px;padding-left:8px;font-size: 13px;border-radius:5px; background-color:#242629;color: #fff">
            <br> 
            <div style="text-align:left;margin-top:15px;"> <a style="text-decoration: none; color: #FFA800; font-size: 12px; class="modal-trigger" href="#modal2">FORGOT PASSWORD</a></div>
            <br>
            <div class="text-center">
            <button type="submit" class="btn" style="background-color:#13C15C;color: #fff;width:15vh"><i class="fa fa-sign-in" aria-hidden="true"></i> LOGIN</button>
            </div>
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
        `;
  }
}

function updatestartbtn(event) {
  event.preventDefault();
  var test = document.getElementById("btnstartdisplay").value;
  var text = document.getElementById("texttdisplay").value;
  var userRef = firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid);

  var setWithMerge = userRef
    .set(
      {
        test: test,
        text: text,
      },
      { merge: true }
    )
    .then(() => {
      console.log("success");
      document.getElementById("qui").style.display = "block";
      document.getElementById("hello").style.display = "none";

      myTimer = setInterval(myCounter, 1000);
      var fiveMinutes = 60 * 1,
        display = document.querySelector("#time");
      startTimer(fiveMinutes, display);
    })
    .catch((err) => {
      console.log(err);
    });
}

function questions(event) {
  event.preventDefault();
  var q1 = document.getElementById("q1").value;
  var q2 = document.getElementById("q2").value;
  var q3 = document.getElementById("q3").value;
  var q4 = document.getElementById("q4").value;
  var q5 = document.getElementById("q5").value;

  var userRef = firebase
    .firestore()
    .collection("test")
    .doc(firebase.auth().currentUser.uid);

  var setWithMerge = userRef
    .set(
      {
        q1: q1,
        q2: q2,
        q3: q3,
        q4: q4,
        q5: q5,
      },
      { merge: true }
    )
    .then(() => {
      document.getElementById("qui").style.display = "none";
      document.getElementById("hello").style.display = "none";
      document.getElementById("success").style.display = "block";

      // Clear form
      document.getElementById("questionsform").reset();
    })
    .catch((err) => {
      console.log(err);
      M.toast({
        html: `<div><i style="font-size: 20px" class="fa fa-exclamation-triangle" aria-hidden="true"></i>Error ! Please contact the technical team</div>`,
        classes: "red",
      });
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
  document.getElementById("finalcoop").style.display = "block";
  document.getElementById("qui").style.display = "none";
}
function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = "00" + ":" + minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;

      document.getElementById("qui").style.display = "none";
      document.getElementById("timeuppage").style.display = "block";
    }
  }, 1000);
}
function tryagain() {
  location.reload();
}




function showIt() {
  document.getElementById("div1").style.visibility = "visible";
}
setTimeout("showIt()", 3000); // after 1 sec


function muyh()
{
  var div1 = document.getElementById("div1");
  div1.className="show";
}