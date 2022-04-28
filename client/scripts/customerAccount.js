const baseUrl = "https://localhost:5001/api/customers"; 
var customerList = [];
var myCustomer = {};

function handleOnLoad() {
    populateList();
}

function populateList() {
    const allCustomerApiUrl = baseUrl;
    fetch(allCustomerApiUrl).then(function(response) {
        return response.json();
    }).then(function(json) {
        customerList = json;
        let html = `<select class = "listbox" id="selectListBox" onclick = "handleOnChange()" name = "list_box" size=5 width="100%">`;
        json.forEach((customer) => {
            html += `<option value = ${customer.customerid}> ${customer.cfname}</option>`;
        })
        html += "</select>";
        document.getElementById("listbox").innerHTML = html;
    }).catch(function(error) {
        console.log(error);
    });
}

function handleOnChange() {
    const selectedId = document.getElementById("selectListBox").value;
    console.log("made it to change", selectedId)
    customerList.forEach((customer) => {
        console.log(book);
        if (customer.customerid == selectedId) {
            console.log("in the if statement");
            myCustomer = customer;
            populateForm();
        }
    })
}