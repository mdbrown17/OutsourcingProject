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
    public class UserDataHandler
    {
        public List<Customer> GetAll(){
            List<Customer> customersInfo = new List<Customer>();
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"Select * from customer";

            using var cmd = new MySqlCommand(stm,con);
            using MySqlDataReader reader = cmd.ExecuteReader();

            foreach(dynamic customer in customersInfo)
            {
                Customer temp = new Customer()
                {
                    id = customer.customerID,
                    username = customer.cUsername,
                    password = customer.cPassword
                };
            }
            
            customersInfo.Add(temp);

            reader.Close();
            return customers;
        }
    }
}