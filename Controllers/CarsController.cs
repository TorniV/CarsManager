using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Threading.Tasks;
using CarsManager.Database;
using CarsManager.Database.Cars.DbSets;

namespace CarsManager.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CarsController : ControllerBase
    {
        private readonly ILogger<CarsController> _logger;

        public CarsController(ILogger<CarsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<CarData> Get()
        {
            var repository = new CarsRepository();
            return repository.GetCars();
        }

        [HttpPost]
        public async Task AddCar([FromBody] CarData carToAdd)
        {
            carToAdd.Id = Guid.NewGuid();
            var repository = new CarsRepository();
            await repository.AddCar(carToAdd);
        }
    }
}
