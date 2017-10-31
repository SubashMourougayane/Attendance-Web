// JavaScript source code
function save() {
    // Initialize Firebase
    // Initialize Firebase

    console.log(firebase);

    var logname = document.getElementById("userid").value;
    var password = document.getElementById("pass").value;
    var checkpass;

    window.alert(logname + password);

    // var ref = firebase.database().ref().child("CollegeID").child(logname);

    // window.alert(ref);

    /* ref.on('child_added', snap => {
         var pass = snap.child("pass").val();

         window.alert(pass);
     });  */

    var ref = firebase.database().ref().child("CollegeID").child(logname);

    ref.on("value", function (snapshot) {

        console.log(snapshot.val());
        var node = snapshot.val();
        checkpass = node.pass;
        if (password == checkpass) {
          sessionStorage.setItem('CID',logname);
            window.alert("password correct !");
            window.location = "index1.html"

        }


    },

    function (error) {
        console.log("Error: " + error.code);
    });



}
