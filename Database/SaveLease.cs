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
    public class SaveLease : IInsertLeases{
        public void InsertLease(Lease value){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"INSERT INTO lease(leaseid,startdate,enddate,lrentalid,lcustomerid) VALUES(@leaseid,@startdate,@enddate,@lrentalid,@lcustomerid)";

            using var cmd = new MySqlCommand(stm,con);

            cmd.Parameters.AddWithValue("@leaseid",value.leaseid);
            cmd.Parameters.AddWithValue("@startdate",value.startdate);
            cmd.Parameters.AddWithValue("@enddate",value.enddate);
            cmd.Parameters.AddWithValue("@lrentalid", value.lrentalid);
            cmd.Parameters.AddWithValue("@lcustomerid",value.lcustomerid) ;

            cmd.Prepare();

            cmd.ExecuteNonQuery();
         }
         public void UpdateLease(Lease value){
             
         }
    }
}