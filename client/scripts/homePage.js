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

            if(rentalCount % 3 == 0){
                html +=  '<div class="row"></div>';
            };
            var rentalID = RentalSpace.rentalID;
            var image = RentalSpace.imageLink;
            var monthly = RentalSpace.monthlyRate;
            var weekly = RentalSpace.weeklyRate;
            var size = RentalSpace.sqFt;

            html += '<div class = "col-4" style="border-style: solid;">';
            html += '<h4><b>Rental Space ' + rentalID + '</b></h4>';
            html += '<img src="' + image + '" alt="floorplan">'
            html += '<p><strong>Monthly Rate: ' + monthly + '</strong></p>';
            html += '<p><strong>Weekly Rate: ' + weekly + '</strong></p>';
            html += '<p><strong>Size: ' + size + '</strong></p>';
            html += '<div class="btn">';
            html += '<button id="requestButton" class="btn">Request</button> </div> </div>';
            rentalCount ++;
        });
            document.getElementById("rentals").innerHTML = html;

    }).catch(function(error){
            console.log(error);
    });
}