class Employee {
    constructor(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    speak() {
        console.log(`${this.name} is an engineer!`);
    }
}

class Engineer extends Employee {
    constructor(name, dept, favLang) {
        super(name, dept);
        this.favLang = favLang;
    }
    speak() {
        super.speak()
        console.log(`Git Init!`); //cloaking/shadowing/preventing -- of the lookup
    }
}

let nae = new Engineer('naomi', 'software', 'javascript');
console.log(nae);
nae.speak();