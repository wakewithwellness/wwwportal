


db.collection('feedbacks').orderBy('name').get().then((s) => {
     $("#station").html(""); // This will empty your station button
     $("#station_box").html(""); // This will empty your station box
     var n = 0;
     s.forEach(function(x){
        $("#accordion").append(`
  <div class="card">
    <div class="card-header" id="heading`+ n +`">
        
            <p style="cursor: pointer; font-weight: bold" class="mb-0 text" data-toggle="collapse" data-target="#collapse`+ n+`">`+ x.data().name +`</p>
       
     </div>
  
     <div id="collapse`+ n +`" class="collapse" data-parent="#accordion">
        <div class="card-body">
           <p>Registration no. : <span style="font-weight: bold">`+ x.data().regno +`</span></p>
           <p>Email ID : <span style="font-weight: bold">`+ x.data().email +`</span></p><hr>
           <ol>
           <li>Are the tasks or events held to contribute to the development of society? : <span style="font-weight: bold">`+ x.data().f1 +`</span></li><hr>
           <li>Is WWW helping in developing your social and management skills ? : <span style="font-weight: bold">`+ x.data().f2 +`</span></li><hr>
           <li>Is WWW meeting your expectations as a social welfare organization? : <span style="font-weight: bold">`+ x.data().f3 +`</span></li><hr>
           <li>Is our official website user friendly? : <span style="font-weight: bold">`+ x.data().f4 +`</span></li><hr>
           <li>What are the necessary changes we need to make if any ? (Give any necessary input) : <span style="font-weight: bold">`+ x.data().f5 +`</span></li><hr>
           <li>How much would you rate the overall functioning of departments? : <span style="font-weight: bold">`+ x.data().f6 +`</span></li><hr>
           <li>How much would you rate the overall functioning of the current board? : <span style="font-weight: bold">`+ x.data().f7 +`</span></li><hr>
           <li>Are you willing to continue in WWW for the coming years? : <span style="font-weight: bold">`+ x.data().f8 +`</p><hr>
           <li>Are you interested in managing the board of WWW anytime in the future? : <span style="font-weight: bold">`+ x.data().f9 +`</span></li><hr>
           <li>Sudhanshu Borthakur : <span style="font-weight: bold">`+ x.data().sudhanshu +`</span></li><hr>
           <li>Arnavraj Baruah : <span style="font-weight: bold">`+ x.data().arnav +`</span></li><hr>
           <li>Ankur Jyoti Dutta : <span style="font-weight: bold">`+ x.data().ankur +`</span></li><hr>
           <li>Sanjushree Bharadwaj : <span style="font-weight: bold">`+ x.data().sanjushree +`</span></li><hr>
           <li>Rudra Nath : <span style="font-weight: bold">`+ x.data().rudra +`</span></li><hr>
           <li>Rahul kar : <span style="font-weight: bold">`+ x.data().rahul +`</span></li><hr>
           <li>Jimpi Deka : <span style="font-weight: bold">`+ x.data().jimpi +`</span></li><hr>
           <li>Krishnakshi Majumdar : <span style="font-weight: bold">`+ x.data().krishnakshi +`</span></li><hr>
           <li>Jaidhitya Jonna : <span style="font-weight: bold">`+ x.data().jai +`</span></li><hr>
           <li>Vedant Rasal : <span style="font-weight: bold">`+ x.data().vedant +`</span></li><hr>
           <li>Amit Debbarma : <span style="font-weight: bold">`+ x.data().amit +`</span></li><hr>
           <li>Shruti Tater : <span style="font-weight: bold">`+ x.data().shruti +`</span></li>
           </ol>
        </div>
     </div>
  </div>
  `);
  
        n += 1;
     });
  });
