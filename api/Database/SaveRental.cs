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
    public class SaveRental : IInsertRentalSpaces{
         public void InsertRentalSpace(RentalSpace value){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"INSERT INTO rentalspace(rentalid,sqft,imagelink,minimumperiod,maximumperiod,monthlyrate,weeklyrate,locationdetail,nearbytenant,rscustomerid,rsmanagerid) VALUES(@rentalid,@sqft,@imagelink,@minimumperiod,@maximumperiod,@monthlyrate,@weeklyrate,@locationdetail,@nearbytenant,@rscustomerid,@rsmanagerid)";

            using var cmd = new MySqlCommand(stm,con);

            cmd.Parameters.AddWithValue("@rentalid",value.rentalID);
            cmd.Parameters.AddWithValue("@sqft",value.sqFt);
            cmd.Parameters.AddWithValue("@imagelink",value.imageLink);
            cmd.Parameters.AddWithValue("@minimumperiod",value.minimumPeriod) ;
            cmd.Parameters.AddWithValue("@maximumperiod",value.maximumPeriod);
            cmd.Parameters.AddWithValue("@monthlyrate", value.monthlyRate);
            cmd.Parameters.AddWithValue("@weeklyrate",value.weeklyRate);
            cmd.Parameters.AddWithValue("@locationdetail",value.locationDetail);
            cmd.Parameters.AddWithValue("@nearbytenant",value.nearbyTenant);
            cmd.Parameters.AddWithValue("@rscustomerid",value.customerID);
            cmd.Parameters.AddWithValue("@rsmanagerid",value.managerID);

            cmd.Prepare();

            cmd.ExecuteNonQuery();
         }
         public void UpdateRentalSpace(RentalSpace value){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            using var cmd = new MySqlCommand(@"UPDATE rentalspace set sqft = @sqft, imagelink = @imagelink, minimumperiod = @minimumperiod, maximumperiod = @maximumperiod, monthlyrate = @monthlyrate, weeklyrate = @weeklyrate, locationdetail = @locationdetail, nearbytenant = @nearbytenant, rscustomerid = @rscustomerid, rsmanagerid = @rsmanagerid WHERE rentalid = @rentalid");

            cmd.Connection = con;

            //cmd.Parameters.AddWithValue("@rentalid",value.rentalid);
            cmd.Parameters.AddWithValue("@sqft",value.sqFt);
            cmd.Parameters.AddWithValue("@imagelink",value.imageLink);
            cmd.Parameters.AddWithValue("@minimumperiod",value.minimumPeriod) ;
            cmd.Parameters.AddWithValue("@maximumperiod",value.maximumPeriod);
            cmd.Parameters.AddWithValue("@monthlyrate", value.monthlyRate);
            cmd.Parameters.AddWithValue("@weeklyrate",value.weeklyRate);
            cmd.Parameters.AddWithValue("@locationdetail",value.locationDetail);
            cmd.Parameters.AddWithValue("@nearbytenant",value.nearbyTenant);
            cmd.Parameters.AddWithValue("@rscustomerid",value.customerID);
            cmd.Parameters.AddWithValue("@rsmanagerid",value.managerID);

            cmd.Prepare();

            cmd.ExecuteNonQuery();
         }
    }
}