const userDetails  = document.querySelector('.userDetails')
const pass1  = document.querySelector('#pass1')
const pass2  = document.querySelector('#pass2')



function createUserCollection(user){
   firebase.firestore().collection('EntryPass')
   .doc(user.uid)
   .set({
       uid:user.uid,
       name:user.displayName,
       email:user.email,
       regno:"",
       whatsapp:"",
    

       

   })
}


async function getuserInfo(userID){
    if(userID){
      const userInfoSnap = await  firebase.firestore()
    .collection('EntryPass')
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
      userDetails.innerHTML = ` <div class="container-fluid" style="max-width: 80vh;margin-top:180px">
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
      `
    
       
    }


}



async function getuserInfoRealtime(userID){
    if(userID){
      const userdocRef = await  firebase.firestore()
        .collection('EntryPass')
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
    
<div class="container-fluid">
<div class="container" style="background-color: #fff;border-top: 3px solid #198754;padding: 20px;border-radius:5px; margin-top:8vh">
<div class="row">
<div class="col-sm-12">
    <h4 class="page-title">WWW Member Details</h4><hr>
</div>
</div>
<div class="row">
<div class="col-lg">
<h6 style="color: grey">Name: <strong style="color: #198754">${userInfo.name}</strong> </h6>
</div>
<div class="col-lg">
<h6 style="color: grey">Registration no.: <strong style="color: #198754">${userInfo.regno}</strong></h6>
</div>
</div>
</div>



            <div class="container" style="background-color: #fff;border-top: 3px solid #198754;border-radius:5px;margin-top:2vh">
           
          
                <div class="row">
                    <div class="col-sm-12">
                        <h4 class="page-title" style="padding:10px">Entry Pass Registrations</h4>
                       
                    </div>
                </div>
  
           
           

                <div class="row">
                   
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead style="background-color: #f7f7f7">
                                    <tr>
                                        <th>Pass no.</th>
                                        <th style="min-width: 25vh">Name</th>
                                    
                                        <th>Email</th>
                                        <th>Whatsapp</th>
                                        <th style="text-align: center">Payment Mode</th>
                                        <th style="text-align: center">Payment Status</th>
                                        <th style="text-align: center">E-Pass No.</th>
                                   
                                    </tr>
                                </thead>
                               
                                <tbody>
                                <tr>
                                <td><a>1</a></td>
                                <td><h5 style="display:${userInfo.h1}"><a>${userInfo.name1}</a></h5></td>
                                <td><h5 style="display:${userInfo.h1}">${userInfo.email1}</h5></td>
                                <td><h5 style="display:${userInfo.h1}">${userInfo.contact1}<h5></td>
                                <td style="text-align: center"><h5 style="display:${userInfo.h1}">${userInfo.mode1}<h5></td>
                                <td style="text-align: center; color: green"><h5 style="display:${userInfo.h1};font-weight: 700">${userInfo.status1}<h5></td>
                                <td style="text-align: center; color: orange"><h5 style="display:${userInfo.h1};font-weight: 700">${userInfo.t1}<h5></td>
                                </tr>     
                                  

                                <tr>
                                <td><a>2</a></td>
                                <td><h5 style="display:${userInfo.h3}"><a>${userInfo.name2}</a></h5></td>
                                <td><h5 style="display:${userInfo.h3}">${userInfo.email2}</h5></td>
                                <td><h5 style="display:${userInfo.h3}">${userInfo.contact2}<h5></td>
                                <td style="text-align: center"><h5 style="display:${userInfo.h3}">${userInfo.mode2}<h5></td>
                                <td style="text-align: center; color: green"><h5 style="display:${userInfo.h3};font-weight: 700">${userInfo.status2}<h5></td>
                                <td style="text-align: center; color: orange"><h5 style="display:${userInfo.h3};font-weight: 700">${userInfo.t2}<h5></td>
                                </tr>    

                                <tr>
                                <td><a>3</a></td>
                                <td><h5 style="display:${userInfo.h5}"><a>${userInfo.name3}</a></h5></td>
                                <td><h5 style="display:${userInfo.h5}">${userInfo.email3}</h5></td>-
                                <td><h5 style="display:${userInfo.h5}">${userInfo.contact3}<h5></td>
                                <td style="text-align: center"><h5 style="display:${userInfo.h5}">${userInfo.mode3}<h5></td>
                                <td style="text-align: center; color: green"><h5 style="display:${userInfo.h5};font-weight: 700">${userInfo.status3}<h5></td>
                                <td style="text-align: center; color: orange"><h5 style="display:${userInfo.h5};font-weight: 700">${userInfo.t3}<h5></td>
                                </tr>   
                           
                                     
                                
                               
                                </tbody>
                               
                            </table>
                          
                           
                        </div>  
                     
                </div>
            </div>





            <div class="container" style="background-color: #fff;border-top: 3px solid #198754;padding: 20px;border-radius:5px; margin-top:2vh">
                    <div class="row">
                    <div class="col-sm-12">
                        <h4 class="page-title">Registration Form</h4><hr>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-lg"><br>
                    <h5 style="background-color:#198754;color:white;padding:8px;margin-bottom:12px">Pass 1</h5>
                    <h5 style="color:red; text-align:center;display:${userInfo.h1}">Pass 1 Locked</h5>
                    <form onsubmit="updatepassone(event)" id="passone" style="display:${userInfo.h2}">
                    <div class="form-group">
                   
                    <input type="text" class="form-control" id="name1"  placeholder="Enter Fullname" required>
                   </div>

                    <div class="form-group">
                    
                      <input type="email" class="form-control" id="email1"  placeholder="Enter email" required>
                    </div>
                    <div class="form-group">
               
                      <input type="tel" class="form-control" id="contact1" placeholder="Contact no." required>
                    </div>

                    <div class="form-group">
                    <label for="exampleInputPassword1">Mode of Payment</label>
                    <select class="form-control" id="mode1" required>
                    <option value="UPI">UPI</option>
                    <option value="Cash">Cash</option>
                    </select>
                    </div>

                    <div class="form-group" hidden>
                    <label for="exampleInputPassword1">Status of Payment</label>
                    <select class="form-control" id="status1">
                    <option value="Paid">Paid</option>
                    </select>
                    </div>

                    <div class="form-group" hidden>
                  
                    <select class="form-control" id="h1">
                    <option value="block">none</option>
                    </select>
                    </div>

                    <div class="form-group" hidden>
                  
                    <select class="form-control" id="h2">
                    <option value="none">none</option>
                    </select>
                    </div>

                    <div class="form-group">
                    <label style="font-size:12px">
                      <input type="checkbox" name="declaration" required> I'll exercise consideration in my speech and actions<span style="color: red;">*</span></label>
                    </div>

                    <div class="form-group">
                    <label style="font-size:12px">
                      <input type="checkbox" name="declaration" required> I’ll take complete responsibility in case of any property damage due to personal misconduct and will pay the compensations if any<span style="color: red;">*</span></label>
                    </div>
                   
                 
                    <button type="submit" class="btn btn-success">Submit</button>
                  </form>
                    </div>



                    <div class="col-lg" ><br>
                  
                    <h5 style="background-color:#198754;color:white;padding:8px;margin-bottom:12px">Pass 2</h5>
                    <p style="color:grey; text-align:center;display:${userInfo.h2}">Pass 2 not yet opened</p>
                    <h5 style="color:red; text-align:center;display:${userInfo.h3}">Pass 2 Locked</h5>
                    <form onsubmit="updatepasstwo(event)" id="passtwo" style="display:${userInfo.h1}" ${userInfo.h4}>
                    <div class="form-group">
                   
                    <input type="text" class="form-control" id="name2"  placeholder="Enter Fullname" required>
                   </div>

                    <div class="form-group">
                      <input type="email" class="form-control" id="email2"  placeholder="Enter email" required>
                    </div>
                    <div class="form-group">
                      <input type="tel" class="form-control" id="contact2" placeholder="Contact no." required>
                    </div>

                    <div class="form-group">
                    <label for="exampleInputPassword1">Mode of Payment</label>
                    <select class="form-control" id="mode2" required>
                    <option value="UPI">UPI</option>
                    <option value="Cash">Cash</option>
                    </select>
                    </div>

                    <div class="form-group" hidden>
                    <label for="exampleInputPassword1">Status of Payment</label>
                    <select class="form-control" id="status2" required>
                    <option value="Paid">Paid</option>
                    </select>
                    </div>

                    
                    <div class="form-group" hidden>
                    <select class="form-control" id="h3">
                    <option value="block">block</option>
                    </select>
                    </div>

                    <div class="form-group" hidden>
                    <select class="form-control" id="h4">
                    <option value="hidden">none</option>
                    </select>
                    </div>


                    <div class="form-group" hidden>
                    <select class="form-control" id="h5">
                    <option value="hidden">none</option>
                    </select>
                    </div>

                    <div class="form-group">
                    <label style="font-size:12px">
                      <input type="checkbox" name="declaration" required> I'll exercise consideration in my speech and actions<span style="color: red;">*</span></label>
                    </div>

                    <div class="form-group">
                    <label style="font-size:12px">
                      <input type="checkbox" name="declaration" required> I’ll take complete responsibility in case of any property damage due to personal misconduct and will pay the compensations if any<span style="color: red;">*</span></label>
                    </div>
                 
                    <button type="submit" class="btn btn-success">Submit</button>
                  </form>
                    </div>










                    <div class="col-lg" ><br>
                  
                    <h5 style="background-color:#198754;color:white;padding:8px;margin-bottom:12px">Pass 3</h5>
                    <p style="color:grey; text-align:center;display:${userInfo.h4}" ${userInfo.h4}>Pass 3 not yet opened</p>
                    <h5 style="color:red; text-align:center;display:${userInfo.h5}">Pass 3 Locked</h5>
                    <form onsubmit="updatepassthree(event)" id="passthree" style="display:${userInfo.h3}" ${userInfo.h5}>
                    <div class="form-group">
                   
                    <input type="text" class="form-control" id="name3"  placeholder="Enter Fullname" required>
                   </div>

                    <div class="form-group">
                    
                      <input type="email" class="form-control" id="email3"  placeholder="Enter email" required>
                    </div>
                    <div class="form-group">
               
                      <input type="tel" class="form-control" id="contact3" placeholder="Contact no." required>
                    </div>

                    <div class="form-group">
                    <label for="exampleInputPassword1">Mode of Payment</label>
                    <select class="form-control" id="mode3" required>
                    <option value="UPI">UPI</option>
                    <option value="Cash">Cash</option>
                    </select>
                    </div>

                    <div class="form-group" hidden>
                    <label for="exampleInputPassword1">Status of Payment</label>
                    <select class="form-control" id="status3" required>
                    <option value="Paid">Paid</option>
                    </select>
                    </div>

                    
                    <div class="form-group" hidden>
                  
                    <select class="form-control" id="h5">
                    <option value="block">block</option>
                    </select>
                    </div>

                    <div class="form-group" hidden>
                  
                    <select class="form-control" id="h4">
                    <option value="none">none</option>
                    </select>
                    </div>

                    <div class="form-group">
                    <label style="font-size:12px">
                      <input type="checkbox" name="declaration" required> I'll exercise consideration in my speech and actions<span style="color: red;">*</span></label>
                    </div>

                    <div class="form-group">
                    <label style="font-size:12px">
                      <input type="checkbox" name="declaration" required> I’ll take complete responsibility in case of any property damage due to personal misconduct and will pay the compensations if any<span style="color: red;">*</span></label>
                    </div>
                 
                    <button type="submit" class="btn btn-success">Submit</button>
                  </form>
                    </div>




                    </div>
                    </div>


                    </div>
           
  <br>
                        `
  

                }    
             }
        })


    }else{
        userDetails.innerHTML = ` <div class="container-fluid" style="max-width: 80vh;margin-top:180px">
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
    <script src="../assets/js/jquery-3.2.1.min.js"></script>
	<script src="../assets/js/popper.min.js"></script>
    <script src="../assets/js/bootstrap.min.js"></script>
    <script src="../assets/js/jquery.slimscroll.js"></script>
    <script src="../assets/js/Chart.bundle.js"></script>
    <script src="../assets/js/chart.js"></script>
    <script src="../assets/js/app.js"></script>
        `
    }
}


function updatepassone(event){
    event.preventDefault()
    var name1 = document.getElementById('name1').value
    var email1 = document.getElementById('email1').value
    var contact1 = document.getElementById('contact1').value
    var mode1 = document.getElementById('mode1').value
    var status1 = document.getElementById('status1').value
    var h1 = document.getElementById('h1').value
    var h2 = document.getElementById('h2').value
    var userRef = firebase.firestore().collection('EntryPass').doc(firebase.auth().currentUser.uid);
  
    var setWithMerge = userRef.set({
        name1:name1,
        email1:email1,
        contact1:contact1,
        mode1:mode1,
        status1:status1,
        h1:h1,
        h2:h2
  
    },{ merge: true}).then(()=>{
     
  
       // Show alert
       M.toast({html:`<div><i style="font-size: 20px" class="fa fa-check-circle" aria-hidden="true"></i> Registered successfully</div>`,classes:"green"})
  
  
  
   // Clear form
   document.getElementById('passone').reset();
  
    }).catch((err) => {
      console.log(err)
      M.toast({html:`<div><i style="font-size: 20px" class="fa fa-exclamation-triangle" aria-hidden="true"></i>Error ! Registration failed</div>`,classes:"red"})
    });
  }
  



function updatepasstwo(event){
    event.preventDefault()
    var name2 = document.getElementById('name2').value
    var email2 = document.getElementById('email2').value
    var contact2 = document.getElementById('contact2').value
    var mode2 = document.getElementById('mode2').value
    var status2 = document.getElementById('status2').value
    var h3 = document.getElementById('h3').value
    var h4 = document.getElementById('h4').value
    var userRef = firebase.firestore().collection('EntryPass').doc(firebase.auth().currentUser.uid);
  
    var setWithMerge = userRef.set({
        name2:name2,
        email2:email2,
        contact2:contact2,
        mode2:mode2,
        status2:status2,
        h3:h3,
        h4:h4
  
    },{ merge: true}).then(()=>{
     
  
       // Show alert
       M.toast({html:`<div><i style="font-size: 20px" class="fa fa-check-circle" aria-hidden="true"></i> Registered successfully</div>`,classes:"green"})
  
  
  
   // Clear form
   document.getElementById('passtwo').reset();
  
    }).catch((err) => {
      console.log(err)
      M.toast({html:`<div><i style="font-size: 20px" class="fa fa-exclamation-triangle" aria-hidden="true"></i>Error ! Registration failed</div>`,classes:"red"})
    });
  }
  








  function updatepassthree(event){
    event.preventDefault()
    var name3 = document.getElementById('name3').value
    var email3 = document.getElementById('email3').value
    var contact3 = document.getElementById('contact3').value
    var mode3 = document.getElementById('mode3').value
    var status3 = document.getElementById('status3').value
    var h5 = document.getElementById('h5').value
    var h4 = document.getElementById('h4').value
    var userRef = firebase.firestore().collection('EntryPass').doc(firebase.auth().currentUser.uid);
  
    var setWithMerge = userRef.set({
        name3:name3,
        email3:email3,
        contact3:contact3,
        mode3:mode3,
        status3:status3,
        h5:h5,
        h4:h4
   
  
    },{ merge: true}).then(()=>{
     
  
       // Show alert
       M.toast({html:`<div><i style="font-size: 20px" class="fa fa-check-circle" aria-hidden="true"></i> Registered successfully</div>`,classes:"green"})
  
  
  
   // Clear form
   document.getElementById('passthree').reset();
  
    }).catch((err) => {
      console.log(err)
      M.toast({html:`<div><i style="font-size: 20px" class="fa fa-exclamation-triangle" aria-hidden="true"></i>Error ! Registration failed</div>`,classes:"red"})
    });
  }
  










