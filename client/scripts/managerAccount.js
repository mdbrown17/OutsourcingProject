const baseUrl = "https://localhost:5001/api/managers"; 
var managerList = [];
var myManager = {};

function handleOnLoad() {
    // localStorage.setItem('successfulApp', 'false');
    getManagerInfo();
}

function getManagerInfo() {

    console.log('here ' + localStorage.getItem("managerID"));

    fetch('https://localhost:5001/api/managers')
        .then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){

        let html = "";
        let html2 = "";

        json.forEach((manager) => {
            
            if(manager.managerID == localStorage.getItem("managerID"))
            {            
                console.log(localStorage.getItem("managerID"));
                var firstname = manager.mfname;
                var lastname = manager.mlname;
                var username = manager.mUsername;
                var password = manager.mPassword;
                var email = manager.mEmail;
                var phonenumber = manager.mphoneNumber;

                html += '<p><strong>First Name: ' + firstname + '</strong></p>';
                html += '<p><strong>Last Name: ' + lastname + '</strong></p>';
                html += '<p><strong>Username: ' + username + ' </strong></p>';
                html += '<p><strong>Password: ' + password + ' </strong></p>';
                html += '<p><strong>Email: ' + email + ' </strong></p>';
                html += '<p><strong>Phone number: ' + phonenumber + ' </strong></p>';

                html2 += '<div class="btn"><button id="editManager" class="btn" onclick="updateManager()">Edit Account Info</button></div>'
            }

        });
        document.getElementById("info").innerHTML = html;
        document.getElementById("editButton").innerHTML = html2;

        }).catch(function(error){
            console.log(error);
        });
}

function updateManager() {

    fetch('https://localhost:5001/api/managers')
        .then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){

        let html = "";
        let html2 = "";

        json.forEach((manager) => {
            
            if(manager.managerID == localStorage.getItem("managerID"))
            {            
                console.log(localStorage.getItem("managerID"));
                var firstname = manager.mfname;
                var lastname = manager.mlname;
                var username = manager.mUsername;
                var password = manager.mPassword;
                var email = manager.mEmail;
                var phonenumber = manager.mphoneNumber;

                

                html += '<p><strong>First Name: </strong><input type="text" id="firstname" value="'+firstname+'"></input></p>';
                html += '<p><strong>Last Name: </strong><input type="text" id="lastname" value="'+lastname+'"></input></p>';
                html += '<p><strong>Username: </strong><input type="text" id="username" value="'+username+'"></input></p>';
                html += '<p><strong>Password: </strong><input type="text" id="password" value="'+password+'"></input></p>';
                html += '<p><strong>Email: </strong><input type="text" id="email" value="'+email+'"></input></p>';
                html += '<p><strong>Phone Number: </strong><input type="text" id="phonenumber" value="'+phonenumber+'"></input></p>';

                html2 += '<div class="btn"><button id="editManager" class="btn" onclick="editManager()">Submit Changes</button></div>';
            }
        });
        document.getElementById("info").innerHTML = html;
        document.getElementById("editButton").innerHTML = html2;

        localStorage.setItem("fname", document.getElementById("firstname").value);
        localStorage.setItem("lname", document.getElementById("lastname").value);
        localStorage.setItem("uname", document.getElementById("username").value);
        localStorage.setItem("pass", document.getElementById("password").value);
        localStorage.setItem("mail", document.getElementById("email").value);
        localStorage.setItem("phone", document.getElementById("phonenumber").value);

        }).catch(function(error){
            console.log(error);
        });
}
function editManager(){
    localStorage.setItem("fname", document.getElementById("firstname").value);
    localStorage.setItem("lname", document.getElementById("lastname").value);
    localStorage.setItem("uname", document.getElementById("username").value);
    localStorage.setItem("pass", document.getElementById("password").value);
    localStorage.setItem("mail", document.getElementById("email").value);
    localStorage.setItem("phone", document.getElementById("phonenumber").value);

    var managerID = localStorage.getItem("managerID");
    var fname = localStorage.getItem("fname");
    var lname = localStorage.getItem("lname");
    var uname = localStorage.getItem("uname");
    var pass = localStorage.getItem("pass");
    var mail = localStorage.getItem("mail");
    var phone = localStorage.getItem("phone");

    const url = "https://localhost:5001/api/managers/" + managerID;

    fetch(url, {
        method: "PUT",
        headers: {
            "Accept": 'application/json',
            "Content-Type":'application/json',
        }
        ,
        body: JSON.stringify({
                managerID: managerID,
                mfname: fname,
                mlname: lname,
                mphoneNumber: phone,
                mEmail: mail,
                mUsername: uname,
                mPassword: pass
            })
            
    }).then((response) =>{
        console.log(response);
    });
    showModal();
}

function showModal(){
    $('#successModal').modal('show');
}