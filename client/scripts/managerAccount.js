const baseUrl = "https://localhost:5001/api/managers"; 
var managerList = [];
var myManager = {};

function handleOnLoad() {
    localStorage.setItem('successfulApp', 'false');
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

                html += '<p><strong>First Name: </strong><input type="text" value="'+firstname+'"></input></p>';
                html += '<p><strong>Last Name: </strong><input type="text" value="'+lastname+'"></input></p>';
                html += '<p><strong>Username: </strong><input type="text" value="'+username+'"></input></p>';
                html += '<p><strong>Password: </strong><input type="text" value="'+password+'"></input></p>';
                html += '<p><strong>Email: </strong><input type="text" value="'+email+'"></input></p>';
                html += '<p><strong>Phone Number: </strong><input type="text" value="'+phonenumber+'"></input></p>';

                html2 += '<div class="btn"><button id="editManager" class="btn" onclick="updateManager()">Submit Changes</button></div>'
            }

        });
        document.getElementById("info").innerHTML = html;
        document.getElementById("editButton").innerHTML = html2;

        }).catch(function(error){
            console.log(error);
        });
}