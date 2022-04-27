using System;
using System.IO;
using System.Collections.Generic;
using OutsourcingProject.api.Interfaces;
using OutsourcingProject.api.Models;
using MySql.Data.MySqlClient;
using System.Data;
using System.Data.SqlClient;
using MySql.Data;
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

            string stm = @"Select * from rentalapplication";

            using var cmd = new MySqlCommand(stm,con);
            using MySqlDataReader reader = cmd.ExecuteReader();

            //read in each song from database and add to list
            while(reader.Read()){
                int id = reader.GetInt32(0);
                DateTime request = reader.GetDateTime(1);
                string approval = reader.GetString(2);
                string custNotes = reader.GetString(3);
                int custId = reader.GetInt32(4);
                int manId = reader.GetInt32(5);
                int rentId = reader.GetInt32(6);
                DateTime start = reader.GetDateTime(7);
                DateTime end = reader.GetDateTime(8);
                
                apps.Add(new RentalApplication(){applicatonID = id,dateRequested = request, approvalStatus = approval, customerNotes = custNotes, customerID = custId, managerID = manId, rentalID = rentId, startDate = start, endDate = end});
            }
            reader.Close();
            return apps;
        }

    }

}