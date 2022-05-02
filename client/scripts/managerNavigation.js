function handleOnLoad(){
    localStorage.setItem("managerID", localStorage.getItem("managerID"));

    console.log(localStorage.getItem("userFirstName"));
    let html = "";

    var firstname = localStorage.getItem("userFirstName");

    html += '<p><strong>Welcome, ' + firstname + '</strong></p>';

    document.getElementById("welcome").innerHTML = html;
}