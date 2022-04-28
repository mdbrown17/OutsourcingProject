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
    public class SaveAmenities : IInsertAmenities{
         public void InsertAmenities(Amenities value){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"INSERT INTO amenities(rentalid,kitchen,commerciallighting,securitysystem,internet,bathroom) VALUES(@rentalid,@kitchen,@commerciallighting,@securitysystem,@internet,@bathroom)";

            using var cmd = new MySqlCommand(stm,con);

            cmd.Parameters.AddWithValue("@rentalid",value.rentalID);
            cmd.Parameters.AddWithValue("@kitchen",value.kitchen);
            cmd.Parameters.AddWithValue("@commerciallighting",value.commercialLighting);
            cmd.Parameters.AddWithValue("@securitysystem", value.securitySystem);
            cmd.Parameters.AddWithValue("@internet",value.internet);
            cmd.Parameters.AddWithValue("@bathroom",value.bathroom);

            cmd.Prepare();

            cmd.ExecuteNonQuery();
         }
         public void UpdateAmenities(Amenities value){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            using var cmd = new MySqlCommand(@"UPDATE amenities set kitchen = @kitchen, commerciallighting = @commerciallighting, securitysystem = @securitysystem, internet = @internet, bathroom = @bathroom WHERE rentalid = @rentalid");

            cmd.Connection = con;

            //cmd.Parameters.AddWithValue("@rentalid",value.rentalid);
            cmd.Parameters.AddWithValue("@kitchen",value.kitchen);
            cmd.Parameters.AddWithValue("@commerciallighting",value.commercialLighting);
            cmd.Parameters.AddWithValue("@securitysystem", value.securitySystem);
            cmd.Parameters.AddWithValue("@internet",value.internet);
            cmd.Parameters.AddWithValue("@bathroom",value.bathroom);

            cmd.Prepare();

            cmd.ExecuteNonQuery();
         }
    }
}