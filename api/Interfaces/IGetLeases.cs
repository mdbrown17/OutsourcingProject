using api.Models;
using System.Collections.Generic;

namespace api.Interfaces
{
    public interface IGetLeases
    {
        public List<Lease> GetAll();

        public Lease GetOne(int id);
    }
}