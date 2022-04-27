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
             //insert new amenities into database

         }
         public void UpdateAmenities(Amenities value){
             
         }
    }
}