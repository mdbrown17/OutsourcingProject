using api.Models;
using System.Collections.Generic;

namespace api.Interfaces
{
    public interface IGetRentalApps
    {
         public List<RentalApplication> GetAll();
         public RentalApplication GetOne(int id);
         
    }
}