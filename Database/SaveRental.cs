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
    public class SaveRental : IInsertRentalSpaces{
         public void InsertRentalSpace(RentalSpace value){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"INSERT INTO rentalspace(rentalid,sqft,imagelink,minimumperiod,maximumperiod,monthlyrate,weeklyrate,locationdetail,nearbytenant,rscustomerid,rsmanagerid) VALUES(@rentalid,@sqft,@imagelink,@minimumperiod,@maximumperiod,@monthlyrate,@weeklyrate,@locationdetail,@nearbytenant,@rscustomerid,@rsmanagerid)";

            using var cmd = new MySqlCommand(stm,con);

            cmd.Parameters.AddWithValue("@rentalid",value.rentalid);
            cmd.Parameters.AddWithValue("@sqft",value.sqft);
            cmd.Parameters.AddWithValue("@imagelink",value.imagelink);
            cmd.Parameters.AddWithValue("@minimumperiod",value.minimumperiod) ;
            cmd.Parameters.AddWithValue("@maximumperiod",value.maximumperiod);
            cmd.Parameters.AddWithValue("@monthlyrate", value.monthlyrate);
            cmd.Parameters.AddWithValue("@weeklyrate",value.weeklyrate);
            cmd.Parameters.AddWithValue("@locationdetail",value.locationdetail);
            cmd.Parameters.AddWithValue("@nearbytenant",value.nearbytenant);
            cmd.Parameters.AddWithValue("@rscustomerid",value.rscustomerid);
            cmd.Parameters.AddWithValue("@rsmanagerid",value.rsmanagerid);

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
            cmd.Parameters.AddWithValue("@sqft",value.sqft);
            cmd.Parameters.AddWithValue("@imagelink",value.imagelink);
            cmd.Parameters.AddWithValue("@minimumperiod",value.minimumperiod) ;
            cmd.Parameters.AddWithValue("@maximumperiod",value.maximumperiod);
            cmd.Parameters.AddWithValue("@monthlyrate", value.monthlyrate);
            cmd.Parameters.AddWithValue("@weeklyrate",value.weeklyrate);
            cmd.Parameters.AddWithValue("@locationdetail",value.locationdetail);
            cmd.Parameters.AddWithValue("@nearbytenant",value.nearbytenant);
            cmd.Parameters.AddWithValue("@rscustomerid",value.rscustomerid);
            cmd.Parameters.AddWithValue("@rsmanagerid",value.rsmanagerid);

            cmd.Prepare();

            cmd.ExecuteNonQuery();
         }
    }
}