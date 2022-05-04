using System;

namespace api.Models
{
    public class Lease
    {
        public int leaseID {get; set;}
        public DateTime startDate {get; set;}
        public DateTime endDate {get; set;}
        public int rentalID {get; set;}
        public int customerID {get; set;}
    }
}