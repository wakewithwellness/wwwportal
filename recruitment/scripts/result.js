const userDetails  = document.querySelector('.userDetails')
const editProfile  = document.querySelector('#editProfile')


function createUserCollection(user){
   firebase.firestore().collection('test')
   .doc(user.uid)
   .set({
       uid:user.uid,
       name:user.displayName,
       email:user.email,
  
     

   })
}


async function getuserInfo(userID){
    if(userID){
      const userInfoSnap = await  firebase.firestore()
    .collection('test')
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
        .collection('test')
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

    

    


    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">

    <style>
    .pic {
        height: 100%;
        width: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        -o-object-position: center;
        object-position: center;
      }

      #cameraicon{
        margin-right: 22px
      }

  

      @media (max-width: 557px) {
        #cameraicon{
          margin-right: -10px
        }

        
      }
    </style>
    
          
        <br>
        <div class="content" style="background-color: grey; margin-top:-30px;padding-right:20px; color:white">
        <div class="text-right"><p style="text-transform: uppercase">${userInfo.name} - ${userInfo.email}</p></div>
      
        
        </div>


        <div class="container-fluid">
        <div class="row">


        <div class="col-lg-8">
                        <div class="content" style="background-color: #fff;border-top: 3px solid #333333;padding: 20px;border-radius: 5px">
                        <h5>Your answers:</h5><hr><br>
                                <form name="quiz" onsubmit="questions(event)" id="questionsform">
                                    <label for="q1" style="font-size:14px;color:red">1. Why do you want to work in recruitment?</label>
                                    <p style="margin-left:8px"><i>Answer:</i> ${userInfo.q1}</p>
                                      <br>
                                      <label for="q2" style="font-size:14px;color:red">2. What do you think is key to a successful career in recruitment?</label>
                                      <p style="margin-left:8px"><i>Answer:</i> ${userInfo.q2}</p>
                                      <br>
                                      <label for="q3" style="font-size:14px;color:red">3. How would you go about generating new business?</label>
                                      <p style="margin-left:8px"><i>Answer:</i> ${userInfo.q3}</p>
                                      <br>
                                      <label for="q4" style="font-size:14px;color:red">4. How would you deal with daily setbacks?</label>
                                      <p style="margin-left:8px"><i>Answer:</i> ${userInfo.q4}</p>
                                      <br>
                                      <label for="q5" style="font-size:14px;color:red">5. Which other recruitment companies have you applied for jobs with?</label>
                                      <p style="margin-left:8px"><i>Answer:</i> ${userInfo.q5}</p>
                                
                                </form><br><hr>
<br>
                                <button class="btn btn-success" onclick="location.href='./home.html'"><i class="fa fa-home" aria-hidden="true"></i> Home</button>
                        </div>

        </div>

        <div class="col-lg-4">
        <div class="content" style="background-color: #fff;border-top: 3px solid #333333;padding: 20px;border-radius: 5px">
        <h5>Contact Us</h5> <hr>
        <p><i class="fa fa-envelope" aria-hidden="true"></i> Email: <strong><a style="text-decoration: none;" href="mailto:wakewithwellness@gmail.com">wakewithwellness@gmail.com</a></strong></p>
        <p><i class="fa fa-phone-square" aria-hidden="true"></i> Contact: <strong><a style="text-decoration: none;" href="tel:7086952212">7086952212</a></strong></p>
        </div>
        </div>






        </div>

        

                   


        </div>








     


<br><br>





</div>


    </div>
        </div><br>
        

      
                       
                        `
                        editProfile["name"].value = userInfo.name
                        editProfile["profileEmail"].value = userInfo.email
                        editProfile["phoneno"].value = userInfo.phone
                        editProfile["whatsapp"].value = userInfo.whatsapp
                        editProfile["blood"].value = userInfo.blood
                        editProfile["college"].value = userInfo.college
                      
                  


                   

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








