using api.Models;
using System.Collections.Generic;

namespace api.Interfaces
{
    public interface IInsertCustomers
    {
         public void InsertCustomer(Customer value);
         //might need update customer method aswell
    }
}