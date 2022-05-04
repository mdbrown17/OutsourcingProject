using System;
using System.IO;
using System.Collections.Generic;
using api.Interfaces;
using api.Models;
using MySql.Data.MySqlClient;
using System.Data;
using System.Data.SqlClient;
using MySql.Data;
using api;

namespace api.Database{
    public class DeleteCustomer : IDeleteCustomer{
        public void Delete(Customer value){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();
            
            using var cmd = new MySqlCommand("DELETE FROM customer WHERE customerid = '" + value.customerID +"'",con);
            cmd.ExecuteNonQuery();
        }
    }
}