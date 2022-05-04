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
        let html2 = "";
        
        json.forEach((rentalapplication) => {

            if(rentalapplication.customerID == localStorage.getItem("userID") && rentalapplication.approvalStatus != "approved")
            {
                console.log(rentalapplication.customerID); // test note
                var applicationID = rentalapplication.applicationID;
                var image = rentalapplication.imageLink;
                var rentalid = rentalapplication.rentalID;
                var daterequested = new Date(rentalapplication.dateRequested);
                var sDate = new Date(rentalapplication.startDate);
                var eDate = new Date(rentalapplication.endDate);
                var startdate = sDate.getMonth() + '-' + sDate.getDay() + '-' + sDate.getFullYear();
                var enddate = eDate.getMonth() + '-' + eDate.getDay() + '-' + eDate.getFullYear();
                var dateRequested = daterequested.getMonth() + '-' + daterequested.getDay() + '-' + daterequested.getFullYear();
                var monthlyRate = rentalapplication.monthlyRate;
                var weeklyRate = rentalapplication.weeklyRate;
                var location = rentalapplication.locationDetail;
                var nearby = rentalapplication.nearbyTenant;
                var hasKitchen = rentalapplication.kitchen;
                var hasCommercialLighting = rentalapplication.commercialLighting;
                var hasSecuritySystem = rentalapplication.securitySystem;
                var hasInternet = rentalapplication.internet;
                var hasBathroom = rentalapplication.bathroom;
                var status = rentalapplication.approvalStatus;

                html += '<div class="row" style="border-style: solid; border-width: 2px; border-radius: 20px; border-color: grey;>';
                
                html += '<div class="rentalApplication">';
                
                html += '<div class="col-6">';
                
                html += '<p><strong>Date Requested: ' + dateRequested + '</strong></p>';
                html += '<p><strong>Start Date: ' + startdate + '</strong></p>';
                html += '<p><strong>End Date: ' + enddate + '</strong></p>';
                html += '<p><strong>Monthly Rate: ' + monthlyRate + '</strong></p>';
                html += '<p><strong>Weekly Rate: ' + weeklyRate + '</strong></p>';
                html += '<p><strong>Application Status: ' + status + '</strong></p>';
                html += '<img src="' + image + '" id="myimage" alt="floorplan" style="min-width: 100px; min-height: 150px; max-width: 200px; max-height: 150px;"></center></div>';
                
                
                html += '<div class="col-6">';
                
                html += '<p><strong>ApplicationID: ' + applicationID + '</strong></p>';
                html += '<p><strong>RentalID: ' + rentalid + '</strong></p>';
                html += '<p><strong>Location: ' + location + '</strong></p>';
                html += '<p><strong>Nearby Tenant: ' + nearby + '</strong></p>';
                html += '<p><strong>Kitchen: ' + hasKitchen + '</strong></p>';
                html += '<p><strong>Commercial Lighting: ' + hasCommercialLighting + '</strong></p>';
                html += '<p><strong>Security System: ' + hasSecuritySystem + '</strong></p>';
                html += '<p><strong>Internet: ' + hasInternet + '</strong></p>';
                html += '<p><strong>Bathroom: ' + hasBathroom + '</strong></p></div></div>';
                
            }

            html += '</div></div><br><br><br>';
           
        });
        document.getElementById("applicationInfo").innerHTML = html;
        document.getElementById("rentalInfo").innerHTML = html2;
        

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
        //document.getElementById("pendingRentalInfo").innerHTML = html;

    }).catch(function(error){
            console.log(error);
    });
}