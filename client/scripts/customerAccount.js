const baseUrl = "https://localhost:5001/api/customers"; 
var customerList = [];
var myCustomer = {};

function handleOnLoad() {
    getCustomerInfo();
}

function getCustomerInfo() {
    fetch('https://localhost:5001/api/customers')
        .then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){

        let html = "";

        json.forEach((customer) => {
            
            console.log(customer.isLoggedIn);
            
            if(customer.isLoggedIn == true)
            {
                var firstname = customer.cfname;
                var lastname = customer.clname;
                var username = customer.cusername;
                var password = customer.cpassword;
                var email = customer.cemail;
                var phonenumber = customer.cphonenumber;
                var businessname = customer.businessname;

                html += '<p><strong>First Name: ' + firstname + '</strong></p>';
                html += '<p><strong>Last Name: ' + lastname + '</strong></p>';
                html += '<p><strong>Username: ' + username + ' sqFt</strong></p>';
                html += '<p><strong>Password: ' + password + ' sqFt</strong></p>';
                html += '<p><strong>Password: ' + email + ' sqFt</strong></p>';
                html += '<p><strong>Password: ' + phonenumber + ' sqFt</strong></p>';
                html += '<p><strong>Password: ' + businessname + ' sqFt</strong></p>';
            }

        });
        document.getElementById("info").innerHTML = html;

    }).catch(function(error){
        console.log(error);
    });
}