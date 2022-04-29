using System;

namespace api.Models
{
    public class RentalApplication
    {
        public int applicationID {get; set;}
        public DateTime dateRequested {get; set;}
        public string approvalStatus {get; set;}
        public string customerNotes {get; set;}
        public int customerID {get; set;}
        public int managerID {get; set;}
        public int rentalID {get; set;}
        public DateTime startDate {get; set;}
        public DateTime endDate {get; set;}
        public int kitchen {get; set;}
        public int commercialLighting {get; set;}
        public int securitySystem {get; set;}
        public int internet {get; set;}
        public int bathroom {get; set;}
    }
}