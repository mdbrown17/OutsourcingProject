using System;
using System.IO;
using System.Collections.Generic;
using OutsourcingProject.api.Interfaces;
using OutsourcingProject.api.Models;
using MySql.Data.MySqlClient;
using System.Data;
using System.Data.SqlClient;
using MySql.Data;
namespace OutsourcingProject.api.Database{
    public class DeleteRentalApps : IDeleteRentalApps{
        public void Delete(RentalApplication value){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();
            
            using var cmd = new MySqlCommand("DELETE FROM rentalapplication WHERE applicationID = '" + value.applicationID +"'",con);
            
            
            cmd.ExecuteNonQuery();
        }
    }
}