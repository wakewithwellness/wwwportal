const userDetails  = document.querySelector('.userDetails')
const editProfile  = document.querySelector('#editProfile')


function createUserCollection(user){
   firebase.firestore().collection('users')
   .doc(user.uid)
   .set({
       uid:user.uid,
       name:user.displayName,
       email:user.email,
       regno:"",
       department:"",
       taskno:"",
       task:"",
       labeldate:"",
       date:""

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
        .collection('users')
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
                            <a href="task.html"><i class="fa fa-money"></i> <span>Task Updates</span></a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>

        




        <div class="page-wrapper">
        <div class="content">
            <div class="row">
                <div class="col-sm-7 col-6">
                    <h4 class="page-title" ></h4>
                </div>

                <div class="col-sm-5 col-6 text-right m-b-30">
                    <a href="main.html" style="background-color:cornflowerblue;padding:10px;color:white;border"> <i class="fa fa-home"></i> Home</a>
                    
   
                </div>
            </div>
            <div class="card-box profile-header" style="box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.336);">
                <div class="row">
                    <div class="col-md-12">
                     
                  
                            
                            <div class="profile-basic" >
                                <div class="row">
                                    <div class="col-md-5">
                                        <div class="profile-info" style="text-align:left">
                                            <h3 class="user-name m-t-0 mb-0"><span style="font-weight:normal">Name :</span> ${userInfo.name}</h3>

  <br>
  Registration no : <span style="font-weight:bolder;color:tomato"> ${userInfo.regno}</span><br>
                                            Department : <span style="font-weight:bolder"> ${userInfo.department}</span><br>
                                            
                                    
                                        </div>
                                    </div>
                               </div>
                            </div>

                                              
                    </div>
                </div>
            </div>

   
        </div>


        <div class="row">
        <div class="col-sm-12">
            <h4 class="page-title">Tasks Updates</h4>
        </div>
    </div>

        <div class="row">
        <div class="col-lg-12">
            <div class="table-responsive">
                <table class="table table-striped custom-table mb-0">
                    <thead>
                        <tr style="text-align:left">
                            <th>Interns</th>
                            <th>Department</th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                            <th>6</th>
                            <th>7</th>
                            <th>8</th>
                            <th>9</th>
                            <th>10</th>
                   
                        </tr>
                    </thead>
                    <tbody>

                    <tr>
                            <td>Kamalika Barman</td>
                            <td>Marketing</td>
                            <td><i class="fa fa-check text-success"></i> </td>
                            <td><i class="fa fa-check text-success"></i> </td>
                            <td><i class="fa fa-check text-success"></i> </td>
                            <td><i class="fa fa-check text-success"></i> </td>
                            <td><i class="fa fa-check text-success"></i> </td>
                            <td><i class="fa fa-check text-success"></i> </td>
                            <td><i class="fa fa-check text-success"></i> </td>
                            <td><i class="fa fa-check text-success"></i> </td>
                            <td><i class="fa fa-check text-success"></i> </td>
                           
                          
                        </tr>
                        
                        <tr>
                            <td>Dibyangana Sarmah</td>
                            <td>Marketing</td>
                            <td><i class="fa fa-check text-success"></i> </td>
                            <td><i class="fa fa-check text-success"></i> </td>
                            <td><i class="fa fa-check text-success"></i> </td>
                            <td><i class="fa fa-check text-success"></i> </td>
                            <td><i class="fa fa-check text-success"></i> </td>
                            <td><i class="fa fa-check text-success"></i> </td>
                            <td><i class="fa fa-close text-danger"></i> </td>
                            <td><i class="fa fa-close text-danger"></i> </td>
                            <td><i class="fa fa-close text-danger"></i> </td>
                          
                        </tr>
                        <tr>
                            <td>Gurbaaz Singh Dhaliwal</td>
                            <td>Marketing</td>
                            <td><i class="fa fa-check text-success"></i> </td>
                            <td><i class="fa fa-check text-success"></i> </td>
                            <td><i class="fa fa-check text-success"></i> </td>
                            <td><i class="fa fa-check text-success"></i> </td>
                            <td><i class="fa fa-check text-success"></i> </td>
                            <td><i class="fa fa-check text-success"></i> </td>
                            <td><i class="fa fa-close text-danger"></i> </td>
                            <td><i class="fa fa-close text-danger"></i> </td>
                            <td><i class="fa fa-close text-danger"></i> </td>
                          
                        </tr>
                       

                        <tr>
                        <td>Mohini Mitra</td>
                        <td>Design</td>
                        <td><i class="fa fa-check text-success"></i> </td>
                        <td><i class="fa fa-check text-success"></i> </td>
                        <td><i class="fa fa-check text-success"></i> </td>
                        <td><i class="fa fa-check text-success"></i> </td>
                        <td><i class="fa fa-check text-success"></i> </td>
                 
                    </tr>

                    <tr>
                    <td>Shalinee Buragohain</td>
                    <td>Design</td>
                    <td><i class="fa fa-check text-success"></i> </td>
                    <td><i class="fa fa-check text-success"></i> </td>
                    <td><i class="fa fa-check text-success"></i> </td>
                    <td><i class="fa fa-check text-success"></i> </td>
                    <td><i class="fa fa-check text-success"></i> </td>
             
                </tr>

                        <tr>
                            <td>Shahrukh Ahmed</td>
                            <td>Design</td>
                            <td><i class="fa fa-check text-success"></i> </td>
                            <td><i class="fa fa-check text-success"></i> </td>
                            <td><i class="fa fa-close text-danger"></i> </td>
                            <td><i class="fa fa-check text-success"></i> </td>
                            <td><i class="fa fa-close text-danger"></i> </td>
                     
                        </tr>

                       

                        <tr>
                            <td>Vishal Narzary</td>
                            <td>Design</td>
                            <td><i class="fa fa-check text-success"></i> </td>
                            <td><i class="fa fa-check text-success"></i> </td>
                            <td><i class="fa fa-check text-success"></i> </td>
                            <td><i class="fa fa-close text-danger"></i> </td>
                            <td><i class="fa fa-close text-danger"></i> </td>
                     
                        </tr>

                        <tr>
                            <td>Afjal Shaik</td>
                            <td>Design</td>
                            <td><i class="fa fa-check text-success"></i> </td>
                            <td><i class="fa fa-close text-danger"></i> </td>
                            <td><i class="fa fa-close text-danger"></i> </td>
                            <td><i class="fa fa-close text-danger"></i> </td>
                            <td><i class="fa fa-close text-danger"></i> </td>
                            
                        </tr>
                      
                     
                        <tr>
                            <td>Dhruv Bisht</td>
                            <td>Design</td>
                            <td><i class="fa fa-check text-success"></i> </td>
                            <td><i class="fa fa-close text-danger"></i> </td>
                            <td><i class="fa fa-close text-danger"></i> </td>
                            <td><i class="fa fa-close text-danger"></i> </td>
                            <td><i class="fa fa-close text-danger"></i> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

 
                       
                        `
                        editProfile["name"].value = userInfo.name
                        editProfile["profileEmail"].value = userInfo.email
                        editProfile["regno"].value = userInfo.regno
                       
                        editProfile["department"].value = userInfo.department
           

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













