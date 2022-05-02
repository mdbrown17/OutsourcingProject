using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.Database;
using api.Models;
using Microsoft.AspNetCore.Cors;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Managers : ControllerBase
    {
        // GET: api/Managers
        [EnableCors("OpenPolicy")]
        [HttpGet]
        public List<Manager> Get()
        {
            IGetManagers managers = new ReadManagers();
            List<Manager> myManagers = managers.GetAll();

            foreach(Manager manager in myManagers)
            {
                Console.WriteLine(manager.mfname);
            }
            return myManagers;
        }

        // GET: api/Managers/5
        [EnableCors("OpenPolicy")]
        [HttpGet("{managerID}", Name = "GetManager")]
        public Manager Get(int managerID)
        {
            IGetManagers managers = new ReadManagers();
            return managers.GetOne(managerID);
        }

        // POST: api/Managers
        [EnableCors("OpenPolicy")] 
        [HttpPost]
        public void Post([FromBody] Manager myManager)
        {
            IInsertManagers createManager = new SaveManager();
            createManager.InsertManager(myManager);
        }

        // PUT: api/Managers/5
        [EnableCors("OpenPolicy")] 
        [HttpPut("{managerID}")]
        public void Put(Manager myManager)
        {
            IInsertManagers updateManagers = new SaveManager(); 
            updateManagers.UpdateManager(myManager);
        }

        // DELETE: api/Managers/5
        [HttpDelete("{managerID}")]
        public void Delete(int id)
        {
        }
    }
}
