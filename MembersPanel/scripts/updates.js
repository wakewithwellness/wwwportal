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


 db.collection("attendance").orderBy('regno').limit(34).get().then(querySnapshot=>{
 querySnapshot.forEach(doc=>{
     let data = doc.data();
     let row  = `<tr>
       
                <th scope="row">
                   <label style="color: ${data.status}">${data.regno}</label>
                 </th>
                     <td style="color: ${data.status}">${data.name}</td>
                     <td style="text-align:center;font-weight:700;color: ${data.status}">${data.AAper}</td>
                         <td style="color: ${data.status}">${data.May2}</td>
                         <td style="color: ${data.status}">${data.May1}</td>
                     <td style="color: ${data.status}">${data.Apr2}</td>
                     <td style="color: ${data.status}">${data.Apr1}</td>
                     <td style="color: ${data.status}">${data.Mar2}</td>
                     <td style="color: ${data.status}">${data.Mar1}</td>
                     <td style="color: ${data.status}">${data.Feb2}</td>
                     <td style="color: ${data.status}">${data.Feb1}</td>
                     <td style="color: ${data.status}">${data.Jan2}</td>
                     <td style="color: ${data.status}">${data.Jan1}</td>
                     <td style="color: ${data.status}">${data.Dec2}</td>
                     <td style="color: ${data.status}">${data.Dec1}</td>
                     <td style="color: ${data.status}">${data.Nov2}</td>
                     <td style="color: ${data.status}">${data.Nov1}</td>
                     <td style="color: ${data.status}">${data.Oct2}</td>
                     <td style="color: ${data.status}">${data.Oct1}</td>
                     <td style="color: ${data.status}">${data.Sept2}</td>
                     <td style="color: ${data.status}">${data.Sept1}</td>
                     <td style="color: ${data.status}">${data.Aug2}</td>
                     <td style="color: ${data.status}">${data.Aug1}</td>
                     <td style="color: ${data.status}">${data.July3}</td>
                     <td style="color: ${data.status}">${data.July2}</td>
                     <td style="color: ${data.status}">${data.July1}</td>
               </tr>`;
     let table = document.getElementById('myTable')
     table.innerHTML += row
 })
})





db.collection("attendance").orderBy('regno').startAt('22WWW0060').endAt('22WWW0066').get().then(querySnapshot=>{
     querySnapshot.forEach(doc=>{
         let data = doc.data();
         let row  = `<tr>
           
                    <th scope="row" >
                       <label style="color: ${data.status}">${data.regno}</label>
                     </th>
                         <td style="color: ${data.status}">${data.name}</td>
                         <td style="text-align:center;font-weight:700;color: ${data.status}">${data.AAper}</td>
                    
                        <td style="color: ${data.status}">${data.Aug22a}</td>
                        <td style="color: ${data.status}">${data.Jul22b}</td>
                        <td style="color: ${data.status}">${data.Jul22a}</td>
                         <td style="color: ${data.status}">${data.Jun}</td>
                         <td style="color: ${data.status}">${data.May2}</td>
                         <td style="color: ${data.status}">${data.May1}</td>
                         <td style="color: ${data.status}">${data.Apr2}</td>
                         <td style="color: ${data.status}">${data.Apr1}</td>
                         <td style="color: ${data.status}">${data.Mar2}</td>
                         <td style="color: ${data.status}">${data.Mar1}</td>
                         <td style="color: ${data.status}">${data.Feb2}</td>
                         <td style="color: ${data.status}">${data.Feb1}</td>
                    
                   </tr>`;
         let table = document.getElementById('myTable2')
         table.innerHTML += row
     })
    })
    


.catch(err=>{
 console.log(`Error: ${err}`)
});





db.collection("attendance").orderBy('regno').limit(34).get().then(querySnapshot=>{
    querySnapshot.forEach(doc=>{
        let data = doc.data();
        let row  = `<tr>
          
                   <th scope="row">
                      <label style="color: ${data.status}">${data.regno}</label>
                    </th>
                        <td style="color: ${data.status}">${data.name}</td>
                        <td style="text-align:center;font-weight:700;color: ${data.status}">${data.AAper}</td>
                      
                        <td style="color: ${data.status}">${data.Aug22a}</td>
                        <td style="color: ${data.status}">${data.Jul22b}</td>
                        <td style="color: ${data.status}">${data.Jul22a}</td>
                        <td style="color: ${data.status}">${data.Jun}</td>
                     
                       
                     
                  </tr>`;
        let table = document.getElementById('myTable3')
        table.innerHTML += row
    })
   })
    


.catch(err=>{
 console.log(`Error: ${err}`)
});






db.collection("attendance").orderBy('regno').limitToLast(4).get().then(querySnapshot=>{
    querySnapshot.forEach(doc=>{
        let data = doc.data();
        let row  = `<tr>
          
                   <th scope="row">
                      <label style="color: ${data.status}">${data.regno}</label>
                    </th>
                        <td style="color: ${data.status}">${data.name}</td>
                        <td style="text-align:center;font-weight:700;color: ${data.status}">${data.AAper}</td>
                     
                       <td style="color: ${data.status}">${data.Aug22a}</td>
                       <td style="color: ${data.status}">${data.Jul22b}</td>
                      
                   
                  </tr>`;
        let table = document.getElementById('myTable4')
        table.innerHTML += row
    })
   })
   


.catch(err=>{
console.log(`Error: ${err}`)
});
