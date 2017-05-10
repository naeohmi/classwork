class Naomi {
    constructor(name, drink) {
        this.name = 'Naomi',
            this.drink = 'coffee',
    }
    wakeUp() {
        console.log(`Time to drink ${this.drink}`);
    }

}

let nae = new Naomi();
nae.wakeUp();