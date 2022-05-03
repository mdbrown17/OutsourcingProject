function handleOnLoad() {
    getApplication();
    getPendingRental();
}

function getApplication(){
    fetch('https://localhost:5001/api/rentalapplications')
        .then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){

        let html = "";
        json.forEach((rentalapplication) => {

            if(rentalapplication.customerID == localStorage.getItem("userID"))
            {
                console.log(rentalapplication.customerID); // test note
                var dateRequested = rentalapplication.dateRequested;
                var rentalid = rentalapplication.rentalID;
                var startdate = rentalapplication.startDate;
                var enddate = rentalapplication.endDate;
                
                html += '<div class="rentalApplication" style="border-style: solid;">';
                html += '<p><strong>RentalID: ' + rentalapplication.rentalID + '</strong></p>';
                html += '<p><strong>Date Requested: ' + dateRequested + '</strong></p>';
                html += '<p><strong>Start Date: ' + startdate + '</strong></p>';
                html += '<p><strong>End Date: ' + enddate + '</strong></p>';
            }

            html+=' </div> </div>';

        });
        document.getElementById("applicationInfo").innerHTML = html;

    }).catch(function(error){
            console.log(error);
    });
}

function getPendingRental(){
    fetch('https://localhost:5001/api/availablerentalspaces')
        .then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){

        let html = "";
        json.forEach((RentalSpace) => {

            if(RentalSpace.customerID == localStorage.getItem("userID"))
            {
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

                html += '<div class="rentalSpace" style="border-style: solid;">';
                html += '<h4><b>Rental Space ' + rentalID + '</b></h4>';
                html += '<img src="' + image + '" id="myimage" alt="floorplan"><strong>Weekly Rate: $' + weekly + '</strong>';
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

                html+=' </div> </div>';

            }

        });
        document.getElementById("pendingRentalInfo").innerHTML = html;

    }).catch(function(error){
            console.log(error);
    });
}