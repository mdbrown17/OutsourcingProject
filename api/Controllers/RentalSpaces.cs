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
        [HttpGet("{rentalID}", Name = "GetRental")]
        public RentalSpace Get(int rentalID)
        {
            IGetRentalSpaces getRentalSpace = new ReadRentals();
            return getRentalSpace.GetOne(rentalID);
        }

        // POST: api/RentalSpaces -async
        [EnableCors("OpenPolicy")]    
        [HttpPost]
        public void Post([FromBody] RentalSpace value){
            IInsertRentalSpaces insertRental = new SaveRental();
            insertRental.InsertRentalSpace(value);
        }

        // PUT: api/RentalSpaces -async/5
        [EnableCors("OpenPolicy")] 
        [HttpPut("{rentalID}")]
        public void PutRental(int rentalID, [FromBody] string value)
        {

        }

        // DELETE: api/RentalSpaces -async/5
        [EnableCors("OpenPolicy")] 
        [HttpDelete("{rentalID}")]
        public void DeleteRental(int rentalID){
            IDeleteRentalSpaces deleteRental = new DeleteRentalSpace();
            deleteRental.Delete(rentalID);

        }
    }
}
