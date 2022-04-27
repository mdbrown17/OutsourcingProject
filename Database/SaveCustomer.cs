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
    public class SaveCustomer : IInsertCustomers{
        public void InsertCustomer(Customer value){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"INSERT INTO customer(customerid,cfname,clname,cbusinessname,cphonenumber,cemail,cusername,cpassword) VALUES(@customerid,@cfname,@clname,@cbusinessname,@cphonenumber,@cemail,@cusername,@cpassword)";

            using var cmd = new MySqlCommand(stm,con);

            cmd.Parameters.AddWithValue("@customerid",value.customerID);
            cmd.Parameters.AddWithValue("@cfname",value.cfname);
            cmd.Parameters.AddWithValue("@clname",value.clname);
            cmd.Parameters.AddWithValue("@cbusinessname", value.cBusinessName);
            cmd.Parameters.AddWithValue("@cphonenumber",value.cphoneNumber) ;
            cmd.Parameters.AddWithValue("@cemail",value.cEmail);
            cmd.Parameters.AddWithValue("@cusername", value.cUsername);
            cmd.Parameters.AddWithValue("@cpassword",value.cPassword) ;

            cmd.Prepare();

            cmd.ExecuteNonQuery();
        }
    }
}