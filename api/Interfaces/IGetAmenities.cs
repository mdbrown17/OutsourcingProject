using api.Models;
using System.Collections.Generic;

namespace api.Interfaces
{
    public interface IGetAmenities
    {
         public List<Amenities> GetAll();
         public Amenities GetOne(int id);

    }
}