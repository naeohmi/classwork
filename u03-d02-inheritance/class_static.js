class BootCamp {
    constructor(name, city) {
        this._name = name;
        this._city = city;
        BootCamp.numberofSchools++
    }
    static versionNumber() {
        console.log('Bootcamp v7.4.0')
    }
}

BootCamp.versionNumber();
BootCamp.numberofSchools = 0;


let ga = new BootCamp('General Assembly', 'NYC');
let fi = new BootCamp('FlatIron', 'NYC');
let dev = new BootCamp('Dev Bootcamp', 'NYC');

console.log(BootCamp.numberofSchools);