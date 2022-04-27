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
    public class SaveRentalApps : IInsertRentalApps{
        public void InsertRentalApp(RentalApplication value){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"INSERT INTO rentalapplication(applicationid,daterequested,approvalstatus,customernotes,rcustomerid,rmanagerid,rentalid,startdate,enddate) VALUES(@applicationid,@daterequested,@approvalstatus,@customernotes,@rcustomerid,@rmanagerid,@rentalid,@startdate,@enddate)";

            using var cmd = new MySqlCommand(stm,con);

            cmd.Parameters.AddWithValue("@applicationid",value.applicationid);
            cmd.Parameters.AddWithValue("@daterequested",value.daterequested);
            cmd.Parameters.AddWithValue("@approvalstatus",value.approvalstatus);
            cmd.Parameters.AddWithValue("@customernotes",value.customernotes) ;
            cmd.Parameters.AddWithValue("@rcustomerid",value.rcustomerid);
            cmd.Parameters.AddWithValue("@rmanagerid", value.rmanagerid);
            cmd.Parameters.AddWithValue("@rentalid",value.rentalid);
            cmd.Parameters.AddWithValue("@startdate",value.startdate);
            cmd.Parameters.AddWithValue("@enddate",value.enddate);

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
            cmd.Parameters.AddWithValue("@daterequested",value.daterequested);
            cmd.Parameters.AddWithValue("@approvalstatus",value.approvalstatus);
            cmd.Parameters.AddWithValue("@customernotes",value.customernotes) ;
            cmd.Parameters.AddWithValue("@rcustomerid",value.rcustomerid);
            cmd.Parameters.AddWithValue("@rmanagerid", value.rmanagerid);
            cmd.Parameters.AddWithValue("@rentalid",value.rentalid);
            cmd.Parameters.AddWithValue("@startdate",value.startdate);
            cmd.Parameters.AddWithValue("@enddate",value.enddate);

            cmd.Prepare();

            cmd.ExecuteNonQuery();
        }
    }
}