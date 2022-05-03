function handleOnLoad() {
    
    getRentalSpaces();
    
}

function getRentalSpaces(){
    fetch('https://localhost:5001/api/rentalspaces')
        .then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){

        let html = "";
<<<<<<< HEAD
=======
        
>>>>>>> 94d86d39dea42c0534a9933e78dabe0d916976ab
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
<<<<<<< HEAD

            html += '<div class = "col-sm-4" style="border-style: solid;">';
            html += '<h4><b>Rental Space ' + rentalID + '</b></h4>';
            html += '<img src="' + image + '" id="myimage" alt="floorplan">'
            html += '<p><strong>Monthly Rate: $' + monthly + '</strong><strong> Weekly Rate: $' + weekly + '</strong></p>';
=======
            var customer = RentalSpace.customerID;
            var manager = RentalSpace.managerID;

            html += '<div class = "col-sm-4" style="border-style: solid;">';
            html += '<h4><b>Rental Space ' + rentalID + '</b></h4>';
            html += '<img src="' + image + '" id="myimage" alt="floorplan">';
            html += '<p><strong>Monthly Rate: $' + monthly + '</strong><p/>';
            html += '<p><strong> Weekly Rate: $' + weekly + '</strong></p>';
>>>>>>> 94d86d39dea42c0534a9933e78dabe0d916976ab
            html += '<p><strong>Size: ' + size + ' sqFt</strong></p>';
            html += '<p><strong>Min Rental Period: ' + min + ' Months</strong></p>';
            html += '<p><strong>Max Rental Period: ' + max + ' Months</strong></p>';
            html += '<p><strong>Nearby Tenant(s): ' + nearby + '</strong></p>';
            html += '<p><strong>Location: ' + location + '</strong></p>';

            if(kitchen == 1){
<<<<<<< HEAD
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
            html += '<center><button id="requestButton" class="btn" onclick="showRentalModal(' + rentalID + ')">Edit</button></center>';
            html+=' </div> </div>';
            rentalCount ++;
        });
        document.getElementById("allRentals").innerHTML = html;
=======
                html += '<p><strong>Kitchen: Included</strong></p>';
            }
            if(lighting == 1){
                html += '<p><strong>Commercial Lighting: Included</strong></p>';
            }
            if(security == 1){
                html += '<p><strong>Security System: Included</strong></p>';
            }
            if(internet == 1){
                html += '<p><strong>Internet: Included</strong></p>';
            }
            if(bathroom == 1){
                html += '<p><strong>Bathroom: Included</strong></p>';
            }

            // html += '<div class="btn">';
            // html += <a href="#" data-toggle="modal" data-target="#requestModal"> Request </a>';

            localStorage.setItem("editID", rentalID);
           
            
            html += '<center><button id="requestButton" class="btn" onclick="updateRentalSpace()">Edit</button></center>';
            html +=' </div> </div>';
            
            rentalCount ++;
        });
        
        document.getElementById("allRentals").innerHTML = html;
        
>>>>>>> 94d86d39dea42c0534a9933e78dabe0d916976ab

    }).catch(function(error){
            console.log(error);
    });
<<<<<<< HEAD
=======
}

