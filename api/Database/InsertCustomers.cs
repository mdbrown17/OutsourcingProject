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
    public class InsertCustomers 
    {
        public void InsertCustomer(Customer myCustomer){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);

            con.Open();

            string stm = @$"INSERT INTO customer(customerid, cfname, clname, cbusinessname, cphonenumber, cemail, cusername, cpassword)
                        VALUES(@customerID, @cfName, @clName, @cBusinessName, @cPhoneNumber, @cEmail, @cUsername, @cPassword)";

            using var cmd = new MySqlCommand(stm, con);

            cmd.Parameters.AddWithValue("@customerID", myCustomer.customerID);
            cmd.Parameters.AddWithValue("@cfName", myCustomer.cfName);
            cmd.Parameters.AddWithValue("@clName", myCustomer.clName);
            cmd.Parameters.AddWithValue("@cBusinessName", myCustomer.cBusinessName);
            cmd.Parameters.AddWithValue("@cPhoneNumber", myCustomer.cPhoneNumber);
            cmd.Parameters.AddWithValue("@cEmail", myCustomer.cEmail);
            cmd.Parameters.AddWithValue("@cUsername", myCustomer.cUsername);
            cmd.Parameters.AddWithValue("@cPassword", myCustomer.cPassword);

            cmd.Prepare();

            cmd.ExecuteNonQuery();

            // con.Close();
        }
            
    }
}