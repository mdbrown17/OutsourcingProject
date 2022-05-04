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
    public class SaveManager : IInsertManagers{
         public void InsertManager(Manager value){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"INSERT INTO manager(managerid,mfname,mlname,mphonenumber,memail,musername,mpassword) VALUES(@managerid,@mfname,@mlname,@mphonenumber,@memail,@musername,@mpassword)";

            using var cmd = new MySqlCommand(stm,con);

            cmd.Parameters.AddWithValue("@managerid",value.managerID);
            cmd.Parameters.AddWithValue("@mfname",value.mfname);
            cmd.Parameters.AddWithValue("@mlname",value.mlname);
            cmd.Parameters.AddWithValue("@mphonenumber",value.mphoneNumber) ;
            cmd.Parameters.AddWithValue("@memail",value.mEmail);
            cmd.Parameters.AddWithValue("@musername", value.mUsername);
            cmd.Parameters.AddWithValue("@mpassword",value.mPassword);

            cmd.Prepare();

            cmd.ExecuteNonQuery();
         }
         public void UpdateManager(Manager value){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            using var cmd = new MySqlCommand(@"UPDATE manager SET mfname = @mfname, mlname = @mlname, mphonenumber = @mphonenumber, memail = @memail, musername = @musername, mpassword = @mpassword WHERE managerid = @managerid");

            cmd.Connection = con;

            cmd.Parameters.AddWithValue("@managerid",value.managerID);
            cmd.Parameters.AddWithValue("@mfname",value.mfname);
            cmd.Parameters.AddWithValue("@mlname",value.mlname);
            cmd.Parameters.AddWithValue("@mphonenumber",value.mphoneNumber) ;
            cmd.Parameters.AddWithValue("@memail",value.mEmail);
            cmd.Parameters.AddWithValue("@musername", value.mUsername);
            cmd.Parameters.AddWithValue("@mpassword",value.mPassword);

            cmd.Prepare();

            cmd.ExecuteNonQuery();

         }
    }
}