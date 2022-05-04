using api.Models;
using System.Collections.Generic;

namespace api.Interfaces
{
    public interface IInsertLeases
    {
         public void InsertLease(Lease value);
         public void UpdateLease(Lease value);
    }
}