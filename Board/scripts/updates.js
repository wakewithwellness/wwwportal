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
                    <td style="text-align:center;font-weight:800;color: ${data.status}">${data.AAper}</td>
                        <td>${data.May2f}</td>
                        <td>${data.May1f}</td>
                    <td>${data.Apr2f}</td>
                    <td>${data.Apr1f}</td>
                    <td>${data.Mar2f}</td>
                    <td>${data.Mar1f}</td>
                    <td>${data.Feb2f}</td>
                    <td>${data.Feb1f}</td>
                    <td>${data.Jan2f}</td>
                    <td>${data.Jan1f}</td>
                    <td>${data.Dec2f}</td>
                    <td>${data.Dec1f}</td>
                    <td>${data.Nov2f}</td>
                    <td>${data.Nov1f}</td>
                    <td>${data.Oct2f}</td>
                    <td>${data.Oct1f}</td>
                    <td>${data.Sept2f}</td>
                    <td>${data.Sept1f}</td>
                    <td>${data.Aug2f}</td>
                    <td>${data.Aug1f}</td>
                    <td>${data.July3f}</td>
                    <td>${data.July2f}</td>
                    <td>${data.July1f}</td>
              </tr>`;
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
                        <td style="text-align:center;font-weight:800;color: ${data.status}">${data.AAper}</td>
                      
                        <td>${data.Jan23bf}</td>
                        <td>${data.Jan23af}</td>
                        <td>${data.Dec22bf}</td>
                        <td>${data.Dec22af}</td>
                        <td>${data.Nov22af}</td>
                        <td>${data.Nov22af}</td>
                        <td>${data.Oct22bf}</td>
                        <td>${data.Oct22af}</td>
                        <td>${data.Sept22af}</td>
                        <td>${data.Sept22af}</td>
                        <td>${data.Aug22bf}</td>
                        <td>${data.Aug22af}</td>
                        <td>${data.Jul22bf}</td>
                        <td>${data.Jul22af}</td>
                        <td>${data.Junf}</td>
                        <td>${data.May2f}</td>
                        <td>${data.May1f}</td>
                        <td>${data.Apr2f}</td>
                        <td>${data.Apr1f}</td>
                        <td>${data.Mar2f}</td>
                        <td>${data.Mar1f}</td>
                        <td>${data.Feb2f}</td>
                        <td>${data.Feb1f}</td>
                   
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
       let row  = `<tr>
         
                  <th scope="row">
                     <label>${data.regno}</label>
                   </th>
                       <td>${data.name}</td>
                       <td style="text-align:center;font-weight:800;color: ${data.status}">${data.AAper}</td>
                      
                       <td>${data.May23bf}</td>
                       <td>${data.May23af}</td>
                       <td>${data.Apr23bf}</td>
                       <td>${data.Apr23af}</td>
                       <td>${data.Mar23bf}</td>
                       <td>${data.Mar23af}</td>
                       <td>${data.Feb23bf}</td>
                       <td>${data.Feb23af}</td>
                       <td>${data.Jan23bf}</td>
                       <td>${data.Jan23af}</td>
                       <td>${data.Dec22bf}</td>
                       <td>${data.Dec22af}</td>

                       <td>${data.Nov22bf}</td>
                       <td>${data.Nov22af}</td>
                       <td>${data.Oct22bf}</td>
                      <td>${data.Oct22af}</td>
                       <td>${data.Sept22bf}</td>
                       <td>${data.Sept22af}</td>
                       <td>${data.Aug22bf}</td>
                       <td>${data.Aug22af}</td>
                       <td>${data.Jul22bf}</td>
                       <td>${data.Jul22af}</td>
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
                       <td>${data.name}</td>
                       <td style="text-align:center;font-weight:800;color: ${data.status}">${data.AAper}</td>
                       <td>${data.Jun23bf}</td>
                       <td>${data.Jun23af}</td>
                       <td>${data.May23bf}</td>
                       <td>${data.May23af}</td>
                       <td>${data.Apr23bf}</td>
                       <td>${data.Apr23af}</td>
                       <td>${data.Mar23bf}</td>
                       <td>${data.Mar23af}</td>
                       <td>${data.Feb23bf}</td>
                       <td>${data.Feb23af}</td>
                       <td>${data.Jan23bf}</td>
                       <td>${data.Jan23af}</td>
                       <td>${data.Dec22bf}</td>
                       <td>${data.Dec22af}</td>
                       <td>${data.Nov22af}</td>
                       <td>${data.Nov22af}</td>
                       <td>${data.Oct22bf}</td>
                      <td>${data.Oct22af}</td>
                       <td>${data.Sept22bf}</td>
                       <td>${data.Sept22af}</td>
                       <td>${data.Aug22bf}</td>
                      <td>${data.Aug22af}</td>
                      <td>${data.Jul22bf}</td>
                     
                  
                 </tr>`;
       let table = document.getElementById('myTable4')
       table.innerHTML += row
   })
  })
  


.catch(err=>{
console.log(`Error: ${err}`)
});
