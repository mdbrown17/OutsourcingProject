// const baseUrl = "https://localhost:5001/api/availablerentalspaces";

function handleOnLoad() {
    console.log(localStorage.getItem('successfulApp'));
    getRentalSpaces();
    if(localStorage.getItem('successfulApp') == "true"){
        showModalSuccess();
    }
    localStorage.setItem("successfulApp", 'false');
}

function getRentalSpaces(){
    fetch('https://localhost:5001/api/availablerentalspaces')
        .then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){

        let html = "";
        var rentalCount = 0;

        //html +=  '<div id="rentals" class="container"> <div class="row">';

        json.forEach((RentalSpace) => {

            console.log(RentalSpace.rentalID); // test note
            var rentalID = RentalSpace.rentalID;
            var image = RentalSpace.imageLink;
            var monthly = RentalSpace.monthlyRate;
            var weekly = RentalSpace.weeklyRate;
            var size = RentalSpace.sqFt;
            var min = RentalSpace.minimumPeriod;
            var max = RentalSpace.maximumPeriod;
            var nearby = RentalSpace.nearbyTenant;
            var location = RentalSpace.locationDetail;
            var kitchen = RentalSpace.kitchen;
            var lighting = RentalSpace.commercialLighting;
            var security = RentalSpace.securitySystem;
            var internet = RentalSpace.internet;
            var bathroom = RentalSpace.bathroom;

            html += '<div class = "col-sm-4" style="border-style: solid;">';
            html += '<h4><b>Rental Space ' + rentalID + '</b></h4>';
            html += '<center><img src="' + image + '" id="myimage" alt="floorplan"></center>'
            html += '<p><strong>Monthly Rate: $' + monthly + '</strong></p>';
            html += '<p><strong>Weekly Rate: $' + weekly + '</strong></p>';
            html += '<p><strong>Size: ' + size + ' sqFt</strong></p>';
            html += '<p><strong>Min Rental Period: ' + min + ' Months</strong></p>';
            html += '<p><strong>Max Rental Period: ' + max + ' Months</strong></p>';
            html += '<p><strong>Nearby Tenant(s): ' + nearby + '</strong></p>';
            html += '<p><strong>Location: ' + location + '</strong></p>';

            if(kitchen == 1){
                html += '<p><strong>Kitchen Included</strong></p>';
            }
            if(lighting == 1){
                html += '<p><strong>Commercial Lighting Included</strong></p>';
            }
            if(security == 1){
                html += '<p><strong>Security System Included</strong></p>';
            }
            if(internet == 1){
                html += '<p><strong>Internet Included</strong></p>';
            }
            if(bathroom == 1){
                html += '<p><strong>Bathroom Included</strong></p>';
            }

            // html += '<div class="btn">';
            // html += '<a href="#" data-toggle="modal" data-target="#requestModal"> Request </a>';
            html += '<center><button id="requestButton" class="btn" onclick="showRentalModal(' + rentalID + ')">Request</button></center>';
            html+=' </div> </div>';
            rentalCount ++;
        });
        document.getElementById("rentals").innerHTML = html;

    }).catch(function(error){
            console.log(error);
    });
}

function submitRequest(){
    localStorage.setItem('successfulApp', 'true');
    const chosenSpace = localStorage.getItem("spaceToApplyID");
    const start = document.getElementById("startDate").value;
    const end = document.getElementById("endDate").value;
    const notes = document.getElementById("notes").value;
    postApplication(start, end, notes, chosenSpace);
}
function postApplication(start, end, notes, chosenSpace){
    var application = {
        customerNotes: notes,
        customerID: localStorage.getItem("userID"),
        managerID: 1,
        rentalID: chosenSpace,
        startDate: start,
        endDate: end
    };

    fetch("https://localhost:5001/api/rentalapplications", {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type":'application/json',
        },
        body: JSON.stringify(application)
        
    }).then((response) =>{
        console.log(response);
    });
}

function showModalSuccess(){
    $('#successModal').modal('show');
}

function hideModalSuccess(){
    $('#successModal').modal('hide');
}

function showRentalModal(id){
    localStorage.setItem("spaceToApplyID", id);
    console.log("id requested " + id);
    console.log(localStorage.getItem('successfulApp'));
    $('#requestModal').modal('show');
}

function hideRentalModal(){
    $('#requestModal').modal('hide');
}

