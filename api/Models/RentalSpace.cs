namespace api.Models
{
    public class RentalSpace
    {
        public int rentalID {get; set;}
        public int sqFt {get; set;}
        public string imageLink {get; set;}
        public int minimumPeriod {get; set;}
        public int maximumPeriod {get; set;}

        public int monthlyRate {get; set;}
        public int weeklyRate {get; set;}
        public string locationDetail {get; set;}
        public string nearbyTenant {get; set;}
        public int customerID {get; set;}
        
        public int managerID {get; set;}
        public int kitchen {get; set;}
        public int commercialLighting {get; set;}
        public int securitySystem {get; set;}
        public int internet {get; set;}
        public int bathroom {get; set;}
    }
}