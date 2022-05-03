using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.Database;
using api.Models;
// using Microsoft.AspNetCore.Cors;
using api.Interfaces;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RentalSpaces : ControllerBase
    {
        // GET: api/RentalSpaces
        [EnableCors("OpenPolicy")]
        [HttpGet]
        public List<RentalSpace> Get()
        {
            IGetRentalSpaces rentals = new ReadRentals();
            List<RentalSpace> myRentals = rentals.GetAll();

            foreach(RentalSpace rental in myRentals)
            {
                Console.WriteLine(rental.rentalID);
            }
            return myRentals;
        }

        // GET: api/RentalSpaces -async/5
        [EnableCors("OpenPolicy")]
        [HttpGet("{id}", Name = "GetRental")]
        public RentalSpace Get(int id)
        {
            IGetRentalSpaces rental = new ReadRentals();
            return rental.GetOne(id);
        }

        // POST: api/RentalSpaces -async
        [EnableCors("OpenPolicy")]    
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/RentalSpaces -async/5
        [EnableCors("OpenPolicy")]
        [HttpPut("{id}")]
        public void Put(RentalSpace myRentalSpace)
        {
            IInsertRentalSpaces updateRentalSpace = new SaveRental(); 
            updateRentalSpace.UpdateRentalSpace(myRentalSpace);
        }

        // DELETE: api/RentalSpaces -async/5
        [HttpDelete("{rentalID}")]
        public void DeleteRental(int rentalID)
        {
        }
    }
}
