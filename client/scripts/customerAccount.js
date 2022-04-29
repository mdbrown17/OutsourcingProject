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
            
            if(customer.isLoggedIn == true)
            {
                
            }
        });

    

    }).catch(function(error){
        console.log(error);
    });
}