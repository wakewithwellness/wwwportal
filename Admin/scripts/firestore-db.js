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
       phone:"",
       department:"",
       status:""

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
       <h3>${userInfo.phone}</h3>
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
          font-weight: 900;  text-transform: uppercase;letter-spacing: 1px; background-color: rgb(255, 255, 255);-webkit-background-clip: text;-webkit-text-fill-color: transparent;"> ADMIN PORTAL </h2>
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
              <a class="modal-trigger" href="#modal2">Forgot Password</a><br>
              
              <div id="button_container" style="width: 100%;height: 45px;background-color: cornflowerblue;color: #fff;margin-top: 15px;" >
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
    <link rel="stylesheet" type="text/css" href="./assets/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="./assets/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="./assets/css/style.css">

    


    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">


        <div class="container" >
        <div class="content">
        
            <div class="row">
          
          
          

                <div class="col-sm-7 col-6">
                    <h4 class="page-title" style="float:left;font-weight:500;">My Profile</h4>
                </div>
             
            </div>


           


        
           
            
            <div class="card-box profile-header">
                <div class="row">
                    <div class="col-md-12">
                        <div class="profile-view">
                        
                        
                                                <div class="profile-basic">
                                                            <div class="row">
                                                                <div class="col-md-5">
                                                                    <div class="profile-info-left" style="text-align:justify">
                                                                        <h3 class="user-name m-t-0 mb-0" style="color:white">${userInfo.name}</h3>
                                                                        <div class="staff-id">Registration ID : <span style="font-weight:normal;color:#009efb">${userInfo.regno}</span></div>
                                                                        <h4 class="text-muted" style="margin-top:5px"><span style="font-weight: lighter;">Department :</span><span style="font-weight:500;color:white"> ${userInfo.department}</span></h4>

                                                                        
                                                                
                                                                    </div>
                                                                </div>
                                                                            <div class="col-md-7">
                                                                            <button type="button" style="margin-left:10px;padding:7px;float: right;" data-toggle="modal" data-target="#exampleModal">
                                                                <i class="fa fa-sign-out" style="color:#df0f00"></i>
                                                            </button>
                                                                                            <ul class="personal-info" style="text-align:left">
                                                                                                <li>
                                                                                                    <span class="title">Phone:</span>
                                                                                                    <span class="text"><a>${userInfo.phone}</a></span>
                                                                                                </li>
                                                                                        
                                                                                                <li>
                                                                                                    <span class="title">Email:</span>
                                                                                                    <span class="text"><a><span class="__cf_email__">${userInfo.email}</span></a></span>
                                                                                                </li>
                                                                                        
                                                                                            
                                                                                            </ul>
                                                                            </div>
                                                        
                                                        </div>



                            </div>
                        </div>                        
                    </div>

                 


                </div>
            </div>
           
  
        </div><br> <br> 
        
        
        <div class="container" style="background-color: #e6e6e6; padding: 15px">
        <h3 style="text-align: center; color: black"><a href="https://5742452752542752752782000252154254.netlify.app/">Redirect to activities <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a></h3>
        </div>

      
                       
                        `
        

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
            font-weight: 900;  text-transform: uppercase;letter-spacing: 1px; background-color: rgb(255, 255, 255);-webkit-background-clip: text;-webkit-text-fill-color: transparent;"> ADMIN PORTAL </h2>
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
                <a class="modal-trigger" href="#modal2">Forgot Password</a><br>
                <div id="button_container" style="width: 100%;height: 45px;background-color: cornflowerblue;color: #fff;margin-top: 15px;" >
                
                 <button type="submit" style="width: 100%;height: 100%;background: transparent;color: inherit;font-family: Montserrat;letter-spacing: 1px;
                    font-weight: 900;font-size: 12px;cursor: pointer;align-items: center;">Login</button>
                    
                </div>
             </form>
            </div>
        </div></div>
    </div>
    </div></div>
    <div class="sidebar-overlay" data-reff=""></div>
    <script src="./assets/js/jquery-3.2.1.min.js"></script>
	<script src="./assets/js/popper.min.js"></script>
    <script src="./assets/js/bootstrap.min.js"></script>
    <script src="./assets/js/jquery.slimscroll.js"></script>
    <script src="./assets/js/Chart.bundle.js"></script>
    <script src="./assets/js/chart.js"></script>
    <script src="./assets/js/app.js"></script>
        `
    }
}





