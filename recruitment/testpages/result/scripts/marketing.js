const userDetails = document.querySelector(".userDetails");
const editProfile = document.querySelector("#editProfile");

function createUserCollection(user) {
  firebase.firestore().collection("marketing").doc(user.uid).set({
    uid: user.uid,
    name: user.displayName,
    email: user.email,
  });
}

async function getuserInfo(userID) {
  if (userID) {
    const userInfoSnap = await firebase
      .firestore()
      .collection("marketing")
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
    userDetails.innerHTML = ` <div class="container" style="max-width: 60vh;margin-top:120px">
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
        <div style="text-align:left;margin-top:15px;"> <a href="#modal-forgot" class="link" style="text-decoration: none; color: #FFA800; font-size: 12px;cursor:pointer" >FORGOT PASSWORD</a></div>
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
      .collection("marketing")
      .doc(userID);
    userdocRef.onSnapshot((doc) => {
      if (doc.exists) {
        const userInfo = doc.data();
        if (userInfo) {
          userDetails.innerHTML = `
          <div class="content" style="background-color: #2E3035;margin-top:-30px;padding-right:10px; color:white;display: ${userInfo.r}">
          <div class="text-right"><p style="text-transform: uppercase; font-size:11px;padding:2px">${userInfo.name} - ${userInfo.email}</p></div>
          </div>
<br>

          <div class="container">
          <h6 style="color:white">Result <i style="color:grey">(Social Media Marketing Dept.)</i>:</h6>
          <div class="container" style="max-width:180px;float:left;background-color:#FFD34C;padding:5px;text-align:center;border-radius:10px">
            <h6 style="font-weight:bold;color:white;margin-top:5px">Yet to publish</h6>
          </div>
          </div>

<br><br><br>
          <div class="container">
          <h6 style="color:white">Your Answers:</h6>

          <div class="row" style="display:${userInfo.show}">
          <div class="col">
            <div style="background-color: #ACACAC;padding:5px;text-align:center;border-radius:10px;">
             <h6 style="font-weight:bold;color:#757272;margin-top:5px">Test not attended</h6>
            </div>
          </div>
          <div class="col">
            <div onclick="location.href='../marketing.html'" style="cursor:pointer;background: linear-gradient(to right, #fb5444 0%, #feb645 100%);padding:5px;text-align:center;border-radius:10px">
             <h6 style="font-weight:bold;color:white;margin-top:5px">Take Test</h6>
            </div>
          </div>
          </div>

<div style="display:${userInfo.r}">

                      <div class="row" >
                      <div class="col-lg-6 my-2">
                      <div style="background-color:#2E3035;padding:15px;border-radius:10px">
                      <label style="font-size:13px;color:#A9A9A9">QUESTION 1 OF 6</label><br>
                      <label for="q1" style="font-size:14px;color:#FFB145">What do you think, are your skills to be a match for the desired position?</label>
                      <p style="font-size:13px; margin-left:10px;color:white;text-align:justify"><i style="color: grey">Answer:</i> ${userInfo.q1}</p>
                      </div>
                      </div>
                      <div class="col-lg-6 my-2">
                      <div style="background-color:#2E3035;padding:15px;border-radius:10px">
                      <label style="font-size:13px;color:#A9A9A9">QUESTION 2 OF 6</label><br>
                      <label for="q2" style="font-size:14px;color:#FFB145">How can your skills and comprehension, make a significant contribution to the specific department?</label>
                      <p style="font-size:13px; margin-left:10px;color:white;text-align:justify"><i style="color: grey">Answer:</i> ${userInfo.q2}</p>
                      </div>
                      </div>
                      </div>


                      <div class="row">
                      <div class="col-lg-6 my-2">
                      <div style="background-color:#2E3035;padding:15px;border-radius:10px">
                      <label style="font-size:13px;color:#A9A9A9">QUESTION 3 OF 6</label><br>
                      <label for="q3" style="font-size:14px;color:#FFB145">Do you have any work experiences volunteering for your desired sector, and if not, what are your ideas to set forth for the upliftment of the sector?</label>
                      <p style="font-size:13px; margin-left:10px;color:white;text-align:justify"><i style="color: grey">Answer:</i> ${userInfo.q3}</p>
                      </div>
                      </div>
                      <div class="col-lg-6 my-2">
                      <div style="background-color:#2E3035;padding:15px;border-radius:10px">
                      <label style="font-size:13px;color:#A9A9A9">QUESTION 4 OF 6</label><br>
                      <label for="q4" style="font-size:14px;color:#FFB145">What's the most challenging part about working in community outreach, and how can you lend your helping hand for its success?</label>
                      <p style="font-size:13px; margin-left:10px;color:white;text-align:justify"><i style="color: grey">Answer:</i> ${userInfo.q4}</p>
                      </div>
                      </div>
                      </div>


                      <div class="row">
                      <div class="col-lg-6 my-2">
                      <div style="background-color:#2E3035;padding:15px;border-radius:10px">
                      <label style="font-size:13px;color:#A9A9A9">QUESTION 5 OF 6</label><br>
                      <label for="q5" style="font-size:14px;color:#FFB145">What are your thoughts on Marketing department for the organisation to grow more and have more outreach? </label>
                      <p style="font-size:13px; margin-left:10px;color:white;text-align:justify"><i style="color: grey">Answer:</i> ${userInfo.q5}</p>
                      </div>
                      </div>
                      <div class="col-lg-6 my-2">
                      <div style="background-color:#2E3035;padding:15px;border-radius:10px">
                      <label style="font-size:13px;color:#A9A9A9">QUESTION 6 OF 6</label><br>
                      <label for="q6" style="font-size:14px;color:#FFB145">Wake Will Wellness has been a success in organising health-based community events since its inception, with a mass of people being a part of it. As a member of the WWW Team, what shall be your tactics to encourage maximum participation in the upcoming events?</label>
                      <p style="font-size:13px; margin-left:10px;color:white;text-align:justify"><i style="color: grey">Answer:</i> ${userInfo.q6}</p>
                      </div>
                      </div>
                      </div>

          </div></div><br><br><br>

          <div style="position:fixed;bottom: 0px;background-color: #191B20;padding:20px;height:70px; width:100%;">
<div class="container">
  <div class="row">
        <div class="col-auto mr-auto" >
          <p style="color:white;margin-top:2px;font-weight:bold">Recruitment Test’23</p>
        </div>
        <div class="col-auto"> 
        <button onclick="location.href='../../home.html'" class="btn" style="width:100px;margin-top:-2px;background-color:#2E3035" >
        <span style="color:white;font-weight:bold"><i class="fa fa-home" aria-hidden="true"></i> Home</span>
        </button>  
        </div>
  </div>
</div>
</div>  
                       
                        `;
          editProfile["name"].value = userInfo.name;
          editProfile["profileEmail"].value = userInfo.email;
          editProfile["phoneno"].value = userInfo.phone;
          editProfile["whatsapp"].value = userInfo.whatsapp;
          editProfile["blood"].value = userInfo.blood;
          editProfile["college"].value = userInfo.college;
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
        <div style="text-align:left;margin-top:15px;"> <a href="#modal-forgot" class="link" style="text-decoration: none; color: #FFA800; font-size: 12px;cursor:pointer" >FORGOT PASSWORD</a></div>
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
