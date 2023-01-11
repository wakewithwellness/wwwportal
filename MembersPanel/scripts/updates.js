var firebaseConfig = {
     apiKey: "AIzaSyDoiXHxMG_vZPHz0eeJj5s661xhfU-Y4_4",
     authDomain: "members-76725.firebaseapp.com",
     projectId: "members-76725",
     storageBucket: "members-76725.appspot.com",
     messagingSenderId: "734645197873",
     appId: "1:734645197873:web:808127fdb4d643d4d24910",
     measurementId: "G-7LYZ3R48GT"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 const db = firebase.firestore();
 db.settings({ timestampInSnapshots: true});




// Batch1 (1st Year) batch
 db.collection("attendance").orderBy('regno').limit(32).get().then(querySnapshot=>{
 querySnapshot.forEach(doc=>{
     let data = doc.data();
     let row  = `<tr>
       
                <th scope="row">
                   <label>${data.regno}</label>
                 </th>
                     <td>${data.name}</td>
                         <td ><p style="color:${data.status}; font-weight:900;margin-bottom:0px; font-size: 15px"><i style="display: ${data.Alert}"  class="fa fa-exclamation-triangle" aria-hidden="true"></i> ${data.AAper}</p>
                         <div class="progress" style="border: 0.5px solid ${data.status};display: ${data.bar}">
                            <div  class="progress-bar progress-bar-success" role="progressbar"
                            aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:${data.AAper};background-color:${data.status}">
                           </div> 
                          </div>
                         </td>
                         <td>${data.May2}</td>
                         <td>${data.May1}</td>
                     <td>${data.Apr2}</td>
                     <td>${data.Apr1}</td>
                     <td>${data.Mar2}</td>
                     <td>${data.Mar1}</td>
                     <td>${data.Feb2}</td>
                     <td>${data.Feb1}</td>
                     <td>${data.Jan2}</td>
                     <td>${data.Jan1}</td>
                     <td>${data.Dec2}</td>
                     <td>${data.Dec1}</td>
                     <td ${data.Nov2f}>${data.Nov2}</td>
                     <td ${data.Nov1f}>${data.Nov1}</td>
                     <td ${data.Oct2f}>${data.Oct2}</td>
                     <td ${data.Oct1f}>${data.Oct1}</td>
                     <td ${data.Sept2f}>${data.Sept2}</td>
                     <td ${data.Sept1f}>${data.Sept1}</td>
                     <td ${data.Aug2f}>${data.Aug2}</td>
                     <td ${data.Aug1f}>${data.Aug1}</td>
                     <td ${data.July3f}>${data.July3}</td>
                     <td ${data.July2f}>${data.July2}</td>
                     <td ${data.July1f}>${data.July1}</td>
               </tr>
               
               
               
               
               
               
             `;
     let table = document.getElementById('myTable')
     table.innerHTML += row
 })
})




// Batch2 (1st Year) batch
db.collection("attendance").orderBy('regno').startAt('22WWW0060').endAt('22WWW0066').get().then(querySnapshot=>{
     querySnapshot.forEach(doc=>{
         let data = doc.data();
         let row  = `<tr>
           
                    <th scope="row" >
                       <label>${data.regno}</label>
                     </th>
                         <td>${data.name}</td>
                         <td><p style="color:${data.status}; font-weight:900;margin-bottom:0px; font-size: 15px"><i style="display: ${data.Alert}"  class="fa fa-exclamation-triangle" aria-hidden="true"></i> ${data.AAper}</p>
                         <div class="progress" style="border: 0.5px solid ${data.status};display: ${data.bar}">
                            <div  class="progress-bar progress-bar-success" role="progressbar"
                            aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:${data.AAper};background-color:${data.status}">
                           </div> 
                          </div></td>
                       
                          <td>${data.Jan23b}</td>
                          <td>${data.Jan23a}</td>
                          <td>${data.Dec22b}</td>
                          <td>${data.Dec22a}</td>
                          <td>${data.Nov22b}</td>
                          <td>${data.Nov22a}</td>
                          <td>${data.Oct22b}</td>
                          <td>${data.Oct22a}</td>
                         <td>${data.Sept22b}</td>
                         <td>${data.Sept22a}</td>
                         <td>${data.Aug22b}</td>
                        <td>${data.Aug22a}</td>
                        <td>${data.Jul22b}</td>
                        <td>${data.Jul22a}</td>
                         <td>${data.Jun}</td>
                         <td>${data.May2}</td>
                         <td>${data.May1}</td>
                         <td>${data.Apr2}</td>
                         <td>${data.Apr1}</td>
                         <td>${data.Mar2}</td>
                         <td>${data.Mar1}</td>
                         <td>${data.Feb2}</td>
                         <td>${data.Feb1}</td>
                    
                   </tr>`;
         let table = document.getElementById('myTable2')
         table.innerHTML += row
     })
    })
    


.catch(err=>{
 console.log(`Error: ${err}`)
});




// Batch1 (2nd Year) batch
db.collection("attendance").orderBy('regno').limit(32).get().then(querySnapshot=>{
    querySnapshot.forEach(doc=>{
        let data = doc.data();
        let row  = `<tr style="display: ${data.hide1}">
          
                   <th scope="row">
                      <label>${data.regno}</label>
                    </th>
                        <td>${data.name}</td>
                        <td><p style="color:${data.status}; font-weight:900;margin-bottom:0px; font-size: 15px"><i style="display: ${data.Alert}"  class="fa fa-exclamation-triangle" aria-hidden="true"></i> ${data.AAper}</p>
                        <div class="progress" style="border: 0.5px solid ${data.status};display: ${data.bar}">
                           <div  class="progress-bar progress-bar-success" role="progressbar"
                           aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:${data.AAper};background-color:${data.status}">
                          </div> 
                         </div></td>
                         <td>${data.Feb23b}</td>
                          <td>${data.Feb23a}</td>
                         <td>${data.Jan23b}</td>
                         <td>${data.Jan23a}</td>
                         <td>${data.Dec22b}</td>
                         <td>${data.Dec22a}</td>
                         <td>${data.Nov22b}</td>
                         <td>${data.Nov22a}</td>
                         <td>${data.Oct22b}</td>
                         <td>${data.Oct22a}</td>
                        <td>${data.Sept22b}</td>
                        <td>${data.Sept22a}</td>
                        <td>${data.Aug22b}</td>
                        <td>${data.Aug22a}</td>
                        <td>${data.Jul22b}</td>
                        <td>${data.Jul22a}</td>
                        <td>${data.Jun}</td>
                     
                       
                     
                  </tr>`;
        let table = document.getElementById('myTable3')
        table.innerHTML += row
    })
   })
    


.catch(err=>{
 console.log(`Error: ${err}`)
});





// Third batch
db.collection("attendance").orderBy('regno').limitToLast(12).get().then(querySnapshot=>{
    querySnapshot.forEach(doc=>{
        let data = doc.data();
        let row  = `<tr>
          
                   <th scope="row">
                      <label>${data.regno}</label>
                    </th>
                        <td>${data.name} </td>
                        <td><p style="color:${data.status}; font-weight:900;margin-bottom:0px; font-size: 15px"><i style="display: ${data.Alert}"  class="fa fa-exclamation-triangle" aria-hidden="true"></i> ${data.AAper}</p>
                        <div class="progress" style="border: 0.5px solid ${data.status};display: ${data.bar}">
                           <div  class="progress-bar progress-bar-success" role="progressbar"
                           aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:${data.AAper};background-color:${data.status}">
                          </div> 
                         </div></td>
                         <td>${data.Feb23b}</td>
                         <td>${data.Feb23a}</td>
                         <td>${data.Jan23b}</td>
                         <td>${data.Jan23a}</td>
                         <td>${data.Dec22b}</td>
                         <td>${data.Dec22a}</td>
                         <td>${data.Nov22b}</td>
                         <td>${data.Nov22a}</td>
                         <td>${data.Oct22b}</td>
                         <td>${data.Oct22a}</td>
                        <td>${data.Sept22b}</td>
                        <td>${data.Sept22a}</td>
                        <td ${data.Aug22bf}>${data.Aug22b}</td>
                       <td ${data.Aug22af}>${data.Aug22a}</td>
                       <td ${data.Jul22bf}>${data.Jul22b}</td>
                      
                   
                  </tr>`;
        let table = document.getElementById('myTable4')
        table.innerHTML += row
    })
   })
   


.catch(err=>{
console.log(`Error: ${err}`)
});
