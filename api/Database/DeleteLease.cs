using System;
using System.IO;
using System.Collections.Generic;
using api.Interfaces;
using api.Models;
using MySql.Data.MySqlClient;
using System.Data;
using System.Data.SqlClient;
using MySql.Data;

namespace api.Database
{
    public class DeleteLease : IDeleteLeases
    {
        public void Delete(Lease value){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();
            
            using var cmd = new MySqlCommand("DELETE FROM lease WHERE leaseid = '" + value.leaseID +"'",con);
            
            
            cmd.ExecuteNonQuery();
        }
    }
}