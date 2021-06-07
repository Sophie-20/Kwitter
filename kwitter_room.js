
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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


  

    function getData() {
      firebase
        .database()
        .ref('/')
        .on('value', function (snapshot) {
          document.getElementById('output').innerHTML = ''
          snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key
            Room_names = childKey
            console.log("Room Name"+Room_name)
            row = "<div class='room_name' id= "+ Room_names +" onclick='redirectToRoomName(this.id)' >#"+ Room_names +" </div>"
            document.getElementById("output").innerHTML+=row;
            
          })
        })
    }
    getData()
    
    function redirectToRoomName(name) { console.log(name);
      localStorage.setItem("room_name", name); window.location = "kwitter_page.html";
      }
      
    function logout() {
      localStorage.removeItem('user_name')
      window.location('index.html')
    }
    
    function add_room() {
      var roomname = document.getElementById('room_name').value
      firebase.database().ref("/").child(roomname).update({
        purpose: 'Adding Room Name'
      })
      localStorage.setItem("room_name", roomname)
      window.location=('kwitter_page.html')
    }