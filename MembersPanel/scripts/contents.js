let config = {
  apiKey: "AIzaSyBTOvD0aod-fntZ0VYbT6EAp9z1L_bqKwY",
  authDomain: "website-818ed.firebaseapp.com",
  databasedate: "https://website-818ed-default-rtdb.firebaseio.com",
  projectId: "website-818ed",
  storageBucket: "website-818ed.appspot.com",
  messagingSenderId: "542030860652",
  appId: "1:542030860652:web:ee0bef0509915aa1da2349",
  measurementId: "G-2VWCQ9QR4S"
};

firebase.initializeApp(config);
let db = firebase.database();

//Create
let preview = document.getElementById("preview");
let title = document.getElementById("title");
let content = document.getElementById("content");
let publisher = document.getElementById("publisher");


preview.addEventListener("submit", e => {
  e.preventDefault();

  if (!title.value || !content.value || !publisher.value )
    return null;

  db.ref("contents/" + title.value).set({
    content: content.value,
    publisher: publisher.value,
    when: firebase.database.ServerValue.TIMESTAMP
  });

  title.value = "";
  publisher.value = "";
  content.value = "";
});

// READ
let list = document.getElementById("list-of-posts");
let listRef = db.ref("/contents");

listRef.on("child_added", data => {
  let title = data.key;
  let content = data.val().content;
  let publisher = data.val().publisher;
  let when = data.val().when;


  let div = document.createElement("div");
  div.id = title;
  div.setAttribute("class", "column");
  div.innerHTML = card(title, content, publisher, when);
  list.appendChild(div);
});

list.addEventListener("click", e => {
  let listNode = e.target.parentNode.parentNode;

  // UPDATE
  if (e.target.id == "edit") {
    title.value = listNode.querySelector("#data-title").innerText;
    content.value = listNode.querySelector("#data-content").innerText;
    publisher.value = listNode.querySelector("#data-publisher").innerText;
    

  }

  // DELETE
  if (e.target.id == "delete") {
    if (confirm("Are you sure?")) {
      let id = listNode.querySelector("#data-title").innerText;
      db.ref("contents/" + id).remove();
    }
  }
});

listRef.on("child_changed", data => {
  let title = data.key;
  let content = data.val().content;
  let publisher = data.val().publisher;
  let when = data.val().when;


  let listNode = document.getElementById(title);
  listNode.innerHTML = card(title, content, publisher, when);
});

listRef.on("child_removed", data => {
  let listNode = document.getElementById(data.key);
  listNode.parentNode.removeChild(listNode);
});

function card(title, content, publisher, when) {
  return `
  <div class="card" style="padding:4px">
    <header class="card-header">
      <h3 class="card-header-content" id="data-title">${title}</h3><hr>
      <p id="data-content" style="text-align: justify;">${content}</p>
    </header>
    <div class="card-publisher" style="margin-left:10px;font-size:11.5px">
      <span id="data-publisher">${publisher}</span> | Posted on: <span style="color:red" id="data-date">${when} </span>
    </div>
    <footer class="card-footer" style="padding:10px">
      <a class="card-footer-item" href="#preview" id="edit">Edit</a>
      
    </footer>
  </div>
  <br>
  `;
}
