using System.Runtime.InteropServices;
using System;
using System.IO;
using System.Collections.Generic;
using api.Interfaces;
using api.Models;
using OutsourcingProject.api.Database;
using MySql.Data.MySqlClient;
using System.Data;
using System.Data.SqlClient;
using MySql.Data;
using api.Database;

namespace OutsourcingProject.api{
    public class CheckMangLogin : ICheckLogin{
        public int CheckLogin(string user, string password){
            ReadManagers readMan = new ReadManagers();
            List<Manager> managers = new List<Manager>();
            managers = readMan.GetAll(); //puts all managers from database into list

            foreach (Manager m in managers){
                if(m.mUsername == user && m.mPassword == password){
                    return m.managerID; //returns manager id if login credentials are valid
                }
            }
            // -1 is returned if login credentials are invalid
            return -1;
        }
    }
}