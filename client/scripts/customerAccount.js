const baseUrl = "https://localhost:5001/api/customers"; 
var customerList = [];
var myCustomer = {};

function handleOnLoad() {
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
            }

        });
        document.getElementById("info").innerHTML = html;

        }).catch(function(error){
            console.log(error);
        });
}