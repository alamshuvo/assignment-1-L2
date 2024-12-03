// Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.getCarAge = function (currentYear) {
        if (currentYear === void 0) { currentYear = new Date().getFullYear(); }
        return currentYear - this.year;
    };
    return Car;
}());
var myCar = new Car("Toyota", "corolla", 2018);
console.log("my car is ".concat(myCar.getCarAge(), " years old"));
