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
    public class SaveCustomer : IInsertCustomers{
        public void InsertCustomer(Customer value){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"INSERT INTO customer(customerid,cfname,clname,cbusinessname,cphonenumber,cemail,cusername,cpassword) VALUES(@customerid,@cfName,@clname,@cbusinessname,@cphonenumber,@cemail,@cusername,@cpassword)";

            using var cmd = new MySqlCommand(stm,con);

            cmd.Parameters.AddWithValue("@customerid",value.customerID);
            cmd.Parameters.AddWithValue("@cfname",value.cfName);
            cmd.Parameters.AddWithValue("@clname",value.clName);
            cmd.Parameters.AddWithValue("@cbusinessname", value.cBusinessName);
            cmd.Parameters.AddWithValue("@cphonenumber",value.cPhoneNumber) ;
            cmd.Parameters.AddWithValue("@cemail",value.cEmail);
            cmd.Parameters.AddWithValue("@cusername", value.cUsername);
            cmd.Parameters.AddWithValue("@cpassword",value.cPassword);

            cmd.Prepare();

            cmd.ExecuteNonQuery();
        }

        public void UpdateCustomer(Customer value){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            using var cmd = new MySqlCommand(@"UPDATE customer set cfName = @cfName, clName = @clname, cbusinessname = @cbusinessname, cphonenumber = @cphonenumber, cemail = @cemail, cusername = @cusername, cpassword = @cpassword WHERE customerid = @customerid");

            cmd.Connection = con;

            //cmd.Parameters.AddWithValue("@customerid",value.customerID);
            cmd.Parameters.AddWithValue("@cfname",value.cfName);
            cmd.Parameters.AddWithValue("@clname",value.clName);
            cmd.Parameters.AddWithValue("@cbusinessname", value.cBusinessName);
            cmd.Parameters.AddWithValue("@cphonenumber",value.cPhoneNumber) ;
            cmd.Parameters.AddWithValue("@cemail",value.cEmail);
            cmd.Parameters.AddWithValue("@cusername", value.cUsername);
            cmd.Parameters.AddWithValue("@cpassword",value.cPassword);

            cmd.Prepare();

            cmd.ExecuteNonQuery();
         }

    }
}