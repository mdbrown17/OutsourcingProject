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
    // class reads in customer objects from database
    public class ReadCustomers : IGetCustomers{

        public List<Customer> GetAll(){
            List<Customer> customers = new List<Customer>();
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"Select * from customer";

            using var cmd = new MySqlCommand(stm,con);
            using MySqlDataReader reader = cmd.ExecuteReader();

        
            while(reader.Read()){
                int id = reader.GetInt32(0);
                string fName = reader.GetString(1);
                string lName = reader.GetString(2);
                string business = reader.GetString(3);
                int phone = reader.GetInt32(4);
                string email = reader.GetString(5);
                string user = reader.GetString(6);
                string pass = reader.GetString(7);
                
                customers.Add(new Customer(){customerID = id,cfname = fName, clname = lName, cBusinessName = business, cphoneNumber = phone, cEmail = email, cUsername = user, cPassword = pass});
            }
            reader.Close();
            return customers;
        }

        public Customer GetOne(int id){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            List<Customer> customers = new List<Customer>();

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"Select * from customer WHERE @customerid = customerid";
            using var cmd = new MySqlCommand(stm,con);
            cmd.Parameters.AddWithValue("@customerid",id);
            using MySqlDataReader reader = cmd.ExecuteReader();
            while(reader.Read()){
                int id = reader.GetInt32(0);
                string fName = reader.GetString(1);
                string lName = reader.GetString(2);
                string business = reader.GetString(3);
                int phone = reader.GetInt32(4);
                string email = reader.GetString(5);
                string user = reader.GetString(6);
                string pass = reader.GetString(7);
                
                customers.Add(new Customer(){customerID = id,cfname = fName, clname = lName, cBusinessName = business, cphoneNumber = phone, cEmail = email, cUsername = user, cPassword = pass});
            }
            reader.Close();
            return customers[0];


        }

    }

}