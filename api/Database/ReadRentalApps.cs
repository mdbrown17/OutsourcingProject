using System;
using System.IO;
using System.Collections.Generic;
using MySql.Data.MySqlClient;
using System.Data;
using System.Data.SqlClient;
using MySql.Data;
using api.Interfaces;
using api.Models;
using api;

namespace OutsourcingProject.api.Database
{ 
    // class reads in rentalapp objects from database
    public class ReadRentalApps : IGetRentalApps{

        public List<RentalApplication> GetAll(){
            List<RentalApplication> apps = new List<RentalApplication>();
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"SELECT * FROM rentalapplication ra LEFT JOIN rentalspace rs ON ra.rentalid = rs.rentalid";

            using var cmd = new MySqlCommand(stm,con);
            using MySqlDataReader reader = cmd.ExecuteReader();

            while(reader.Read()){
                int id = reader.GetInt32(0);
                int rentId = reader.GetInt32(1);
                DateTime request = reader.GetDateTime(2);
                string approval = reader.GetString(3);
                string custNotes = reader.GetString(4);
                int custId = reader.GetInt32(5);
                int manId = reader.GetInt32(6);
                DateTime start = reader.GetDateTime(7);
                DateTime end = reader.GetDateTime(8);

                //adding 
                int sqFt = reader.GetInt32(10);
                string imageLink = reader.GetString(11);
                int minimumPeriod = reader.GetInt32(12);
                int maximumPeriod = reader.GetInt32(13);
                int monthlyRate = reader.GetInt32(14);
                int weeklyRate = reader.GetInt32(15);
                string locationDetail = reader.GetString(16);
                string nearbyTenant = reader.GetString(17);

                int kitchen = reader.GetInt32(20);
                int commercialLighting = reader.GetInt32(21);
                int securitySystem = reader.GetInt32(22);
                int internet = reader.GetInt32(23);
                int bathroom = reader.GetInt32(24);
                //stop

                // original    apps.Add(new RentalApplication(){applicationID = id,dateRequested = request, approvalStatus = approval, customerNotes = custNotes, customerID = custId, managerID = manId, rentalID = rentId, startDate = start, endDate = end});
                apps.Add(new RentalApplication(){
                    applicationID = id,
                    dateRequested = request, 
                    approvalStatus = approval, 
                    customerNotes = custNotes, 
                    customerID = custId, 
                    managerID = manId, 
                    rentalID = rentId, 
                    startDate = start, 
                    endDate = end, 
                    sqFt = sqFt, 
                    imageLink = imageLink,
                    minimumPeriod = minimumPeriod,
                    monthlyRate = monthlyRate,
                    weeklyRate = weeklyRate,
                    locationDetail = locationDetail,
                    kitchen = kitchen,
                    commercialLighting = commercialLighting,
                    securitySystem = securitySystem,
                    internet = internet,
                    bathroom = bathroom
                    });
                }
            reader.Close();
            return apps;
        }

        public RentalApplication GetOne(int id){
            List<RentalApplication> apps = new List<RentalApplication>();
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"Select * from rentalapplication WHERE @applicationID = applicationID";

            using var cmd = new MySqlCommand(stm,con);
            cmd.Parameters.AddWithValue("@applicationID",id);
            using MySqlDataReader reader = cmd.ExecuteReader();

            while(reader.Read()){
                int applicationID = reader.GetInt32(0);
                DateTime request = reader.GetDateTime(1);
                string approval = reader.GetString(2);
                string custNotes = reader.GetString(3);
                int custId = reader.GetInt32(4);
                int manId = reader.GetInt32(5);
                int rentId = reader.GetInt32(6);
                DateTime start = reader.GetDateTime(7);
                DateTime end = reader.GetDateTime(8);
                
                apps.Add(new RentalApplication(){applicationID = id,dateRequested = request, approvalStatus = approval, customerNotes = custNotes, customerID = custId, managerID = manId, rentalID = rentId, startDate = start, endDate = end});
            }
            reader.Close();
            return apps[0];
        }

    }

}