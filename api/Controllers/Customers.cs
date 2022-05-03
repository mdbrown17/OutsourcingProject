using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.Database;
using api.Models;
using Microsoft.AspNetCore.Cors;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Customers : ControllerBase
    {
        // GET: api/Customers 
        [EnableCors("OpenPolicy")]
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
        [EnableCors("OpenPolicy")]
        [HttpGet("{customerID}", Name = "GetCustomer")]
        public Customer Get(int customerID)
        {
            IGetCustomers customers = new ReadCustomers();
            return customers.GetOne(customerID);
        }

        // POST: api/Customers
        [EnableCors("OpenPolicy")]        
        [HttpPost]
        public void Post([FromBody] Customer myCustomer)
        {
            IInsertCustomers createCustomer = new SaveCustomer();
            createCustomer.InsertCustomer(myCustomer);
            Console.WriteLine(myCustomer.cBusinessName); 
        }

        // PUT: api/Customers
        [EnableCors("OpenPolicy")] 
        [HttpPut("{customerID}")]
        public void Put(Customer myCustomer)
        {
            IInsertCustomers updateCustomer = new SaveCustomer(); 
            updateCustomer.UpdateCustomer(myCustomer);
        }

        // DELETE: api/Customers
        [HttpDelete("{customerID}")]
        public void Delete(int customerID)
        {
        }
    }
}
