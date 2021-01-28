using CarsManager.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;

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
        public IEnumerable<Car> Get()
        {
            return new List<Car>
            {
                new Car
                {
                    Id = Guid.NewGuid(),
                    Make = "Ford",
                    Model = "Mondeo",
                    Year = 2007
                },
                new Car
                {
                    Id = Guid.NewGuid(),
                    Make = "Ford",
                    Model = "Focus",
                    Year = 2007
                },
                new Car
                {
                    Id = Guid.NewGuid(),
                    Make = "Fiat",
                    Model = "Seicento",
                    Year = 2007
                },
            };
        }
    }
}
