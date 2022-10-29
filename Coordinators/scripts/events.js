const userDetails  = document.querySelector('.userDetails')
const editProfile  = document.querySelector('#editProfile')


function createUserCollection(user){
   firebase.firestore().collection('events')
   .doc(user.uid)
   .set({
       uid:user.uid,
       name:user.displayName,
       email:user.email,
       department:"",
       phone:"",
       i1:"",
       i2:"",
       hide:""

       

   })
}


async function getuserInfo(userID){
    if(userID){
      const userInfoSnap = await  firebase.firestore()
    .collection('events')
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
      `
    
       
    }


}



async function getuserInfoRealtime(userID){
    if(userID){
      const userdocRef = await  firebase.firestore()
        .collection('events')
        .doc(userID)
        userdocRef.onSnapshot((doc)=>{
            if(doc.exists){
                 const userInfo = doc.data()
                    if(userInfo){
                        userDetails.innerHTML = `

                       

                        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="../MembersPanel/assets/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="../MembersPanel/assets/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="../MembersPanel/assets/css/style.css">


    

    <div class="sidebar" id="sidebar">
    <div class="sidebar-inner slimscroll">
        <div id="sidebar-menu" class="sidebar-menu">

            <ul>
            <li class="menu-title">Main</li><hr>
            <li>
              <a href="main.html"><i class="fa fa-home"></i> <span>Home</span></a>
          </li>
      
          
          <li>
          <a href="activities.html"><i class="fa fa-bell-o"></i> <span>Notifications</span></a>
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
<h5>Name: <span style="color: #16151a">${userInfo.name}</span></h5>
</div>





<div class="col-lg">
<h5>Registration no.: <span style="color: #16151a">${userInfo.regno}</span></h5>
</div>

<div class="col-lg">
<h5>Department: <span style="color: #16151a">${userInfo.dept}</span></h5>
</div>

</div>


</div>
            <div class="content" style="background-color: #fff;margin: 15px;border-top: 3px solid #03b1fc;border-radius:5px">
           
          
                <div class="row">
                    <div class="col-sm-12">
                        <h4 class="page-title">Events</h4>
                        <p style="color: red;font-size:12px">Note: Minimum attendance for the event will be 70%</p>
                    </div>
                </div>
                <div class="row">
                   
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead style="background-color: #f7f7f7">
                                    <tr>
                                        <th>Slno</th>
                                        <th style="min-width: 25vh">Event Name</th>
                                    
                                        <th style="min-width: 20vh">Event Date</th>
                                        <th style="min-width: 20vh">Venue</th>
                                        <th style="text-align: center">Status</th>
                                        <th style="text-align: center">Certificate</th>
                                        <th style="text-align: center">Registration</th>
                                       
                                    </tr>
                                </thead>
                                <tbody>

                                <tr>
                                <td><a>6</a></td>
                                <td><h2><a>Swachh Prayaakh - Cleanliness Drive 2</a></h2></td>
                                <td>6th November 2022</td>
                                <td>Yet to decide</td>
                                <td style="text-align: center;font-weight: 500;color: red"><span style="color: ${userInfo.color2}">${userInfo.event2}</span></td>
                                <td style="text-align: center"><a href="${userInfo.e2}" style="display:${userInfo.e2}"><i class="fa fa-download" aria-hidden="true"></i></a></td>
                                <td  style="text-align: center">

                                <form onsubmit="registerevent1(event)" id="registereventform">
                                <select id="event" class="form-control">
                                <option value='Registered'>Register</option>
                                <option value='Cancelled'>Cancel</option></select>

                                <select id="color" name="color" hidden class="form-control">
                                <option value='green'>green</option>
                                <option value="orange">red</option></select>


                                <button id="send" type="submit" style="width: 100%; margin-top: 3px" class="btn btn-dark">Confirm</button>
                                </form>

                                </td>
                            </tr>
                                

                               
                                    <tr>
                                        <td><a>5</a></td>
                                        <td><h2><a>Swachh Prayaakh - Cleanliness Drive 1</a></h2></td>
                                        <td>9th October 2022</td>
                                        <td>Uzanbazar ghat</td>
                                        <td style="text-align: center;font-weight: 500; color: red;">${userInfo.event1}</td>
                                        <td style="text-align: center"><a href="${userInfo.e1}" style="display:${userInfo.e1}"><i class="fa fa-download" aria-hidden="true"></i></a></td>
                                        <td style="text-align: center; color: red">Registration closed</td>
                                    </tr>

                                    <tr>
                                        <td><a>4</a></td>
                                        <td><h2><a>Wellness Drive - Medical & Health CheckUp</a></h2></td>
                                        <td>14th March 2021</td>
                                        <td>Jesthakunja Oldage Home, Dhemaji</td>
                                        <td style="text-align: center; color: red;">-</td>
                                        <td style="text-align: center">-</td>
                                        <td style="text-align: center; color: red">Registration closed</td>
                                    </tr>

                                    <tr>
                                        <td><a>3</a></td>
                                        <td><h2><a>Wellness Drive - Clothes & Books Donation</a></h2></td>
                                        <td>20th February 2022</td>
                                        <td>Enajori Children home, Dhemaji</td>
                                        <td style="text-align: center; color: red;">-</td>
                                        <td style="text-align: center">-</td>
                                        <td style="text-align: center; color: red">Registration closed</td>
                                    </tr>

                                    <tr>
                                        <td><a>2</a></td>
                                        <td><h2><a>Prabhati - A Dawn of a Vital Outlook</a></h2></td>
                                        <td>29th November 2021</td>
                                        <td>Jalukbari Girls High School</td>
                                        <td style="text-align: center; color: red;">-</td>
                                        <td style="text-align: center">-</td>
                                        <td style="text-align: center; color: red">Registration closed</td>
                                   </tr>

                                    <tr>
                                        <td><a>1</a></td>
                                        <td><h2><a>Wellness Drive</a></h2></td>
                                        <td>26th September 2021</td>
                                        <td>Paltan bazar</td>
                                        <td style="text-align: center; color: red;">-</td>
                                        <td style="text-align: center">-</td>
                                        <td style="text-align: center; color: red">Registration closed</td>
                                   </tr>
                          

                               
                                </tbody>
                               
                            </table>
                          
                           
                        </div>  
                     
                </div>
            </div>
           
        </div>
                       
                        `
                    

                }    
             }
        })


    }else{
        userDetails.innerHTML = ` <div class="container-fluid" style="max-width: 80vh;margin-top:180px">
        <div class="card" style="border-top: 3px solid #03b1fc">
        <div class="card-body" style="text-align: center">
        <h5 class="card-title" style="text-align: center; color: #03b1fc; font-weight: 700; font-size:25px">COORDINATOR PORTAL</h5><hr>
<br>
        <form autocomplete="off" onsubmit="login(event)">
            <input type="email" class="form-control" id="loginEmail" placeholder="Email" style="width: 98%;
            height: 40px;padding-left:8px;font-size: 13px;border: 1px solid #e8e8e8; border-radius:5px">

            <input type="password" class="form-control" id="loginPassword" placeholder="Password" style="width: 98%;
            height: 40px;padding-left:8px;font-size: 13px;border: 1px solid #e8e8e8; border-radius:5px; margin-top:5px">
            <br>
            <div style="text-align:left"> <a style="text-decoration: none; color: #03b1fc; font-size: 12px; margin-left: 10px" class="modal-trigger" href="#modal2">Forgot Password</a></div>
            <br>
            <button type="submit" class="btn" style="background-color:#03b1fc;color: #fff; float: left"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</button>
            
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
        `
    }
}





function registerevent1(event){
    event.preventDefault()
    var event2 = document.getElementById('event').value
    var color2 = document.getElementById('color').value

    var userRef = firebase.firestore().collection('events').doc(firebase.auth().currentUser.uid);
  
    var setWithMerge = userRef.set({
        event2:event2,
        color2:color2

   
  
    },{ merge: true}).then(()=>{
     
  
       // Show alert
       M.toast({html:`<div><i style="font-size: 20px" class="fa fa-check-circle" aria-hidden="true"></i> Registered successfully</div>`,classes:"green"})

   // Clear form
   document.getElementById('registereventform').reset();
  
    }).catch((err) => {
      console.log(err)
      M.toast({html:`<div><i style="font-size: 20px" class="fa fa-exclamation-triangle" aria-hidden="true"></i>Error ! Something went wrong</div>`,classes:"red"})
    });
  }
