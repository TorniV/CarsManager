using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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

        public async Task AddCar(CarData car)
        {
            await using var db = new CarsContext();
            await db.Cars.AddAsync(car);
            await db.SaveChangesAsync();
        }
    }
}