function init() {

    const car_Origin = prompt("Enter Car Origin");
    const car_Miles_Per_Gallon = +prompt("Enter Car Miles Per Gallons");
    const result = getCars_Origin_and_MPG(car_Origin, car_Miles_Per_Gallon,carsForRental);
    console.log(result)
}

function getCars_Origin_and_MPG (car_Origin,car_Miles_Per_Gallon, carsArray) {

    // if (!Array.isArray(carsArray)) return;

    let carsResult = [];

    for (let index = 0; index < carsArray.length; index++) {
        const currentCar = carsArray[index];

        if (currentCar.Origin === car_Origin && currentCar.Miles_per_Gallon <= car_Miles_Per_Gallon) {
            carsResult.push(currentCar);
        }
    }
    return carsResult

}


init()
