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

namespace api.Database
{
    public class InsertRentalApps : IInsertRentalApps
    {
        public void InsertRentalApp(RentalApplication myRentalApp){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);

            con.Open();

            string stm = @$"INSERT INTO rentalapplication(customernotes, rcustomerid, rmanagerid, rentalid, startdate, enddate)
                        VALUES(@customerNotes, @customerID, @managerID, @rentalID, @startDate, @endDate)";

            using var cmd = new MySqlCommand(stm, con);

            // cmd.Parameters.AddWithValue("@approvalStatus", myRentalApp.approvalStatus);
            cmd.Parameters.AddWithValue("@customerNotes", myRentalApp.customerNotes);
            cmd.Parameters.AddWithValue("@customerID", myRentalApp.customerID);
            cmd.Parameters.AddWithValue("@managerID", myRentalApp.managerID);
            cmd.Parameters.AddWithValue("@rentalID", myRentalApp.rentalID);
            cmd.Parameters.AddWithValue("@startDate", myRentalApp.startDate);
            cmd.Parameters.AddWithValue("@endDate", myRentalApp.endDate);

            cmd.Prepare();

            cmd.ExecuteNonQuery();

            // con.Close();
        }
    }
}
