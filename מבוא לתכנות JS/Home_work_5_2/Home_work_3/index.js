

function init() {
const car_Property = prompt("please enter a request for car Property");
const car_Value= +prompt("Please enter a car_value");
const result = getCarByProperty(car_Value,car_Property);

if (!result) {
    console.log("No cars found matching the criteria");
} else {
    console.log(result);
}
}

function getCarByProperty(car_value,car_Property) {
    
    const car_Result=[];
    //const validProperties = ["Miles_per_Gallon", "Cylinders", "Displacement", "Horsepower", "Weight_in_lbs", "Acceleration"];
    for (let index = 0; index < cars_For_Rental.length; index++) {
        const currentCar = cars_For_Rental[index];
        if (currentCar[car_Property]===car_Property && currentCar[car_Property] <= car_value) { // Correct comparison
            car_Result.push(currentCar);
        }
    }
        return car_Result;

}
init();
