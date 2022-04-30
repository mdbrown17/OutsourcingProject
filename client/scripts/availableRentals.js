// const baseUrl = "https://localhost:5001/api/availablerentalspaces";

function handleOnLoad() {
    getRentalSpaces();
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

            // if(rentalCount % 3 == 0){
            //     html +=  '<div class="row"></div>';
            // };
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
            html += '<img src="' + image + '" id="myimage" alt="floorplan">'
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
            html += '<button id="requestButton" class="btn" onclick="showRentalModal(' + rentalID + ')">Request</button>';
            html+=' </div> </div>';
            rentalCount ++;
        });
        document.getElementById("rentals").innerHTML = html;

    }).catch(function(error){
            console.log(error);
    });
}
function showRentalModal(id){
    localStorage.setItem("spaceToApplyID", id);
    console.log("id requested " + id);
    $('#requestModal').modal('show');
}
function submitRequest(){
    var chosenSpace = localStorage.getItem("spaceToApplyID");
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
    console.log(user);
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
// function getASpace(id){
//     fetch('https://localhost:5001/api/availablerentalspaces') 
//     .then(function(response){
//     console.log(response);
//     return response.json();
// }).then(function(json){
//     json.forEach((RentalSpace) => {

//         console.log(RentalSpace.rentalID); // test note

//         var rentalID = RentalSpace.rentalID;
//         var image = RentalSpace.imageLink;
//         var monthly = RentalSpace.monthlyRate;
//         var weekly = RentalSpace.weeklyRate;
//         var size = RentalSpace.sqFt;
//         var min = RentalSpace.minimumPeriod;
//         var max = RentalSpace.maximumPeriod;
//         var nearby = RentalSpace.nearbyTenant;
//         var location = RentalSpace.locationDetail;
//         var kitchen = RentalSpace.kitchen;
//         var lighting = RentalSpace.commercialLighting;
//         var security = RentalSpace.securitySystem;
//         var internet = RentalSpace.internet;
//         var bathroom = RentalSpace.bathroom;
//     });
//     document.getElementById("rentals").innerHTML = html;

// }).catch(function(error){
//         console.log(error);
// });
// }

function hideRentalModal(){
    $('#requestModal').modal('hide');
}

