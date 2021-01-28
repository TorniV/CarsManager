export const CarsService = {
  GetCars: function (onDataReceived) {
    fetch("https://localhost:44381/Cars")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("result: ", result);
          onDataReceived(result);
        },
        (error) => {
          console.error("RETRIEVING CARS FAILED");
        }
      );
  },
};
