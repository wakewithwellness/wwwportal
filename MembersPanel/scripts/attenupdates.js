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
      userDetails.innerHTML = `<div id="content_container" class="container" style=" width: 47vh;
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
        </ul>
        </div>
    </div>
</div>

        



<div class="page-wrapper">







<div class="content" style="background-color: #fff;margin: 15px;border-top: 3px solid #5793D1;padding: 20px">
<div class="row">
<div class="col-sm-12">
    <h4 class="page-title">Attendance Updates</h4><hr>
</div>
</div>
<div class="row">

<div class="col-lg">
<h5>Name: <span style="color: red">${userInfo.name}</span></h5>
</div>





<div class="col-lg">
<h5>Registration no.: <span style="color: red">${userInfo.regno}</span></h5>
</div>

<div class="col-lg">
<h5>Department: <span style="color: red">${userInfo.dept}</span></h5>
</div>

</div>


</div>
            <div class="content" style="background-color: #fff;margin: 15px;border-top: 3px solid #5793D1">
           
          
                <div class="row">
                    <div class="col-sm-12">
                        <h4 class="page-title">Updates</h4>
                    </div>
                </div>
                <div class="row">
                   
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead style="background-color: #f7f7f7">
                                    <tr>
                                        <th style="width: 12vh">Year</th>
                                        <th style="width: 15vh">Month</th>
                                        <th style="width: 15vh">Week</th>
                                        <th style="width: 20vh">Status</th>
                                        <th>Activity</th>
                                       
                                    </tr>
                                </thead>
                                <tbody>

                              


                                <tr display: ${userInfo.Sept22bf}>
                                <td><a>2022</a></td>
                                <td>
                                    <h2><a>September</a></h2>
                                </td>
                                <td><a>Second</a></td>
                                <td>${userInfo.Sept22b}</td>
                                <td>${userInfo.Sept22bf}</td>
                                </tr>

                                <tr display: ${userInfo.Sept22af}>
                                <td><a>2022</a></td>
                                <td>
                                    <h2><a>September</a></h2>
                                </td>
                                <td><a>First</a></td>
                                <td>${userInfo.Sept22a}</td>
                                <td>${userInfo.Sept22af}</td>
                                </tr>


                                <tr display: ${userInfo.Aug22bf}>
                                <td><a>2022</a></td>
                                <td>
                                    <h2><a>August</a></h2>
                                </td>
                                <td><a>Second</a></td>
                                <td>${userInfo.Aug22b}</td>
                                <td>${userInfo.Aug22bf}</td>
                                </tr>

                                <tr display: ${userInfo.Aug22af}>
                                <td><a>2022</a></td>
                                <td>
                                    <h2><a>August</a></h2>
                                </td>
                                <td><a>First</a></td>
                                <td>${userInfo.Aug22a}</td>
                                <td>${userInfo.Aug22af}</td>
                                </tr>


                                <tr display: ${userInfo.Jul22bf}>
                                <td><a>2022</a></td>
                                <td>
                                    <h2><a>July</a></h2>
                                </td>
                                <td><a>Second</a></td>
                                <td>${userInfo.Jul22b}</td>
                                <td>${userInfo.Jul22bf}</td>
                                </tr>

                                <tr display: ${userInfo.Jul22af}>
                                <td><a>2022</a></td>
                                <td>
                                    <h2><a>July</a></h2>
                                </td>
                                <td><a>First</a></td>
                                <td>${userInfo.Jul22a}</td>
                                <td>${userInfo.Jul22af}</td>
                                </tr>

                              

                                <tr display: ${userInfo.Junf}>
                                <td><a>2022</a></td>
                                <td>
                                    <h2><a>June</a></h2>
                                </td>
                                <td><a>First</a></td>
                                <td>${userInfo.Jun}</td>
                                <td>${userInfo.Junf}</td>
                                </tr>


                                <tr display: ${userInfo.May2f}>
                                <td><a>2022</a></td>
                                <td>
                                    <h2><a>May</a></h2>
                                </td>
                                <td><a>Second</a></td>
                                <td>${userInfo.May2}</td>
                                <td>${userInfo.May2f}</td>
                                </tr>

                                <tr display: ${userInfo.May1f}>
                                <td><a>2022</a></td>
                                <td>
                                    <h2><a>May</a></h2>
                                </td>
                                <td><a>First</a></td>
                                <td>${userInfo.May1}</td>
                                <td>${userInfo.May1f}</td>
                                </tr>


                                <tr display: ${userInfo.Apr2f}>
                                <td><a>2022</a></td>
                                <td>
                                    <h2><a>April</a></h2>
                                </td>
                                <td><a>Second</a></td>
                                <td>${userInfo.Apr2}</td>
                                <td>${userInfo.Apr2f}</td>
                                </tr>

                                <tr display: ${userInfo.Apr1f}>
                                <td><a>2022</a></td>
                                <td>
                                    <h2><a>April</a></h2>
                                </td>
                                <td><a>First</a></td>
                                <td>${userInfo.Apr1}</td>
                                <td>${userInfo.Apr1f}</td>
                                </tr>


                                <tr display: ${userInfo.Mar2f}>
                                <td><a>2022</a></td>
                                <td>
                                    <h2><a>March</a></h2>
                                </td>
                                <td><a>Second</a></td>
                                <td>${userInfo.Mar2}</td>
                                <td>${userInfo.Mar2f}</td>
                                </tr>

                                <tr display: ${userInfo.Mar1f}>
                                <td><a>2022</a></td>
                                <td>
                                    <h2><a>March</a></h2>
                                </td>
                                <td><a>First</a></td>
                                <td>${userInfo.Mar1}</td>
                                <td>${userInfo.Mar1f}</td>
                                </tr>


                                <tr display: ${userInfo.Feb2f}>
                                <td><a>2022</a></td>
                                <td>
                                    <h2><a>February</a></h2>
                                </td>
                                <td><a>Second</a></td>
                                <td>${userInfo.Feb2}</td>
                                <td>${userInfo.Feb2f}</td>
                                </tr>

                                <tr display: ${userInfo.Feb1f}>
                                <td><a>2022</a></td>
                                <td>
                                    <h2><a>February</a></h2>
                                </td>
                                <td><a>First</a></td>
                                <td>${userInfo.Feb1}</td>
                                <td>${userInfo.Feb1f}</td>
                                </tr>

                                <tr display: ${userInfo.Jan2f}>
                                <td><a>2022</a></td>
                                <td>
                                    <h2><a>January</a></h2>
                                </td>
                                <td><a>Second</a></td>
                                <td>${userInfo.Jan2}</td>
                                <td>${userInfo.Jan2f}</td>
                                </tr>

                                <tr display: ${userInfo.Jan1f}>
                                <td><a>2022</a></td>
                                <td>
                                    <h2><a>January</a></h2>
                                </td>
                                <td><a>First</a></td>
                                <td>${userInfo.Jan1}</td>
                                <td>${userInfo.Jan1f}</td>
                                </tr>

                                <tr display: ${userInfo.Dec2f}>
                                <td><a>2021</a></td>
                                <td>
                                    <h2><a>December</a></h2>
                                </td>
                                <td><a>Second</a></td>
                                <td>${userInfo.Dec2}</td>
                                <td>${userInfo.Dec2f}</td>
                                </tr>

                                <tr display: ${userInfo.Dec1f}>
                                <td><a>2021</a></td>
                                <td>
                                    <h2><a>December</a></h2>
                                </td>
                                <td><a>First</a></td>
                                <td>${userInfo.Dec1}</td>
                                <td>${userInfo.Dec1f}</td>
                                </tr>

                                <tr display: ${userInfo.Nov2f}>
                                <td><a>2021</a></td>
                                <td>
                                    <h2><a>November</a></h2>
                                </td>
                                <td><a>Second</a></td>
                                <td>${userInfo.Nov2}</td>
                                <td>${userInfo.Nov2f}</td>
                                </tr>

                                <tr display: ${userInfo.Nov1f}>
                                <td><a>2021</a></td>
                                <td>
                                    <h2><a>November</a></h2>
                                </td>
                                <td><a>First</a></td>
                                <td>${userInfo.Nov1}</td>
                                <td>${userInfo.Nov1f}</td>
                                </tr>

                                <tr display: ${userInfo.Oct2f}>
                                <td><a>2021</a></td>
                                <td>
                                    <h2><a>October</a></h2>
                                </td>
                                <td><a>Second</a></td>
                                <td>${userInfo.Oct2}</td>
                                <td>${userInfo.Oct2f}</td>
                                </tr>

                                <tr display: ${userInfo.Oct1f}>
                                <td><a>2021</a></td>
                                <td>
                                    <h2><a>October</a></h2>
                                </td>
                                <td><a>First</a></td>
                                <td>${userInfo.Oct1}</td>
                                <td>${userInfo.Oct1f}</td>
                                </tr>

                                <tr display: ${userInfo.Sept2f}>
                                <td><a>2021</a></td>
                                <td>
                                    <h2><a>September</a></h2>
                                </td>
                                <td><a>Second</a></td>
                                <td>${userInfo.Sept2}</td>
                                <td>${userInfo.Sept2f}</td>
                                </tr>

                                <tr display: ${userInfo.Sept1f}>
                                <td><a>2021</a></td>
                                <td>
                                    <h2><a>September</a></h2>
                                </td>
                                <td><a>First</a></td>
                                <td>${userInfo.Sept1}</td>
                                <td>${userInfo.Sept1f}</td>
                                </tr>

                                    <tr display: ${userInfo.Aug2f}>
                                        <td><a>2021</a></td>
                                        <td>
                                            <h2><a>August</a></h2>
                                        </td>
                                        <td><a>Second</a></td>
                                        <td>${userInfo.Aug2}</td>
                                        <td>${userInfo.Aug2f}</td>
                                    </tr>

                                    <tr display: ${userInfo.Aug1f}>
                                        <td><a>2021</a></td>
                                        <td>
                                        <h2><a>August</a></h2>
                                        </td>   
                                        <td><a>First</a></td>                        
                                        <td>${userInfo.Aug1}</td>
                                        <td>${userInfo.Aug1f}</td>
                                    </tr>

                                    <tr display: ${userInfo.July3f}>
                                        <td><a>2021</a></td>
                                        <td>
                                        <h2><a>July</a></h2>
                                        </td>   
                                        <td><a>Third</a></td>                                  
                                        <td>${userInfo.July3}</td>   
                                        <td>${userInfo.July3f}</td>   
                                    </tr>


                                    <tr display: ${userInfo.July2f}>
                                    <td><a>2021</a></td>
                                    <td>
                                    <h2><a>July</a></h2>
                                    </td>    
                                    <td><a>Second</a></td>                             
                                    <td>${userInfo.July2}</td>
                                    <td>${userInfo.July2f}</td>   
                                    </tr>


                                   <tr display: ${userInfo.July1f}>
                                    <td><a>2021</a></td>
                                    <td>
                                    <h2><a>July</a></h2>
                                    </td>  
                                    <td><a>First</a></td>                        
                                    <td>${userInfo.July1}</td>
                                    <td>${userInfo.July1f}</td>   
                                </tr>

                               
                                </tbody>
                            </table>
                            
                        </div>
                     
                </div>
            </div>
           <br>
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
        userDetails.innerHTML = `<div id="content_container" class="container" style=" width: 47vh;
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





