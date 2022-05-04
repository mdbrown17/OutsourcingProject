const baseUrl = "https://localhost:5001/api/customers"; 
var customerList = [];
var myCustomer = {};

function handleOnLoad() {
    // localStorage.setItem('successfulApp', 'false');
    getCustomerInfo();
}

function getCustomerInfo() {

    console.log('here ' + localStorage.getItem("userID"));

    fetch('https://localhost:5001/api/customers')
        .then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){

        let html = "";
        let html2 = "";

        json.forEach((customer) => {
            
            if(customer.customerID == localStorage.getItem("userID"))
            {            
                console.log(localStorage.getItem("userID"));
                var firstname = customer.cfName;
                var lastname = customer.clName;
                var username = customer.cUsername;
                var password = customer.cPassword;
                var email = customer.cEmail;
                var phonenumber = customer.cPhoneNumber;
                var businessname = customer.cBusinessName;

                html += '<p><strong>First Name: ' + firstname + '</strong></p>';
                html += '<p><strong>Last Name: ' + lastname + '</strong></p>';
                html += '<p><strong>Username: ' + username + ' </strong></p>';
                html += '<p><strong>Password: ' + password + ' </strong></p>';
                html += '<p><strong>Email: ' + email + ' </strong></p>';
                html += '<p><strong>Phone number: ' + phonenumber + ' </strong></p>';
                html += '<p><strong>Business Name: ' + businessname + ' </strong></p>';

                html2 += '<div class="btn"><button id="editCustomer" class="btn" onclick="updateCustomer()">Edit Account Info</button></div>'
            }

        });
        document.getElementById("info").innerHTML = html;
        document.getElementById("editButton").innerHTML = html2;

        }).catch(function(error){
            console.log(error);
        });
}
function updateCustomer() {

    fetch('https://localhost:5001/api/customers')
        .then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){

        let html = "";
        let html2 = "";

        json.forEach((customer) => {
            
            if(customer.customerID == localStorage.getItem("userID"))
            {            
                console.log("BING BONG " + localStorage.getItem("userID"));
                var firstname = customer.cfName;
                var lastname = customer.clName;
                var username = customer.cUsername;
                var password = customer.cPassword;
                var email = customer.cEmail;
                var phonenumber = customer.cPhoneNumber;
                var businessname = customer.cBusinessName;

                html += '<p><strong>First Name: </strong><input type="text" id="firstname" value="'+firstname+'"></input></p>';
                html += '<p><strong>Last Name: </strong><input type="text" id="lastname" value="'+lastname+'"></input></p>';
                html += '<p><strong>Username: </strong><input type="text" id="username" value="'+username+'"></input></p>';
                html += '<p><strong>Password: </strong><input type="text" id="password" value="'+password+'"></input></p>';
                html += '<p><strong>Email: </strong><input type="text" id="email" value="'+email+'"></input></p>';
                html += '<p><strong>Phone Number: </strong><input type="text" id="phonenumber" value="'+phonenumber+'"></input></p>';
                html += '<p><strong>Phone Number: </strong><input type="text" id="businessname" value="'+businessname+'"></input></p>';

                html2 += '<div class="btn"><button id="editCustomer" class="btn" onclick="editCustomer()">Submit Changes</button></div>';
            }
        });
        document.getElementById("info").innerHTML = html;
        document.getElementById("editButton").innerHTML = html2;


        }).catch(function(error){
            console.log(error);
        });
}
function editCustomer(){
    localStorage.setItem("fname", document.getElementById("firstname").value);
    localStorage.setItem("lname", document.getElementById("lastname").value);
    localStorage.setItem("uname", document.getElementById("username").value);
    localStorage.setItem("pass", document.getElementById("password").value);
    localStorage.setItem("mail", document.getElementById("email").value);
    localStorage.setItem("phone", document.getElementById("phonenumber").value);
    localStorage.setItem("businessname", document.getElementById("businessname").value);

    var customerID = localStorage.getItem("userID");
    var fname = localStorage.getItem("fname");
    var lname = localStorage.getItem("lname");
    var uname = localStorage.getItem("uname");
    var pass = localStorage.getItem("pass");
    var mail = localStorage.getItem("mail");
    var phone = localStorage.getItem("phone");
    var businessname = localStorage.getItem("businessname");


    const url = "https://localhost:5001/api/customers/" + customerID;

    fetch(url, {
        method: "PUT",
        headers: {
            "Accept": 'application/json',
            "Content-Type":'application/json',
        }
        ,
        body: JSON.stringify({
            customerID: customerID,
            cfName: fname,
            clName: lname,
            cPhoneNumber: phone,
            cEmail: mail,
            cUsername: uname,
            cPassword: pass,
            cBusinessName: businessname
        })
            
    }).then((response) =>{
        console.log(response);
    });
    showModal();
}

function showModal(){
    $('#successModal').modal('show');
}