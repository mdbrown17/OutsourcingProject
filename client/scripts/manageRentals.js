function handleOnLoad(){
    console.log(localStorage.getItem("managerID"));
    getAllPending();
}

function getAllPending(){
    console.log("made it here");
    var i = 0;

    fetch('https://localhost:5001/api/rentalapplications')
        .then(function(response){
        // console.log(response);
        return response.json();
    }).then(function(json){

        let html = "";

        json.forEach((RentalApplication) => {

            var applicationID = RentalApplication.applicationID;
            var dateRequested = new Date(RentalApplication.dateRequested);
            var approvalStatus = RentalApplication.approvalStatus;
            var customerNotes = RentalApplication.customerNotes;
            var managerID = localStorage.getItem("managerID");

            var customerID = RentalApplication.customerID;
            var rentalID = RentalApplication.rentalID;
            var startDate = new Date(RentalApplication.startDate);
            var endDate = new Date(RentalApplication.endDate);
            
            eDate = endDate.getFullYear() + '-' + endDate.getDay() + '-'+ endDate.getMonth();
            sDate = startDate.getFullYear() + '-' + startDate.getDay() + '-'+ endDate.getMonth();
            rDate = dateRequested.getFullYear() + '-' + dateRequested.getDay() + '-'+ dateRequested.getMonth();

            // var sqFt = RentalApplication.sqFt;
            var myImage = RentalApplication.imageLink;


            if(approvalStatus == 'pending')
            {
                html += '<div class = "col-4" style="border-style: solid;">';
            
                html += '<h4><b>Request #' + applicationID + ' - Rental Space ' + rentalID + ' </b></h4>';
                html += '<h5> Rquested By Customer: <b>' + customerID + '</b></h5>';
                html += '<img src="' + myImage + '" alt="floorplan">'; //come back img
                html += '<p><strong>Date Requested: ' +  rDate + '</strong></p>';
                html += '<p><strong>    Start Date Requested: ' + sDate + '</strong></p>';
                html += '<p><strong>    End Date Requested: ' +  eDate + '</strong></p>';
                html += '<p><strong>Notes: ' + customerNotes + '</strong></p>';

                html += '<div class="approveBtn">';
                html += '<button id="approveButton" class="btn" onclick="approveApplication(';
                html += applicationID + ", " + managerID + ", " + customerID + ", " + rentalID + ", '" + sDate + "', '" + eDate + "'";
                html += ')">Approve</button>';
                html += '</div>';
                html += '<div class="denyBtn">';

                html += '<button id="denyButton" class="btn" onclick="denyApplication(';
                html += applicationID + ", " + managerID;
                html += ')">Deny</button></div></div>';

                i++;
            }
        });
        if(i == 0){
            html += '<div class = "col-12"> <center><h3>No outstanding rental requests currently</h3></center></div>';
        }
        document.getElementById("rentalApps").innerHTML = html;


    }).catch(function(error){
        console.log(error);
    });
}

function approveApplication(applicationID, managerID, customerID, rentalID, sDate, eDate){
    //console.log("made it to approve function" + applicationID);
    putApplication(applicationID, managerID, "approved");
    // getRentalDetails(rentalID);
    putRentalSpace(rentalID, customerID);
    putLease(rentalID, customerID, sDate, eDate);

    showModalApproved();
}
function denyApplication(applicationID, managerID){
    putApplication(applicationID, managerID, "denied");
    showModalDenied();
}


function putApplication(applicationID, managerID, status){
    fetch("https://localhost:5001/api/rentalapplications/" + applicationID, {
        method: "PUT",
        headers: {
            "Accept": 'application/json',
            "Content-Type":'application/json',
        }
        ,
        body: JSON.stringify({
                applicationID: applicationID,
                approvalStatus: status,
                managerID: managerID
            })
    }).then((response) =>{
        console.log(response);
    });
}

