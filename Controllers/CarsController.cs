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

        [HttpPost]
        public async Task AddCar()
        {
            var repository = new CarsRepository();
            var car = new CarData
            {
                Id = Guid.NewGuid(),
                Make = "Ford",
                Model = "Mondeo",
                Year = 2007,
                FirstRegistration = new DateTime(2007, 01, 01),
                Generation = "Mk 4",
                Mileage = 275000,
                RegistrationNumber = "SCI 53366",
                Vin = "Vin number"
            };
            await repository.AddCar(car);
        }
    }
}
