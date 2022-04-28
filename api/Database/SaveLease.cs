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
    public class SaveLease : IInsertLeases{
        public void InsertLease(Lease value){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"INSERT INTO lease(leaseid,startdate,enddate,lrentalid,lcustomerid) VALUES(@leaseid,@startdate,@enddate,@lrentalid,@lcustomerid)";

            using var cmd = new MySqlCommand(stm,con);

            cmd.Parameters.AddWithValue("@leaseid",value.leaseID);
            cmd.Parameters.AddWithValue("@startdate",value.startDate);
            cmd.Parameters.AddWithValue("@enddate",value.endDate);
            cmd.Parameters.AddWithValue("@lrentalid", value.rentalID);
            cmd.Parameters.AddWithValue("@lcustomerid",value.customerID);

            cmd.Prepare();

            cmd.ExecuteNonQuery();
         }
         public void UpdateLease(Lease value){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            using var cmd = new MySqlCommand(@"UPDATE lease set startdate = @startdate, enddate = @enddate, lrentalid = @lrentalid, lcustomerid = @lcustomerid WHERE leaseid = @leaseid");

            cmd.Connection = con;

            //cmd.Parameters.AddWithValue("@leaseid",value.leaseid);
            cmd.Parameters.AddWithValue("@startdate",value.startDate);
            cmd.Parameters.AddWithValue("@enddate",value.endDate);
            cmd.Parameters.AddWithValue("@lrentalid", value.rentalID);
            cmd.Parameters.AddWithValue("@lcustomerid",value.customerID);

            cmd.Prepare();

            cmd.ExecuteNonQuery();
         }
    }
}