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
            }

        });
        document.getElementById("info").innerHTML = html;

        }).catch(function(error){
            console.log(error);
        });
}