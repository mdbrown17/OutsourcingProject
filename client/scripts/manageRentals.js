function handleOnLoad(){
    console.log(localStorage.getItem("managerID"));
    getAllPending();
}

function getAllPending(){
    fetch('https://localhost:5001/api/rentalapplications')
        .then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){

        let html = "";

        json.forEach((RentalApplication) => {

            // onsole.log(RentalApplication.rentalID); // test note

            var applicationID = RentalApplication.applicationID;
            var dateRequested = new Date(RentalApplication.dateRequested);
            var approvalStatus = RentalApplication.approvalStatus;
            var customerNotes = RentalApplication.customerNotes;
            var managerID = localStorage.getItem("managerID");

            var customerID = RentalApplication.customerID;
            var rentalID = RentalApplication.rentalID;
            var startDate = new Date(RentalApplication.startDate);
            var endDate = new Date(RentalApplication.endDate);

            const myApplication = {
                applicationID: applicationID,
                dateRequested: dateRequested,
                approvalStatus: approvalStatus,
                customerNotes: customerNotes,
                managerID: managerID,
                customerID: customerID,
                rentalID: rentalID,
                startDate: startDate,
                endDate: endDate
            };
            localStorage.setItem("application", myApplication);
            getImage(rentalID);

            var myImage = localStorage.getItem('image');

            console.log(myImage);
            if(approvalStatus == 'pending')
            {
                html += '<div class = "col-4" style="border-style: solid;">';
                html += '<h4><b> Rental Space' + rentalID + ' </b></h4>';
                html += '<img src="' + myImage + '" alt="floorplan">'; //come back img
                html += '<p><strong>Date Requested:' + dateRequested + '</strong></p>';
                html += '<p><strong>Notes:' + customerNotes + '</strong></p>';
                html += '<p><strong>Start Date Requested:' + startDate + '</strong></p>';
                html += '<p><strong>End Date Requested:' + endDate + '</strong></p>';
                html += '<div class="approveBtn">';
                html += '<button id="approveButton" class="btn" onclick="approveApplication(' + applicationID + ', ' + managerID + ', ' + customerID + ')">Approve</button>';
                html += '</div>';
                html += '<div class="denyBtn">';
                html += '<button id="denyButton" class="btn">Deny</button></div></div>';
            }
            
        });
        document.getElementById("rentalApps").innerHTML = html;

    }).catch(function(error){
        console.log(error);
    });
}
function getImage(searchID){
    var image = "";
    fetch('https://localhost:5001/api/rentalspaces')
        .then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){
        json.forEach((rentalSpace) => {
            if(rentalSpace.rentalID == searchID)
            {   
                image = rentalSpace.imagelink
                //localStorage.setItem("image", rentalSpace.imagelink);
            }
        });
    });
    return image;
}
function approveApplication(applicationID, managerID, customerID){

    console.log("made it to approve function" + applicationID);

    const specificUrl = "https://localhost:5001/api/rentalapplications/" + applicationID;

    fetch(specificUrl, {
        method: "PUT",
        headers: {
            "Accept": 'application/json',
            "Content-Type":'application/json',
        }
        ,
        body: JSON.stringify({
            applicationID: applicationID,
            approvalStatus: "approved",
            managerID: managerID
            })
    }).then((response) =>{
        console.log(response);
    });

    fetch("https://localhost:5001/api/rentalspaces/" + applicationID, {
        method: "PUT",
        headers: {
            "Accept": 'application/json',
            "Content-Type":'application/json',
        }
        ,
        body: JSON.stringify({
            nearbyTenant: "N/A",
            rscustomerID: customerID
            })
    }).then((response) =>{
        console.log(response);
    });
    showModalApproved();
}

function showModalApproved(){
    $('#approvedModal').modal('show');
}
