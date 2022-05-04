using System;
using System.IO;
using System.Collections.Generic;
using MySql.Data.MySqlClient;
using System.Data;
using System.Data.SqlClient;
using MySql.Data;
using api.Models;
using api.Interfaces;

namespace api.Database
{ 
    // class reads in rental space objects from database
    public class ReadRentals : IGetRentalSpaces{

        public List<RentalSpace> GetAll(){
            List<RentalSpace> rentals = new List<RentalSpace>();
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"SELECT * FROM rentalspace rs JOIN customer c ON rs.rscustomerid = c.customerid JOIN lease l ON rs.rentalID = l.lrentalID JOIN manager m ON rs.rsmanagerid = m.managerid ORDER BY rs.rentalid";

            using var cmd = new MySqlCommand(stm,con);
            using MySqlDataReader reader = cmd.ExecuteReader();

            //read in each song from database and add to list
            while(reader.Read()){
                int rentalId = reader.GetInt32(0);
                int ft = reader.GetInt32(1);
                string image = reader.GetString(2);
                int min = reader.GetInt32(3);
                int max = reader.GetInt32(4);
                int monthly = reader.GetInt32(5);
                int weekly = reader.GetInt32(6);
                string location = reader.GetString(7);
                string nearTenant = reader.GetString(8);
                int custID = reader.GetInt32(9);
                int manID = reader.GetInt32(10);
                int kitch = reader.GetInt32(11);
                int lighting = reader.GetInt32(12);
                int security = reader.GetInt32(13);
                int inter = reader.GetInt32(14);
                int bath = reader.GetInt32(15);
                // above original
                string cfName = reader.GetString(17);
                string clName = reader.GetString(18);
                string cBusinessName = reader.GetString(19);
                Int64 cPhoneNumber = reader.GetInt64(20);
                string cEmail = reader.GetString(21);
                DateTime startDate = reader.GetDateTime(25);
                DateTime endDate = reader.GetDateTime(26);
                string mfname = reader.GetString(30);
                string mlname = reader.GetString(31);
                Int64 mphoneNumber = reader.GetInt64(32);
                string mEmail = reader.GetString(33);

                rentals.Add(new RentalSpace(){rentalID = rentalId, 
                sqFt = ft, imageLink = image,
                 minimumPeriod = min, 
                 maximumPeriod = max, 
                 monthlyRate = monthly, 
                 weeklyRate = weekly, 
                 locationDetail = location, 
                 nearbyTenant = nearTenant, 
                 customerID = custID, 
                 managerID = manID, 
                 kitchen = kitch, 
                 commercialLighting = lighting,
                 securitySystem = security, 
                 internet = inter, 
                 bathroom = bath,
                // above original
                 cfName = cfName,
                 clName = clName,
                 cBusinessName = cBusinessName,
                 cPhoneNumber = cPhoneNumber,
                 cEmail = cEmail,
                 startDate = startDate,
                 endDate = endDate,
                 mfname = mfname,
                 mlname = mlname,
                 mphoneNumber = mphoneNumber,
                 mEmail = mEmail
                 });
            }
            reader.Close();
            return rentals;
        }
        public List<RentalSpace> GetAvailable(){
            List<RentalSpace> rentals = new List<RentalSpace>();
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"Select * from rentalspace";

            using var cmd = new MySqlCommand(stm,con);
            using MySqlDataReader reader = cmd.ExecuteReader();

            //read in each song from database and add to list
            while(reader.Read()){
                if(reader.GetInt32(9) == 1)
                {
                    int rentalId = reader.GetInt32(0);
                    int ft = reader.GetInt32(1);
                    string image = reader.GetString(2);
                    int min = reader.GetInt32(3);
                    int max = reader.GetInt32(4);
                    int monthly = reader.GetInt32(5);
                    int weekly = reader.GetInt32(6);
                    string location = reader.GetString(7);
                    string nearTenant = reader.GetString(8);
                    int custID = reader.GetInt32(9);
                    int manID = reader.GetInt32(10);
                    int kitch = reader.GetInt32(11);
                    int lighting = reader.GetInt32(12);
                    int security = reader.GetInt32(13);
                    int inter = reader.GetInt32(14);
                    int bath = reader.GetInt32(15);
                    rentals.Add(new RentalSpace(){rentalID = rentalId, sqFt = ft, imageLink = image,
                    minimumPeriod = min, maximumPeriod = max, monthlyRate = monthly, 
                    weeklyRate = weekly, locationDetail = location, nearbyTenant = nearTenant, 
                    customerID = custID, managerID = manID, kitchen = kitch, commercialLighting =lighting,
                    securitySystem = security, internet = inter, bathroom = bath});
                }
            }
            reader.Close();
            return rentals;
        }
        public RentalSpace GetOne(int id){
            List<RentalSpace> rentals = new List<RentalSpace>();
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"Select * from rentalspace JOIN WHERE @rentalid = rentalid";

            using var cmd = new MySqlCommand(stm,con);
            cmd.Parameters.AddWithValue("@rentalid",id);
            using MySqlDataReader reader = cmd.ExecuteReader();

            while(reader.Read()){
                int rentalId = reader.GetInt32(0);
                int ft = reader.GetInt32(1);
                string image = reader.GetString(2);
                int min = reader.GetInt32(3);
                int max = reader.GetInt32(4);
                int monthly = reader.GetInt32(5);
                int weekly = reader.GetInt32(6);
                string location = reader.GetString(7);
                string nearTenant = reader.GetString(8);
                int custID = reader.GetInt32(9);
                int manID = reader.GetInt32(10);
                int kitch = reader.GetInt32(11);
                int lighting = reader.GetInt32(12);
                int security = reader.GetInt32(13);
                int inter = reader.GetInt32(14);
                int bath = reader.GetInt32(15);
                rentals.Add(new RentalSpace(){rentalID = rentalId, sqFt = ft, imageLink = image,
                minimumPeriod = min, maximumPeriod = max, monthlyRate = monthly, 
                weeklyRate = weekly, locationDetail = location, nearbyTenant = nearTenant, 
                customerID = custID, managerID = manID, kitchen = kitch, commercialLighting =lighting,
                securitySystem = security, internet = inter, bathroom = bath});
            }
            reader.Close();
            return rentals[0];
        }

    }

}