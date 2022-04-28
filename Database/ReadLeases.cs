
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
    // class reads in lease objects from database
    public class ReadLeases : IGetLeases{

        public List<Lease> GetAll(){
            List<Lease> leases = new List<Lease>();
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"Select * from lease";

            using var cmd = new MySqlCommand(stm,con);
            using MySqlDataReader reader = cmd.ExecuteReader();


            while(reader.Read()){
                int id = reader.GetInt32(0);
                DateTime start = reader.GetDateTime(1);
                DateTime end = reader.GetDateTime(2);
                int rentId = reader.GetInt32(3);
                int custId = reader.GetInt32(4);
                
                leases.Add(new Lease(){leaseID = id,startDate = start, endDate = end, rentalID = rentId, customerID = custId});
            }
            reader.Close();
            return leases;
        }

        public Lease GetOne(int id){
            List<Lease> leases = new List<Lease>();
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"Select * from lease WHERE @leaseid = leaseid";

            using var cmd = new MySqlCommand(stm,con);
            cmd.Parameters.AddWithValue("@leaseid",id);
            using MySqlDataReader reader = cmd.ExecuteReader();


            while(reader.Read()){
                int id = reader.GetInt32(0);
                DateTime start = reader.GetDateTime(1);
                DateTime end = reader.GetDateTime(2);
                int rentId = reader.GetInt32(3);
                int custId = reader.GetInt32(4);
                
                leases.Add(new Lease(){leaseID = id,startDate = start, endDate = end, rentalID = rentId, customerID = custId});
            }
            reader.Close();
            return leases[0];

        }

    }

}