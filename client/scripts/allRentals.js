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
            var customer = RentalSpace.customerID;
            var manager = RentalSpace.managerID;

            var managerName = RentalSpace.mfname + " " + RentalSpace.mlname;
            var mEmail = RentalSpace.mEmail;
            var mPhone = RentalSpace.mphoneNumber;

            var custName = RentalSpace.clName + " " + RentalSpace.clName;
            var cPhone = RentalSpace.cPhoneNumber;
            var cEmail = RentalSpace.cEmail;
            var business = RentalSpace.cBusinessName;

            var sDate = new Date(RentalSpace.startDate);
            var eDate = new Date(RentalSpace.endDate);

            var startDate = sDate.getMonth() + '-' + sDate.getDay() + '-' + sDate.getFullYear();
            var endDate = eDate.getMonth() + '-' + eDate.getDay() + '-' + eDate.getFullYear();

            html += '<div class = "col-sm-4" style="border-style: solid;">';
            html += '<h4><b>Rental Space ' + rentalID + '</b></h4>';
            html += '<img src="' + image + '" id="myimage" alt="floorplan" style="min-width: 100px; min-height: 150px; max-width: 200px; max-height: 150px;">';

            // cust information
            if(customer != 1){
                html +='<h5>Currently Occupied By Customer #' +customer + '</strong></h5>';
                html+= '<hr size="5" width="100%" color="black">  ';
                html += '<p>Customer Name: ' +custName +'</p>';
                html += '<p>Business Name: ' + business + '</p>';
                html += '<p>Phone: ' + cPhone +'</p>';
                html += '<p>eMail: ' + cEmail +'</p>';
                html += '<p>Lease Start Date: ' + startDate +'</p>';
                html += '<p>Lease End Date: ' + endDate +'</p>';
            }
            else{
                html += '<h5>Currently Unoccupied</h5>';
            }
            html+= '<hr size="5" width="100%" color="black">  ';
            // manager information

            html += '<p>Manager: ' + managerName + '</p>';
            html += '<p>Manager Email: ' + mEmail + '</p>';
            html += '<p>Manager Phone: ' + mPhone + '</p>';

            // space information
            html+= '<hr size="5" width="100%" color="black">  ';
            html += '<p id="monthlyRate"><strong>Monthly Rate: $' + monthly + '</strong><p/>';
            html += '<p id="weeklyRate"><strong> Weekly Rate: $' + weekly + '</strong></p>';
            html += '<p id="sqFt"><strong>Size: ' + size + ' sqFt</strong></p>';
            html += '<p id="minimumPeriod"><strong>Min Rental Period: ' + min + ' Months</strong></p>';
            html += '<p id="maximumPeriod"><strong>Max Rental Period: ' + max + ' Months</strong></p>';
            html += '<p id="nearbyTenant"><strong>Nearby Tenant(s): ' + nearby + '</strong></p>';
            html += '<p id="locationDetail"><strong>Location: ' + location + '</strong></p>';

            if(kitchen == 1){
                html += '<p ><strong>Kitchen: Included</strong></p>';
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

            localStorage.setItem("editID", rentalID);
            if(customer != 1){
                html+='<center><button id="makeAvailableButton" class="btn" onclick="makeSpaceAvailable(' + 
                rentalID + "," + size + ", '" + image + "'," + min + "," + max + "," + monthly + "," + weekly +
                        ", '" + nearby + "', '" + location + "' , " + customer + "," + manager+ "," + kitchen + "," + lighting + "," + security+ "," + internet + "," + bathroom +
                        ')">Make Space Available</button></center>';
            }
           console.log("9999999999  " + rentalID);
            
            html += '<center><button id="requestButton" class="btn" onclick="showEditRentalSpace(' + rentalID + ')">Edit Space Details</button></center>';
            html +=' </div> </div>';
        });
        
        document.getElementById("allRentals").innerHTML = html;
        

    }).catch(function(error){
            console.log(error);
    });
}

