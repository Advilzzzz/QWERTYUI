
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyCXvNs10zD7uwGxJAU8rglhNzdyfE6MtVs",
      authDomain: "kwitter-2dba0.firebaseapp.com",
      databaseURL: "https://kwitter-2dba0-default-rtdb.firebaseio.com",
      projectId: "kwitter-2dba0",
      storageBucket: "kwitter-2dba0.appspot.com",
      messagingSenderId: "963778082770",
      appId: "1:963778082770:web:8f9b3f2533acce1553fa0b",
      measurementId: "G-0GMCSG7VSS"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      //End code
      });});}
getData();
