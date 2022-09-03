


db.collection('feedbacks').orderBy('status').get().then((s) => {
     $("#station").html(""); // This will empty your station button
     $("#station_box").html(""); // This will empty your station box
     var n = 0;
     s.forEach(function(x){
        $("#feedbackk").append(`
 
   
  
                <div class="content" id="feeditem" style="background-color: #fff;margin: 15px;border-top: 3px solid #0d6efd;padding: 3px;border-radius: 5px;padding: 15px">
                <div class="row">
                <div class="col-md-12">
               

                <h2 id="namefeed" class="mb-0 text"`+ n+`">`+ x.data().name + `  <span style="color: red; font-size: 16px">`+ x.data().status +`</span></h4><hr>
                   <div class="container-fluid" style="margin-left: 4px">
                   
                   <div class="row" style="font-size: 14px">
                   <div class="col-lg">
                   <p>E-mail: <span style="color:#0d6efd">`+ x.data().email +`</span></p>
                   </div>
                   <div class="col-lg">
                   <p>Registration no: <span style="color:#0d6efd">`+ x.data().regno +`</span></p>
                   </div>
                   </div>
                
                 
                   <div style="margin-left: -4px;" `+ x.data().hide +` >
                   <hr>
                   <p>1. Are the tasks or events held to contribute to the development of society? : <span style="color:#0d6efd">`+ x.data().f1 +`</span></p>
                   <p>2. Is WWW helping in developing your social and management skills ? : <span style="color:#0d6efd">`+ x.data().f2 +`</span></p>
                   <p>3. Is WWW meeting your expectations as a social welfare organization? : <span style="color:#0d6efd">`+ x.data().f3 +`</span></p>
                   <p>4. Is our official website user friendly? : <span style="color:#0d6efd">`+ x.data().f4 +`</span></p>
                   <p>5. What are the necessary changes we need to make if any ? (Give any necessary input) : <span style="color:#0d6efd">`+ x.data().f5 +`</span></p>
                   <p>6. How much would you rate the overall functioning of departments? : <span style="color:#0d6efd">`+ x.data().f6 +`</span></p>
                   <p>7. How much would you rate the overall functioning of the current board? : <span style="color:#0d6efd">`+ x.data().f7 +`</span></p>
                   <p>8. Are you willing to continue in WWW for the coming years? : <span style="color:#0d6efd">`+ x.data().f8 +`</span></p>
                   <p>9. Are you interested in managing the board of WWW anytime in the future? : <span style="color:#0d6efd">`+ x.data().f9 +`</span></p>
               

                <div style="margin-left: -4px;" `+ x.data().h +` >
                <hr>
                  <p style="color:green">Board Members Feedback :</p>
                   <div class="row" style="margin-left: 10px">
                   <div class="col-lg"><p>Sudhanshu Borthakur : <span style="color:#0d6efd">`+ x.data().sudhanshu +`</span></p></div>
                   <div class="col-lg"><p>Arnavraj Baruah : <span style="color:#0d6efd">`+ x.data().arnav +`</span></p></div>
                   <div class="col-lg"><p>Ankur Jyoti Dutta : <span style="color:#0d6efd">`+ x.data().ankur +`</span></p></div>
                   <div class="col-lg"> <p>Sanjushree Bharadwaj : <span style="color:#0d6efd">`+ x.data().sanjushree +`</span></p></div>              
                   </div>

                   <div class="row" style="margin-left: 10px">
                   <div class="col-lg"><p>Rudra Nath : <span style="color:#0d6efd">`+ x.data().rudra +`</span></p></div>
                   <div class="col-lg"> <p>Rahul kar : <span style="color:#0d6efd">`+ x.data().rahul +`</span></p></div>
                   <div class="col-lg"> <p>Jimpi Deka : <span style="color:#0d6efd">`+ x.data().jimpi +`</span></p></div>
                   <div class="col-lg"><p>Krishnakshi Majumdar : <span style="color:#0d6efd">`+ x.data().krishnakshi +`</span></p></div>
                   </div>

                   <div class="row" style="margin-left: 10px">
                   <div class="col-lg">  <p>Shruti Tater : <span style="color:#0d6efd">`+ x.data().shruti +`</span></p></div>
                   <div class="col-lg"> <p>Jaidhitya Jonna : <span style="color:#0d6efd">`+ x.data().jai +`</span></p></div>
                   <div class="col-lg"> <p>Vedant Rasal : <span style="color:#0d6efd">`+ x.data().vedant +`</span></p></div>
                   <div class="col-lg"> <p>Amit Debbarma : <span style="color:#0d6efd">`+ x.data().amit +`</span></p></div>
                   </div>

                   </div>
          
                   </div>
                 
                 
           


                </div> 
                </div>  
                </div>

     

  `);
  
        n += 1;
     });
  });
