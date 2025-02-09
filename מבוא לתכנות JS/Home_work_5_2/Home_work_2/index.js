

function init() {

const result = getcars_Horsepower_avg(carsForRental);

if (!result) {
    console.log("No cars found matching the criteria");
} else {
    console.log(result);
}

}


function getcars_Horsepower_avg(car_rental) {
    // if (!Array.isArray(car_rental) ) return;
    
    let carsHorsepower_sum = 0;

    for (let index = 0; index < car_rental.length; index++) {
        carsHorsepower_sum += car_rental[index].Horsepower;
    }
        return carsHorsepower_sum/car_rental.length;

}
init();
