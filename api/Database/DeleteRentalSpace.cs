using System;
using System.IO;
using System.Collections.Generic;
using MySql.Data.MySqlClient;
using api.Interfaces;
using System.Data;
using System.Data.SqlClient;
using MySql.Data;
using api.Models;

namespace api.Database{
    public class DeleteRentalSpace : IDeleteRentalSpaces{
        public void Delete(RentalSpace value){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();
            
            using var cmd = new MySqlCommand("DELETE FROM rentalspace WHERE rentalid = '" + value.rentalID +"'",con);
            
            
            cmd.ExecuteNonQuery();
        }
    }
}