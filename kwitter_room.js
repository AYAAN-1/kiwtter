
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBUzinR4_wbYWorrMuoINPSyNZ4LkEIrf0",
      authDomain: "kwitter-a4d5b.firebaseapp.com",
      databaseURL:"https://kwitter-a4d5b-default-rtdb.firebaseio.com/",
      projectId: "kwitter-a4d5b",
      storageBucket: "kwitter-a4d5b.appspot.com",
      messagingSenderId: "926931126191",
      appId: "1:926931126191:web:942384c5daa73880dad15a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
