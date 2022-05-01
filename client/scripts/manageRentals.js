function handleOnLoad(){
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

            console.log(RentalApplication.rentalID); // test note

            var applicationID = RentalApplication.applicationID;
            var dateRequested = RentalApplication.dateRequested;
            var approvalStatus = RentalApplication.approvalStatus;
            var customerNotes = RentalApplication.customerNotes;
            var customerID = RentalApplication.customerID;
            var rentalID = RentalApplication.rentalID;
            var startDate = RentalApplication.startDate;
            var endDate = RentalApplication.endDate;

            html += '<div class = "col-4" style="border-style: solid;">';
            html += '<h4><b> Rental Space' + rentalID +' </b></h4>';
            html += '<img src="./Images/floorplan.jpg" alt="floorplan">'; //come back img
            html += '<p><strong>Date Requested:' + dateRequested + '</strong></p>';
            html += '<p><strong>Notes:' + customerNotes + '</strong></p>';
            html += '<p><strong>Start Date Requested:' + startDate + '</strong></p>';
            html += '<p><strong>End Date Requested:' + endDate + '</strong></p>';
            html += '<div class="approveBtn">';
            html += '<button id="approveButton" class="btn">Approve</button>';
            html += '</div>';
            html += '<div class="denyBtn">';
            html += '<button id="denyButton" class="btn">Deny</button></div></div>';
        });
        document.getElementById("rentalApps").innerHTML = html;

    }).catch(function(error){
            console.log(error);
    });
}