using CarsManager.Database.Cars.DbSets;
using Microsoft.EntityFrameworkCore;

namespace CarsManager.Database.Cars
{
    public class CarsContext : DbContext
    {
        public DbSet<CarData> Cars { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlite("Data Source=cars.db");
    }
}