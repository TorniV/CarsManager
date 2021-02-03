using System.Collections.Generic;
using System.Linq;
using CarsManager.Database.Cars;
using CarsManager.Database.Cars.DbSets;

namespace CarsManager.Database
{
    public class CarsRepository
    {
        public IEnumerable<CarData> GetCars()
        {
            using var db = new CarsContext();
            return db.Cars.ToList();
        }
    }
}