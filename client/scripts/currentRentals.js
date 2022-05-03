function handleOnLoad(){
    getCustomerRental();
}

function getCustomerRental(){
    fetch('https://localhost:5001/api/rentalspaces')
        .then(function(response){
        console.log(response)
        return response.json();
    }).then(function(json){
        let html = "";
        var customerid = localStorage.getItem("userID");
        json.forEach((RentalSpace) => {
            if(RentalSpace.customerID == customerid){
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

    
                html+=' </div> </div>';
            }
        });
            document.getElementById("custrental").innerHTML = html;

        }).catch(function(error){
            console.log(error);
        });
}