function showEditRentalSpace(myID) {

    console.log("made it past button");
    console.log(localStorage.getItem("editID"));

    fetch('https://localhost:5001/api/rentalspaces')
        .then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){

        let html = "";

        json.forEach((RentalSpace) => {
             
            if(RentalSpace.rentalID == myID){

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

                html += '<h4><center><b>Rental Space ' + rentalID + '</b></center></h4>';
                html += '<p><strong>Image Link: </strong><input type="text" id="image" value="' + imagelink + '"></input></p>';
                html += '<p><strong>Monthly Rate: </strong><input type="text" id="monthlyRate" value="' + monthly + '"></input></p>';
                html += '<p><strong>Weekly Rate: </strong><input type="text" id="weeklyRate" value="'+weekly+'"></input></p>';
                html += '<p><strong>Size: </strong><input type="text" id="sqFt" value="'+size+'"></input></p>';
                html += '<p><strong>Min Rental Period: </strong><input type="text" id="minimumPeriod" value="'+min+'"></input></p>';
                html += '<p><strong>Max Rental Period: </strong><input type="text" id="maximumPeriod" value="'+max+'"></input></p>';
                html += '<p><strong>Nearby Tenant: </strong><input type="text" id="nearbyTenant" value="'+nearby+'"></input></p>';
                html += '<p><strong>Location: </strong><input type="text" id="locationDetail" value="'+location+'"></input></p>';
                html += '<p><strong> Enter 1 if True and 0 if False for each of the below fields:';
                html += '<p><strong>Kitchen: </strong><input type="text" id="kitchen" value="'+kitchen+'"></input></p>';
                html += '<p><strong>Lighting: </strong><input type="text" id="commercialLighting" value="'+lighting+'"></input></p>';
                html += '<p><strong>Security: </strong><input type="text" id="securitySystem" value="'+security+'"></input></p>';
                html += '<p><strong>Internet: </strong><input type="text" id="internet" value="'+internet+'"></input></p>';
                html += '<p><strong>Bathroom: </strong><input type="text" id="bathroom" value="'+bathroom+'"></input></p>';

                

                html += '<center><button id="requestButton" class="btn" onclick="editRentalSpace(';
                html += + rentalID + "," + size + ", '" + imagelink + "'," + min + "," + max + "," + monthly + "," + weekly +
                        ", '" + nearby + "', '" + location + "' , " + customer + "," + manager+ "," + kitchen + "," + lighting + "," + security+ "," + internet + "," + bathroom;
                html += ')">Submit Changes</button></center>';
                html+=' </div> </div>';
            }
        
        });
            document.getElementById("editDialog").innerHTML = html;

        }).catch(function(error){
            console.log(error);
        });
    showModalEdit();
}
function editRentalSpace(rentalID, sqFt, image, minimum, maximum, monthRate, weekRate, nearby, location, customer, manager, kitchen, lighting, security, internet, bathroom){
    
    image = document.getElementById("image").value;
    monthly = document.getElementById("monthlyRate").value;
    weekRate = document.getElementById("weeklyRate").value;
    sqFt = document.getElementById("sqFt").value;
    minimum = document.getElementById("minimumPeriod").value;

    maximum = document.getElementById("maximumPeriod").value;
    nearby = document.getElementById("nearbyTenant").value;
    location = document.getElementById("locationDetail").value;
    kitchen = document.getElementById("kitchen").value;
    lighting = document.getElementById("commercialLighting").value;

    security = document.getElementById("securitySystem").value;
    internet = document.getElementById("internet").value;
    bathroom = document.getElementById("bathroom").value;

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
                monthlyRate: monthly,
                weeklyRate: weekRate,
                imageLink: image,
                minimumPeriod: minimum,
                maximumPeriod: maximum,
                weeklyRate: weekRate,
                locationDetail: location,
                nearbyTenant: nearby,
                customerID: customer,
                managerID: manager,
                kitchen: kitchen,
                commercialLighting: lighting,
                securitySystem: security,
                internet: internet,
                bathroom: bathroom
            })
            
    }).then((response) =>{
        console.log(response);
    });
    hideModalEdit();
    showSuccessModal();
}
function makeSpaceAvailable(myID, sqFt, image, minimum, maximum, monthRate, weekRate, nearby, location, customer, manager, kitchen, lighting, security, internet, bathroom){
    updateRentalSpace(myID, sqFt, image, minimum, maximum, monthRate, weekRate, nearby, location, customer, manager, kitchen, lighting, security, internet, bathroom);
    updateLease(myID);
    showAvailableModal();
}
function updateRentalSpace(myID, sqFt, image, minimum, maximum, monthRate, weekRate, nearby, location, customer, manager, kitchen, lighting, security, internet, bathroom){
    console.log("1000000000 " + myID);
    const url = "https://localhost:5001/api/rentalspaces/" + myID;

    fetch(url, {
        method: "PUT",
        headers: {
            "Accept": 'application/json',
            "Content-Type":'application/json',
        }
        ,
        body: JSON.stringify({
            rentalID: myID,
                sqFt: sqFt,
                monthlyRate: monthRate,
                weeklyRate: weekRate,
                imageLink: image,
                minimumPeriod: minimum,
                maximumPeriod: maximum,
                weeklyRate: weekRate,
                locationDetail: location,
                nearbyTenant: nearby,
                customerID: 1,
                managerID: manager,
                kitchen: kitchen,
                commercialLighting: lighting,
                securitySystem: security,
                internet: internet,
                bathroom: bathroom
        })
    }).then((response) =>{
        console.log(response);
    });
}

function updateLease(myID){

    var startDate = new Date();
    var endDate = new Date();

    fetch("https://localhost:5001/api/leases/" + myID, {
        method: "PUT",
        headers: {
            "Accept": 'application/json',
            "Content-Type":'application/json',
        }
        ,
        body: JSON.stringify({
            leaseID: myID,
            startDate: startDate,
            endDate: endDate,
            rentalID: myID, 
            customerID: 1
        })
    }).then((response) =>{
        console.log(response);
    });
}

function showAvailableModal(){
    $('#availableModal').modal('show');
}

function showSuccessModal(){
    $('#successModal').modal('show');
}

function showModalEdit(){
    $('#editModal').modal('show');
}

function hideModalEdit(){
    $('#editModal').modal('hide');
}