# OutsourcingProject
MIS 321 Group Project - Matt Brown, Houston Ragan, Anna LeGoullon, Bri Umble

Flow of Control

-User starts out on the 'homepage' (loginNavigation.html) and has the option to log in as a customer or manager.

Customer
-> user starts out by clicking the 'Customer Login' button, which directs them to the login page
-> user then tries to login with an account that hasn't been created and receives corresponding error message
-> user creates account and is sent back to login page to enter valid credentials
-> upon entering valid credentials, the user is sent to a page with 4 buttons
-> for each button, a Home button is in the top right for returning to the customer homepage
-> the 'Pending Requests' page shows the rental requests that the customer has requested from the 'Available Rentals' page and  all of the corresponding application and rental space's information
-> the 'Available Rentals' page shows the customer all of the currently available rentals and gives the customer the ability to Request one; customer is presented with modal that prompts them to enter desired start and end date, as well as any notes
-> the 'Current Rentals' page shows the customer their current rental and all the details about 
-> the 'View Account' page shows the customer's information they entered when creating their account and is also given the option to edit any of their account info if they would like; upon submitting changes, customer is presented with a modal for confirmation
-> when ready, the customer can hit the 'Logout' button in the top right of their homepage to be logged out and sent to the main navigation page

Manager
-> user starts out by clicking the 'Manager Login' button, which directs them to the login page
-> upon entering valid credentials, the user is sent to a page with 3 buttons
-> for each button, a Home button is in the top right for returning to the customer homepage
-> the 'Manage Rental Requests' button shows all rental requests, their information, and which customer is making that request; manager is given the option to either approve or deny each request and is presented with a modal for confirmation (if approved, rental now shows up in customer's 'Current Rentals' and removes it from their 'Rental Requests'; if denied, rental request will show the status of 'Denied')
-> the 'View/Edit Rentals' button shows all rental spaces and provides the ability for the manager to edit any information about them
-> the 'View Account' page shows the manager's information and gives them the option to edit any of their account info if they would like; upon submitting changes, manager is presented with a modal for confirmation