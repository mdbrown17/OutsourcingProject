using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.Database;
using api.Models;
using Microsoft.AspNetCore.Cors;
using api.Interfaces;
using OutsourcingProject.api.Database;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Leases : ControllerBase
    {
        // GET: api/Leases -async
        [HttpGet]
        public List<Lease> Get()
        {
            IGetLeases leases = new ReadLeases();
            List<Lease> myLeases = leases.GetAll();

            foreach(Lease lease in myLeases)
            {
                Console.WriteLine(lease.leaseID);
            }
            return myLeases;
        }

        // GET: api/Leases -async/5
        [HttpGet("{id}", Name = "GetLeases")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Leases -async
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Leases -async/5
        [EnableCors("OpenPolicy")]
        [HttpPut("{id}")]
        public void Put(Lease myLease)
        {
            IInsertLeases updateLease = new SaveLease(); 
            updateLease.UpdateLease(myLease);
        }


        // DELETE: api/Leases -async/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
