using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RentalSpaces
    {
        // GET: api/RentalSpaces
        [HttpGet]
        public IEnumerable<string> GetRentals()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/RentalSpaces -async/5
        [HttpGet("{rentalID}", Name = "GetRental")]
        public string GetRental(int rentalID)
        {
            return "value";
        }

        // POST: api/RentalSpaces -async
        [HttpPost]
        public void PostRental([FromBody] string value)
        {
        }

        // PUT: api/RentalSpaces -async/5
        [HttpPut("{rentalID}")]
        public void PutRental(int rentalID, [FromBody] string value)
        {
        }

        // DELETE: api/RentalSpaces -async/5
        [HttpDelete("{rentalID}")]
        public void DeleteRental(int rentalID)
        {
        }
    }
}
