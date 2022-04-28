using System;
using System.IO;
using System.Collections.Generic;
using MySql.Data.MySqlClient;
using System.Data;
using System.Data.SqlClient;
using MySql.Data;
using api.Interfaces;
using api.Models;

namespace api.Database
{ 
    public class SaveRentalApps : IInsertRentalApps{
        public void InsertRentalApp(RentalApplication value){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"INSERT INTO rentalapplication(applicationid,daterequested,approvalstatus,customernotes,rcustomerid,rmanagerid,rentalid,startdate,enddate) VALUES(@applicationid,@daterequested,@approvalstatus,@customernotes,@rcustomerid,@rmanagerid,@rentalid,@startdate,@enddate)";

            using var cmd = new MySqlCommand(stm,con);

            cmd.Parameters.AddWithValue("@applicationid",value.applicationID);
            cmd.Parameters.AddWithValue("@daterequested",value.dateRequested);
            cmd.Parameters.AddWithValue("@approvalstatus",value.approvalStatus);
            cmd.Parameters.AddWithValue("@customernotes",value.customerNotes) ;
            cmd.Parameters.AddWithValue("@rcustomerid",value.customerID);
            cmd.Parameters.AddWithValue("@rmanagerid", value.managerID);
            cmd.Parameters.AddWithValue("@rentalid",value.rentalID);
            cmd.Parameters.AddWithValue("@startdate",value.startDate);
            cmd.Parameters.AddWithValue("@enddate",value.endDate);

            cmd.Prepare();

            cmd.ExecuteNonQuery();
         }
        public void UpdateRentalApp(RentalApplication value){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            using var cmd = new MySqlCommand(@"UPDATE rentalapplication set daterequested = @daterequested, approvalstatus = @approvalstatus, customernotes = @customernotes, rcustomerid = @rcustomerid, rmanagerid = @rmanagerid, rentalid = @rentalid, startdate = @startdate, enddate = @enddate WHERE applicationid = @applicationid");

            cmd.Connection = con;

            //cmd.Parameters.AddWithValue("@applicationid",value.applicationid);
            cmd.Parameters.AddWithValue("@daterequested",value.dateRequested);
            cmd.Parameters.AddWithValue("@approvalstatus",value.approvalStatus);
            cmd.Parameters.AddWithValue("@customernotes",value.customerNotes) ;
            cmd.Parameters.AddWithValue("@rcustomerid",value.customerID);
            cmd.Parameters.AddWithValue("@rmanagerid", value.managerID);
            cmd.Parameters.AddWithValue("@rentalid",value.rentalID);
            cmd.Parameters.AddWithValue("@startdate",value.startDate);
            cmd.Parameters.AddWithValue("@enddate",value.endDate);

            cmd.Prepare();

            cmd.ExecuteNonQuery();
        }
    }
}