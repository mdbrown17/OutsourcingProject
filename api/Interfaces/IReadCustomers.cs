using api.Models;
using System.Collections.Generic;

namespace api.Interfaces
{
    public interface IReadCustomers
    {
         public List<Customer> GetAll();
         public Customer GetOne(int id);
    }
}