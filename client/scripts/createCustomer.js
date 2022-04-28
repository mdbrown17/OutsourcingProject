// const baseUrl = "https://localhost:5001/api/customers"; //
function postCustomer() {
    console.log("Made it here");
    const fName = document.getElementById("firstname").value;
    const lName = document.getElementById("lastname").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const phoneNumber = document.getElementById("phonenumber").value;
    const email = document.getElementById("email").value;
    const businessname = document.getElementById("businessname").value;

    var user = {
            cfName: fName,
            clName: lName,
            cBusinessName: businessname,
            cPhoneNumber: parseInt(phoneNumber),
            cEmail: email,
            cUsername: username,
            cPassword: password
        };


        console.log(user);

    fetch("https://localhost:5001/api/customers", {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type":'application/json',
        },
        body: JSON.stringify(user)
        
    }).then((response) =>{
        console.log(response);
    }); 
}