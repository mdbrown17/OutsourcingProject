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

            string stm = @"Select * from rentalspace";

            using var cmd = new MySqlCommand(stm,con);
            using MySqlDataReader reader = cmd.ExecuteReader();

            //read in each song from database and add to list
            while(reader.Read()){
                int id = reader.GetInt32(0);
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
                rentals.Add(new RentalSpace(){rentalID = id,sqFt = ft, imageLink = image, minimumPeriod = min, maximumPeriod = max, monthlyRate = monthly, weeklyRate = weekly, locationDetail = location, nearbyTenant = nearTenant, customerID = custID, managerID = manID});
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
                if(reader.GetInt32(9) == 0)
                {
                    int id = reader.GetInt32(0);
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
                    rentals.Add(new RentalSpace(){rentalID = id,sqFt = ft, imageLink = image, minimumPeriod = min, maximumPeriod = max, monthlyRate = monthly, weeklyRate = weekly, locationDetail = location, nearbyTenant = nearTenant, customerID = custID, managerID = manID});
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

            string stm = @"Select * from rentalspace WHERE @rentalid = rentalid";

            using var cmd = new MySqlCommand(stm,con);
            cmd.Parameters.AddWithValue("@rentalid",id);
            using MySqlDataReader reader = cmd.ExecuteReader();

            while(reader.Read()){
                int rentalID = reader.GetInt32(0);
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
                rentals.Add(new RentalSpace(){rentalID = id,sqFt = ft, imageLink = image, minimumPeriod = min, maximumPeriod = max, monthlyRate = monthly, weeklyRate = weekly, locationDetail = location, nearbyTenant = nearTenant, customerID = custID, managerID = manID});
            }
            reader.Close();
            return rentals[0];
        }

    }

}