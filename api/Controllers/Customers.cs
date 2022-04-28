using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.Database;
using api.Models;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Customers : ControllerBase
    {
        // GET: api/Customers 
        [HttpGet]
        public List<Customer> Get()
        {
            IGetCustomers customers = new ReadCustomers();
            List<Customer> myCustomers = customers.GetAll();

            foreach(Customer customer in myCustomers)
            {
                Console.WriteLine(customer.cPhoneNumber);
            }
            return myCustomers;
        }

        // GET: api/Customers
        [HttpGet("{customerID}", Name = "GetCustomer")]
        public Customer Get(int customerID)
        {
            IGetCustomers customers = new ReadCustomers();
            return customers.GetOne(customerID);
        }

        // POST: api/Customers
        [HttpPost]
        public void PostCustomer([FromBody] string value)
        {
        }

        // PUT: api/Customers
        [HttpPut("{customerID}")]
        public void PutCustomer(int customerID, [FromBody] string value)
        {
        }

        // DELETE: api/Customers
        [HttpDelete("{customerID}")]
        public void Delete(int customerID)
        {
        }
    }
}
