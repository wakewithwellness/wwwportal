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
                   <label>${data.regno}</label>
                 </th>
                     <td>${data.name}</td>
                     <td style="text-align:center;font-weight:700;color: ${data.status}">${data.AAper}</td>
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
                     <td>${data.Nov2}</td>
                     <td>${data.Nov1}</td>
                     <td>${data.Oct2}</td>
                     <td>${data.Oct1}</td>
                     <td>${data.Sept2}</td>
                     <td>${data.Sept1}</td>
                     <td>${data.Aug2}</td>
                     <td>${data.Aug1}</td>
                     <td>${data.July3}</td>
                     <td>${data.July2}</td>
                     <td>${data.July1}</td>
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
                       <label>${data.regno}</label>
                     </th>
                         <td>${data.name}</td>
                         <td style="text-align:center;font-weight:700;color: ${data.status}">${data.AAper}</td>
                    
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





db.collection("attendance").orderBy('regno').limit(34).get().then(querySnapshot=>{
    querySnapshot.forEach(doc=>{
        let data = doc.data();
        let row  = `<tr>
          
                   <th scope="row">
                      <label>${data.regno}</label>
                    </th>
                        <td>${data.name}</td>
                        <td style="text-align:center;font-weight:700;color: ${data.status}">${data.AAper}</td>
                      
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






db.collection("attendance").orderBy('regno').limitToLast(4).get().then(querySnapshot=>{
    querySnapshot.forEach(doc=>{
        let data = doc.data();
        let row  = `<tr>
          
                   <th scope="row">
                      <label>${data.regno}</label>
                    </th>
                        <td>${data.name}</td>
                        <td style="text-align:center;font-weight:700;color: ${data.status}">${data.AAper}</td>
                     
                       <td>${data.Aug22a}</td>
                       <td>${data.Jul22b}</td>
                      
                   
                  </tr>`;
        let table = document.getElementById('myTable4')
        table.innerHTML += row
    })
   })
   


.catch(err=>{
console.log(`Error: ${err}`)
});
