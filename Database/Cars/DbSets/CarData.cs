using System;

namespace CarsManager.Database.Cars.DbSets
{
    public class CarData
    {
        public Guid Id { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public string Generation { get; set; }
        public int Year { get; set; }
        public int Mileage { get; set; }
        public string Vin { get; set; }
        public string RegistrationNumber { get; set; }
        public DateTime? FirstRegistration { get; set; }

        // public List<ReFuel> Refuelings { get; } = new List<Refuel>();
    }
}