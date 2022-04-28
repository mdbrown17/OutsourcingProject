using System;
using System.IO;
using System.Collections.Generic;
using MySql.Data.MySqlClient;
using System.Data;
using System.Data.SqlClient;
using MySql.Data;
using api.Models;
using api.Interfaces;

namespace api.Database
{ 
    // class reads in manager objects from database
    public class ReadManagers : IGetManagers{

        public List<Manager> GetAll(){
            List<Manager> managers = new List<Manager>();
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"Select * from manager";

            using var cmd = new MySqlCommand(stm,con);
            using MySqlDataReader reader = cmd.ExecuteReader();


            while(reader.Read()){
                int id = reader.GetInt32(0);
                string fName = reader.GetString(1);
                string lName = reader.GetString(2);
                int phone = reader.GetInt32(3);
                string email = reader.GetString(4);
                string user = reader.GetString(5);
                string pass = reader.GetString(6);
                
                
                managers.Add(new Manager(){managerID = id,mfname = fName, mlname = lName, mphoneNumber = phone, mEmail = email, mUsername = user, mPassword = pass});
            }
            reader.Close();
            return managers;
        }

    }

}