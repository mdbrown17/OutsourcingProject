using System;

namespace api.Models
{
    public class Customer
    {
        public int customerID {get; set;}
        public string cfName {get; set;}
        public string clName {get; set;}
        public string cBusinessName {get; set;}
        public Int64 cPhoneNumber {get; set;}
        public string cEmail {get; set;}
        public string cUsername {get; set;}
        public string cPassword {get; set;}

        public bool isLoggedIn {get; set;}
    }
}