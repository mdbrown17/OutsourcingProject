using api.Models;
using System.Collections.Generic;

namespace api.Interfaces
{
    public interface IGetManagers
    {
         public List<Manager> GetAll();
    }
}