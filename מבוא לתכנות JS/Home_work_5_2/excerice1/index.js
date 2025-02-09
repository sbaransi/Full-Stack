const carObject = {
    type: "BYD",
    engine: "electrical",
    color:"white",
    doors: 4,
    model:"atto 3",
    year :"2025",
    km: "69792"
}
let kmParam=0;
function kmAddToCar(added_km){
carObject?.km=added_km;
}


console.log(carObject.color);
carObject.color="red";
console.log(carObject);
kmParam = prompt("please enter car km");

kmAddToCar(kmParam)
console.log(carObject.km)