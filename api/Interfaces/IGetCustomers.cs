using api.Models;
using System.Collections.Generic;

namespace api.Interfaces
{
    public interface IGetCustomers
    {
         public List<Customer> GetAll();
    }
}