function getRentalDetails(rentalID){
    console.log("made to putRentalSpace " + rentalID);

    fetch('https://localhost:5001/api/rentalspaces')
    .then(function(response){
    console.log(response);
    return response.json();
        }).then(function(json){

    json.forEach((RentalSpace) => {

        if(RentalSpace.rentalID = rentalID)
        {
            var myRental = {
                // image: "1",
                // monthly: 400,
                // weekly: 400,
                // sqFt: 1,
                // min: 1,
                // max: 1,
                // tenant: "1",
                // location: "fff",
                // kitchen: 1,
                // lighting: 0,
                // security: 1,
                // internet: 1,
                // bathroom: 0

                image: RentalSpace.imageLink,
                monthly: RentalSpace.monthlyRate,
                weekly: RentalSpace.weeklyRate,
                sqFt: RentalSpace.sqFt,
                min: RentalSpace.minimumPeriod,
                max: RentalSpace.maximumPeriod,
                tenant: RentalSpace.nearbyTenant,
                location: RentalSpace.locationDetail,
                kitchen: RentalSpace.kitchen,
                lighting: RentalSpace.commercialLighting,
                security: RentalSpace.securitySystem,
                internet: RentalSpace.internet,
                bathroom: RentalSpace.bathroom
            }
            // putRentalSpace(myRental, rentalID, customerID);
            // console.log(RentalSpace.rentalID); // test note
            localStorage.setItem("imageLink", myRental.image);
            localStorage.setItem("monthlyRate", myRental.monthly);
            localStorage.setItem("weeklyRate", myRental.weekly);
            localStorage.setItem("sqFt", myRental.sqFt);
            localStorage.setItem("minimumPeriod", myRental.min);
            localStorage.setItem("maximumPeriod", myRental.max);
            localStorage.setItem("nearbyTenant", myRental.tenant);
            localStorage.setItem("locationDetail", myRental.location);
            localStorage.setItem("kitchen", myRental.kitchen);
            localStorage.setItem("commercialLigting", myRental.lighting);
            localStorage.setItem("securitySystem", myRental.security);
            localStorage.setItem("internet", myRental.internet);
            localStorage.setItem("bathroom", myRental.bathroom);
        }

    }).catch(function(error){
        console.log(error);
        });
    });
}

function putRentalSpace(rentalID, customerID){
    const url = "https://localhost:5001/api/rentalspaces/" + rentalID;

    fetch(url, {
        method: "PUT",
        headers: {
            "Accept": 'application/json',
            "Content-Type":'application/json',
        }
        ,
        body: JSON.stringify({
            // rentalID: 3,
            // sqFt: 400,
            // monthlyRate: 2000,
            // weeklyRate: 4000,
            // imageLink: './Images/floorplan3.png',
            // minimumPeriod: 6,
            // maximumPeriod: 12,
            // locationDetail: 'n/a',
            // nearbyTenant: 'n/a',
            // customerID: 12,
            // kitchen: 1,
            // commercialLighting: 0,
            // securitySystem: 1,
            // internet: 0,
            // bathroom: 1

            rentalID: rentalID,
            sqFt: localStorage.getItem("sqFt"),
            monthlyRate: localStorage.getItem("monthlyRate"),
            weeklyRate: localStorage.getItem("weeklyRate"),
            imageLink: localStorage.getItem("imageLink"),
            minimumPeriod: localStorage.getItem("minimumPeriod"),
            maximumPeriod: localStorage.getItem("maximumPeriod"),
            locationDetail: localStorage.getItem("locationDetail"),
            nearbyTenant: localStorage.getItem("nearbyTenant"),
            customerID: customerID,
            kitchen: localStorage.getItem("kitchen"),
            commercialLighting: localStorage.getItem("lighting"),
            securitySystem: localStorage.getItem("security"),
            internet: localStorage.getItem("internet"),
            bathroom: localStorage.getItem("bathroom")
        })
            
    }).then((response) =>{
        console.log(response);
    });
}

function putLease(rentalID, customerID, sDate, eDate){
    console.log("made it to putLease");

    var startDate = new Date(sDate);
    var endDate = new Date(eDate);
    fetch("https://localhost:5001/api/leases/" + rentalID, {
        method: "PUT",
        headers: {
            "Accept": 'application/json',
            "Content-Type":'application/json',
        }
        ,
        body: JSON.stringify({
            leaseID: rentalID,
            startDate: startDate,
            endDate: endDate,
            rentalID: rentalID, 
            customerID: customerID
        })
    }).then((response) =>{
        console.log(response);
    });
}

function showModalApproved(){
    $('#approvedModal').modal('show');
}
function showModalDenied(){
    $('#denyModal').modal('show');
}
