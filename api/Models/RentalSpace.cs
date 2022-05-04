using System;

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

        //below are new from lease
        public DateTime startDate {get; set;}
        public DateTime endDate {get; set;}
        // from customer
        public string cfName {get; set;}
        public string clName {get; set;}
        public string cBusinessName {get; set;}
        public Int64 cPhoneNumber {get; set;}
        public string cEmail {get; set;}
        // from manager
        public string mfname {get; set;}
        public string mlname {get; set;}
        public Int64 mphoneNumber {get; set;}
        public string mEmail {get; set;}

    }
}