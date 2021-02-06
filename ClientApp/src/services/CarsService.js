export const CarsService = {
  GetCars: function (onDataReceived) {
    fetch("https://localhost:44381/Cars")
      .then((res) => res.json())
      .then(
        (result) => {
          onDataReceived(result);
        },
        (error) => {
          console.error("RETRIEVING CARS FAILED: ", error);
        }
      );
  },

  AddCar: function (onCarAdded) {
    fetch("https://localhost:44381/Cars", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstParam: "yourValue",
        secondParam: "yourOtherValue",
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        onCarAdded(json);
      })
      .catch((error) => {
        console.error("Add new car failed", error);
      });
  },
};
