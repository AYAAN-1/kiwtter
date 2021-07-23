
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
  function adduser(){
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"addinguser"
      });
  }