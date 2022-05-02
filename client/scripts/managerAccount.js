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

                html2 += '<div class="btn"><button id="editManager" class="btn" onclick="updateScreen()">Edit Account Info</button></div>'
            }

        });
        document.getElementById("info").innerHTML = html;
        document.getElementById("editButton").innerHTML = html2;

        }).catch(function(error){
            console.log(error);
        });
}

function updateScreen() {

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
                var managerID = manager.managerID;
                var mfname = manager.mfname;
                var mlname = manager.mlname;
                var mUsername = manager.mUsername;
                var mPassword = manager.mPassword;
                var mEmail = manager.mEmail;
                var mphoneNumber = manager.mphoneNumber;

                html += '<p><strong>First Name: </strong><input type="text" value="'+mfname+'"></input></p>';
                html += '<p><strong>Last Name: </strong><input type="text" value="'+mlname+'"></input></p>';
                html += '<p><strong>Username: </strong><input type="text" value="'+mUsername+'"></input></p>';
                html += '<p><strong>Password: </strong><input type="text" value="'+mPassword+'"></input></p>';
                html += '<p><strong>Email: </strong><input type="text" value="'+mEmail+'"></input></p>';
                html += '<p><strong>Phone Number: </strong><input type="text" value="'+mphoneNumber+'"></input></p>';

                let myManager = {
                    managerID: managerID,
                    mfname: mfname,
                    mlname: mlname,
                    mUsername: mUsername,
                    mPassword: mPassword,
                    mEmail: mEmail,
                    mphoneNumber: mphoneNumber,
                }; 

                html2 += '<div class="btn"><button id="editManager" class="btn" onclick="updateManager(' + managerID + ', "' + mfname + '", "' + mlname + '", "' + mUsername + '", "' + mPassword + '", "' + mEmail + '", "'+ mphoneNumber + '")">Submit Changes</button></div>';

                
            }

        });
        document.getElementById("info").innerHTML = html;
        document.getElementById("editButton").innerHTML = html2;
        

        }).catch(function(error){
            console.log(error);
    });

    
}

function updateManager(managerID, mfname, mlname, mUsername, mPassword, mEmail, mphoneNumber) {

    console.log("made it here");
    const specificUrl = "https://localhost:5001/api/managers/" + managerID;

    console.log(myManager.managerID);

    fetch(specificUrl, {
        method: "PUT",
        headers: {
            "Accept": 'manager/json',
            "Content-Type":'manager/json',
        }
        ,
        body: JSON.stringify({
            managerID: managerID,
            mfname: mfname,
            mlname: mlname,
            mUsername: mUsername,
            mPassword: mPassword,
            mEmail: mEmail,
            mphoneNumber: mphoneNumber
        })
    }).then((response) =>{
        console.log(response);
    });

    change_page_managerAccount();
}