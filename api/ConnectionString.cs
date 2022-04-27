using System;
using System.IO;
using System.Collections.Generic;
using api.Interfaces;
using api.Models;

namespace api
{
    public class ConnectionString{ //database connection string obj
        public string cs{get;set;}

        public ConnectionString(){
            string server = "bv2rebwf6zzsv341.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
            string database = "ggfpah2pepk7ndkc";
            string port = "3306";
            string userName = "m8k5h62m0uckqfgd";
            string password = "zzibjok4u7uyjrwi";
            cs = $@"server = {server};user={userName};database={database};port={port};password={password};";
        }
    }
}