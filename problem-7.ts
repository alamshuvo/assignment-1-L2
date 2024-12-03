// Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.
class Car {
    brand:string;
    model:string;
    year: number;
    constructor (brand:string,model:string,year:number){
        this.brand=brand;
        this.model=model;
        this.year=year
    }
    getCarAge(currentYear: number=new Date().getFullYear()):number{
        return currentYear-this.year;
    }
}

