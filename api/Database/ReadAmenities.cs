
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
    // class reads in amentities objects from database
    public class ReadAmentities : IGetAmenities{

        public List<Amenities> GetAll(){
            List<Amenities> amenities = new List<Amenities>();
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"Select * from amenities";

            using var cmd = new MySqlCommand(stm,con);
            using MySqlDataReader reader = cmd.ExecuteReader();


            while(reader.Read()){
                int id = reader.GetInt32(0);
                string kitch = reader.GetString(1);
                string lighting = reader.GetString(2);
                string security = reader.GetString(3);
                string inter = reader.GetString(4);
                string bath = reader.GetString(5);
                
                amenities.Add(new Amenities(){rentalID = id,kitchen = kitch, commercialLighting = lighting, securitySystem = security, internet = inter, bathroom = bath});
            }
            reader.Close();
            return amenities;
        }
        public Amenities GetOne(int id){
            List<Amenities> amenities = new List<Amenities>();
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"Select * from amenities WHERE @rentalid = @rentalid";

            using var cmd = new MySqlCommand(stm,con);
            cmd.Parameters.AddWithValue("@rentalid",id);
            using MySqlDataReader reader = cmd.ExecuteReader();


            while(reader.Read()){
                int rentalID = reader.GetInt32(0);
                string kitch = reader.GetString(1);
                string lighting = reader.GetString(2);
                string security = reader.GetString(3);
                string inter = reader.GetString(4);
                string bath = reader.GetString(5);
                
                amenities.Add(new Amenities(){rentalID = id,kitchen = kitch, commercialLighting = lighting, securitySystem = security, internet = inter, bathroom = bath});
            }
            reader.Close();
            return amenities[0];

        }

    }

}