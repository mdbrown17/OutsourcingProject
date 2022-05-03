const baseUrl = "https://localhost:5001/api/managers"; 
var managerList = [];
var myManager = {};

function handleOnLoad() {
    localStorage.setItem('successfulApp', 'false');
    getManagerInfo();
}

function getManagerInfo() {

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
                
                var managerid = manager.managerID;
                var mfname = manager.mfname;
                var mlname = manager.mlname;
                var musername = manager.mUsername;
                var mpassword = manager.mPassword;
                var memail = manager.mEmail;
                var mphonenumber = manager.mphoneNumber;

                html += '<p><strong>First Name: </strong><input type="text" value="'+mfname+'"></input></p>';
                html += '<p><strong>Last Name: </strong><input type="text" value="'+mlname+'"></input></p>';
                html += '<p><strong>Username: </strong><input type="text" value="'+musername+'"></input></p>';
                html += '<p><strong>Password: </strong><input type="text" value="'+mpassword+'"></input></p>';
                html += '<p><strong>Email: </strong><input type="text" value="'+memail+'"></input></p>';
                html += '<p><strong>Phone Number: </strong><input type="text" value="'+mphonenumber+'"></input></p>';

                let myManager = {
                    managerID: localStorage.getItem("managerID"),
                    mfname: manager.mfname,
                    mlname: manager.mlname,
                    mUsername: manager.musername,
                    mPassword: manager.mpassword,
                    mEmail: manager.memail,
                    mphoneNumber: manager.mphonenumber,
                }; 

                html2 += '<div class="btn"><button id="editManager" class="btn" onclick="updateManager(' + myManager.managerID + ')">Submit Changes</button></div>';

            }

        });
        document.getElementById("info").innerHTML = html;
        document.getElementById("editButton").innerHTML = html2;
        

        }).catch(function(error){
            console.log(error);
    });

    
}

function updateManager(myManager) {

    const specificUrl = "https://localhost:5001/api/managers/" + myManager.managerID;

    console.log(myManager.managerID);
    console.log(myManager.mfname);

    fetch(specificUrl, {
        method: "PUT",
        headers: {
            "Accept": 'application/json',
            "Content-Type":'application/json',
        }
        ,
        body: JSON.stringify({
            mfname: myManager.mfname,
            mlname: myManager.mlname,
            mUsername: myManager.mUsername,
            mPassword: myManager.mPassword,
            mEmail: myManager.mEmail,
            mphoneNumber: myManager.mphoneNumber
        })
    }).then((response) =>{
        console.log(response);
    });

    

    change_page_managerAccount();
}