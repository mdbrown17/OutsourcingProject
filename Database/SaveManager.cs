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
             //insert new manager into database
         }
         public void UpdateManager(Manager value){
             //updates manager info in database
             
         }
    }
}