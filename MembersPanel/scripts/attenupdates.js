const userDetails  = document.querySelector('.userDetails')
const editProfile  = document.querySelector('#editProfile')


function createUserCollection(user){
   firebase.firestore().collection('attendance')
   .doc(user.uid)
   .set({
       uid:user.uid,
       name:user.displayName,
       email:user.email,
       dept:"",
      
      

       

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
       userDetails.innerHTML = `
       <h3>${userInfo.name}</h3>
       <h3>${userInfo.email}</h3>
   
       `
   }    
    }else{
      userDetails.innerHTML = `<div class="container" style="max-width: 80vh;margin-top:180px">
      <div class="card" style="border-top: 3px solid #198754">
      <div class="card-body" style="text-align: center">
      <h5 class="card-title" style="text-align: center; color: #198754; font-weight: 700; font-size:30px">MEMBERS PORTAL</h5><hr>
<br>
      <form autocomplete="off" onsubmit="login(event)">
          <input type="email" class="form-control" id="loginEmail" placeholder="Email" style="width: 98%;
          height: 40px;padding-left:8px;font-size: 13px;border: 1px solid #e8e8e8; border-radius:5px">

          <input type="password" class="form-control" id="loginPassword" placeholder="Password" style="width: 98%;
          height: 40px;padding-left:8px;font-size: 13px;border: 1px solid #e8e8e8; border-radius:5px">
          <br>
          <div style="text-align:left"> <a style="text-decoration: none; color: #198754; font-size: 12px; margin-left: 10px" class="modal-trigger" href="#modal2">Forgot Password</a></div>
          <br>
          <button type="submit" class="btn" style="background-color:#198754;color: #fff; padding-bottom:38px; float: left"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</button>
          
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
            <li>
              <a href="main.html"><i class="fa fa-home"></i> <span>Home</span></a>
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







<div class="content" style="background-color: #fff;margin: 12px;border-top: 3px solid #198754;padding: 20px;border-radius:5px">
<div class="row">
<div class="col-sm-12">
    <h4 class="page-title">Member Details</h4><hr>
</div>
</div>
<div class="row">

<div class="col-lg">
<h5>Name: <span style="color: #198754">${userInfo.name}</span></h5>
</div>





<div class="col-lg">
<h5>Registration no.: <span style="color: #198754">${userInfo.regno}</span></h5>
</div>

<div class="col-lg">
<h5>Department: <span style="color: #198754">${userInfo.dept}</span></h5>
</div>

</div>


</div>



<div class="content" style="background-color: #fff;margin: 12px;border-top: 3px solid #198754;padding: 20px;border-radius:5px">
<div class="row">
<div class="col-sm-12">
    <h4 class="page-title">Attendance Percentage</h4><hr>
</div>
</div>
<div class="row">


<div class="col-lg">
<p style="color: white; background-color: red; max-width:50vh; padding:10px; font-size:12px; display:  ${userInfo.Alert}"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> You are not eligible for tenure certificate</p>
<h3 style="color: ${userInfo.status}; font-size:40px; text-align:center">${userInfo.AAper}</h3>

<div style="height: 25px" class="progress">
  <div  class="progress-bar progress-bar-success progress-bar-striped" role="progressbar"
  aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:${userInfo.AAper};background-color:${userInfo.status}">
  </div>
</div>
</div>


</div>


</div>




            <div class="content" style="background-color: #fff;margin: 12px;border-top: 3px solid #198754; border-radius:5px">
           
          
                <div class="row">
                    <div class="col-sm-12">
                        <h4 class="page-title">Attendance Updates</h4>
                    </div>
                </div>
                <div class="row">
                   
                        <div class="table-responsive">
                            <table class="table table-bordered" style="font-size: 12px">
                                <thead style="background-color: #f7f7f7">
                                    <tr>
                                      
                                        <th style="width: 10vh">Month</th>
                                        <th style="width: 10vh">Week</th>
                                        <th style="width: auto">Status</th>
                                        <th>Activity</th>
                                       
                                    </tr>
                                </thead>
                                <tbody>


                                <tr display: ${userInfo.Apr23bf}>
                               
                                <td rowspan="2" id=month> <h4>April 2022</h4>
                               
                                </td>
                                <td><a id="dateee">15/04/23 <br>-<br> 30/04/23</a></td>
                                <td id="statuss">${userInfo.Apr23b}</td>
                                <td>${userInfo.Apr23bf}</td>
                                </tr>

                                <tr display: ${userInfo.Apr23af}>
                               
                               
                                <td><a id="dateee">01/04/23 <br>-<br> 15/04/23</a></td>
                                <td id="statuss">${userInfo.Apr23a}</td>
                                <td>${userInfo.Apr23af}</td>
                                </tr>



                                <tr display: ${userInfo.Mar23bf}>
                               
                                <td rowspan="2" id=month> <h4>March 2022</h4>
                               
                                </td>
                                <td><a id="dateee">15/03/23 <br>-<br> 31/03/23</a></td>
                                <td id="statuss">Present</td>
                                <td> </td>
                                </tr>

                                <tr display: ${userInfo.Mar23af}>
                               
                               
                                <td><a id="dateee">01/03/23 <br>-<br> 15/03/23</a></td>
                                <td id="statuss">${userInfo.Mar23a}</td>
                                <td>${userInfo.Mar23af}</td>
                                </tr>



                                <tr display: ${userInfo.Feb23bf}>
                               
                                <td rowspan="2" id=month> <h4>February 2022</h4>
                               
                                </td>
                                <td><a id="dateee">15/02/23 <br>-<br> 28/02/23</a></td>
                                <td id="statuss">${userInfo.Feb23b}</td>
                                <td>${userInfo.Feb23bf}</td>
                                </tr>

                                <tr display: ${userInfo.Feb23af}>
                               
                               
                                <td><a id="dateee">01/02/23 <br>-<br> 15/02/23</a></td>
                                <td id="statuss">${userInfo.Feb23a}</td>
                                <td>${userInfo.Feb23af}</td>
                                </tr>




                                <tr display: ${userInfo.Jan23bf}>  
                                <td rowspan="2" id=month> <h4>January 2023</h4>
                                </td>
                                <td><a id="dateee">15/01/23 <br>-<br> 31/01/23</a></td>
                                <td id="statuss">${userInfo.Jan23b}</td>
                                <td>${userInfo.Jan23bf}</td>
                                </tr>
                                <tr display: ${userInfo.Jan23af}>
                                <td><a id="dateee">01/01/23 <br>-<br> 15/01/23</a></td>
                                <td id="statuss">${userInfo.Jan23a}</td>
                                <td>${userInfo.Jan23af}</td>
                                </tr>



                                <tr display: ${userInfo.Dec22bf}>
                                <td rowspan="2" id=month> <h4>December 2022</h4>  
                                </td>
                                <td><a id="dateee">15/12/22 <br>-<br> 31/12/22</a></td>
                                <td id="statuss">${userInfo.Dec22b}</td>
                                <td>${userInfo.Dec22bf}</td>
                                </tr>
                                <tr display: ${userInfo.Dec22af}>
                                <td><a id="dateee">01/12/22 <br>-<br> 15/12/22</a></td>
                                <td id="statuss">${userInfo.Dec22a}</td>
                                <td>${userInfo.Dec22af}</td>
                                </tr>



                                <tr display: ${userInfo.Nov22bf}>
                               
                                <td rowspan="2" id=month> <h4>November 2022</h4>
                               
                                </td>
                                <td><a id="dateee">15/11/22 <br>-<br> 30/11/22</a></td>
                                <td id="statuss">${userInfo.Nov22b}</td>
                                <td>${userInfo.Nov22bf}</td>
                                </tr>

                                <tr display: ${userInfo.Nov22af}>
                               
                               
                                <td><a id="dateee">01/11/22 <br>-<br> 15/11/22</a></td>
                                <td id="statuss">${userInfo.Nov22a}</td>
                                <td>${userInfo.Nov22af}</td>
                                </tr>



                                <tr display: ${userInfo.Oct22bf}>
                               
                                <td rowspan="2" id=month> <h4>October 2022</h4>
                               
                                </td>
                                <td><a id="dateee">15/10/22 <br>-<br> 31/10/22</a></td>
                                <td id="statuss">${userInfo.Oct22b}</td>
                                <td>${userInfo.Oct22bf}</td>
                                </tr>

                                <tr display: ${userInfo.Oct22af}>
                               
                               
                                <td><a id="dateee">01/10/22 <br>-<br> 15/10/22</a></td>
                                <td id="statuss">${userInfo.Oct22a}</td>
                                <td>${userInfo.Oct22af}</td>
                                </tr>


                                <tr display: ${userInfo.Sept22bf}>
                              
                                <td rowspan="2" id=month>
                                    <h4><a>September 2022</a></h4>
                                </td>
                                <td><a id="dateee">15/09/22 <br>-<br> 30/09/22</a></td>
                                <td id="statuss">${userInfo.Sept22b}</td>
                                <td>${userInfo.Sept22bf}</td>
                                </tr>

                                <tr display: ${userInfo.Sept22af}>
                               
                                <td><a id="dateee">01/09/22 <br>-<br> 15/09/22</a></td>
                                <td id="statuss">${userInfo.Sept22a}</td>
                                <td>${userInfo.Sept22af}</td>
                                </tr>


                                <tr display: ${userInfo.Aug22bf}>
                               
                                <td rowspan="2" id=month>
                                    <h4><a>August 2022</a></h4>
                                </td>
                                <td><a id="dateee">15/08/22 <br>-<br> 31/08/22</a></td>
                                <td id="statuss">${userInfo.Aug22b}</td>
                                <td>${userInfo.Aug22bf}</td>
                                </tr>

                                <tr display: ${userInfo.Aug22af}>
                                <td><a id="dateee">01/08/22 <br>-<br> 15/08/22</a></td>
                                <td id="statuss">${userInfo.Aug22a}</td>
                                <td>${userInfo.Aug22af}</td>
                                </tr>


                                <tr display: ${userInfo.Jul22bf}>
                               
                                <td rowspan="2" id=month>
                                    <h4><a>July 2022</a></h4>
                                </td>
                                <td><a id="dateee">15/07/22 <br>-<br> 31/07/22</a></td>
                                <td id="statuss">${userInfo.Jul22b}</td>
                                <td>${userInfo.Jul22bf}</td>
                                </tr>

                                <tr display: ${userInfo.Jul22af}>
                                <td><a id="dateee">01/07/22 <br>-<br> 15/07/22</a></td>
                                <td id="statuss">${userInfo.Jul22a}</td>
                                <td>${userInfo.Jul22af}</td>
                                </tr>

                              

                                <tr display: ${userInfo.Junf}>
                               
                                <td rowspan="2" id=month>
                                    <h4 ><a>June 2022</a></h4></td>
                                
                                <td><a id="dateee">01/06/22 <br>-<br> 30/06/22</a></td>
                                <td id="statuss">${userInfo.Jun}</td>
                                <td>${userInfo.Junf}</td>
                                </tr>

                                <tr display: ${userInfo.Junf}>
                                <td></td>
                                <td></td>
                                <td></td>
                                </tr>


                                <tr display: ${userInfo.May2f}>
                                <td rowspan="2" id=month>
                                    <h4><a>May 2022</a></h4>
                                </td>
                                <td><a id="dateee">15/05/22 <br>-<br> 31/05/22</a></td>
                                <td id="statuss">${userInfo.May2}</td>
                                <td>${userInfo.May2f}</td>
                                </tr>

                                <tr display: ${userInfo.May1f}>
                                <td><a id="dateee">01/05/22 <br>-<br> 15/05/22</a></td>
                                <td id="statuss">${userInfo.May1}</td>
                                <td>${userInfo.May1f}</td>
                                </tr>


                                <tr display: ${userInfo.Apr2f}>
                               
                                <td rowspan="2" id=month>
                                    <h4><a>April 2022</a></h4>
                                </td>
                                <td><a id="dateee">15/04/22 <br>-<br> 30/04/22</a></td>
                                <td id="statuss">${userInfo.Apr2}</td>
                                <td>${userInfo.Apr2f}</td>
                                </tr>

                                <tr display: ${userInfo.Apr1f}>
                                <td><a id="dateee">01/04/22 <br>-<br> 15/04/22</a></td>
                                <td id="statuss">${userInfo.Apr1}</td>
                                <td>${userInfo.Apr1f}</td>
                                </tr>


                                <tr display: ${userInfo.Mar2f}>
                               
                                <td rowspan="2" id=month>
                                    <h4><a>March 2022</a></h4>
                                </td>
                                <td><a id="dateee">15/03/22 <br>-<br> 31/03/22</a></td>
                                <td id="statuss">${userInfo.Mar2}</td>
                                <td>${userInfo.Mar2f}</td>
                                </tr>

                                <tr display: ${userInfo.Mar1f}>
                                <td><a id="dateee">01/03/22 <br>-<br> 15/03/22</a></td>
                                <td id="statuss">${userInfo.Mar1}</td>
                                <td>${userInfo.Mar1f}</td>
                                </tr>


                                <tr display: ${userInfo.Feb2f}>
                               
                                <td rowspan="2" id=month>
                                    <h4><a>February 2022</a></h4>
                                </td>
                                <td><a id="dateee">15/02/22 <br>-<br> 28/02/22</a></td>
                                <td id="statuss">${userInfo.Feb2}</td>
                                <td>${userInfo.Feb2f}</td>
                                </tr>

                                <tr display: ${userInfo.Feb1f}>
                                <td><a id="dateee">01/02/22 <br>-<br> 15/02/22</a></td>
                                <td id="statuss">${userInfo.Feb1}</td>
                                <td>${userInfo.Feb1f}</td>
                                </tr>

                                <tr display: ${userInfo.Jan2f}> 
                                <td rowspan="2" id=month>
                                    <h4><a>January 2022</a></h4>
                                </td>
                                <td><a id="dateee">15/01/22 <br>-<br> 31/01/22</a></td>
                                <td id="statuss">${userInfo.Jan2}</td>
                                <td>${userInfo.Jan2f}</td>
                                </tr>

                                <tr display: ${userInfo.Jan1f}>
                                <td><a id="dateee">01/01/22 <br>-<br> 15/01/22</a></td>
                                <td id="statuss">${userInfo.Jan1}</td>
                                <td>${userInfo.Jan1f}</td>
                                </tr>

                                <tr display: ${userInfo.Dec2f}>
                               
                                <td rowspan="2" id=month>
                                <h4><a>December 2021</a></h4>
                                </td>
                                <td><a id="dateee">15/12/21 <br>-<br> 31/12/21</a></td>
                                <td id="statuss">${userInfo.Dec2}</td>
                                <td>${userInfo.Dec2f}</td>
                                </tr>

                                <tr display: ${userInfo.Dec1f}>
                                <td><a id="dateee">01/12/21 <br>-<br> 15/12/21</a></td>
                                <td id="statuss">${userInfo.Dec1}</td>
                                <td>${userInfo.Dec1f}</td>
                                </tr>

                                <tr display: ${userInfo.Nov2f}>
                                <td rowspan="2" id=month>
                                    <h4><a>November 2021</a></h4>
                                </td>
                                <td><a id="dateee">15/11/21 <br>-<br> 30/11/21</a></td>
                                <td id="statuss">${userInfo.Nov2}</td>
                                <td>${userInfo.Nov2f}</td>
                                </tr>

                                <tr display: ${userInfo.Nov1f}>
                                <td><a id="dateee">01/11/21 <br>-<br> 15/11/21</a></td>
                                <td id="statuss">${userInfo.Nov1}</td>
                                <td>${userInfo.Nov1f}</td>
                                </tr>

                                <tr display: ${userInfo.Oct2f}>
                                <td rowspan="2" id=month>
                                    <h4><a>October 2021</a></h4>
                                </td>
                                <td><a id="dateee">15/10/21 <br>-<br> 31/10/21</a></td>
                                <td id="statuss">${userInfo.Oct2}</td>
                                <td>${userInfo.Oct2f}</td>
                                </tr>

                                <tr display: ${userInfo.Oct1f}>
                                <td><a id="dateee">01/10/21 <br>-<br> 15/10/21</a></td>
                                <td id="statuss">${userInfo.Oct1}</td>
                                <td>${userInfo.Oct1f}</td>
                                </tr>

                                <tr display: ${userInfo.Sept2f}>
                                <td rowspan="2" id=month>
                                    <h4><a>September 2021</a></h4>
                                </td>
                                <td><a id="dateee">15/09/21 <br>-<br> 30/09/21</a></td>
                                <td id="statuss">${userInfo.Sept2}</td>
                                <td>${userInfo.Sept2f}</td>
                                </tr>

                                <tr display: ${userInfo.Sept1f}>
                                <td><a id="dateee">01/09/21 <br>-<br> 15/09/21</a></td>
                                <td id="statuss">${userInfo.Sept1}</td>
                                <td>${userInfo.Sept1f}</td>
                                </tr>

                                    <tr display: ${userInfo.Aug2f}>
                                       
                                        <td rowspan="2" id=month>
                                            <h4><a>August 2021</a></h4>
                                        </td>
                                        <td><a id="dateee">15/08/21 <br>-<br> 31/08/21</a></td>
                                        <td id="statuss">${userInfo.Aug2}</td>
                                        <td>${userInfo.Aug2f}</td>
                                    </tr>

                                    <tr display: ${userInfo.Aug1f}>
                                        <td><a id="dateee">01/08/21 <br>-<br> 15/08/21</a></td>                        
                                        <td id="statuss">${userInfo.Aug1}</td>
                                        <td>${userInfo.Aug1f}</td>
                                    </tr>
                        
                                    <tr display: ${userInfo.July3f}>
                                      
                                        <td rowspan="3" id=month >
                                        <h4><a>July 2021</a></h4>
                                        </td>   
                                        <td><a id="dateee">20/07/21 <br>-<br> 31/07/21</a></td>                                  
                                        <td id="statuss">${userInfo.July3}</td>   
                                        <td>${userInfo.July3f}</td>   
                                    </tr>


                                    <tr display: ${userInfo.July2f}>   
                                    <td><a id="dateee">10/07/21 <br>-<br> 20/07/21</a></td>                             
                                    <td id="statuss">${userInfo.July2}</td>
                                    <td>${userInfo.July2f}</td>   
                                    </tr>


                                   <tr display: ${userInfo.July1f}>
                                    <td><a id="dateee">01/07/21 <br>-<br> 10/07/21</a></td>                        
                                    <td id="statuss">${userInfo.July1}</td>
                                    <td>${userInfo.July1f}</td>   
                                </tr>
                               

                               
                                </tbody>
                            </table>
                            
                        </div>
                     
                </div>
            </div>
            <br><br>

      
            <div class="container-fluid" id="footerbar">
            <div class="row">
            <div class="col"><a href="./activities.html"><img style="width:54px; height:auto" src="./assets/img/notifications.png" alt=""/></a></div>
            <div class="col"><a href="./payments.html"><img style="width:54px; height:auto" src="./assets/img/payments.png" alt=""/></a></div>
            <div class="col"><a href="./attendance.html"><img style="width:54px; height:auto" src="./assets/img/attendance.png" alt=""/></a></div>
            <div class="col"><a href="./main.html"><img style="width:54px; height:auto" src="./assets/img/home.png" alt=""/></a></div>
            
            </div>
            </div>

            
        </div>
                       
                        `
                        editProfile["name"].value = userInfo.name
                        editProfile["profileEmail"].value = userInfo.email
                        editProfile["regno"].value = userInfo.regno
                        editProfile["phoneno"].value = userInfo.phone
                        editProfile["whatsapp"].value = userInfo.whatsapp
                        editProfile["blood"].value = userInfo.blood
                        editProfile["department"].value = userInfo.department
                        editProfile["department2"].value = userInfo.department2
                        editProfile["college"].value = userInfo.college
                        editProfile["address"].value = userInfo.address
                        editProfile["state"].value = userInfo.state
                        editProfile["pincode"].value = userInfo.pincode
                        editProfile["exp"].value = userInfo.exp


                        if(firebase.auth().currentUser.photoURL){
                            document.querySelector('#proimg').src = firebase.auth().currentUser.photoURL
                        }
                      

                }    
             }
        })


    }else{
        userDetails.innerHTML = `<div class="container" style="max-width: 80vh;margin-top:180px">
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
            <button type="submit" class="btn" style="background-color:#198754;color: #fff; padding-bottom:8px; float: left"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</button>
            
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






