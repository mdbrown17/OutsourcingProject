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
    public class SaveAmenities : IInsertAmenities{
         public void InsertAmenities(Amenities value){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"INSERT INTO amenities(rentalid,kitchen,commerciallighting,securitysystem,internet,bathroom) VALUES(@rentalid,@kitchen,@commerciallighting,@securitysystem,@internet,@bathroom)";

            using var cmd = new MySqlCommand(stm,con);

            cmd.Parameters.AddWithValue("@rentalid",value.rentalid);
            cmd.Parameters.AddWithValue("@kitchen",value.kitchen);
            cmd.Parameters.AddWithValue("@commerciallighting",value.commerciallighting);
            cmd.Parameters.AddWithValue("@securitysystem", value.securitysystem);
            cmd.Parameters.AddWithValue("@internet",value.internet) ;
            cmd.Parameters.AddWithValue("@bathroom",value.bathroom);

            cmd.Prepare();

            cmd.ExecuteNonQuery();
         }
         public void UpdateAmenities(Amenities value){
             
         }
    }
}