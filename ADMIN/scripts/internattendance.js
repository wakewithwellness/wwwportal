

// 06/12/21-12/12/21

const attendanceDec1 = document.querySelector('#Dec1');

function renderDec1(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let dept = document.createElement('span');
    let Dec1 = document.createElement('span');
    let Dec1f = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    dept.textContent = doc.data().dept;
    Dec1.textContent = doc.data().Dec1;
    Dec1f.textContent = doc.data().Dec1f;
  


    li.appendChild(name);
    li.appendChild(dept);
    li.appendChild(Dec1);
    li.appendChild(Dec1f);
    
  

    attendanceDec1.appendChild(li);

}


db.collection('attendance').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderDec1(doc);
    })

})




// 12/12/21-19/12/21

const attendanceDec2 = document.querySelector('#Dec2');

function renderDec2(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let dept = document.createElement('span');
    let Dec2 = document.createElement('span');
    let Dec2f = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    dept.textContent = doc.data().dept;
    Dec2.textContent = doc.data().Dec2;
    Dec2f.textContent = doc.data().Dec2f;
  


    li.appendChild(name);
    li.appendChild(dept);
    li.appendChild(Dec2);
    li.appendChild(Dec2f);
    
  

    attendanceDec2.appendChild(li);

}


db.collection('attendance').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderDec2(doc);
    })

})




// 20/12/21-26/12/21

const attendanceDec3 = document.querySelector('#Dec3');

function renderDec3(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let dept = document.createElement('span');
    let Dec3 = document.createElement('span');
    let Dec3f = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    dept.textContent = doc.data().dept;
    Dec3.textContent = doc.data().Dec3;
    Dec3f.textContent = doc.data().Dec3f;
  


    li.appendChild(name);
    li.appendChild(dept);
    li.appendChild(Dec3);
    li.appendChild(Dec3f);
    
  

    attendanceDec3.appendChild(li);

}


db.collection('attendance').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderDec3(doc);
    })

})




// 27/12/21-2/12/21

const attendanceDec4 = document.querySelector('#Dec4');

function renderDec4(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let dept = document.createElement('span');
    let Dec4 = document.createElement('span');
    let Dec4f = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    dept.textContent = doc.data().dept;
    Dec4.textContent = doc.data().Dec4;
    Dec4f.textContent = doc.data().Dec4f;
  


    li.appendChild(name);
    li.appendChild(dept);
    li.appendChild(Dec4);
    li.appendChild(Dec4f);
    
  

    attendanceDec4.appendChild(li);

}


db.collection('attendance').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderDec4(doc);
    })

})





// 03/01/22-10/01/22

const attendanceJan1 = document.querySelector('#Jan1');

function renderJan1(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let dept = document.createElement('span');
    let Jan1 = document.createElement('span');
    let Jan1f = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    dept.textContent = doc.data().dept;
    Jan1.textContent = doc.data().Jan1;
    Jan1f.textContent = doc.data().Jan1f;
  


    li.appendChild(name);
    li.appendChild(dept);
    li.appendChild(Jan1);
    li.appendChild(Jan1f);
    
  

    attendanceJan1.appendChild(li);

}


db.collection('attendance').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderJan1(doc);
    })

})






// 11/01/22-17/01/22

const attendanceJan2 = document.querySelector('#Jan2');

function renderJan2(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let dept = document.createElement('span');
    let Jan2 = document.createElement('span');
    let Jan2f = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    dept.textContent = doc.data().dept;
    Jan2.textContent = doc.data().Jan2;
    Jan2f.textContent = doc.data().Jan2f;
  


    li.appendChild(name);
    li.appendChild(dept);
    li.appendChild(Jan2);
    li.appendChild(Jan2f);
    
  

    attendanceJan2.appendChild(li);

}


db.collection('attendance').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderJan2(doc);
    })

})






// 18/01/22-24/01/22

const attendanceJan3 = document.querySelector('#Jan3');

function renderJan3(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let dept = document.createElement('span');
    let Jan3 = document.createElement('span');
    let Jan3f = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    dept.textContent = doc.data().dept;
    Jan3.textContent = doc.data().Jan3;
    Jan3f.textContent = doc.data().Jan3f;
  


    li.appendChild(name);
    li.appendChild(dept);
    li.appendChild(Jan3);
    li.appendChild(Jan3f);
    
  

    attendanceJan3.appendChild(li);

}


db.collection('attendance').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderJan3(doc);
    })

})



// 25/01/22-31/01/22

const attendanceJan4 = document.querySelector('#Jan4');

function renderJan4(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let dept = document.createElement('span');
    let Jan4 = document.createElement('span');
    let Jan4f = document.createElement('span');
  


    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    dept.textContent = doc.data().dept;
    Jan4.textContent = doc.data().Jan4;
    Jan4f.textContent = doc.data().Jan4f;
  


    li.appendChild(name);
    li.appendChild(dept);
    li.appendChild(Jan4);
    li.appendChild(Jan4f);
    
  

    attendanceJan4.appendChild(li);

}


db.collection('attendance').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderJan4(doc);
    })

})