function updateRentalSpace() {

    console.log("made it past button");
    console.log(localStorage.getItem("editID"));
    console.log(localStorage.getItem("rentalID"));

    fetch('https://localhost:5001/api/rentalspaces')
        .then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){

        let html = "";
        let html2 = "";

        json.forEach((RentalSpace) => {
             
            if(RentalSpace.rentalID == localStorage.getItem("rentalID"))
                
            console.log(localStorage.getItem("rentalID"));
                var rentalID = RentalSpace.rentalID;
                var imagelink = RentalSpace.imageLink;
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
                var customer = RentalSpace.customerID;
                var manager = RentalSpace.managerID;

                html += '<div class = "col-sm-4" style="border-style: solid;">';
                html += '<h4><b>Rental Space ' + rentalID + '</b></h4>';
                html += '<p><strong>Monthly Rate: </strong><input type="text" id="monthlyRate" value="'+monthly+'"></input></p>';
                html += '<p><strong>Weekly Rate: </strong><input type="text" id="weeklyRate" value="'+weekly+'"></input></p>';
                html += '<p><strong>Size: </strong><input type="text" id="sqFt" value="'+size+'"></input></p>';
                html += '<p><strong>Min Rental Period: </strong><input type="text" id="minimumPeriod" value="'+min+'"></input></p>';
                html += '<p><strong>Max Rental Period: </strong><input type="text" id="maximumPeriod" value="'+max+'"></input></p>';
                html += '<p><strong>Nearby Tenant: </strong><input type="text" id="nearbyTenant" value="'+nearby+'"></input></p>';
                html += '<p><strong>Location: </strong><input type="text" id="locationDetail" value="'+location+'"></input></p>';
                html += '<p><strong>Kitchen: </strong><input type="text" id="kitchen" value="'+kitchen+'"></input></p>';
                html += '<p><strong>Lighting: </strong><input type="text" id="commercialLighting" value="'+lighting+'"></input></p>';
                html += '<p><strong>Security: </strong><input type="text" id="securitySystem" value="'+security+'"></input></p>';
                html += '<p><strong>Internet: </strong><input type="text" id="internet" value="'+internet+'"></input></p>';
                html += '<p><strong>Bathroom: </strong><input type="text" id="bathroom" value="'+bathroom+'"></input></p>';

                html += '<center><button id="requestButton" class="btn" onclick="editRentalSpace()">Submit Changes</button></center>';
                html+=' </div> </div>';
        
        });
        document.getElementById("allRentals").innerHTML = html;

        localStorage.setItem("monthRate", document.getElementById("monthly").value);
        localStorage.setItem("weekRate", document.getElementById("weekly").value);
        localStorage.setItem("sqFt", document.getElementById("size").value);
        localStorage.setItem("image", document.getElementById("imagelink").value);
        localStorage.setItem("minimum", document.getElementById("min").value);
        localStorage.setItem("maximum", document.getElementById("max").value);
        localStorage.setItem("nearby", document.getElementById("nearby").value);
        localStorage.setItem("location", document.getElementById("location").value);
        localStorage.setItem("hasKitchen", document.getElementById("kitchen").value);
        localStorage.setItem("hasLighting", document.getElementById("lighting").value);
        localStorage.setItem("hasSecurity", document.getElementById("security").value);
        localStorage.setItem("hasInternet", document.getElementById("internet").value);
        localStorage.setItem("hasBathroom", document.getElementById("bathroom").value);

        }).catch(function(error){
            console.log(error);
        });
}

function editRentalSpace(){

    var rentalID = localStorage.getItem("rentalID");
    var monthRate = localStorage.getItem("monthRate");
    var weekRate = localStorage.getItem("weekRate");
    var sqFt = localStorage.getItem("sqFt");
    var image = localStorage.getItem("image");
    var minimum = localStorage.getItem("minimum");
    var maximum = localStorage.getItem("maximum");
    var nearby = localStorage.getItem("nearby");
    var location = localStorage.getItem("location");
    var hasKitchen = localStorage.getItem("hasKitchen");
    var hasLighting = localStorage.getItem("hasLighting");
    var hasSecurity = localStorage.getItem("hasSecurity");
    var hasInternet = localStorage.getItem("hasInternet");
    var hasBathroom = localStorage.getItem("hasBathroom");
    var customer = localStorage.getItem("customer");
    var manager = localStorage.getItem("manager");

    const url = "https://localhost:5001/api/rentalspaces/" + rentalID;

    fetch(url, {
        method: "PUT",
        headers: {
            "Accept": 'application/json',
            "Content-Type":'application/json',
        }
        ,
        body: JSON.stringify({
                rentalID: rentalID,
                sqFt: sqFt,
                imageLink: image,
                minimumPeriod: minimum,
                maximumPeriod: maximum,
                monthlyRate: monthRate,
                weeklyRate: weekRate,
                locationDetail: location,
                nearbyTenant: nearby,
                customerID: customer,
                managerID: manager,
                kitchen: hasKitchen,
                commercialLighting: hasLighting,
                securitySystem: hasSecurity,
                internet: hasInternet,
                bathroom: hasBathroom
            })
            
    }).then((response) =>{
        console.log(response);
    });
    showModal();
}

function showModal(){
    $('#successModal').modal('show');
>>>>>>> 94d86d39dea42c0534a9933e78dabe0d916976ab
}