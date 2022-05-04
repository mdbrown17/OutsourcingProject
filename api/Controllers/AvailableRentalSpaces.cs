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

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AvailableRentalSpaces : ControllerBase
    {
        // GET: api/AvailableRentalSpaces -async
        [EnableCors("OpenPolicy")]
        [HttpGet]
        public List<RentalSpace> Get()
        {
            IGetRentalSpaces rentals = new ReadRentals();
            List<RentalSpace> myRentals = rentals.GetAvailable();

            foreach(RentalSpace rental in myRentals)
            {
                Console.WriteLine(rental.rentalID);
            }
            return myRentals;
        }


        // GET: api/AvailableRentalSpaces -async/5
        [HttpGet("{id}", Name = "GetAvailableRentals")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/AvailableRentalSpaces -async
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/AvailableRentalSpaces -async/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/AvailableRentalSpaces -async/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
