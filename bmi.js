const john = {
    fullName: 'John Smith',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height**2);
        return this.bmi
    },
};

const mark = {
    fullName: 'Mark Miller',
    mass: 92, 
    height: 1.95, 
    calcBMI: function() {
        this.bmi = this.mass / (this.height**2);
        return this.bmi
    },
};
john.calcBMI();
mark.calcBMI();

// john.bmi > mark.bmi ? console.log(`${john.fullName}'s BMI (${john.bmi})is haigher than ${mark.fullName}'s BMI (${mark.bmi})!`) : console.log(`${mark.fullName}'s BMI (${mark.bmi}) is haigher than ${john.fullName}'s BMI (${john.bmi})!`)

console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(2)}) is ${john.bmi>mark.bmi ? 'haigher' : 'lower'} than ${mark.fullName}'s BMI (${mark.bmi.toFixed(2)})`)

/////////////////////////
const years = [1994, 2007, 1987, 2005, 1874, 1088, 652, 777, 1999];
const ages = [];

for(let i=0; i <years.length; i++){
    ages.push(2022-years[i])
}
console.log(ages)