let Vehicle = function (id, latitude, longitude) {

    this.position = function (latitude, longitude){
        this.time = Date.now()
        this.longitude = longitude
        this.latitude = latitude
    }
    this.id = id
    this.status = "unavailable"
    this.time = Date.now()
    this.latitude = latitude
    this.longitude = longitude
}

let vehicle1 = new Vehicle("AL1024", 59.358615, 17.947589)
vehicle1.position(57.367647, 18.213451)
console.log(vehicle1);
