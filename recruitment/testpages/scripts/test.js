const userDetails = document.querySelector(".userDetails");
const editProfile = document.querySelector("#editProfile");

function createUserCollection(user) {
  firebase.firestore().collection("users").doc(user.uid).set({
    uid: user.uid,
    name: user.displayName,
    email: user.email,
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
<br>



<div class="container-fluid">
<div class="row">

<div class="col-lg-4 my-2">
<div class="container" style="background-color:#2E3035; padding:18px;border-radius:8px; color:white">
          <div>
          <h6>Editorial Department</h6>  <hr style="color:#898989;height:2px;margin-top:10px">
         
          <div class="row">
          <div class="col">
          <a onclick="location.href='./testpages/result/editorial.html'" class="btn" style="border-radius:8px;height:40px;width:100%;background-color:#13C15C;color:white">View Result</a>
          </div>
          <div class="col">
          <a onclick="location.href='./testpages/editorial.html'" class="btn" style="border-radius:8px;border:none;height:40px;width:100%;background: linear-gradient(to right, #fb5444 0%, #feb645 100%);color:white;display:${userInfo.test1}">Take Test</a>
          <p style="color:red;display:${userInfo.t1};font-size:12px;text-align:center;margin-top:8px">Test already taken</p>
          </div>
          </div>
          </div>
</div>
</div>

<div class="col-lg-4 my-2">
<div class="container" style="background-color:#2E3035; padding:18px;border-radius:8px; color:white">
          <div>
          <h6>Curation Department</h6>  <hr style="color:#898989;height:2px;margin-top:10px">
         
          <div class="row">
          <div class="col">
          <a onclick="location.href='./testpages/result/curation.html'" class="btn" style="border-radius:8px;height:40px;width:100%;background-color:#13C15C;color:white">View Result</a>
          </div>
          <div class="col">
          <a onclick="location.href='./testpages/curation.html'" class="btn" style="border-radius:8px;border:none;height:40px;width:100%;background: linear-gradient(to right, #fb5444 0%, #feb645 100%);color:white;display:${userInfo.test2}">Take Test</a>
          <p style="color:red;display:${userInfo.t2};font-size:12px;text-align:center;margin-top:8px">Test already taken</p>
          </div>
          </div>
          </div>
</div>
</div>

<div class="col-lg-4 my-2">
<div class="container" style="background-color:#2E3035; padding:18px;border-radius:8px; color:white">
          <div>
          <h6>Public Relations Department</h6>  <hr style="color:#898989;height:2px;margin-top:10px">
       
          <div class="row">
          <div class="col">
          <a onclick="location.href='./testpages/result/pr.html'" class="btn" style="border-radius:8px;height:40px;width:100%;background-color:#13C15C;color:white">View Result</a>
          </div>
          <div class="col">
          <a onclick="location.href='./testpages/pr.html'" class="btn" style="border-radius:8px;border:none;height:40px;width:100%;background: linear-gradient(to right, #fb5444 0%, #feb645 100%);color:white;display:${userInfo.test3}">Take Test</a>
          <p style="color:red;display:${userInfo.t3};font-size:12px;text-align:center;margin-top:8px">Test already taken</p>
          </div>
          </div>
          </div>
</div>
</div>

<div class="col-lg-4 my-2">
<div class="container" style="background-color:#2E3035; padding:18px;border-radius:8px; color:white">
          <div>
          <h6>Social Media Marketing Department</h6>  <hr style="color:#898989;height:2px;margin-top:10px">
         
          <div class="row">
          <div class="col">
          <a onclick="location.href='./testpages/result/marketing.html'" class="btn" style="border-radius:8px;height:40px;width:100%;background-color:#13C15C;color:white">View Result</a>
          </div>
          <div class="col">
          <a onclick="location.href='./testpages/marketing.html'" class="btn" style="border-radius:8px;border:none;height:40px;width:100%;background: linear-gradient(to right, #fb5444 0%, #feb645 100%);color:white;display:${userInfo.test4}">Take Test</a>
          <p style="color:red;display:${userInfo.t4};font-size:12px;text-align:center;margin-top:8px">Test already taken</p>
          </div>
          </div>
          </div>
</div>
</div>

<div class="col-lg-4 my-2">
<div class="container" style="background-color:#2E3035; padding:18px;border-radius:8px; color:white">
          <div>
          <h6>Events Department</h6>  <hr style="color:#898989;height:2px;margin-top:10px">
       
          <div class="row">
          <div class="col">
          <a onclick="location.href='./testpages/result/events.html'" class="btn" style="border-radius:8px;height:40px;width:100%;background-color:#13C15C;color:white">View Result</a>
          </div>
          <div class="col">
          <a onclick="location.href='./testpages/events.html'" class="btn" style="display:${userInfo.test5};border-radius:8px;border:none;height:40px;width:100%;background: linear-gradient(to right, #fb5444 0%, #feb645 100%);color:white;display:${userInfo.test5}">Take Test</a>
          <p style="color:red;display:${userInfo.t5};font-size:12px;text-align:center;margin-top:8px">Test already taken</p>
          </div>
          </div>
          </div>
</div>
</div>

<div class="col-lg-4 my-2">
<div class="container" style="background-color:#2E3035; padding:18px;border-radius:8px; color:white">
          <div>
          <h6>Design & Media Department</h6>  <hr style="color:#898989;height:2px;margin-top:10px">
     

          <div class="row">
          <div class="col">
          <a onclick="location.href='./testpages/result/design.html'" class="btn" style="border-radius:8px;height:40px;width:100%;background-color:#13C15C;color:white">View Result</a>
          </div>
          <div class="col">
          <a onclick="location.href='./testpages/design.html'" class="btn" style="border-radius:8px;border:none;height:40px;width:100%;background: linear-gradient(to right, #fb5444 0%, #feb645 100%);color:white;display:${userInfo.test6}">Take Test</a>
          <p style="color:red;display:${userInfo.t6};font-size:12px;text-align:center;margin-top:8px">Test already taken</p>
          </div>
          </div>
          </div>
</div>
</div>

</div>
<div>




<br><br><br>

          <div style="position:fixed;bottom: 0px;left:0px;background-color: #191B20;padding:20px;height:70px; width:100%;">
<div class="container">
  <div class="row">
        <div class="col-auto mr-auto" >
          <p style="color:white;margin-top:2px;font-weight:bold">Recruitment Test’23</p>
        </div>
        <div class="col-auto"> 
        <button onclick="location.href='./home.html'" class="btn" style="width:100px;margin-top:-2px;background-color:#2E3035" >
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
