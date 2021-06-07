//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDPUJj-S3-5ftwJiqGl7_tOHTCkhkpT-lc",
    authDomain: "project-96-5a2eb.firebaseapp.com",
    projectId: "project-96-5a2eb",
    storageBucket: "project-96-5a2eb.appspot.com",
    messagingSenderId: "827694733692",
    appId: "1:827694733692:web:27a84aab53dd2aeabdacf9",
    measurementId: "G-RQDQDPQ38V"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 


var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");

function send(){
    var msg = document.getElementById("message").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
       
});
document.getElementById("message").value=" ";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
    

    
//Start code

//End code
 } });  }); }
getData();

function logout() {
    localStorage.removeItem('user_name')
    localStorage.removeItem('room_name')
    window.location='index.html'
  }

  