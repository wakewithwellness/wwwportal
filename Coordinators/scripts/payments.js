const userDetails = document.querySelector(".userDetails");
const editProfile = document.querySelector("#editProfile");

function createUserCollection(user) {
  firebase.firestore().collection("Payments").doc(user.uid).set({
    uid: user.uid,
    name: user.displayName,
    email: user.email,
    department: "",
    phone: "",
    i1: "",
    i2: "",
    i3: "",
    i4: "",
    p1: "",
    p2: "",
    p3: "",
    p4: "",
    a1: "",
    a2: "",
    a3: "",
    a4: "",
    d1: "",
    d2: "",
    d3: "",
    d4: "",
    hide: "",
  });
}

async function getuserInfo(userID) {
  if (userID) {
    const userInfoSnap = await firebase
      .firestore()
      .collection("Payments")
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
    userDetails.innerHTML = ` <div class="container" style="max-width: 80vh;margin-top:180px">
      <div class="card" style="border-top: 3px solid #03b1fc">
      <div class="card-body" style="text-align: center">
      <h5 class="card-title" style="text-align: center; color: #03b1fc; font-weight: 700; font-size:30px">COORDINATOR PORTAL</h5><hr>
<br>
      <form autocomplete="off" onsubmit="login(event)">
          <input type="email" class="form-control" id="loginEmail" placeholder="Email" style="width: 98%;
          height: 40px;padding-left:8px;font-size: 13px;border: 1px solid #e8e8e8; border-radius:5px">

          <input type="password" class="form-control" id="loginPassword" placeholder="Password" style="width: 98%;
          height: 40px;padding-left:8px;font-size: 13px;border: 1px solid #e8e8e8; border-radius:5px">
          <br>
          <div style="text-align:left"> <a style="text-decoration: none; color: #03b1fc; font-size: 12px; margin-left: 10px" class="modal-trigger" href="#modal2">Forgot Password</a></div>
          <br>
          <button type="submit" class="btn" style="background-color:#03b1fc;color: #fff; padding-bottom:38px; float: left"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</button>
          
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
      .collection("Payments")
      .doc(userID);
    userdocRef.onSnapshot((doc) => {
      if (doc.exists) {
        const userInfo = doc.data();
        if (userInfo) {
          userDetails.innerHTML = `

                       

                        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="assets/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">


    

    <div class="sidebar" id="sidebar">
    <div class="sidebar-inner slimscroll">
        <div id="sidebar-menu" class="sidebar-menu">

            <ul>
            <li class="menu-title">Main</li>
            <li><hr>
              <a href="main.html"><i class="fa fa-home"></i> <span>Home</span></a>
          </li>
      
         
          <li>
          <a href="activities.html"><i class="fa fa-bell-o"></i> <span>Notifications</span></a>
          </li>

                 <li>
                 <a href="events.html"><i class="fa fa-users"></i> <span>Events</span></a>
                 </li>
     
                 <li>
                 <a href="coordinators.html"><i class="fa fa-users"></i> <span>Coordinators List</span></a>
                 </li>

        </ul>
        </div>
    </div>
</div>

        



<div class="page-wrapper">







<div class="content" style="background-color: #fff;margin: 15px;border-top: 3px solid #03b1fc;padding: 20px;border-radius:5px">
<div class="row">
<div class="col-sm-12">
    <h4 class="page-title">Coordinator Details</h4><hr>
</div>
</div>
<div class="row">

<div class="col-lg">
<h5>Name: <span style="color: #000">${userInfo.name}</span></h5>
</div>





<div class="col-lg">
<h5>Registration no.: <span style="color: #000">${userInfo.regno}</span></h5>
</div>

<div class="col-lg">
<h5>Department: <span style="color: #000">${userInfo.dept}</span></h5>
</div>

</div>


</div>
            <div class="content" style="background-color: #fff;margin: 15px;border-top: 3px solid #03b1fc;border-radius:5px">
           
          
                <div class="row">
                    <div class="col-sm-12">
                        <h4 class="page-title">Payments</h4>
                    </div>
                </div>
                <div class="row">
                   
                        <div class="table-responsive" ${userInfo.i1}>
                            <table class="table table-bordered">
                                <thead style="background-color: #f7f7f7">
                                    <tr>
                                        <th>Receipt Number</th>
                                        <th style="min-width: 25vh">Pupose</th>
                                    
                                        <th>Transaction Date</th>
                                        <th style="min-width: 17vh">Amount</th>
                                        <th>Refund Date</th>
                                        <th style="min-width: 17vh">Refund Amount</th>
                                       
                                    </tr>
                                </thead>
                                <tbody>
                               
                                    <tr display: ${userInfo.i1}>
                                        <td><a>${userInfo.i1}</a></td>
                                        <td>
                                            <h2><a>${userInfo.p1}</a></h2>
                                        </td>
                                  
                                        <td>${userInfo.d1}</td>
                                        <td>₹ ${userInfo.a1}.00</td>
                                        <td></td>
                                        <td>₹ .00</td>
                                    </tr>
                                    <tr display: ${userInfo.i2}>
                                        <td><a>${userInfo.i2}</a></td>
                                        <td>
                                            <h2><a>${userInfo.p2}</a></h2>
                                        </td>
                                    
                                        <td>${userInfo.d2}</td>
                                        <td>₹ ${userInfo.a2}.00</td>
                                        <td></td>
                                        <td>₹ .00</td>
                                    </tr>
                                    <tr display: ${userInfo.i3}>
                                        <td><a>${userInfo.i3}</a></td>
                                        <td>
                                            <h2><a>${userInfo.p3}</a></h2>
                                        </td>
                                    
                                        <td>${userInfo.d3}</td>
                                        <td>₹ ${userInfo.a3}.00</td>
                                        <td></td>
                                        <td>₹ .00</td>
                                    </tr>


                                    <tr display: ${userInfo.i4}>
                                    <td><a>${userInfo.i4}</a></td>
                                    <td>
                                        <h2><a>${userInfo.p4}</a></h2>
                                    </td>
                                
                                    <td>${userInfo.d4}</td>
                                    <td>₹ ${userInfo.a4}.00</td>
                                    <td></td>
                                    <td>₹ .00</td>
                                </tr>


                                <tr display: ${userInfo.i5}>
                                    <td><a>${userInfo.i5}</a></td>
                                    <td>
                                        <h2><a>${userInfo.p5}</a></h2>
                                    </td>
                                
                                    <td>${userInfo.d5}</td>
                                    <td>₹ ${userInfo.a5}.00</td>
                                    <td></td>
                                    <td>₹ .00</td>
                                </tr>

                               
                                </tbody>
                               
                            </table>
                          
                           
                        </div>  <div class="container" style="text-align:center; color: red;" ${userInfo.hide}> <h4>No Payments Found</h4></div>
                     
                </div>
            </div>
            <br><br>

   

            
        </div>
                         <br>
        <div class="container-fluid" id="footerbarcoordinator">
        <div class="row">
        <div class="col"><a href="./activities.html"><img style="width:54px; height:auto" src="../MembersPanel/assets/img/notifications.png" alt=""/></a></div>
        <div class="col"><a><img style="width:54px; height:auto" src="../MembersPanel//assets/img/payments.png" alt=""/></a></div>
        <div class="col"><a href="./events.html"><img style="width:54px; height:auto" src="../MembersPanel//assets/img/events.png" alt=""/></a></div>
        <div class="col"><a href="./main.html"><img style="width:54px; height:auto" src="../MembersPanel//assets/img/home.png" alt=""/></a></div> 
        </div>
        </div>
                        `;
          editProfile["name"].value = userInfo.name;
          editProfile["profileEmail"].value = userInfo.email;
          editProfile["regno"].value = userInfo.regno;
          editProfile["phoneno"].value = userInfo.phone;
          editProfile["whatsapp"].value = userInfo.whatsapp;
          editProfile["blood"].value = userInfo.blood;
          editProfile["department"].value = userInfo.department;
          editProfile["department2"].value = userInfo.department2;
          editProfile["college"].value = userInfo.college;
          editProfile["address"].value = userInfo.address;
          editProfile["state"].value = userInfo.state;
          editProfile["pincode"].value = userInfo.pincode;
          editProfile["exp"].value = userInfo.exp;

          if (firebase.auth().currentUser.photoURL) {
            document.querySelector("#proimg").src =
              firebase.auth().currentUser.photoURL;
          }
        }
      }
    });
  } else {
    userDetails.innerHTML = `  <div class="container-fluid" style="max-width: 80vh;margin-top:180px">
        <div class="card" style="border-top: 3px solid #03b1fc">
        <div class="card-body" style="text-align: center">
        <h5 class="card-title" style="text-align: center; color: #03b1fc; font-weight: 700; font-size:25px">COORDINATOR PORTAL</h5><hr>
<br>
        <form autocomplete="off" onsubmit="login(event)">
            <input type="email" class="form-control" id="loginEmail" placeholder="Email" style="width: 98%;
            height: 40px;padding-left:8px;font-size: 13px;border: 1px solid #e8e8e8; border-radius:5px">

            <input type="password" class="form-control" id="loginPassword" placeholder="Password" style="width: 98%;
            height: 40px;padding-left:8px;font-size: 13px;border: 1px solid #e8e8e8; border-radius:5px">
            <br>
            <div style="text-align:left"> <a style="text-decoration: none; color: #03b1fc; font-size: 12px; margin-left: 10px" class="modal-trigger" href="#modal2">Forgot Password</a></div>
            <br>
            <button type="submit" class="btn" style="background-color:#03b1fc;color: #fff; padding-bottom:38px; float: left"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</button>
            
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
        `;
  }
}
