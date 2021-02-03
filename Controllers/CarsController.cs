using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using CarsManager.Database;
using CarsManager.Database.Cars.DbSets;

namespace CarsManager.Controllers
{
    [ApiController]
    [Route("[controller]")]
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
    }
}
