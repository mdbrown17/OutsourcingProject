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
    public class RentalApplications : ControllerBase
    {
        // GET: api/RentalApplications -async
        [HttpGet]
        public List<RentalApplication> Get()
        {
            IGetRentalApps rentalApps = new ReadRentalApps();
            List<RentalApplication> myRentalApps = rentalApps.GetAll();

            foreach(RentalApplication rentals in myRentalApps)
            {
                Console.WriteLine(rentals.approvalStatus);
            }
            return myRentalApps;
        }

        // GET: api/RentalApplications -async/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/RentalApplications -async
        [EnableCors("OpenPolicy")] 
        [HttpPost]
        public void Post(RentalApplication myApplication)
        {
            IInsertRentalApps createRentalApp = new InsertRentalApps();
            createRentalApp.InsertRentalApp(myApplication);
            Console.WriteLine(myApplication.approvalStatus); 
        }

        // PUT: api/RentalApplications -async/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/RentalApplications -async/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
