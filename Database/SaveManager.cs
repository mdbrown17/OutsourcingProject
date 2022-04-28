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
    public class SaveManager : IInsertManager{
         public void InsertManager(Manager value){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"INSERT INTO manager(managerid,mfname,mlname,mphonenumber,memail,musername,mpassword) VALUES(@managerid,@mfname,@mlname,@mphonenumber,@memail,@musername,@mpassword)";

            using var cmd = new MySqlCommand(stm,con);

            cmd.Parameters.AddWithValue("@managerid",value.managerid);
            cmd.Parameters.AddWithValue("@mfname",value.mfname);
            cmd.Parameters.AddWithValue("@mlname",value.mlname);
            cmd.Parameters.AddWithValue("@mphonenumber",value.mphonenumber) ;
            cmd.Parameters.AddWithValue("@memail",value.memail);
            cmd.Parameters.AddWithValue("@musername", value.musername);
            cmd.Parameters.AddWithValue("@mpassword",value.mpassword);

            cmd.Prepare();

            cmd.ExecuteNonQuery();
         }
         public void UpdateManager(Manager value){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            using var cmd = new MySqlCommand(@"UPDATE manager set mfname = @mfname, mlname = @mlname, mphonenumber = @mphonenumber, memail = @memail, musername = @musername, mpassword = @mpassword WHERE managerid = @managerid");

            cmd.Connection = con;

            //cmd.Parameters.AddWithValue("@managerid",value.managerid);
            cmd.Parameters.AddWithValue("@mfname",value.mfname);
            cmd.Parameters.AddWithValue("@mlname",value.mlname);
            cmd.Parameters.AddWithValue("@mphonenumber",value.mphonenumber) ;
            cmd.Parameters.AddWithValue("@memail",value.memail);
            cmd.Parameters.AddWithValue("@musername", value.musername);
            cmd.Parameters.AddWithValue("@mpassword",value.mpassword);

            cmd.Prepare();

            cmd.ExecuteNonQuery();

         }
    }
}