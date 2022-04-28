using api.Models;
using System.Collections.Generic;

namespace api.Interfaces
{
    public interface IGetRentalSpaces
    {
         public List<RentalSpace> GetAll();
    }
}