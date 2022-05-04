using System.Runtime.InteropServices;
using System;
using System.IO;
using System.Collections.Generic;
using OutsourcingProject.api.Database;
using MySql.Data.MySqlClient;
using System.Data;
using System.Data.SqlClient;
using MySql.Data;
using api.Interfaces;
using api.Database;
using api.Models;

namespace OutsourcingProject.api{
    public class CheckCustLogin : ICheckLogin{
        public int CheckLogin(string user, string password){
            ReadCustomers cust = new ReadCustomers();
            List<Customer> customers = new List<Customer>();
            customers = cust.GetAll(); //puts all customers from database into list

            foreach (Customer c in customers){
                if(c.cUsername == user && c.cPassword == password){
                    return c.customerID; //returns custid if login credientials are valid
                }
            }
            // -1 is returned if login credentials are invalid
            return -1;
        }
    }
}