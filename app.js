module.exports = {
    smallCar: {
        fuelType: 'Diesel',
        engineSize: 4
    },
    smallTruck: {
        fuelType: 'Regular',
        engineSize: 8
    },
    calculateVehicleRating: function(vehicle) {
        let rating = 0;
        switch(vehicle.engineSize) {
            case 1:
            case 2:
            case 3:
            case 4:
                rating = 8;
                break;
            case 8:
                rating = 5;
                break;
            default:
        }
        switch(vehicle.fuelType) {
            case 'Diesel':
                rating = rating + 2;
            default:
        }
        return rating;
    }
}
//
//